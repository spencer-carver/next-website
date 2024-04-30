import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import Image from "../../../../components/Image";
import Notification from "../../../../components/Notification";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2023/barcode.png";

const P = styled("p", {
    color: "$onBackground",
    margin: "0",
    display: "block",
    marginBottom: "5px",
    paddingLeft: "5px",
    textAlign: "left"
});

const Table = styled("table", {
    margin: "20px auto 0",
    borderCollapse: "collapse",
    borderSpacing: "0px"
});

const Datum = styled("td", {
    height: "25px",
    color: "$onBackground",
    border: "1px solid transparent",
    textAlign: "left",
    fontSize: "12px",
    fontFamily: "monospace",
    "@lg": {
        fontSize: "20px",
        textAlign: "center"
    }
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "202px",
    height: "76px",
    margin: "0 auto",
    border: "1px solid white"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-30">
            <Notification css={{ marginBottom: "10px" }}>
                <P>Erattum (4/29/24): The items referenced in this puzzle were incorrectly mapped, making the outcome incorrect. This has been rectified.</P>
            </Notification>
            <Table>
                <tbody>
                    <tr><Datum>
                        <ImageWrapperDiv>
                            <Image src={ SRC } alt="A barcode" layout="fill" />
                        </ImageWrapperDiv>
                    </Datum></tr>
                    <tr><Datum>A card game</Datum></tr>
                    <tr><Datum>(A movie)</Datum></tr>
                    <tr><Datum>A single large candy</Datum></tr>
                    <tr><Datum>(A later movie in better quality)</Datum></tr>
                </tbody>
            </Table>
            <P css={{ textAlign: "unset", marginTop: "30px", fontSize: "20px", "@lg": { fontSize: "30px" } }}>_ _ _ _ _ _ _ _ _ _&nbsp;&nbsp;&nbsp;_ _ _ _ _ _ _ _</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
