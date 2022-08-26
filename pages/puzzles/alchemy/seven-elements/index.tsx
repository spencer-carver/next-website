import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { PuzzleRounds } from "../../../../constants/Puzzle";
import Image from "../../../../components/Image";

const TITLE = "Seven Attributes";
const DESCRIPTION = "What is Amnael's Endgame? He may hold all the cards, but I'm sure you can draw something!";
const NAME = "alchemy:seven-elements";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "2243px",
    margin: "40px auto",
    "@sm": {
        width: "360px",
        height: "2692px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "3750px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "720px",
        height: "5400px",
        marginLeft: "0px"
    },
    "@xxl": {
        width: "1000px",
        height: "7500px",
        marginLeft: "-100px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            <ImageWrapperDiv>
                <Image src="/puzzles/alchemy/seven-attributes.png" alt="A grid of unknown Yugioh Cards and other mysterious clues" layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
