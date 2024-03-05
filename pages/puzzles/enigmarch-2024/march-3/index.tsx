import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/guitar-hero.mp4";

const FallbackSpan = styled("span", {
    margin: "0 10px"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-3">
            <video style={{ width: "100%", maxWidth: "1080px" }} controls poster={ undefined }>
                <source src={ SRC } type="video/mp4" />
                <FallbackSpan>
                    Your browser does not support HTML5 video. To view, download it <a href={ SRC }>here</a>.
                </FallbackSpan>
            </video>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
