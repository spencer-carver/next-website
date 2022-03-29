import React, { FunctionComponent } from "react";
import { logoCBackground, logoSBackground } from "../Icons/SiteLogo";
import { styled, keyframes, yahooGeocitiesTheme, darkTheme } from "../../styles/stitches";
import { CSS } from "@stitches/react";

const SpinnerDiv = styled("div", {
    position: "absolute", 
    width: "100%",
    height: "calc(100% - 50px)",
    backgroundColor: "rgba(0,0,0,0.7)",
    zIndex: "10",
    opacity: "1",
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "rgba(0, 255, 255, 0.6)"
    }
});

const spinnerFadeOutStyles: CSS = {
    opacity: "0",
    transition: "opacity .75s ease-out"
};

const spin = keyframes({
    "from": {
        transform: "rotate(0deg)"
    },
    "to": {
        transform: "rotate(360deg)"
    }
});

const spinBack = keyframes({
    "from": {
        transform: "rotate(0deg)"
    },
    "to": {
        transform: "rotate(-360deg)"
    }
});

const commonLogoStyles: CSS = {
    position: "absolute",
    top: "calc(42vh - 150px)",
    left: "calc(50vw - 150px)",
    width: "300px",
    height: "300px",
    fontSize: "0"
};

const LogoCDiv = styled("div", {
    ...commonLogoStyles,
    background: logoCBackground(300, 300, "black"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    animationName: `${ spinBack }`,
    animationDuration: "1000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    [`.${ darkTheme } &`]: {
        background: logoCBackground(300, 300, "gray")
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        background: logoCBackground(300, 300, "mediumOrchid")
    }
});

const LogoSDiv = styled("div", {
    ...commonLogoStyles,
    background: logoSBackground(300, 300, "black"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    animationName: `${ spin }`,
    animationDuration: "4000ms",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    [`.${ darkTheme } &`]: {
        background: logoSBackground(300, 300, "gray")
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        background: logoSBackground(300, 300, "mediumOrchid")
    }
});

interface LoadingProps {
    fadeOut?: boolean;
}

const LoadingSpinner: FunctionComponent<LoadingProps> = ({ fadeOut = false }) => {

    return (
        <SpinnerDiv css={ fadeOut ? spinnerFadeOutStyles : {} }>
            <LogoCDiv />
            <LogoSDiv />
        </SpinnerDiv>
    );
};

export default LoadingSpinner;
