import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2023/wingspan.png";

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
    height: "205px",
    margin: "0 auto",
    "@sm": {
        width: "360px",
        height: "240px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "360px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "760px",
        height: "600px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "1000px",
        height: "690px",
        marginLeft: "-100px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-2">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A board at the end of a round of Wingspan" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
