import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground"
});

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
    height: "350px",
    "@lg": {
        height: "700px"
    }
});

const Table = styled("table", {
    position: "absolute",
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    "@lg": {
        top: "54px",
        left: "75px"
    }
});

const StaticDatum = styled("td", {
    width: "15px",
    height: "20px",
    fontSize: "12px",
    color: "$onBackground",
    border: "1px solid transparent",
    fontWeight: "bold",
    userSelect: "none",
    "@lg": {
        width: "30px",
        height: "40px",
        fontSize: "24px"
    }
});

const GRID = [
    ["", "", "", "", "", "", "", "", "🧗‍♀️", "", "", ""  ,"", "", "", "", "" ,""],
    ["0", "1", "💣", "1", "0", "0", "0", "0", "0", "0", "1", "1"  ,"1", "0", "0", "0", "0" ,"0"],
    ["0", "1", "1" , "2", "1", "1", "0", "0", "0", "0", "1", "💣" ,"1", "0", "0", "0", "0" ,"0"],
    ["1", "2", "1", "2", "💣", "2", "1", "1", "0", "0", "1", "1" ,"1", "1", "2", "2", "1" ,"0"],
    ["💣", "2", "💣", "3", "2", "3", "💣", "3", "2", "1", "0", "0" ,"0", "1", "O", "S", "1" ,"0"],
    ["1", "2", "1", "2", "💣", "3", "4", "💣", "S", "1", "1", "1" ,"1", "1", "2", "2", "1" ,"0"],
    ["0", "0", "0", "2", "2", "3", "💣", "💣", "3", "1", "1", "💣" ,"1", "0", "0", "0", "0" ,"0"],
    ["0", "0", "0", "1", "💣", "3", "3", "3", "1", "0", "1", "1" ,"1", "0", "0", "1", "1" ,"1"],
    ["1", "1", "1", "2", "2", "3", "💣", "2", "1", "0", "1", "1" ,"1", "0", "0", "1", "U" ,"1"],
    ["1", "💣", "1", "1", "💣", "2", "2", "A", "2", "2", "3", "R" ,"1", "1", "2", "3", "2" ,"1"],
    ["1", "1", "1", "1", "1", "1", "1", "1", "2", "💣", "💣", "2" ,"2", "2", "💣", "💣", "2" ,"1"],
    ["0", "0", "0", "0", "0", "0", "1", "1", "2", "2", "2", "2" ,"2", "💣", "3", "2", "3" ,"💣"],
    ["0", "1", "2", "2", "1", "0", "1", "💣", "2", "1", "1", "1" ,"💣", "3", "2", "0", "2" ,"💣"],
    ["1", "2", "Y", "💣", "3", "1", "2", "2", "3", "💣", "1", "1" ,"3", "💣", "2", "0", "2" ,"2"],
    ["1", "💣", "4", "💣", "💣", "1", "1", "💣", "2", "1", "1", "0" ,"2", "💣", "2", "0", "1" ,"💣"]
];

const NUM_ROWS = 15;
const NUM_COLS = 18;

interface DatumProps {
    css?: CSS;
    rowIndex: number;
    columnIndex: number;
    value: string;
}

const Datum: FunctionComponent<DatumProps> = ({ css = {}, rowIndex, columnIndex, value }) => {
    const displayValue = value === "0" ? "" : value;
    const flagged = value === "🚩";
    const revealed = value !== "?" && !flagged;

    const datumStyle: CSS = {
        ...((displayValue === "" && revealed) ? { } : {}),
        ...(!revealed ? { backgroundColor: "$onBackground", border: "1px solid $background" } : {}),
        ...((revealed && isNaN(Number.parseInt(value))) ? { backgroundColor: "$primary", border: "1px solid $background" } : {}),
        ...((displayValue === "💣" && revealed) ? { backgroundColor: "$error", border: "1px solid $background" } : {}),
    };

    return (
        <StaticDatum css={{ ...datumStyle, ...css  }} data-row={ rowIndex } data-column={ columnIndex }>
            { displayValue }
        </StaticDatum>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    const [game, setGame] = useState<string[][]>([
        GRID[0],
        ...(new Array(NUM_ROWS - 1).fill(new Array(NUM_COLS).fill("?")))
    ]);
    const [gameOver, setGameOver] = useState(false);

    const onReveal = (e: React.MouseEvent<HTMLTableSectionElement>) => {
        if (gameOver) {
            return;
        }

        const rowIndex = Number((e.target as HTMLTableSectionElement).dataset.row);
        const columnIndex = Number((e.target as HTMLTableSectionElement).dataset.column);

        if (Number.isNaN(rowIndex) || Number.isNaN(columnIndex)) {
            return;
        }

        const value = game[rowIndex][columnIndex];
        const flagged = value === "🚩";
        const revealed = value !== "?" && !flagged;

        if (flagged || revealed) {
            return;
        }

        const newValue = GRID[rowIndex][columnIndex];

        if (newValue === "💣") {
            setGameOver(true);
        }

        const newGameBoard = new Array(NUM_ROWS).fill(new Array(NUM_COLS).fill("")).map((row, gameRowIndex) => {
            if (gameRowIndex === 0) {
                return GRID[0];
            }

            return row.map((cell, gameColumnIndex) => {
                if (rowIndex === gameRowIndex && columnIndex === gameColumnIndex) {
                    return newValue;
                }

                return game[gameRowIndex][gameColumnIndex];
            });
        });

        if (newValue !== "0") {
            setGame(newGameBoard);

            return;
        }

        const evaluateNeighbors = (rowPosition, columnPosition) => {
            const validCandidates = [];

            for (let i = -1; i <= 1; ++i) {
                for (let j = -1; j <= 1; ++j) {
                    if (i === 0 && j === 0) {
                        continue;
                    }
                    const candidateRowIndex = rowPosition + i;
                    const candidateColumnIndex = columnPosition + j;

                    if (candidateRowIndex <= 0 || candidateRowIndex >= NUM_ROWS) {
                        continue;
                    }
                    if (candidateColumnIndex < 0 || candidateColumnIndex >= NUM_COLS) {
                        continue;
                    }
                    if (newGameBoard[candidateRowIndex][candidateColumnIndex] === "?") {
                        validCandidates.push([candidateRowIndex, candidateColumnIndex]);
                    }
                }
            }

            return validCandidates;
        }

        const adjacentCells = evaluateNeighbors(rowIndex, columnIndex);

        while(adjacentCells.length > 0) {
            const [candidateRowIndex, candidateColumnIndex] = adjacentCells.pop();

            if (newGameBoard[candidateRowIndex][candidateColumnIndex] !== "?") {
                // already evaluated
                continue;
            }

            const candidateValue = GRID[candidateRowIndex][candidateColumnIndex];

            newGameBoard[candidateRowIndex][candidateColumnIndex] = candidateValue;

            if (candidateValue === "0") {
                adjacentCells.push(...evaluateNeighbors(candidateRowIndex, candidateColumnIndex));
            }
        }

        setGame(newGameBoard);
    };

    const onFlag = (e: React.MouseEvent<HTMLTableSectionElement>) => {
        if (gameOver) {
            return;
        }

        e.preventDefault();
        const rowIndex = Number((e.target as HTMLTableSectionElement).dataset.row);
        const columnIndex = Number((e.target as HTMLTableSectionElement).dataset.column);

        if (Number.isNaN(rowIndex) || Number.isNaN(columnIndex)) {
            return;
        }

        const value = game[rowIndex][columnIndex];
        const flagged = value === "🚩";
        const revealed = value !== "?" && !flagged;

        if (revealed) {
            return;
        }

        const newValue = flagged ? "?" : "🚩";

        setGame(new Array(NUM_ROWS).fill(new Array(NUM_COLS).fill("")).map((row, gameRowIndex) => {
            if (gameRowIndex === 0) {
                return GRID[0];
            }

            if (rowIndex !== gameRowIndex) {
                return game[gameRowIndex];
            }

            return row.map((column, gameColumnIndex) => {
                if (columnIndex !== gameColumnIndex) {
                    return game[rowIndex][gameColumnIndex];
                }

                return newValue;
            });
        }));
    };

    useEffect(() => {
        onReveal({ target: { dataset: { row: 1, column: 8 } } } as unknown as React.MouseEvent<HTMLTableSectionElement>);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-17">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to interact with the grid clearly!!!" }</WarningDiv>
            { gameOver && <P>Reload the page to try again!</P> }
            <TableWrapper>
                <Table>
                    <tbody onClick={ onReveal } onContextMenu={ onFlag }>
                        { game.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    { row.map((cell, columnIndex) => {
                                        const cellStyles: CSS = {
                                            ...(rowIndex === 1 ? { borderTop: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 0 ? { borderLeft: "3px solid $onBackground" } : {}),
                                            ...(rowIndex === 14 ? { borderBottom: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 17 ? { borderRight: "3px solid $onBackground" } : {}),
                                            ...((rowIndex === 1 && columnIndex === 8) ? { borderTop: "3px solid transparent" } : {}),
                                            ...(rowIndex === 0 ? { border: "none" } : {}),
                                            ...((rowIndex === 0 && columnIndex === 8) ? { borderRight: "3px solid $onBackground" } : {})
                                        };

                                        if (rowIndex > 0) {
                                            return (
                                                <Datum key={ `${ rowIndex }-${ columnIndex }` }
                                                    css={ cellStyles }
                                                    rowIndex={ rowIndex }
                                                    columnIndex={ columnIndex }
                                                    value={ cell }
                                                />
                                            );
                                        }
                                        return (
                                            <StaticDatum key={ `${ rowIndex }-${ columnIndex }` } css={ cellStyles }>
                                                { cell }
                                            </StaticDatum>
                                        );
                                    }) }
                                </tr>
                            );
                        }) }
                    </tbody>
                </Table>
            </TableWrapper>
            <P>Each number indicates whether that cell is adjacent to a trap or a treasure. The total of all numbers surrounding a treasure will be 11.</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;