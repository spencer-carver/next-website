import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/firewatch.png";

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
    height: "300px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "450px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "600px",
        height: "600px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "900px",
        height: "900px",
        marginLeft: "-70px"
    },
    "@xxl": {
        width: "1200px",
        height: "1200px",
        marginLeft: "-220px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-12">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A scribbled-on map from the game 'Firewatch'" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
