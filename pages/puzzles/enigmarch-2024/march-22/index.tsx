import React, { FunctionComponent, useRef, useState } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import Draggable from "react-draggable";
import { PuzzleAnswer } from "../../../../components/Puzzle/AnswerCheck";

const FOREGROUND_SRC = "/puzzles/enigmarch-2024/bioshock.png";
const BACKGROUND_SRC = "/puzzles/enigmarch-2024/bioshock-infinite.png";

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
    height: "235px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "352px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "600px",
        height: "469px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "767px",
        height: "600px",
        marginLeft: "auto"
    }
});

const Cloud = styled("div", {
    position: "absolute",
    backgroundImage: `url(${ FOREGROUND_SRC })`,
    backgroundSize: "contain",
    top: "98px",
    left: "96px",
    width: "97px",
    height: "63px",
    "@md": {
        top: "146px",
        left: "144px",
        width: "146px",
        height: "95px"
    },
    "@lg": {
        top: "195px",
        left: "192px",
        width: "194px",
        height: "127px"
    },
    "@xl": {
        top: "250px",
        left: "244px",
        width: "248px",
        height: "162px"
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
        <PuzzleWrapperComponent name="enigmarch-2024:march-22" onSubmit={ onSubmit }>
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ BACKGROUND_SRC } alt="Clouds" layout="fill" />
                <Draggable>
                    <Cloud title="Drag Me"></Cloud>
                </Draggable>
            </ImageWrapperDiv>
            { finalClueVisible && <P>What type of Big Daddy is Bioshock&apos;s cover character?</P> }
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
