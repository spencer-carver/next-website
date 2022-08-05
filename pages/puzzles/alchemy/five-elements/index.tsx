import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";
import { PuzzleRounds } from "../../../../constants/Puzzle";
import Draggable from "react-draggable";

const TITLE = "Five Elements";
const DESCRIPTION = "Wheeler's Ring has been stolen! Help the others find what's missing in order to save the day. The power is yours!";
const NAME = "alchemy:five-elements";

const WrapperDiv = styled("div", {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
    paddingTop: "60px",
    "&::before": {
        "content": "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device that fits the entire grid on screen!!!",
        position: "relative",
        top: "-50px",
        paddingBottom: "10px",
        color: "$onError",
        backgroundColor: "$error",
        whiteSpace: "pre-wrap"
    },
    "@lg": {
        paddingTop: "0px",
        backgroundColor: "$surface01",
        "&::before": {
            content: ""
        }
    }
});

const PhotoContainerDiv = styled("div", {
    position: "absolute",
    margin: "auto",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: "1",
    backgroundBlendMode: "multiply",
    "&:hover": {
        cursor: "pointer"
    }
});

const DraggableRing: FunctionComponent<{ css: CSS }> = ({ css }) => {
    return (
        <Draggable
            onStart={ (e, { node }) => {
                node.style.zIndex = "2";
            } }
            onDrag={ (e, { node, x, y }) => {
                node.style.transform = `translate(${ x }px, ${ y }px)`;
                node.style.backgroundPosition = `${ -1 * x }px ${ -1 * y }px, center`;
            } }
            onStop={ (e, { node }) => {
                node.style.removeProperty("z-index");
            } }>
            <PhotoContainerDiv css={ css } title="Drag Me"></PhotoContainerDiv>
        </Draggable>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            <WrapperDiv>
                <DraggableRing css={{ background: "url(/puzzles/alchemy/test.png) no-repeat, #98BEFD" }} />
                <DraggableRing css={{ background: "url(/puzzles/alchemy/test.png) no-repeat, #55AAFC" }} />
                <DraggableRing css={{ background: "url(/puzzles/alchemy/test.png) no-repeat, #EC671B" }} />
                <DraggableRing css={{ background: "url(/puzzles/alchemy/test.png) no-repeat, #F076FC" }} />
            </WrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
