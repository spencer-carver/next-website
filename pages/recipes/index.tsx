import React, { FunctionComponent } from "react";
import Head from "next/head";
import { PageProps } from "../../@types/global";
import ConstructionGif from "../../components/ConstructionGif";
import Link from "../../components/Link";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";

const TITLE = "All Recipes";
const DESCRIPTION = "Some of my favorite recipes for any time of day or year!";

const ContentDiv = styled("div", {
    margin: "0 auto",
    padding: "10px 0",
    maxWidth: "800px",
    textAlign: "left",
    "@lg": {
        paddingTop: "30px"
    }
});

const MenuDiv = styled("div", {
    padding: "0 100px 20px",
    minHeight: "400px",
    backgroundColor: "$surface02",
    marginBottom: "244px",
    color: "$onSurface",
    "@lg": {
        marginTop: "50px",
        minHeight: "600px",
        border: "1px solid $onBackground",
        boxShadow: "5px 5px 5px $onBackground"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "30px"
    }
});

const Heading = styled("h2", {
    textAlign: "center"
});

const SectionHeading = styled("h2", {
    textAlign: "left",
    marginLeft: "-40px"
});

const LinkAnchor = styled("a", {
    color: "$onSurface",
    textDecoration: "none",
    paddingBottom: "1px",
    borderBottom: "1px dotted $primary"
});

const Recipes: FunctionComponent<PageProps> = ({ theme }) => {
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href="https://spencer.carvers.info/recipes" />
                <meta name="description" content={DESCRIPTION} />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={TITLE} />
                <meta property="og:description" content={DESCRIPTION} />
                <meta property="og:title" content={TITLE} />
                <meta property="og:url" content="https://spencer.carvers.info/recipes" />
                <meta property="og:image" content={`https://spencer.carvers.info/seo.jpg`} />
                <meta name="twitter:description" content={DESCRIPTION} />
                <meta name="twitter:title" content={TITLE} />
                <meta name="twitter:image" content={`https://spencer.carvers.info/seo.jpg`} />
            </Head>
            <ContentDiv>
                <MenuDiv>
                    <Heading>Recipes</Heading>
                    <SectionHeading>Drinks</SectionHeading>
                    <Link href="/recipes/cocktails" component={ LinkAnchor }>Cocktails</Link>
                    <SectionHeading>Small Plates</SectionHeading>
                    <ConstructionGif theme={ theme } useFallback={ true } />
                    <SectionHeading>Breakfast</SectionHeading>
                    <ConstructionGif theme={ theme } useFallback={ true } />
                    <SectionHeading>Lunch</SectionHeading>
                    <ConstructionGif theme={ theme } useFallback={ true } />
                    <SectionHeading>Dinner</SectionHeading>
                    <ConstructionGif theme={ theme } useFallback={ true } />
                    <SectionHeading>Dessert</SectionHeading>
                    <ConstructionGif theme={ theme } useFallback={ true } />
                </MenuDiv>
            </ContentDiv>
        </>
    );
};

export default Recipes;
