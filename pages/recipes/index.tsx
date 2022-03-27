import React, { FunctionComponent } from "react";
import { PageProps } from "../../@types/global";
import ConstructionGif from "../../components/ConstructionGif";
import Link from "../../components/Link";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";

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
