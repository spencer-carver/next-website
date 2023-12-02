import React, { FunctionComponent } from "react";
import Image from "../../../components/Image";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const SRC = "/puzzles/speed-climbing.png";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "571px",
    margin: "0 auto",
    "@sm": {
        width: "360px",
        height: "686px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "420px",
        height: "800px",
        marginLeft: "-50px"
    },
    "@lg": {
        marginLeft: "auto"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="speed-climbing">
            <ImageWrapperDiv>
                <Image src={ SRC } alt="Two climbers on an official speed wall" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
