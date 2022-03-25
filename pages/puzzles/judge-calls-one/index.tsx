import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const TITLE = "Judge Calls";
const DESCRIPTION = "Can you decrypt what the players are talking about?";
const SRC = "/puzzles/judge-calls-one.pdf";
const NAME = "judge-calls-one";

const PDFObject = styled("object", {
    width: "100%",
    minHeight: "calc(100vh - 300px)",
    marginBottom: "80px"
});

const FallbackSpan = styled("span", {
    margin: "0 10px"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME }>
            <PDFObject data={ SRC } type="application/pdf" >
                <FallbackSpan>
                    Could not display the PDF. To view, download it <a href={ SRC }>here</a>.
                </FallbackSpan>
            </PDFObject>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;