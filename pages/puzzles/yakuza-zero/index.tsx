import React, { FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const DANCE_FLOOR = [
    [ "", "M I", "D", "I C N L", "" ],
    [ "N S", "O", "H", "A", "Y S" ],
    [ "H", "D N B T I E A", "E", "E L S M", "B R" ],
    [ "T E I", "L N", "R Y N", "J", "I R" ],
    [ "", "N B I O G", "W", "X T U R", "" ]
];

const ContentDiv = styled("div", {
    textAlign: "center",
    margin: "0 30px",
    padding: "20px 0 100px",
    color: "$onBackground"
});

const InstructionDiv = styled("div", {
    textAlign: "left",
    "@lg": {
        marginLeft: "70px"
    }
});

const DanceFloorTable = styled("table", {
    borderSpacing: "0",
    borderCollapse: "collapse",
    margin: "10px auto",
    width: "255px"
});

const TableCell = styled("td", {
    width: "50px",
    height: "50px",
    border: "1px solid $onBackground",
    textAlign: "center"
});

const cornerCellStyles: CSS = {
    border: "none"
};

const VideoIframe = styled("iframe", {
    width: "255px",
    height: "143px",
    "@lg": {
        width: "560px",
        height: "315px"
    }
});

const YakuzaZero: FunctionComponent = () => {
    return (
        <ContentDiv>
            <InstructionDiv>
                <h3>How to Dance:</h3>
                <ul>
                    <li>Reference the video.</li>
                    <li>The first time you visit a cell, use the left-most letter.</li>
                    <li>On subsequent visits, you can use any letter already used, or the next unused one</li>
                </ul>
            </InstructionDiv>
            <DanceFloorTable>
                <tbody>
                    {
                        DANCE_FLOOR.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            const isCorner = (rowIndex === 0 || rowIndex === 4) && (columnIndex === 0 || columnIndex === 4);
                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={ isCorner ? cornerCellStyles : {} }>{cell}</TableCell>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </DanceFloorTable>
            <VideoIframe
                title="part 1"
                src="https://www.youtube-nocookie.com/embed/CcWqo5UsXyg"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </VideoIframe>
            <InstructionDiv>
                <h3>How to Sing:</h3>
                <ul>
                    <li>Have your dance moves down pat.</li>
                    <li>Reference the video.</li>
                    <li>Sing your heart out.</li>
                </ul>
            </InstructionDiv>
            <VideoIframe
                title="part 2"
                src="https://www.youtube-nocookie.com/embed/_3Mo7U0XSFo"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </VideoIframe>
        </ContentDiv>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="yakuza-zero">
            <YakuzaZero />
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
