import React, { FunctionComponent } from "react";

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

const styles: Record<string, string> = {};
const Link = ({ linkStyle, to, children }) => children;

const Cocktails: FunctionComponent = () => {
    return (
        <>
            <div className={ styles.content }>
                <div className={ styles.menu }>
                    <h1>Cocktail Menu</h1>
                    <span>Some of my favorite cocktails. List and format is currently being revised</span>
                    {
                        COCKTAILS.map((drink, index) => {
                            return <MenuItem key={ index } { ...drink } />;
                        })
                    }
                </div>
            </div>
        </>
    );
};

const MenuItem: FunctionComponent<Cocktail> = ({ name, ingredients, description, link }) => {
    return (
        <div>
            <h2 className={ styles.name }>
                <Link linkStyle={ styles.title } to={ link }>{ name }</Link>
            </h2>
            <p className={ styles.ingredients }>{ ingredients.join(", ") }</p>
            { description && <p>{ description }</p> }
        </div>
    );
};

export default Cocktails;
