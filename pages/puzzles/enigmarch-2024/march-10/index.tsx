import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/pokemon.png";

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
    height: "200px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "301px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "700px",
        height: "468px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "800px",
        height: "534px",
        marginLeft: "-20px"
    },
    "@xxl": {
        width: "1000px",
        height: "668px",
        marginLeft: "-120px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-10">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A graph representing some odd connections." layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
