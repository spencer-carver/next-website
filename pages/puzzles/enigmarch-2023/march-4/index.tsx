import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { keyframes, styled } from "../../../../styles/stitches";
import ManorSVG from "../../../../components/Puzzle/helpers/manor";

const SRC = "/puzzles/enigmarch-2023/manor.svg";
const COVER_SRC = "/puzzles/enigmarch-2023/manor.png";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const coverKeyframes = keyframes({
    "86%": {
        opacity: "0"
    },
    "87%": {
        opacity: "1"
    },
    "88%": {
        opacity: "1"
    },
    "89%": {
        opacity: "0"
    },
    "90%": {
        opacity: "1"
    },
    "91%": {
        opacity: "0"
    },
    "92%": {
        opacity: "1"
    },
    "93%": {
        opacity: "0"
    }
});

const imageWrapperKeyframes = keyframes({
    "86%": {
        backgroundColor: "black"
    },
    "87%": {
        backgroundColor: "white"
    },
    "88%": {
        backgroundColor: "white"
    },
    "89%": {
        backgroundColor: "black"
    },
    "90%": {
        backgroundColor: "white"
    },
    "91%": {
        backgroundColor: "black"
    },
    "92%": {
        backgroundColor: "white"
    },
    "93%": {
        backgroundColor: "black"
    }
});

const rain = keyframes({
    "0%": {
        backgroundPosition: "0 0",
        opacity: "1"
    },
    "100%": {
        backgroundPosition: "8% 80%",
        opacity: "1"
    }
});

const ImageWrapperWrapperDiv = styled("div", {
    position: "relative",
    padding: "20px 5px 10px",
    backgroundColor: "black",
    width: "300px",
    marginLeft: "-5px",
    animation: `${ imageWrapperKeyframes } 30s ease-out 0s infinite`,
    "&:before": {
        content: "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url(/puzzles/enigmarch-2023/rain.png)",
        animation: `${ rain } 0.3s linear 0s infinite reverse`,
        opacity: 0,
        zIndex: "2"
    },
    "@sm": {
        padding: "20px 10px 10px",
        width: "360px",
        height: "161px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "224px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "760px",
        height: "340px",
        marginLeft: "auto",
        "&:before": {
            animation: `${ rain } 0.2s linear 0s infinite normal`,
        }
    },
    "@xl": {
        width: "1000px",
        height: "450px",
        marginLeft: "-100px"
    }
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "280px",
    height: "125px",
    margin: "0 auto",
    "@sm": {
        width: "340px",
        height: "152px"
    },
    "@md": {
        width: "480px",
        height: "215px"
    },
    "@lg": {
        width: "760px",
        height: "340px"
    },
    "@xl": {
        width: "1000px",
        height: "450px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-4">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to see the image clearly!!!" }</WarningDiv>
            <ImageWrapperWrapperDiv>
                <ImageWrapperDiv>
                    <Image src={ SRC } alt="An old manor" layout="fill" />
                    <ManorSVG />
                    <Image src={ COVER_SRC } alt="An old manor" layout="fill" style={{ opacity: "0", animation: `${ coverKeyframes } 30s ease-out 0s infinite` }} />
                </ImageWrapperDiv>
            </ImageWrapperWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
