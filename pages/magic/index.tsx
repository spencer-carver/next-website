import React, { FunctionComponent } from "react";
import Head from "next/head";
import Link from "../../components/Link";
import { CSS } from "@stitches/react";
import { styled } from "../../styles/stitches";
import BackNavigation from "../../components/BackNavigation";

const TITLE = "All Magic: the Gathering Decks";
const DESCRIPTION = "Magic is one of my favorite hobbies, both playing and collecting! Check out what I like to play.";

const ContentDiv = styled("div", {
    marginTop: "10px",
    padding: "20px 0"
});

const Heading = styled("h1", {
    color: "$onBackground"
});

const DecksDiv = styled("div", {
    width: "300px",
    padding: "5px",
    margin: "0 auto",
    borderRadius: "@border",
    "h2:first-of-type": {
        marginTop: "0"
    },
    "@lg": {
        width: "740px"
    }
});

const Description = styled("p", {
    color: "$onSurface",
    margin: "0 40px"
});

const Magic: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href="https://spencer.carvers.info/magic" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content="https://spencer.carvers.info/magic" />
                <meta property="og:image" content="https://spencer.carvers.info/seo.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo.jpg" />
            </Head>
            <BackNavigation to="/" />
            <ContentDiv>
                <Heading css={{ textAlign: "center" }}>
                    My Magic: the Gathering decks
                </Heading>
                <DecksDiv>
                    <div>
                        <Heading as="h2">Pioneer</Heading>
                        <ul>
                            <DeckLink name="Lotus Field Combo" id="lotus-field-combo" colors="⚪🔵⚫🔴🟢" />
                            <DeckLink name="5-Color Humans" id="pyre-of-humans" colors="⚪🔵⚫🔴🟢" />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Modern</Heading>
                        <ul>
                            <DeckLink name="Amulet Titan" id="amulet-titan" colors="🟢" />
                            <DeckLink name="Bogles" id="bogles" colors="⚪🟢" />
                            <DeckLink name="Eldrazi Tron" id="eldrazi-tron" colors="" />
                            <DeckLink name="Merfolk" id="merfolk" colors="🔵" />
                            <DeckLink name="Gifts Storm" id="gifts-storm" colors="🔵🔴" />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Legacy</Heading>
                        <Description>
                            I have a Legacy Battlebox with 10 decks designed to play against each other.
                            Each deck is playable in a general Legacy metagame, but will not be the most
                            up-to-date or tuned.
                        </Description>
                        <ul>
                            <DeckLink name="Death &amp; Taxes" id="death-and-taxes" colors="⚪" />
                            <DeckLink name="Enchantress" id="enchantress" colors="⚪⚫🟢" />
                            <DeckLink name="Lands" id="lands" colors="🔴🟢" />
                            <DeckLink name="Manaless Dredge" id="manaless-dredge" colors="🔵⚫🔴🟢" />
                            <DeckLink name="Miracles" id="miracles" colors="⚪🔵🟢" />
                            <DeckLink name="Omnitell" id="omnitell" colors="🔵" />
                            <DeckLink name="Painter" id="strawberry-shortcake" colors="⚪🔴" />
                            <DeckLink name="Reanimator" id="reanimator" colors="⚪⚫🔴" />
                            <DeckLink name="Storm" id="storm" colors="🔵⚫🔴" />
                            <DeckLink name="Izzet Delver" id="izzet-delver" colors="🔵🔴" />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Pauper</Heading>
                        <ul>
                            <DeckLink name="Mono-Green Land Destruction" id="mono-g-ponza" colors="🟢" />
                            <DeckLink name="Tortured Existance" id="tortured-existance" colors="⚪⚫🟢" />
                            <DeckLink name="Teachings Control" id="teachings-control" colors="⚪🔵⚫🟢" />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Commander</Heading>
                        <ul>
                            <DeckLink name="Karador" id="karador" colors="⚪⚫🟢" />
                            <DeckLink name="Muldrotha" id="muldrotha" colors="🔵⚫🟢" />
                            <DeckLink name="Nahiri" id="nahiri" colors="⚪" />
                            <DeckLink name="Sasaya" id="sasaya" colors="🟢" />
                            <DeckLink name="Sen Triplets" id="sen-triplets" colors="⚪🔵⚫" />
                            <DeckLink name="Zedruu" id="zedruu" colors="⚪🔵🔴" />
                            <DeckLink name="Zur" id="zur" colors="⚪🔵⚫" />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Oathbreaker</Heading>
                        <ul>
                            <DeckLink name="Wrenn &amp; Six" id="wrenn-and-six" colors="🔴🟢" />
                            <DeckLink name="Calix, Destiny&apos;s Hand" id="calix-enchantress" colors="⚪🟢" />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Other</Heading>
                        <ul>
                            <DeckLink name="Pre-Modern: Astral Slide" id="astral-slide" colors="⚪🔴" />
                            <DeckLink name="Proxy Vintage: Oath of Druids" id="oath-of-druids" colors="⚪🔵⚫🔴🟢" />
                        </ul>
                    </div>
                </DecksDiv>
            </ContentDiv>
        </>
    );
};

const pipStyles: CSS = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "2px",
    border: "1px solid black"
};

const WhitePip = styled("span", {
    ...pipStyles,
    backgroundColor: "white"
});

const BluePip = styled("span", {
    ...pipStyles,
    backgroundColor: "blue"
});

const BlackPip = styled("span", {
    ...pipStyles,
    backgroundColor: "black"
});

const RedPip = styled("span", {
    ...pipStyles,
    backgroundColor: "red"
});

const GreenPip = styled("span", {
    ...pipStyles,
    backgroundColor: "green"
});

const DeckLinkAnchor = styled("a", {
    color: "$primary",
    "&:hover": {
        color: "$primaryVariant"
    }
});

const DeckListItem = styled("li", {
    position: "relative",
    listStyle: "none",
    display: "block"
});

const DeckNameHeader = styled("h3", {});

const DeckColorSpan = styled("span", {
    display: "none",
    float: "right",
    position: "absolute",
    top: "0",
    right: "0",
    "@lg": {
        display: "inline"
    }
});

interface DeckLinkProps {
    name: string;
    id: string;
    colors?: string;
}

const DeckLink: React.FunctionComponent<DeckLinkProps> = ({ name, id, colors }) => {
    const colorEl = colors && (
        <>
            { colors.includes("⚪") && <WhitePip /> }
            { colors.includes("🔵") && <BluePip /> }
            { colors.includes("⚫") && <BlackPip /> }
            { colors.includes("🔴") && <RedPip /> }
            { colors.includes("🟢") && <GreenPip /> }
        </>
    );

    return (
        <Link href={ `/magic/deck/${ id }` } component={ DeckLinkAnchor }>
            <DeckListItem>
                <DeckNameHeader>{name}</DeckNameHeader>
                {colorEl && <DeckColorSpan>{ colorEl }</DeckColorSpan>}
            </DeckListItem>
        </Link>
    );
};

export default Magic;
