import React, { FunctionComponent, useRef, useState } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { PuzzleAnswer } from "../../../../components/Puzzle/AnswerCheck";

const SRC = "/puzzles/enigmarch-2024/balatro.png";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "163px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "245px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "600px",
        height: "327px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "940px",
        height: "512px",
        marginLeft: "-90px"
    }
});

const P = styled("p", {
    color: "$onBackground"
});

const PuzzleComponent: FunctionComponent = () => {
    const intermediateSet = useRef(new Set());
    const [finalClueVisible, setFinalClueVisible] = useState(false);

    const onSubmit = (response: PuzzleAnswer) => {
        if (!intermediateSet.current.has(response.submission)) {
            intermediateSet.current.add(response.submission);
        }

        if (intermediateSet.current.size === 3) {
            setFinalClueVisible(true);
        }
    };

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-16" onSubmit={ onSubmit }>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A hand from the game 'Balatro'" layout="fill" />
            </ImageWrapperDiv>
            { finalClueVisible && <P>What blind reduces this hand to a score of 2,152?</P> }
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
