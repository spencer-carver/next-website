import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const TITLE = "Tetris";
const DESCRIPTION = "You don't see the appeal?";
const SRC = "/puzzles/tetris.mp4";
const SUBTITLE_SRC = "/puzzles/tetris.vtt";
const NAME = "tetris";

const FallbackSpan = styled("span", {
    margin: "0 10px"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME }>
            <video style={ { width: "100%", maxWidth: "600px", marginBottom: "calc(100vh - 768px)" } } controls poster={ undefined }>
                <source src={ SRC } type="video/mp4" />
                <track label="English" kind="captions" srcLang="en" src={ SUBTITLE_SRC } default />
                <FallbackSpan>
                    Your browser does not support HTML5 video. To view, download it <a href={ SRC }>here</a>.
                </FallbackSpan>
            </video>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
