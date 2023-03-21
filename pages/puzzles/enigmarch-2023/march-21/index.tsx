import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2023/decagon.png";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "124px",
    margin: "0 auto",
    "@sm": {
        width: "350px",
        height: "145px",
        marginLeft: "-25px"
    },
    "@md": {
        width: "480px",
        height: "199px",
        marginLeft: "-90px"
    },
    "@lg": {
        width: "740px",
        height: "306px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "1000px",
        height: "414px",
        marginLeft: "-120px"
    }
});

const Table = styled("table", {
    margin: "20px auto 0",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    height: "29px",
    width: "29px",
    fontSize: "9px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    textAlign: "center",
    "@lg": {
        height: "60px",
        width: "60px",
        fontSize: "16px",
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-21">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="An odd decagon" layout="fill" />
            </ImageWrapperDiv>
            <Table>
                <tbody>
                    <tr>
                        <Datum>∠A</Datum>
                        <Datum>∠B</Datum>
                        <Datum>∠C</Datum>
                        <Datum>∠D</Datum>
                        <Datum>∠E</Datum>
                        <Datum css={{ borderTop: "1px solid transparent", borderBottom: "1px solid transparent" }}>&nbsp;</Datum>
                        <Datum>∠F</Datum>
                        <Datum>∠G</Datum>
                        <Datum>∠H</Datum>
                        <Datum>∠I</Datum>
                        <Datum>∠J + 1</Datum>
                    </tr>
                </tbody>
            </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
