import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2023/rope-system.png";

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
    height: "311px",
    margin: "0 auto",
    "@sm": {
        width: "360px",
        height: "373px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "519px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "760px",
        height: "788px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "858px",
        height: "890px",
        marginLeft: "-100px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-25">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to see the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="An odd collection of knots" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
