import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground",
});

const VideoIframe = styled("iframe", {
    width: "300px",
    height: "169px",
    "@lg": {
        width: "560px",
        height: "315px"
    }
});

const MAZE = [
    [ " ", " ", " ", " ", " ", " ", "END" ],
    [ "🍪", "R", "🍔", "N", "🍩", "S", "🍍" ],
    [ "E", "•", "E", "•", "S", "•", "S" ],
    [ "🍑", "D", "🍕", "O", "🍜", "N", "🍰" ],
    [ "V", "•", "I", "•", "E", "•", "T" ],
    [ "🍛", "D", "🌽", "T", "🧅", "A", "🍆" ],
    [ "O", "•", "N", "•", "A", "•", "I" ],
    [ "🍒", "Y", "🍏", "R", "🍭", "U ", "🥕" ],
    [ "G", "•", "U", "•", "M", "•", "L" ],
    [ "🍓", "R", "🍇", "O", "🥚", "L", "🍠" ],
    [ "START", " ", " ", " ", " ", " ", " " ]
];

const Table = styled("table", {
    borderSpacing: "0",
    borderCollapse: "collapse",
    margin: "0px auto",
    width: "286px",
    "@lg":{
        width: "650px"
    }
});

const TableCell = styled("td", {
    position: "relative",
    width: "30px",
    height: "30px",
    textAlign: "center",
    color: "$onBackground",
    "@lg": {
        width: "50px",
        height: "50px",
        fontSize: "30px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-8">
            <Table>
                <tbody>
                    {
                        MAZE.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            if (rowIndex === 1 && columnIndex === 6) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderRight: "1px solid $onBackground"}}>{cell}</TableCell>;
                                            }

                                            if (rowIndex === 1 && columnIndex === 0) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderTop: "1px solid $onBackground", borderLeft: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (rowIndex === 1) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderTop: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (columnIndex === 6 && rowIndex === 9) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderRight: "1px solid $onBackground", borderBottom: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (columnIndex === 0 && rowIndex === 9) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderLeft: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (columnIndex === 0  && rowIndex >= 1 && rowIndex < 9) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderLeft: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (columnIndex === 6 && rowIndex >= 1 && rowIndex < 9) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderRight: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (rowIndex === 9) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ borderBottom: "1px solid $onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (cell === "•") {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ backgroundColor: "$onBackground" }}>{cell}</TableCell>;
                                            }

                                            if (rowIndex === 0 || rowIndex === 10) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ fontSize: "12px", "@lg": { fontSize: "16px" } }}>{cell}</TableCell>;
                                            }

                                            return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` }>{cell}</TableCell>;
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
            <P>Garden Rock = 81cm 4mm</P>
            <br />
            <br />
            <br />
            <br />
            <br />
            <P>(Not Part of the Puzzle) Some musical inspiration:</P>
            <VideoIframe
                title="Musical Inspiration"
                src="https://www.youtube-nocookie.com/embed/_HCrpqZJT2g"
                frameBorder="0"
                allowFullScreen>
            </VideoIframe>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
