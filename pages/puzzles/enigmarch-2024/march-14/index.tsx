import React, { FunctionComponent, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const TableWrapper = styled("div", {
    position: "relative",
    marginLeft: "-15px",
    padding: "0",
    maxWidth: "unset",
    height: "400px",
    "@lg": {
        height: "760px"
    }
});

const Table = styled("table", {
    position: "absolute",
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    top: "27px",
    left: "36px",
    "@lg": {
        top: "54px",
        left: "141px"
    }
});

const StaticDatum = styled("td", {
    width: "25px",
    maxWidth: "25px",
    height: "38px",
    maxHeight: "38px",
    fontSize: "24px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    userSelect: "none",
    "@lg": {
        width: "50px",
        maxWidth: "50px",
        height: "75px",
        maxHeight: "75px",
        fontSize: "48px"
    }
});

const P = styled("p", {
    color: "$onBackground"
});

const PIECES = [
    "",
    "╔",
    "╗",
    "╚",
    "╝",
    "║",
    "═"
];

const GRID = [
    ["" ,"","","","👿","","","","", "", ""],
    ["1", "","" ,"" ,"║","" ,"" ,"" ,"", "", ""],
    ["3", "","" ,"" ,"" ,"" ,"╔","" ,"", "", ""],
    ["4", "","" ,"" ,"║","" ,"" ,"" ,"", "", ""],
    ["6", "","" ,"" ,"" ,"" ,"" ,"" ,"", "", ""],
    ["6", "","╗","" ,"" ,"" ,"" ,"" ,"═","🚂", "👻"],
    ["3", "","" ,"" ,"" ,"" ,"" ,"" ,"", "", ""],
    ["4", "","" ,"" ,"" ,"" ,"" ,"" ,"", "", ""],
    ["" ,"2","4","2","5","5","4","4","1", "", ""]
];

const LETTERS = [
    ["" ,"","","","👿","","","","", "", ""],
    ["1", "I","T" ,"L" ,"L","A" ,"R" ,"O" ,"F", "", ""],
    ["3", "N","O" ,"H" ,"I","B" ,"F","A","E", "", ""],
    ["4", "G","E" ,"P" ,"A","A","L","K","T", "", ""],
    ["6","O","C","K","T","V","S" ,"D","O", "", ""],
    ["6","C","A","I" ,"M" ,"O","R","O", "V","🚂", "👻"],
    ["3","N" ,"D","R" ,"U" ,"N","I","E" ,"I", "", ""],
    ["4", "I","L","E","Z","A","T" ,"L" ,"O", "", ""],
    ["" ,"2","4","2","5","5","4","4","1", "", ""]
];

interface DatumProps {
    css?: CSS;
    rowIndex: number;
    columnIndex: number;
    revealLetters: boolean;
}

const Datum: FunctionComponent<DatumProps> = ({ css = {}, rowIndex, columnIndex, revealLetters }) => {
    const [stateIndex, setStateIndex] = useState(0);

    const datumStyle: CSS = {
        cursor: revealLetters ? "inherit" : "pointer",
        ...(revealLetters ? {} : { "&:hover": { backgroundColor: "$primary" } }),
        ...((rowIndex === 0 || rowIndex === 8 || columnIndex >= 9) && { cursor: "inherit", "&:hover": undefined })
    };

    const onClick = () => {
        if (revealLetters) {
            return;
        }

        setStateIndex((curr) => (curr + 1) % 7);
    };

    return (
        <StaticDatum css={{ ...datumStyle, ...css  }} onClick={ onClick }>
            { (revealLetters && stateIndex !== 0) ? LETTERS[rowIndex][columnIndex] : PIECES[stateIndex] }
        </StaticDatum>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    const [revealLetters, setRevealLetters] = useState(false);

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-14">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to interact with the grid clearly!!!" }</WarningDiv>
            <TableWrapper>
                <Table>
                    <tbody>
                        { GRID.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    { row.map((cell, columnIndex) => {
                                        const cellStyles: CSS = {
                                            ...(rowIndex === 1 ? { borderTop: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 1 ? { borderLeft: "3px solid $onBackground" } : {}),
                                            ...(rowIndex === 7 ? { borderBottom: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 8 ? { borderRight: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 0 ? { border: "none" } : {}),
                                            ...(columnIndex >= 9 ? { border: "none" } : {}),
                                            ...(rowIndex === 0 ? { border: "none" } : {}),
                                            ...(rowIndex === 8 ? { border: "none" } : {}),
                                            ...((rowIndex === 1 && columnIndex === 4) ? { borderTop: "3px solid transparent" } : {}),
                                            ...((rowIndex === 5 && columnIndex === 8) ? { borderRight: "3px solid transparent" } : {})
                                        };

                                        if (!cell) {
                                            return (
                                                <Datum key={ `${ rowIndex }-${ columnIndex }` }
                                                    css={ cellStyles }
                                                    rowIndex={ rowIndex }
                                                    columnIndex={ columnIndex }
                                                    revealLetters={ revealLetters }
                                                />
                                            );
                                        }
                                        return (
                                            <StaticDatum key={ `${ rowIndex }-${ columnIndex }` } css={ cellStyles }>
                                                { revealLetters ? LETTERS[rowIndex][columnIndex] : cell }
                                            </StaticDatum>
                                        );
                                    }) }
                                </tr>
                            );
                        }) }
                    </tbody>
                </Table>
            </TableWrapper>
            <button onClick={ () => setRevealLetters(rl => !rl) }>{ revealLetters ? "Build more" : "Check tracks" }</button>
            <P>This puzzle works like a nonogram! Fill in the tracks such that each row and column has the correct number of squares being used. Once you think you have met the constraints, Check your tracks and see if your path will tell you anything useful!</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;