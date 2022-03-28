import React, { FunctionComponent, useEffect, useState, useCallback } from "react";
import { CSS } from "@stitches/react";
import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "../../../404";
import { PageProps } from "../../../../@types/global";
import { API_URL } from "../../../../constants/ExternalUrls";
import fetchFromCache from "../../../../utils/cache";
import CardComponent from "../../../../components/Magic/Card";
import debounce from "lodash.debounce";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../../../styles/stitches";
import BackNavigation from "../../../../components/BackNavigation";

const styles: Record<string, string> = {};

interface Card {
    count: number;
    card_digest: {
        name: string;
        id: string;
        image_uris: {
            front: string;
        };
    };
}

interface MTGDeck {
    name: string;
    description?: string;
    format?: string;
    entries: {
        mainboard?: Card[];
        commanders?: Card[];
        oathbreakers?: Card[];
        nonlands?: Card[];
        lands?: Card[];
        sideboard?: Card[];
    };
}

interface FormattedDeck {
    name: string;
    description?: string;
    type: "commander" | "oathbreaker" | "constructed";
    format: string;
    entries: {
        featured: Card[];
        mainboard: Card[];
        sideboard: Card[];
    };
}

function massageList(data?: Card[]): Card[] {
    if (!data) {
        return [];
    }

    return data.map((card) => {
        const output = [];

        if (!card.card_digest) {
            return [];
        }

        for (let i = 0; i < card.count; ++i) {

            output.push({ count: 1, card_digest: card.card_digest });
        }

        return output;
    }).reduce((acc, arrEl) => {
        return acc.concat(arrEl);
    }, []);
}

function massageDeck(data: MTGDeck): FormattedDeck | undefined {
    try {
        const type = data.entries.commanders
            ? "commander"
            : data.entries.oathbreakers
                ? "oathbreaker"
                : "constructed";

        return {
            name: data.name,
            description: data.description,
            type,
            format: data.format as string,
            entries: {
                featured: ([] as Card[]).concat(
                    massageList(data.entries.commanders),
                    massageList(data.entries.oathbreakers),
                ),
                mainboard: ([] as Card[]).concat(
                    massageList(data.entries.mainboard),
                    massageList(data.entries.nonlands),
                    massageList(data.entries.lands)
                ),
                sideboard: massageList(data.entries.sideboard)
            }
        };
    } catch (e) {
        return undefined;
    }
}

function formatDeckName(name: string): string {
    return name.replace(/-/g, " ");
}

const TableDiv = styled("div", {
    position: "relative",
    backgroundColor: "#256AA0",
    backgroundImage: "linear-gradient(rgba(255,255,255,.20) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.20) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
    backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
    backgroundPosition: "15px 15px, 15px 15px, 14px 14px, 14px 14px",
    "&::after": {
        content: "",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.1) 20%, transparent 100%)"
    },
    [`.${lightTheme} &`]: {
        backgroundColor: "$background",
        backgroundImage: "linear-gradient(rgba(0,0,0,.20) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,.20) 2px, transparent 2px), linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",

    },
    [`.${yahooGeocitiesTheme} &`]: {
        backgroundColor: "transparent"
    }
});

const PlaymatDiv = styled("div", {
    margin: "0 auto",
    paddingBottom: "30px",
    display: "flex",
    justifyContent: "center"
});

const TitleHeading = styled("h1", {
    color: "$onBackground",
    textAlign: "center",
    fontSize: "64px",
    textTransform: "capitalize",
    fontFamily: "'Fredericka the Great', cursive",
    fontWeight: "normal",
    margin: "0",
    paddingTop: "25px",
    position: "relative",
    "@xxl": {
        fontSize: "112px"
    }
});

const FormatSpan = styled("span", {
    position: "absolute",
    fontSize: "30px",
    top: "10px"
});

const FeaturedDiv = styled("div", {
    width: "300px",
    height: "175px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& div:not(:last-of-type)": {
        marginRight: "10px"
    },
    "@lg": {
        width: "690px",
        height: "230px"
    },
    "@xl": {
        width: "930px"
    },
    "@xxl": {
        height: "350px"
    }
});

const DescriptionDiv = styled("div", {
    margin: "30px 0",
    borderRadius: "5px",
    padding: "0 10px",
    color: "$onBackground",
    verticalAlign: "top",
    width: "150px",
    "@lg": {
        width: "400px"
    }
});

const sharedDeckAndSideboardStyles: CSS = {
    display: "inline-flex",
    flexWrap: "wrap",
    paddingTop: "10px",
    paddingBottom: "120px",
    "@lg": {
        paddingBottom: "150px"
    },
    "@xxl": {
        paddingBottom: "320px"
    }
};

const DeckDiv = styled("div", {
    ...(Object.keys(sharedDeckAndSideboardStyles).filter((key) => !key.startsWith("@")).reduce((object, key) => { object[key] = sharedDeckAndSideboardStyles[key]; return object; }, {})),
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    marginRight: "30px",
    "@lg": {
        ...(sharedDeckAndSideboardStyles["@lg"] as Record<string, string>),
        width: "480px",
        height: "880px",
        flexDirection: "column",
        justifyContent: "initial",
        alignContent: "center",
        marginRight: "70px",
        "& div": {
            marginRight: "10px"
        }
    },
    "@xl": {
        width: "660px",
        height: "660px"
    },
    "@xxl": {
        ...(sharedDeckAndSideboardStyles["@xxl"] as Record<string, string>),
        width: "770px",
        height: "880px",
        alignContent: "baseline",
        marginRight: "25px"
    },
    "@xxxl": {
        height: "660px",
        marginRight: "75px"
    }
});

const yorionDeckStyle: CSS = {
    "@lg": {
        height: "680px"
    },
    "@xxl": {
        height: "1200px"
    }
};

const OverlayDiv = styled("div", {});
const SideboardDiv = styled("div", {
    ...(Object.keys(sharedDeckAndSideboardStyles).filter((key) => !key.startsWith("@")).reduce((object, key) => { object[key] = sharedDeckAndSideboardStyles[key]; return object; }, {})),
    flexDirection: "column",
    alignContent: "end",
    "@lg": {
        ...(sharedDeckAndSideboardStyles["@lg"] as Record<string, string>),
        "& div:nth-of-type(2n)": {
            marginLeft: "50px"
        }
    },
    "@xxl": {
        ...(sharedDeckAndSideboardStyles["@xxl"] as Record<string, string>),
        width: "350px"
    },
    "@xxxl": {
        marginLeft: "200px"
    }
});

const DECK_TYPE_TO_ADDITIONAL_STYLES: Record<string, CSS> = {
    commander: {
        flexDirection: "row",
        flexFlow: "wrap",
        margin: "0 auto",
        alignContent: "center",
        justifyContent: "space-evenly",
        width: "calc(100% - 40px)",
        height: "auto"
    },
    oathbreaker: {
        margin: "0 auto",
        alignContent: "center",
        "@xxl": {
            height: "660px"
        }
    }
};

const SIDEBOARD_TYPE_TO_ADDITIONAL_STYLES: Record<string, CSS> = {
    commander: {
        display: "none"
    },
    oathbreaker: {
        display: "none",
    }
};

const Deck: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const { deck: deckName } = router.query;
    const [deck, setDeck] = useState(null as unknown as FormattedDeck);
    const [loaded, setLoaded] = useState(false);

    const debouncedSetLoaded = useCallback(debounce((value: boolean) => setLoading(false), 500), []);

    useEffect(() => {
        setLoading(true);
        if (!deckName) {
            return;
        }

        fetchFromCache(`${API_URL}/api/mtg/${deckName}`).then((data) => {
            setDeck(massageDeck(data as unknown as MTGDeck));
            setLoaded(true);
            debouncedSetLoaded(false);
        });
    }, [deckName]);

    if (!loaded) {
        return null;
    }

    if (loaded && !deck) {
        return <ErrorPage title="Deck not found" statusCode={404} backLink="/magic" />;
    }

    const isYorion = deck.entries.mainboard.length === 80;

    const TITLE = formatDeckName(deckName as string);
    const DESCRIPTION = `A ${ deck.format || deck.type } deck by Spencer Carver`;

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href={ `https://spencer.carvers.info/magic/deck/${ deckName }` } />
                <meta name="description" content={DESCRIPTION} />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:url" content={ `https://spencer.carvers.info/magic/deck/${ deckName }` } />
                <meta property="og:image" content={`https://spencer.carvers.info/seo.jpg`} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:image" content={`https://spencer.carvers.info/seo.jpg`} />
            </Head>
            <BackNavigation to="/magic" />
            <TableDiv>
                <TitleHeading>{deck.type === "constructed" && <><FormatSpan>{deck.format}</FormatSpan>&nbsp;</>}{TITLE}</TitleHeading>
                <FeaturedDiv css={deck.type === "constructed" ? { display: "none" } : {}}>
                    {
                        deck.entries.featured.map(({ card_digest: cardDigest }, i) => {
                            return <CardComponent key={`${cardDigest.name}-${i}`} {...cardDigest} image={cardDigest.image_uris.front} index={i} type="featured" setLoaded={debouncedSetLoaded} />;
                        })
                    }
                    {deck.description && <DescriptionDiv>{deck.description}</DescriptionDiv>}
                </FeaturedDiv>
                <PlaymatDiv>
                    <DeckDiv css={{ ...(DECK_TYPE_TO_ADDITIONAL_STYLES[deck.type] || {}), ...(isYorion ? yorionDeckStyle : {}) }}>
                        {
                            deck.entries.mainboard.map(({ card_digest: cardDigest }, i) => {
                                return <CardComponent key={`${cardDigest.name}-${i}`} {...cardDigest} image={cardDigest.image_uris.front} index={i} type={deck.type} setLoaded={debouncedSetLoaded} />;
                            })
                        }
                        <OverlayDiv />
                    </DeckDiv>
                    <SideboardDiv css={SIDEBOARD_TYPE_TO_ADDITIONAL_STYLES[deck.type] || {}}>
                        {
                            deck.entries.sideboard.map(({ card_digest: cardDigest }, i) => {
                                return <CardComponent key={`${cardDigest.name}-${i}`} {...cardDigest} image={cardDigest.image_uris.front} index={i} type="sideboard" setLoaded={debouncedSetLoaded} />;
                            })
                        }
                        <OverlayDiv />
                    </SideboardDiv>
                </PlaymatDiv>
            </TableDiv>
        </>
    );
};

export default Deck;
