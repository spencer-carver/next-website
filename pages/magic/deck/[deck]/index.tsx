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
import Guidance from "../../../../components/Magic/Guidance";
import { DeckView } from "../../../../constants/Magic";

export interface Card {
    instance?: number;
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
        maybeboard?: Card[];
        outside?: Card[];
    };
}

interface FormattedDeck {
    name: string;
    type: "commander" | "oathbreaker" | "constructed";
    format?: string;
    entries: {
        featured: Card[];
        mainboard: Card[];
        sideboard: Card[];
        maybeboard: Card[];
    };
    cards: Record<string, Card["card_digest"]>;
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
            output.push({ instance: i + 1, count: card.count, card_digest: card.card_digest });
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

        const deckEntries = {
            featured: ([] as Card[]).concat(
                massageList(data.entries.commanders),
                massageList(data.entries.oathbreakers),
            ),
            mainboard: ([] as Card[]).concat(
                massageList(data.entries.mainboard),
                massageList(data.entries.nonlands),
                massageList(data.entries.lands)
            ),
            sideboard: massageList(data.entries.sideboard),
            maybeboard: ([] as Card[]).concat(
                massageList(data.entries.maybeboard),
                massageList(data.entries.outside)
            )
        };

        const cards = ([] as Card[]).concat(deckEntries.featured, deckEntries.mainboard, deckEntries.sideboard, deckEntries.maybeboard).reduce((cardMap, entry) => {
            const isDFC = Object.keys(entry.card_digest.image_uris).length > 1;
            const name =  isDFC ? entry.card_digest.name.split(" // ")[0] : entry.card_digest.name;

            if (cardMap[name]) {
                return cardMap;
            }

            return {
                ...cardMap,
                [name]: entry.card_digest
            };
        }, {});

        return {
            name: data.name,
            type,
            format: data.format,
            entries: deckEntries,
            cards
        };
    } catch (e) {
        return undefined;
    }
}

function formatDeckName(name: string): string {
    return name.split("-").map((word) => `${ word[0].toUpperCase() }${ word.substring(1) }`).join(" ");
}

const TableDiv = styled("div", {
    position: "relative",
    backgroundColor: "#256AA0",
    backgroundImage: "linear-gradient(rgba(255,255,255,.20) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.20) 2px, transparent 2px), linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
    backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
    backgroundPosition: "15px 15px, 15px 15px, 14px 14px, 14px 14px",
    paddingTop: "40px",
    borderBottom: "1px solid $onBackground",
    zIndex: "1",
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
    [`.${ lightTheme } &`]: {
        backgroundColor: "$background",
        backgroundImage: "linear-gradient(rgba(0,0,0,.20) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,.20) 2px, transparent 2px), linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",

    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "transparent"
    }
});

const PlaymatDiv = styled("div", {
    margin: "0 auto",
    paddingBottom: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@lg": {
        flexDirection: "row",
        width: "760px"
    },
    "@xl": {
        width: "940px"
    },
    "@xxl": {
        width: "1180px"
    },
    "@xxxl": {
        width: "1420px"
    }
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

const sharedDeckAndSideboardStyles: CSS = {
    display: "inline-flex",
    flexWrap: "wrap",
    padding: "10px 10px 100px",
    "@md": {
        paddingBottom: "120px"
    },
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
    justifyContent: "center",
    "@md": {
        ...(sharedDeckAndSideboardStyles["@md"] as Record<string, string>)
    },
    "@lg": {
        ...(sharedDeckAndSideboardStyles["@lg"] as Record<string, string>),
        justifyContent: "initial",
        alignContent: "flex-end",
        "& div": {
            marginRight: "10px"
        }
    },
    "@xxl": {
        ...(sharedDeckAndSideboardStyles["@xxl"] as Record<string, string>),
    },
});

const stackedDeckStyles: CSS = {
    paddingBottom: "0px",
    "@lg": {
        justifyContent: "center"
    }
};

const yorionDeckStyles: CSS = {
    "@lg": {
        marginRight: "20px"
    },
    "@xl": {
        marginRight: "70px"
    }
};

const SideboardDiv = styled("div", {
    ...(Object.keys(sharedDeckAndSideboardStyles).filter((key) => !key.startsWith("@")).reduce((object, key) => { object[key] = sharedDeckAndSideboardStyles[key]; return object; }, {})),
    paddingTop: "40px",
    flexDirection: "row",
    justifyContent: "center",
    "@md": {
        ...(sharedDeckAndSideboardStyles["@md"] as Record<string, string>)
    },
    "@lg": {
        ...(sharedDeckAndSideboardStyles["@lg"] as Record<string, string>),
        paddingTop: "10px",
        flexDirection: "column",
        justifyContent: "flex-start",
        "& span:nth-of-type(2n)": {
            marginLeft: "50px"
        }
    },
    "@xxl": {
        ...(sharedDeckAndSideboardStyles["@xxl"] as Record<string, string>)
    }
});

const stackedSideboardStyles: CSS = {
    paddingBottom: "0px",
    "& span:nth-of-type(2n)": {
        marginLeft: "0px"
    },
    "@lg": {
        flexDirection: "row",
        justifyContent: "center"
    }
};

const DECK_TYPE_TO_ADDITIONAL_STYLES: Record<string, CSS> = {
    commander: {
        flexDirection: "row",
        flexFlow: "wrap",
        alignContent: "center",
        height: "auto",
        "@lg": {
            margin: "0 auto",
            placeContent: "center"
        }
    },
    oathbreaker: {
        margin: "0 auto",
        alignContent: "center"
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

const DeckViewControls = styled("span", {
    float: "right",
    zIndex: "2",
    position: "relative",
    paddingTop: "15px",
    paddingRight: "15px",
    color: "$onBackground"
});

const Deck: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const { deck: deckName } = router.query;
    const [deck, setDeck] = useState(null as unknown as FormattedDeck);
    const [loaded, setLoaded] = useState(false);
    const [deckView, setDeckView] = useState(DeckView.default);

    const updateDeckViewPreference = useCallback((changeEvent) => {
        const newDeckView = changeEvent.target.value;

        try {
            localStorage.setItem("deckView", newDeckView);

            setDeckView(newDeckView);
        } catch (e) {
            // do nothing
        }
    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSetLoaded = useCallback(debounce((value: boolean) => setLoading(false), 500), []);

    useEffect(() => {
        setLoading(true);
        if (!deckName) {
            return;
        }

        fetchFromCache(`${ API_URL }/api/mtg/${ deckName }`).then((data) => {
            try {
                const preferredView = localStorage.getItem("deckView");

                if (preferredView) {
                    setDeckView(preferredView as DeckView);
                }
            } catch (e) {
                // do nothing
            }

            setDeck(massageDeck(data as unknown as MTGDeck));
            setLoaded(true);
            debouncedSetLoaded(false);
        });
    }, [deckName, debouncedSetLoaded, setLoading]);

    if (!loaded) {
        return null;
    }

    if (loaded && !deck) {
        return <ErrorPage title="Deck not found" statusCode={ 404 } backLink="/magic" />;
    }

    let additionalDeckStyles: CSS = {};
    if (deck.entries.mainboard.length > 60 && deck.entries.mainboard.length <= 80) {
        additionalDeckStyles = yorionDeckStyles;
    } else if (deck.entries.mainboard.length > 80) {
        additionalDeckStyles = DECK_TYPE_TO_ADDITIONAL_STYLES.commander;
    }

    let additionalSideboardStyles: CSS = {};
    if (deck.entries.sideboard.length === 0) {
        additionalSideboardStyles = { display: "none" };
    }

    const TITLE = formatDeckName(deckName as string);
    const DESCRIPTION = `A ${ deck.format || deck.type } deck by Spencer Carver`;

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href={ `https://spencer.carvers.info/magic/deck/${ deckName }` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `https://spencer.carvers.info/magic/deck/${ deckName }` } />
                <meta property="og:image" content="https://spencer.carvers.info/seo.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo.jpg" />
            </Head>
            <BackNavigation to="/magic" />
            <DeckViewControls>
                <input id={ DeckView.default } type="radio" name="deckView" value={ DeckView.default } checked={ deckView === DeckView.default } onChange={ updateDeckViewPreference } /><label htmlFor={ DeckView.default }>{ DeckView.default }</label>
                <input id={ DeckView.stacked } type="radio" name="deckView" value={ DeckView.stacked } checked={ deckView === DeckView.stacked } onChange={ updateDeckViewPreference } /><label htmlFor={ DeckView.stacked }>{ DeckView.stacked }</label>
                { /* <input id={ DeckView.list } type="radio" name="deckView" value={ DeckView.list } checked={ deckView === DeckView.list } onChange={ updateDeckViewPreference } /><label htmlFor={ DeckView.list }>{ DeckView.list }</label> */ }
            </DeckViewControls>
            <TableDiv>
                <TitleHeading>{deck.type === "constructed" && <><FormatSpan>{deck.format}</FormatSpan>&nbsp;</>}{TITLE}</TitleHeading>
                <FeaturedDiv css={ deck.type === "constructed" ? { display: "none" } : {} }>
                    {
                        deck.entries.featured.map(({ instance, count, card_digest: cardDigest }, i) => {
                            return (
                                <CardComponent
                                    key={ `${ cardDigest.name }-${ i }` }
                                    { ...cardDigest }
                                    image={ cardDigest.image_uris.front }
                                    index={ i }
                                    instance={ instance }
                                    count={ count }
                                    view={ deckView }
                                    type="featured"
                                    setLoaded={ debouncedSetLoaded }
                                />
                            );
                        })
                    }
                </FeaturedDiv>
                <PlaymatDiv css={ deckView === "stacked" ? { "flexDirection": "column" } : {} }>
                    <DeckDiv css={{ ...(DECK_TYPE_TO_ADDITIONAL_STYLES[deck.type] || additionalDeckStyles), ...(deckView === "stacked" ? stackedDeckStyles : {}) }}>
                        {
                            deck.entries.mainboard.map(({ instance, count, card_digest: cardDigest }, i) => {
                                return (
                                    <CardComponent
                                        key={ `${ cardDigest.name }-${ i }` }
                                        { ...cardDigest }
                                        image={ cardDigest.image_uris.front }
                                        index={ i }
                                        instance={ instance }
                                        count={ count }
                                        view={ deckView }
                                        type={ deck.type }
                                        setLoaded={ debouncedSetLoaded }
                                    />
                                );
                            })
                        }
                    </DeckDiv>
                    <SideboardDiv css={{ ...(SIDEBOARD_TYPE_TO_ADDITIONAL_STYLES[deck.type] || additionalSideboardStyles), ...(deckView === "stacked" ? stackedSideboardStyles : {}) }}>
                        {
                            deck.entries.sideboard.map(({ instance, count, card_digest: cardDigest }, i) => {
                                return (
                                    <CardComponent
                                        key={ `${ cardDigest.name }-${ i }` }
                                        { ...cardDigest }
                                        image={ cardDigest.image_uris.front }
                                        index={ i }
                                        instance={ instance }
                                        count={ count }
                                        view={ deckView }
                                        type="sideboard"
                                        setLoaded={ debouncedSetLoaded }
                                    />
                                );
                            })
                        }
                    </SideboardDiv>
                </PlaymatDiv>
            </TableDiv>
            <Guidance deckName={ deckName as string } format={ deck.format } cards={ deck.cards } hasLoaded={ debouncedSetLoaded } />
        </>
    );
};

export default Deck;
