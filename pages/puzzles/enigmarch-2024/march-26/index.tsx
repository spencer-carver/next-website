import React, { FunctionComponent, useCallback } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CardTooltip } from "../../../../components/Magic/Guidance";

const DIV = styled("div", {
    marginTop: "200px",
    color: "$onBackground",
    "@lg": {
        marginTop: "300px"
    }
});

const P = styled("p", {
    color: "$onBackground"
});

const TH = styled("th", {
    color: "$onBackground"
});

const TD = styled("td", {
    color: "$onBackground"
});

const Table = styled("table", {
    margin: "20px auto"
});

const CARD_URL_PREFIX = "https://cards.scryfall.io/large/front";

const CARDS = {
    "Mastermind Plum": "d/f/df81568b-c66a-49c6-bd48-7df98ea00117.jpg",
    "Apothecary White": "4/f/4fedf84e-55ca-4334-a2c1-6e991112bb68.jpg",
    "Headliner Scarlett": "b/e/be77b98a-dd79-477c-8ab2-7ebf5637a89e.jpg",
    "Commander Mustard": "c/1/c1fa8c23-5501-476f-9614-162d7bd95b23.jpg",
    "Emissary Green": "3/2/323e9430-b87c-4b02-9ade-c4c65343147b.jpg",
    "Senator Peacock": "8/7/8778b33c-efab-4b65-b6e3-f0e3d1d8f937.jpg",
    "Candlestick": "b/f/bf9cdbb5-559a-41cc-a89c-cb7458b23f83.jpg",
    "Knife": "1/d/1d39504f-09bb-4e05-a46c-daab87edf34a.jpg",
    "Lead Pipe": "e/4/e450f3e6-a3ee-4e50-b939-c1e678f77c2b.jpg",
    "Rope": "d/a/daaf464b-70bf-475b-8591-1504d530cd3f.jpg",
    "Wrench": "0/b/0b3b16b8-2fc7-4bc5-99b1-6d50a503a943.jpg",
    "Ballroom": "6/e/6e982bf8-382f-4987-bc39-28e1ce290340.jpg",
    "Billiard Room": "d/c/dc2a3de1-01ac-4425-8534-e5019e01f2cd.jpg",
    "Conservatory": "8/b/8bab22c5-4742-4f2e-bda1-26c72b09cd9c.jpg",
    "Dining Room": "1/b/1bf8dcb2-6fe7-4ab3-b290-fb427d116c74.jpg",
    "Hall": "a/b/ab3d0e50-630a-4ccc-aa79-1db912ea801e.jpg",
    "Kitchen": "4/3/4388ae8f-a2c4-4e0d-a6a1-0204ff3f469b.jpg",
    "Library": "4/4/442cf173-8042-40fa-98d6-6ca93caa3e03.jpg",
    "Lounge": "4/b/4b197079-488d-47c6-a494-8baf36c48667.jpg",
    "Secret Passage": "6/b/6b35ede8-e882-46fd-9eda-9d6f64c73ea1.jpg",
    "Study": "c/6/c694bc39-3eae-4b40-8f85-34785f9e75f1.jpg",
    "Human Soldier": "f/3/f3c9c53d-7aeb-4a04-923b-dd6c7505af8f.jpg"
};

const PuzzleComponent: FunctionComponent = () => {
    const LocalCardTooltip = useCallback(({ cardName, children }) => (
        <CardTooltip card={{ name: cardName, id: cardName, image_uris: { front: `${ CARD_URL_PREFIX }/${ CARDS[cardName] }` } }}>
            { children }
        </CardTooltip>
    ), []);
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-26">
            <DIV>
                <LocalCardTooltip cardName="Commander Mustard">Commander Mustard</LocalCardTooltip> has been murdered, protected by his legion of <LocalCardTooltip cardName="Human Soldier">soldier</LocalCardTooltip>s no less!
                It&apos;s up to you to help the Ravnican Detective Agency crack the case!
                You have a list of suspects and weapons, you know the location somehow connects them both, and that each suspect only had seven mana at their disposal, but otherwise there aren&apos;t any direct leads!
            </DIV>
            <Table>
                <tbody>
                    <tr>
                        <TH>Suspects</TH>
                        <TH>Weapons</TH>
                        <TH>Locations</TH>
                    </tr>
                    <tr>
                        <TD><LocalCardTooltip cardName="Apothecary White">Apothecary White</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Wrench">Wrench</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Study">Study</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD><LocalCardTooltip cardName="Senator Peacock">Senator Peacock</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Candlestick">Candlestick</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Secret Passage">Secret Passage</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD><LocalCardTooltip cardName="Mastermind Plum">Mastermind Plum</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Lead Pipe">Lead Pipe</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Billiard Room">Billiard Room</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD><LocalCardTooltip cardName="Headliner Scarlett">Headliner Scarlett</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Knife">Knife</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Dining Room">Dining Room</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD><LocalCardTooltip cardName="Emissary Green">Emissary Green</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Rope">Rope</LocalCardTooltip></TD>
                        <TD><LocalCardTooltip cardName="Conservatory">Conservatory</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD></TD>
                        <TD></TD>
                        <TD><LocalCardTooltip cardName="Ballroom">Ballroom</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD></TD>
                        <TD></TD>
                        <TD><LocalCardTooltip cardName="Library">Library</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD></TD>
                        <TD></TD>
                        <TD><LocalCardTooltip cardName="Lounge">Lounge</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD></TD>
                        <TD></TD>
                        <TD><LocalCardTooltip cardName="Hall">Hall</LocalCardTooltip></TD>
                    </tr>
                    <tr>
                        <TD></TD>
                        <TD></TD>
                        <TD><LocalCardTooltip cardName="Kitchen">Kitchen</LocalCardTooltip></TD>
                    </tr>
                </tbody>
            </Table>
            <P>
                NOTE: To submit an answer, it must be phrased in Clue form: &quot;It was [SUSPECT] with the [WEAPON] in the [LOCATION]&quot;
            </P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
