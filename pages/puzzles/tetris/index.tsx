import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const SRC = "/puzzles/tetris.mp4";
const SUBTITLE_SRC = "/puzzles/tetris.vtt";

const FallbackSpan = styled("span", {
    margin: "0 10px"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="tetris">
            <video style={{ width: "100%", maxWidth: "600px" }} controls poster={ undefined }>
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
