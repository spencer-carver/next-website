import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2023/diagonal.png";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "300px",
    margin: "0 auto",
    "@sm": {
        width: "360px",
        height: "360px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "499px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "760px",
        height: "758px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "800px",
        height: "798px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-28">
            <ImageWrapperDiv>
                <Image src={ SRC } alt="An image-based puzzle" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
