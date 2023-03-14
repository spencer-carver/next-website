import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";

const Table = styled("table", {
    margin: "20px auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    "@xl": {
        marginLeft: "-100px",
        marginRight: "-100px"
    }
});

const Datum = styled("td", {
    width: "60px",
    height: "20px",
    color: "$onBackground",
    border: "1px solid transparent",
    paddingRight: "5px",
    textAlign: "right",
    "@lg": {
        width: "200px"
    },
    "@xl": {
        width: "220px"
    }
});

const underlineStyle: CSS = {
    borderBottom: "1px solid $onBackground",
};

const rightBorderStyle: CSS = {
    borderRight: "1px solid $onBackground"
};

function getStylesColumn1(index: number): CSS {
    let styles: CSS = {};

    if (index % 2 === 0) {
        styles = underlineStyle;
    }

    if (index % 4 > 0 && index % 4 < 3) {
        styles = { ...styles, ...rightBorderStyle };
    }

    return styles;
}

function getStylesColumn2(index: number): CSS {
    let styles: CSS = {};

    if ((index - 1) % 4 === 0) {
        styles = underlineStyle;
    }

    if (index % 8 > 1 && index % 8 < 6) {
        styles = { ...styles, ...rightBorderStyle };
    }

    return styles;
}

function getStylesColumn3(index: number): CSS {
    let styles: CSS = {};

    if ((index - 3) % 8 === 0) {
        styles = underlineStyle;
    }

    if (index % 16 > 3 && index % 16 < 12) {
        styles = { ...styles, ...rightBorderStyle };
    }

    return styles;
}

function getStylesColumn4(index: number): CSS {
    let styles: CSS = {};

    if ((index - 7) % 16 === 0) {
        styles = underlineStyle;
    }

    if (index % 32 > 7 && index % 32 < 24) {
        styles = { ...styles, ...rightBorderStyle };
    }

    return styles;
}

const ROUND_OF_16 = [
    "1. Jeremy Wariner",
    "16. Future Man",
    "9. Danny Pudi",
    "8. Douglas A Shackelford",
    "5. Robert Hass",
    "12. Jamie Hyneman",
    "13. Yvette Nicole Brown",
    "4. Randy Newman",
    "3. Andrew J Feustel",
    "14. Meryl Streep",
    "11. Charlie Byrd",
    "6. Matthew McConaughey",
    "7. Joe Staton",
    "10. JuJu Chan",
    "15. Bill Foxen",
    "2. Ashley Judd"
];

const ROUND_OF_8 = [
    "(7)",
    "(8)",
    "(6)",
    "(7)",
    "(4)",
    "(1)",
    "(3)",
    "(4)"
];

const ROUND_OF_4 = [
    "(2)",
    "(11)",
    "(8)",
    "(3)"
];

const ROUND_OF_2 = [
    "(3)",
    "(5)"
];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-13">
            <Table>
                <tbody>
                    { (new Array(32)).fill(undefined).map((_, rowIndex) => {
                        return (
                            <tr key={ rowIndex }>
                                <Datum css={ getStylesColumn1(rowIndex) }>{ rowIndex % 2 === 0 ? ROUND_OF_16[rowIndex / 2] : undefined }</Datum>
                                <Datum css={ getStylesColumn2(rowIndex) }>{ (rowIndex - 1) % 4 === 0 ? ROUND_OF_8[(rowIndex - 1) / 4] : undefined }</Datum>
                                <Datum css={ getStylesColumn3(rowIndex) }>{ (rowIndex - 3) % 8 === 0 ? ROUND_OF_4[(rowIndex - 3) / 8] : undefined }</Datum>
                                <Datum css={ getStylesColumn4(rowIndex) }>{ (rowIndex - 7) % 16 === 0 ? ROUND_OF_2[(rowIndex - 7) / 16] : undefined }</Datum>
                                <Datum css={ rowIndex === 15 ? underlineStyle : {} }>{ rowIndex === 15 ? "(16)" : undefined }</Datum>
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
