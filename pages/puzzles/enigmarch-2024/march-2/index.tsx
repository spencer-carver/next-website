import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/make-it-true.png";

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
    height: "280px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "420px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "600px",
        height: "560px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "900px",
        height: "840px",
        marginLeft: "-70px"
    }
});

const P = styled("p", {
    color: "$onBackground",
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-2">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A sequence of logic gates that combine to yield 'False'" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
