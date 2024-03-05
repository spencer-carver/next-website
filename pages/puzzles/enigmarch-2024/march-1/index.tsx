import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/plants-vs-zombies.png";

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
    height: "150px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "225px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "600px",
        height: "300px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "900px",
        height: "450px",
        marginLeft: "-70px"
    },
    "@xxl": {
        width: "1200px",
        height: "600px",
        marginLeft: "-220px"
    }
});

const P = styled("p", {
    color: "$onBackground",
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-1">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A modified lawn from the game 'Plants vs Zombies'" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
