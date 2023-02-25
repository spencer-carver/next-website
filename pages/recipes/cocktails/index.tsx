import React, { FunctionComponent } from "react";
import Head from "next/head";
import BackNavigation from "../../../components/BackNavigation";
import Link from "../../../components/Link";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";

const TITLE = "Cocktail Recipes";
const DESCRIPTION = "Check out some of my favorite beverages, and give them a try!";

enum Glass {
    lowball = "lowball",
    highball = "highball",
    coupe = "coupe",
    martini = "martini",
    hurricane = "hurricane"
}

interface Cocktail {
    name: string;
    ingredients: string[];
    glass: Glass;
    description?: string;
    link: string;
}

const COCKTAILS: Cocktail[] = [
    {
        name: "Amaretto Sour",
        ingredients: [
            "Amaretto",
            "Bourbon",
            "Lemon Juice",
            "Rich Simple Syrup",
            "Egg White"
        ],
        glass: Glass.lowball,
        link: "https://www.jeffreymorgenthaler.com/i-make-the-best-amaretto-sour-in-the-world/"
    }, {
        name: "Aviation",
        ingredients: [
            "Gin",
            "Maraschino",
            "Lemon Juice",
            "Crème de Violette"
        ],
        glass: Glass.coupe,
        link: "https://www.luxardo.it/liqueurs-and-distillates/maraschino-originale/"
    },
    {
        name: "Hurricane",
        ingredients: [
            "White Rum",
            "Dark Rum",
            "Lime Juice",
            "Orange Juice",
            "Passion Fruit Puree",
            "Simple Syrup",
            "Grenadine"
        ],
        glass: Glass.hurricane,
        link: "https://www.liquor.com/recipes/hurricane/"
    },
    {
        name: "Little Devil",
        ingredients: [
            "Vodka",
            "Ancho Reyes Chile Liqueur",
            "Lemon Juice",
            "Maple Syrup",
            "Club Soda"
        ],
        glass: Glass.highball,
        link: "https://www.youtube.com/watch?v=w4KGTNH2Tkk"
    },
    {
        name: "Matador",
        ingredients: [
            "Tequila",
            "Lime Juice",
            "Pineapple Juice"
        ],
        glass: Glass.lowball,
        link: "https://www.thedrinkkings.com/matador-recipe/"
    },
    {
        name: "Pimm's & Ginger",
        ingredients: [
            "Pimm's No. 1",
            "Ginger Ale"
        ],
        glass: Glass.highball,
        link: "https://www.anyoneforpimms.com/recipes/pimm-s-ginger"
    },
    {
        name: "Ponche Creme",
        ingredients: [
            "Dark Rum",
            "Eggs",
            "Sweetened Condensed Milk",
            "Angostura Bitters",
            "Nutmeg",
            "Lime Zest"
        ],
        glass: Glass.lowball,
        link: "https://www.foodnetwork.com/recipes/ponche-creme-recipe-2106355"
    }
];

const ContentDiv = styled("div", {
    margin: "0 auto",
    padding: "10px 0",
    maxWidth: "800px",
    textAlign: "center",
    "@lg": {
        paddingTop: "30px"
    }
});

const MenuDiv = styled("div", {
    padding: "20px 10px",
    minHeight: "400px",
    backgroundColor: "$background",
    marginBottom: "198px",
    color: "$onSurface",
    "@lg": {
        marginTop: "50px",
        minHeight: "600px",
        border: "1px solid $onBackground",
        boxShadow: "5px 5px 5px $onBackground",
        backgroundColor: "$surface02",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "84px"
    }
});

const Cocktails: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/recipes/cocktails` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/recipes/cocktails` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <BackNavigation to="/recipes" />
            <ContentDiv>
                <MenuDiv>
                    <h1>Cocktail Menu</h1>
                    <span>Some of my favorite cocktails. List and format is currently being revised</span>
                    {
                        COCKTAILS.map((drink, index) => {
                            return <MenuItem key={ index } { ...drink } />;
                        })
                    }
                </MenuDiv>
            </ContentDiv>
        </>
    );
};

const NameHeading = styled("h2", {
    marginBottom: "10px"
});

const LinkAnchor = styled("a", {
    color: "$onSurface",
    textDecoration: "none",
    paddingBottom: "1px",
    borderBottom: "1px dotted $primary"
});

const IngredientsP = styled("p", {
    margin: "0",
    fontStyle: "italic"
});

const MenuItem: FunctionComponent<Cocktail> = ({ name, ingredients, description, link }) => {
    return (
        <div>
            <NameHeading>
                <Link href={ link } component={ LinkAnchor }>{ name }</Link>
            </NameHeading>
            <IngredientsP>{ ingredients.join(", ") }</IngredientsP>
            { description && <p>{ description }</p> }
        </div>
    );
};

export default Cocktails;
