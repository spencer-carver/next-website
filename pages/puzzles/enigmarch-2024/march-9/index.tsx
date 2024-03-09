import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/braid.png";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@md": {
        display: "none"
    }
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "473px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "710px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "538px",
        height: "849px",
        marginLeft: "auto"
    }
});

const LI = styled("li", {
    color: "$onBackground",
    listStyle: "none"
});

const CLUES = [
    "Cerebral organ",
    "Cowboy 'pants'",
    "Deep abyss",
    "Depart",
    "Earn as total profit",
    "Enchant or captivate",
    "Exhaust",
    "Farmers' output",
    "Flood or inundate",
    "Full-sized",
    "Gets larger",
    "Give pursuit",
    "Musical ability",
    "Pulled or attracted",
    "Rent out",
    "Scorches or burns",
    "Stop completely",
    "✖️ or ➕"
];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-9">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A ladder from the game 'Braid'" layout="fill" />
            </ImageWrapperDiv>
            <ul>
                { CLUES.map((clue, index) => <LI key={ index }>{ clue }</LI>) }
            </ul>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
