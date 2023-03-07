import React, { FunctionComponent, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";

const WORD_SEARCH = [
    [ "M", "I", "N", "E", "R", "Q", "L", "M", "A", "D", "K", "I", "N", "X", "J", "Y", "S", "B", "P" ],
    [ "I", "F", "M", "M", "S", "T", "O", "N", "E", "N", "O", "T", "S", "G", "E", "R", "O", "G", "S" ],
    [ "N", "E", "T", "E", "P", "H", "C", "L", "A", "T", "Y", "B", "X", "Y", "T", "B", "A", "F", "E" ],
    [ "E", "T", "A", "R", "G", "O", "S", "H", "E", "N", "I", "T", "E", "R", "I", "T", "A", "E", "S" ],
    [ "R", "W", "L", "A", "A", "G", "B", "N", "O", "N", "Q", "Z", "Y", "R", "N", "A", "L", "T", "E" ],
    [ "A", "P", "K", "L", "R", "A", "S", "D", "E", "T", "O", "N", "N", "A", "A", "S", "E", "R", "K" ],
    [ "L", "T", "O", "D", "N", "O", "M", "A", "I", "D", "T", "T", "I", "U", "Y", "O", "X", "S", "N" ],
    [ "B", "S", "Z", "A", "E", "G", "M", "D", "I", "F", "S", "H", "S", "Q", "K", "C", "A", "T", "J" ],
    [ "D", "Y", "C", "P", "T", "A", "A", "F", "F", "E", "I", "T", "E", "T", "P", "U", "N", "O", "Y" ],
    [ "I", "H", "T", "E", "N", "O", "S", "T", "L", "R", "C", "M", "Y", "O", "V", "E", "D", "N", "K" ],
    [ "S", "T", "O", "N", "E", "U", "L", "G", "O", "X", "S", "A", "P", "P", "H", "I", "R", "E", "D" ],
    [ "R", "E", "R", "G", "F", "D", "E", "P", "U", "U", "S", "T", "H", "A", "Y", "L", "I", "N", "G" ],
    [ "O", "M", "E", "R", "O", "N", "V", "E", "R", "L", "R", "M", "O", "Z", "A", "Z", "T", "C", "E" ],
    [ "E", "A", "Q", "U", "A", "M", "A", "R", "I", "N", "E", "M", "R", "N", "L", "I", "E", "H", "R" ],
    [ "N", "C", "G", "B", "L", "T", "R", "I", "T", "H", "M", "O", "A", "M", "E", "R", "W", "I", "K" ],
    [ "O", "E", "R", "Y", "A", "O", "G", "D", "E", "S", "C", "E", "N", "L", "S", "C", "B", "P", "C" ],
    [ "T", "I", "C", "B", "C", "M", "R", "O", "C", "K", "O", "N", "T", "U", "I", "O", "W", "U", "O" ],
    [ "S", "E", "D", "I", "M", "E", "N", "T", "N", "K", "Z", "R", "A", "O", "P", "N", "O", "W", "R" ],
    [ "P", "O", "K", "D", "S", "A", "S", "I", "S", "M", "T", "M", "O", "R", "P", "L", "E", "G", "F" ]
];

const DESCRIPTIONS = [
    "Literal translation: 'not drunken'",
    "One of the four precious stones",
    "Commonly referenced as 8 on the Mohs scale",
    "Sometimes known as the 'gem of the sun'",
    "This gemstone generally indicates metamorphism deep in the Earth's crust",
    "One of the four precious stones",
    "The oldest known mineral on earth",
    "Literal translation: 'pomegranate'",
    "Commonly referenced as a 4 on the Mohs scale",
    "This gemstone was once believed to give it's wearer procection in litigation",
    "One of the four precious stones",
    "This is the only mineral discovered as a cut gemstone, rather than as a crystal",
    "Commonly referenced as an 8.5 on the Mohs scale",
    "This gemstone comes in the widest variety of colors",
    "The best known variety of Spodumene",
    "One of the four precious stones",
    "Sometimes known as 'the mother of all gemstones'"
];

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px"
});

const BankList = styled("ul", {
    listStyle: "none",
    paddingInlineStart: "0px",
    textAlign: "left"
});

const ListItem = styled("li", {
    cursor: "pointer",
    color: "$onBackground"
});

const itemFoundStyle: CSS = {
    backgroundColor: "$onBackground",
    color: "$background",
    textDecoration: "line-through"
};

const Word: FunctionComponent<{ word: string }> = ({ word }) => {
    const [ found, setFound ] = useState(false);

    const toggleFound = (): void => setFound(!found);

    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-element-to-interactive-role */
    return (
        <ListItem css={ found ? itemFoundStyle : {} }
            role="button"
            tabIndex={ 0 }
            onClick={ toggleFound }
            onKeyPress={ toggleFound }>
            { word }
        </ListItem>
    );
    /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-noninteractive-element-to-interactive-role */
};

const Datum = styled("td", {
    width: "22px",
    height: "22px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    cursor: "pointer"
});

const selectedStyle: CSS = {
    backgroundColor: "$secondary",
    color: "$onSecondary"
};

const secondarySelectedStyle: CSS = {
    backgroundColor: "$primary",
    color: "$onPrimary"
};

const Cell: FunctionComponent<{ value: string }> = ({ value }) => {
    const [ selected, setSelected ] = useState(0);

    const styles = [
        {},
        selectedStyle,
        secondarySelectedStyle
    ];

    const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        event.preventDefault();

        setSelected((selected + 1) % 3);
    };

    return (
        <Datum css={ styles[selected] } onClick={ onClick } role="gridcell">
            { value }
        </Datum>
    );
};

const P = styled("p", {
    color: "$onBackground"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-5">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to see the grid fully!!!" }</WarningDiv>
            <Table role="grid">
                <tbody>
                    { WORD_SEARCH.map((row, rowIndex) => {
                        return (
                            <tr key={ `row-${ rowIndex }` }>
                                { row.map((value, cellIndex) => <Cell key={ `cell-${ rowIndex }-${ cellIndex }` } value={ value } />) }
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <BankList>
                { DESCRIPTIONS.map((word, index) => <Word key={ index } word={ word } />) }
            </BankList>
            <div>
                <P>8,2</P>
                <P>5,3</P>
                <P>4</P>
                <P>15,11</P>
                <P>9,1,6</P>
                <P>7,13,12,14</P>
                <P>10</P>
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
