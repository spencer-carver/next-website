import React, { FunctionComponent } from "react";
import Head from "next/head";
import Link from "../../components/Link";
import { CSS } from "@stitches/react";
import { styled } from "../../styles/stitches";
import BackNavigation from "../../components/BackNavigation";
import Image from "../../components/Image";
import {
    WHITE_MANA,
    BLUE_MANA,
    BLACK_MANA,
    RED_MANA,
    GREEN_MANA,
    COLORLESS_MANA,
    PIONEER_DECKS,
    MODERN_DECKS,
    LEGACY_DECKS,
    PAUPER_DECKS,
    COMMANDER_DECKS,
    OATHBREAKER_DECKS,
    OTHER_DECKS,
    SPECIAL_DECKS,
    DeckLinkProps,
    DeckClassification
} from "../../constants/Magic";

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
    width: "245px",
    padding: "5px",
    margin: "0 auto",
    borderRadius: "@border",
    "h2:first-of-type": {
        marginTop: "0"
    },
    "@md": {
        width: "480px"
    },
    "@lg": {
        width: "740px"
    },
    "@xl": {
        width: "1000px"
    },
    "@xxl": {
        width: "1220px"
    }
});

const Description = styled("p", {
    color: "$onSurface",
    margin: "0 40px"
});

const ListContainer = styled("ul", {
    display: "flex",
    flexWrap: "wrap",
    paddingInlineStart: "0px"
});

interface FormatGroupProps {
    name: string;
    decks?: DeckLinkProps[];
}

const FormatGroup: FunctionComponent<FormatGroupProps> = ({ name, decks }) => {
    return (
        <div>
            <Heading as="h2">{ name }</Heading>
            <ListContainer>
                { decks.map((deck) => <DeckLink key={ deck.id } { ...deck } />) }
            </ListContainer>
        </div>
    );
};

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
                <Description  css={{ textAlign: "center" }}>
                    ⭐: primary deck, ❤️: my wife&apos;s deck
                </Description>
                <DecksDiv>
                    <FormatGroup name="Pioneer" decks={ PIONEER_DECKS } />
                    <FormatGroup name="Modern" decks={ MODERN_DECKS } />
                    <FormatGroup name="Legacy" decks={ LEGACY_DECKS } />
                    <FormatGroup name="Pauper" decks={ PAUPER_DECKS } />
                    <FormatGroup name="Commander" decks={ COMMANDER_DECKS } />
                    <FormatGroup name="Oathbreaker" decks={ OATHBREAKER_DECKS } />
                    <FormatGroup name="Other Constructed Formats" decks={ OTHER_DECKS } />
                    <FormatGroup name="Special Formats" decks={ SPECIAL_DECKS } />
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
    marginLeft: "1px",
    marginBottom: "2px",
    border: "1px solid transparent"
};

const WhitePip = styled("span", {
    ...pipStyles,
    backgroundColor: "#F7F6D8",
    backgroundImage: `url("${ WHITE_MANA }")`
});

const BluePip = styled("span", {
    ...pipStyles,
    backgroundColor: "#C2D7E9",
    backgroundImage: `url("${ BLUE_MANA }")`

});

const BlackPip = styled("span", {
    ...pipStyles,
    backgroundColor: "#BAB1AB",
    backgroundImage: `url("${ BLACK_MANA }")`
});

const RedPip = styled("span", {
    ...pipStyles,
    backgroundColor: "#E49977",
    backgroundImage: `url("${ RED_MANA }")`
});

const GreenPip = styled("span", {
    ...pipStyles,
    backgroundColor: "#A4C095",
    backgroundImage: `url("${ GREEN_MANA }")`
});

const ColorlessPip = styled("span", {
    ...pipStyles,
    backgroundColor: "#C9C5C0",
    backgroundImage: `url("${ COLORLESS_MANA }")`
});

const DeckListItem = styled("li", {
    position: "relative",
    listStyle: "none",
    display: "inline-block"
});

const DeckNameHeader = styled("h3", {
    width: "211px",
    color: "$primary"
});

const DeckLinkAnchor = styled("a", {
    marginLeft: "16px",
    marginBottom: "10px",
    "&:hover": {
        backgroundColor: "$surface02"
    },
    [`&:hover ${ DeckNameHeader }`]: {
        color: "$onSurface"
    }
});


const DeckColorSpan = styled("span", {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "0",
    left: "-12px",
    height: "152px",
    paddingTop: "2px",
});

const ClassificationSpan = styled("span", {
    display: "inline",
    position: "absolute",
    top: "0",
    right: "2px",
    fontSize: "20px"
});

const UnderConstructionSpan = styled("span", {
    color: "white",
    backgroundColor: "black",
    transform: "rotate(-30deg)",
    display: "inline",
    position: "absolute",
    top: "60px",
    right: "30px",
    fontWeight: "bold",
    padding: "0 3px 1px"
})

const ImageWrapper = styled("div", {
    position: "relative",
    width: "211px",
    height: "156px"
});

const underConstructionStyles: CSS = {
    border: "10px solid transparent",
    borderImage: "repeating-linear-gradient(-55deg, #000000, #000000 20px, #FFE031 20px, #FFE031 40px) 10",
    width: "191px",
    height: "136px"
};

const DeckLink: FunctionComponent<DeckLinkProps> = ({ name, id, colors, imageUrl, link, classification, isUnderConstruction }) => {
    const colorEl = colors && (
        <>
            { colors.includes("W") && <WhitePip /> }
            { colors.includes("U") && <BluePip /> }
            { colors.includes("B") && <BlackPip /> }
            { colors.includes("R") && <RedPip /> }
            { colors.includes("G") && <GreenPip /> }
            { colors.includes("C") && <ColorlessPip /> }
        </>
    );

    const DeckElement: FunctionComponent = () => (
        <>
            {imageUrl && <ImageWrapper css={ isUnderConstruction ? underConstructionStyles : {} }><Image src={ imageUrl } alt="name" layout="fill" /></ImageWrapper>}
            <DeckNameHeader>{name}</DeckNameHeader>
            {classification === DeckClassification.PRIMARY && <ClassificationSpan>⭐</ClassificationSpan>}
            {classification === DeckClassification.KATHYS && <ClassificationSpan>❤️</ClassificationSpan>}
            {isUnderConstruction && <UnderConstructionSpan>Under Construction</UnderConstructionSpan>}
            <DeckColorSpan>{ colorEl }</DeckColorSpan>
        </>
    );

    if (link || !isUnderConstruction) {
        return (
            <Link href={ link || `/magic/deck/${ id }` } component={ DeckLinkAnchor }>
                <DeckListItem>
                    <DeckElement />
                </DeckListItem>
            </Link>
        );
    }

    return (
        <DeckListItem css={{ marginLeft: "16px", marginBottom: "10px" }}>
            <DeckElement />
        </DeckListItem>
    );
};

export default Magic;
