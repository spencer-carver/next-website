import { keyframes, styled, lightTheme, yahooGeocitiesTheme } from "../../../styles/stitches";
import { FunctionComponent } from "react";
import { CSS } from "@stitches/react";

const commonLogoStyles: CSS = {
    position: "absolute",
    width: "50px",
    height: "50px",
    left: "0",
    fontSize: "0",
    marginLeft: "10px"
};

export const logoCBackground = (width, height, color) => `url("data:image/svg+xml;charset=utf8,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='${ width }' height='${ height }' viewBox='0 0 72 72'%3E%3Cg transform='translate(0,72) scale(0.035,-0.035)' fill='${ color }' opacity='1' stroke='none'%3E%3Cpath d='M845 1854 c-78 -17 -198 -66 -283 -116 -73 -43 -247 -217 -290 -290 -93 -157 -132 -300 -132 -478 0 -178 39 -321 132 -478 43 -73 217 -247 290 -290 157 -93 300 -132 478 -132 178 0 324 40 477 132 54 32 223 182 223 198 0 4 -28 29 -62 54 l-61 46 -56 -53 c-151 -143 -312 -208 -516 -208 -247 0 -460 109 -601 308 -93 129 -135 263 -135 428 0 165 42 299 135 428 141 199 354 308 601 308 205 0 365 -65 517 -209 63 -60 59 -60 132 4 l46 42 -83 78 c-126 119 -272 196 -429 228 -97 20 -288 20 -383 0z'/%3E%3C/g%3E%3C/svg%3E")`;
const LogoCDiv = styled("div", {
    ...commonLogoStyles,
    background: logoCBackground(36, 36, "white"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    [`.${ lightTheme } &`]: {
        background: logoCBackground(36, 36, "black"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        background: logoCBackground(36, 36, "black"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
    }
});

export const logoSBackground = (width, height, color) => `url("data:image/svg+xml;charset=utf8,%3Csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='${ width }' height='${ height }' viewBox='0 0 72 72'%3E%3Cg transform='translate(0,72) scale(0.035,-0.035)' fill='${ color }' opacity='1' stroke='none'%3E%3Cpath d='M881 1634 c-66 -18 -142 -55 -193 -95 -176 -140 -168 -433 15 -554 71 -47 147 -71 315 -101 247 -43 326 -79 353 -161 16 -50 7 -126 -22 -167 -95 -140 -381 -158 -629 -40 -41 19 -89 46 -107 60 -55 42 -63 35 -63 -56 l0 -80 52 -41 c74 -58 139 -88 225 -105 101 -19 321 -18 398 1 144 37 257 121 312 232 25 53 28 68 28 163 0 98 -2 109 -30 160 -35 64 -104 120 -185 151 -30 12 -145 39 -255 61 -274 55 -324 84 -341 196 -14 91 44 171 152 211 142 53 419 6 550 -94 56 -43 64 -36 64 54 l0 79 -39 35 c-57 52 -91 66 -202 88 -121 23 -317 25 -398 3z'/%3E%3C/g%3E%3C/svg%3E")`;
const LogoSDiv = styled("div", {
    ...commonLogoStyles,
    background: logoSBackground(36, 36, "white"),
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    top: "0px",
    [`.${ lightTheme } &`]: {
        background: logoSBackground(36, 36, "black"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        background: logoSBackground(36, 36, "black"),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
    }
});

const expandLogo = keyframes({
    "0%": {
        top: "0px"
    },
    "100%": {
        top: "20px"
    }
});

const collapseLogo = keyframes({
    "0%": {
        top: "20px"
    },
    "100%": {
        top: "0px"
    }
});

const logoSDivExpandedStyles: CSS = {
    animation: `${ expandLogo } 0.25s`,
    top: "20px"
};

const logoSDivCollapsedStyles: CSS = {
    animation: `${ collapseLogo } 0.25s`,
    top: "0px"
};

interface SiteLogoProps {
    expanded: boolean;
    hasExpanded: boolean;
}

const SiteLogo: FunctionComponent<SiteLogoProps> = ({ expanded, hasExpanded }) => {
    return (
        <>
            <LogoSDiv />
            <LogoCDiv css={ expanded ? logoSDivExpandedStyles : (hasExpanded ? logoSDivCollapsedStyles : {}) } />
        </>
    );
};

export default SiteLogo;
