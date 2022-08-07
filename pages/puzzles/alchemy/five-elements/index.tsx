import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { darkTheme, styled, yahooGeocitiesTheme } from "../../../../styles/stitches";
import { PuzzleRounds } from "../../../../constants/Puzzle";
import Draggable, { ControlPosition } from "react-draggable";

const TITLE = "Five Elements";
const DESCRIPTION = "Wheeler has been robbed! Help search for suspects and find the missing ring!";
const NAME = "alchemy:five-elements";

const WrapperWrapperDiv = styled("div", {
    position: "relative",
    left: "-20px",
    top: "-20px",
    width: "calc(100% + 20px)",
    overflow: "hidden",
    paddingTop: "80px",
    paddingLeft: "20px",
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
        height: "780px",
        paddingTop: "20px",
        "&::before": {
            content: ""
        }
    }
});

const WrapperDiv = styled("div", {
    position: "relative",
    width: "100%",
    height: "60vh",
    background: "url(/puzzles/alchemy/five/background.png)",
    border: "1px solid $onBackground",
    "@lg": {
        backgroundColor: "$surface01",
        width: "760px",
        height: "760px",
        "&::before": {
            content: ""
        }
    },
    [`.${ darkTheme } &`]: {
        background: "url(/puzzles/alchemy/five/background-inv.png)",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        background: "url(/puzzles/alchemy/five/background-inv.png)",
    }
});

const PhotoContainerDiv = styled("div", {
    position: "absolute",
    margin: "auto",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    "&:hover": {
        cursor: "pointer"
    }
});

const RingSVG: FunctionComponent<{ color: string }> = ({ color }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="240" height="240" style={{ position: "absolute", zIndex: "3", top: "-20px", left: "-20px", transform: "rotate(-15deg)" }}>
        <path id="Layer" fill={ color } d="M256 0C201.27 0 156.9 26.74 156.9 49.55L355.1 49.55C355.1 26.74 310.73 0 256 0Z"/>
        <path id="Layer" fillRule="evenodd" fill="#7c7c7c" d="M487.23 280.77C487.23 408.48 383.7 512 256 512C128.3 512 24.77 408.48 24.77 280.77C24.77 185.1 74.05 96.34 156.9 49.55L355.1 49.55C437.95 96.34 487.23 185.1 487.23 280.77ZM445.94 280.77C445.94 175.88 360.9 90.84 256 90.84C151.1 90.84 66.06 175.88 66.06 280.77C66.06 385.67 151.1 470.71 256 470.71C360.9 470.71 445.94 385.67 445.94 280.77Z"/>
        <g id="Layer">
            <path id="Layer" fill="#6f6f6f" d="M272.52 84.21L272.52 84.21C272.52 88.42 275.7 91.85 279.87 92.38C373.5 104.12 445.94 183.97 445.94 280.77C445.94 377.58 373.5 457.43 279.87 469.17C275.7 469.69 272.52 473.13 272.52 477.33L272.52 477.33C272.52 482.24 276.78 486.19 281.65 485.58C383.56 472.95 462.45 386.1 462.45 280.77C462.45 175.44 383.56 88.6 281.65 75.97C276.78 75.36 272.52 79.31 272.52 84.21Z"/>
            <path id="Layer" fill="#6f6f6f" d="M239.48 502.26C239.48 498.02 236.25 494.56 232.03 494.09C124.74 482.17 41.29 391.25 41.29 280.77C41.29 173.44 120.06 84.56 222.94 68.66C232.43 67.2 239.48 59.15 239.48 49.55L239.48 49.55L156.9 49.55C74.05 96.34 24.77 185.1 24.77 280.77C24.77 399.83 114.77 497.8 230.43 510.53C235.27 511.06 239.48 507.14 239.48 502.26L239.48 502.26Z"/>
        </g>
        <path id="Layer" fill="#000000" style={{ opacity: "0.2" }} d="M313.81 33.03L219.77 33.03C212.37 33.03 208.62 24.01 213.94 18.87C221.24 11.81 233.48 5.16 248.92 0.21C197.51 2.39 156.9 27.74 156.9 49.55L313.81 49.55C318.37 49.55 322.06 45.85 322.06 41.29L322.06 41.29C322.06 36.73 318.37 33.03 313.81 33.03Z"/>
    </svg>
);

const DraggableRing: FunctionComponent<{ css: CSS; defaultPosition: ControlPosition; color: string }> = ({ css, color, defaultPosition }) => {
    return (
        <Draggable
            defaultPosition={ defaultPosition }
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
            <PhotoContainerDiv css={ css } title="Drag Me">
                <RingSVG color={ color } />
            </PhotoContainerDiv>
        </Draggable>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            <WrapperWrapperDiv>
                <WrapperDiv>
                    <DraggableRing
                        css={{
                            background: "url(/puzzles/alchemy/five/wind.png) no-repeat, #98BEFD",
                            transform: "translate(102px, 458px)",
                            backgroundPosition: "-102px -458px, center center"
                        }}
                        defaultPosition={{ x: 102, y: 458 }}
                        color="#98BEFD"
                    />
                    <DraggableRing
                        css={{
                            background: "url(/puzzles/alchemy/five/water.png) no-repeat, #55AAFC",
                            transform: "translate(458px, 102px)",
                            backgroundPosition: "-458px -102px, center center"
                        }}
                        defaultPosition={{ x: 458, y: 102 }}
                        color="#55AAFC"
                    />
                    <DraggableRing
                        css={{
                            background: "url(/puzzles/alchemy/five/earth.png) no-repeat, #EC671B",
                            transform: "translate(458px, 458px)",
                            backgroundPosition: "-458px -458px, center center"
                        }}
                        defaultPosition={{ x: 458, y: 458 }}
                        color="#EC671B"
                    />
                    <DraggableRing
                        css={{
                            background: "url(/puzzles/alchemy/five/heart.png) no-repeat, #F076FC",
                            transform: "translate(102px, 102px)",
                            backgroundPosition: "-102px -102px, center center"
                        }}
                        defaultPosition={{ x: 102, y: 102 }}
                        color="#F076FC"
                    />
                </WrapperDiv>
            </WrapperWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
