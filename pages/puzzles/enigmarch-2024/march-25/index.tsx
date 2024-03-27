import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/sonic-adventure-2.pdf";

const PDFObject = styled("object", {
    width: "100%",
    minHeight: "calc(100vh - 300px)"
});

const FallbackSpan = styled("span", {
    margin: "0 10px",
    color: "$onBackground"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-25">
            <PDFObject data={ SRC } type="application/pdf" >
                <FallbackSpan>
                    Could not display the PDF. To view, download it <a href={ SRC }>here</a>.
                </FallbackSpan>
            </PDFObject>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
