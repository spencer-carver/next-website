import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";

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

const GRID = [
    ["W", "H", "A", "T", "S", "T", "H"],
    ["E", "N", "A", "M", "E", "O", "F"],
    ["T", "H", "E", "L", "E", "A", "S"],
    ["T", "U", "N", "L", "O", "C", "K"],
    ["E", "D", "F", "A", "L", "L", "G"],
    ["U", "Y", "S", "A", "C", "H", "I"],
    ["E", "V", "E", "M", "E", "N", "T"]
];

const POWER_GRID = [
    [" ", " ", " ", "p", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", "e", " ", " ", " "]
];

const TableWrapper = styled("div", {
    position: "relative",
    marginLeft: "-15px",
    padding: "0",
    maxWidth: "unset",
    height: "320px"
});

const Table = styled("table", {
    position: "absolute",
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    left: "47px",
    "@lg": {
        left: "275px"
    }
});

const StaticDatum = styled("td", {
    width: "30px",
    height: "40px",
    fontSize: "24px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    userSelect: "none"
});

function updateEnemyPosition(gb, [eRow, eColumn]) {
    const candidates = [[0,1],[1,0],[0,-1],[-1,0]].filter(([x, y]) => {
        if (eRow + x < 0 || eRow + x > 6) {
            return false;
        } else if (eColumn + y < 0 || eColumn + y > 6) {
            return false;
        } else if (gb[eRow + x][eColumn + y] === "e") {
            return false;
        }
        
        return true;
    });
    const fallbackCandidates = [[0,1],[1,0],[0,-1],[-1,0]].filter(([x, y]) => {
        if (eRow + x < 0 || eRow + x > 6) {
            return false;
        } else if (eColumn + y < 0 || eColumn + y > 6) {
            return false;
        }
        
        return true;
    });

    const move = candidates.length > 0
        ? candidates[Math.floor(Math.random() * candidates.length)]
        : fallbackCandidates[Math.floor(Math.random() * fallbackCandidates.length)];
    
    const newERow = eRow + move[0];
    const newECol = eColumn + move[1];

    return [newERow, newECol];
}

const PuzzleComponent: FunctionComponent = () => {
    const [currentPosition, setCurrentPosition] = useState([0, 3]);
    const [enemyPosition, setEnemyPosition] = useState([6, 3]);
    const [gameBoard, setGameBoard] = useState(POWER_GRID);

    const playerScore = gameBoard.reduce((score, row) => row.reduce((rowScore, cell) => cell === "p" ? rowScore + 1 : rowScore, score), 0);
    const enemyScore = gameBoard.reduce((score, row) => row.reduce((rowScore, cell) => cell === "e" ? rowScore + 1 : rowScore, score), 0);

    useEffect(() => {
        function trackKeypress(event: KeyboardEvent) {
            if (event.repeat) {
                return;
            }

            if (event.key === "ArrowLeft" || event.key === "a") {
                setCurrentPosition(([cRow, cColumn]) => {
                    if (cColumn === 0) {
                        return [cRow, cColumn];
                    }

                    setGameBoard((gb) => {
                        setEnemyPosition(([x, y]) => updateEnemyPosition(gb, [x, y]));

                        return gb.map((row, gameRowIndex) => {
                            return row.map((cell, gameColumnIndex) => {
                                if (cRow === gameRowIndex && cColumn - 1 === gameColumnIndex) {
                                    return "p";
                                }
            
                                return gb[gameRowIndex][gameColumnIndex];
                            });
                        });
                    });

                    return [cRow, cColumn - 1];
                });

                return;
            }

            if (event.key === "ArrowRight" || event.key === "d") {
                setCurrentPosition(([cRow, cColumn]) => {
                    if (cColumn === 6) {
                        return [cRow, cColumn];
                    }

                    setGameBoard((gb) => {
                        setEnemyPosition(([x, y]) => updateEnemyPosition(gb, [x, y]));

                        return gb.map((row, gameRowIndex) => {
                            return row.map((cell, gameColumnIndex) => {
                                if (cRow === gameRowIndex && cColumn + 1 === gameColumnIndex) {
                                    return "p";
                                }
            
                                return gb[gameRowIndex][gameColumnIndex];
                            });
                        });
                    });

                    return [cRow, cColumn + 1];
                });

                return;
            }

            if (event.key === "ArrowUp" || event.key === "w") {
                setCurrentPosition(([cRow, cColumn]) => {
                    if (cRow === 0) {
                        return [cRow, cColumn];
                    }

                    setGameBoard((gb) => {
                        setEnemyPosition(([x, y]) => updateEnemyPosition(gb, [x, y]));

                        return gb.map((row, gameRowIndex) => {
                            return row.map((cell, gameColumnIndex) => {
                                if (cRow - 1 === gameRowIndex && cColumn === gameColumnIndex) {
                                    return "p";
                                }
            
                                return gb[gameRowIndex][gameColumnIndex];
                            });
                        });
                    });

                    return [cRow - 1, cColumn];
                });

                return;
            }

            if (event.key === "ArrowDown" || event.key === "s") {
                setCurrentPosition(([cRow, cColumn]) => {
                    if (cRow === 6) {
                        return [cRow, cColumn];
                    }

                    setGameBoard((gb) => {
                        setEnemyPosition(([x, y]) => updateEnemyPosition(gb, [x, y]));

                        return gb.map((row, gameRowIndex) => {
                            return row.map((cell, gameColumnIndex) => {
                                if (cRow + 1 === gameRowIndex && cColumn === gameColumnIndex) {
                                    return "p";
                                }
            
                                return gb[gameRowIndex][gameColumnIndex];
                            });
                        });
                    });

                    return [cRow + 1, cColumn];
                });

                return;
            }
        }

        window.addEventListener("keydown", trackKeypress);

        return () => {
            window.removeEventListener("keydown", trackKeypress);
        };
    }, []);

    useEffect(() => {
        setGameBoard((gb) => {
            return gb.map((row, gameRowIndex) => {
                return row.map((cell, gameColumnIndex) => {
                    if (enemyPosition[0] === gameRowIndex && enemyPosition[1] === gameColumnIndex) {
                        return "e";
                    }

                    return gb[gameRowIndex][gameColumnIndex];
                });
            });
        });
    }, [enemyPosition]);

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-24" disabled={ enemyScore >= playerScore }>
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires keyboard input. Sorry mobile users!" }</WarningDiv>
            <P>Player Score: { playerScore }, Opponent Score: { enemyScore }</P>
            <TableWrapper>
                <Table>
                    <tbody>
                        { gameBoard.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    { row.map((cell, columnIndex) => {
                                        const cellStyles: CSS = {
                                            ...(rowIndex === 0 ? { borderTop: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 0 ? { borderLeft: "3px solid $onBackground" } : {}),
                                            ...(rowIndex === 6 ? { borderBottom: "3px solid $onBackground" } : {}),
                                            ...(columnIndex === 6 ? { borderRight: "3px solid $onBackground" } : {}),
                                            ...(cell === "p" ? { color: "$onSecondary", backgroundColor: "$secondary" } : {}),
                                            ...(cell === "e" ? { color: "$onPrimary", backgroundColor: "$primary" } : {})
                                        };

                                        if (rowIndex === currentPosition[0] && columnIndex === currentPosition[1]) {
                                            return (
                                                <StaticDatum key={ `${ rowIndex }-${ columnIndex }` } css={{ ...cellStyles, "backgroundColor": "$secondary" }}>🧑</StaticDatum>
                                            );
                                        }

                                        if (rowIndex === enemyPosition[0] && columnIndex === enemyPosition[1]) {
                                            return (
                                                <StaticDatum key={ `${ rowIndex }-${ columnIndex }` } css={{ ...cellStyles, "backgroundColor": "$primary" }}>👿</StaticDatum>
                                            );
                                        }

                                        return (
                                            <StaticDatum key={ `${ rowIndex }-${ columnIndex }` } css={ cellStyles }>
                                                { cell === "p" ? GRID[rowIndex][columnIndex] : "" }
                                            </StaticDatum>
                                        );
                                    }) }
                                </tr>
                            );
                        }) }
                    </tbody>
                </Table>
            </TableWrapper>
            <P>Use the arrow keys (or wasd) to navigate the power grid.</P>
            <P>You can&apos;t submit an answer unless you have more points than the opponent!</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
