import React, { FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import Image from "../Image";
import { styled, lightTheme, yahooGeocitiesTheme } from "../../styles/stitches";
import { logoSBackground, logoCBackground } from "../Icons/SiteLogo";
import Slideshow from "../Slideshow";

const ContainerDiv = styled("div", {
    width: "100%",
    height: "100vh",
    position: "relative",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), radial-gradient(circle at top right, rgba(34, 167, 240, 0.6), rgba(0,0,0,0), rgba(217, 30, 24, 0.6)), radial-gradient(circle at bottom right, rgba(0, 230, 64, 0.6), rgba(0,0,0,0), rgba(77, 19, 209, 0.6))",
    backgroundColor: "gray",
    margin: "-50px auto 0",
    zIndex: "1000002",
    "&::after": {
        content: "Scroll down to enter",
        position: "absolute",
        bottom: "80px",
        width: "100%",
        textAlign: "center",
        color: "white"
    },
    [`.${ lightTheme } &`]: {
        display: "none"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        display: "none"
    },
    "@lg": {
        height: "700px",
        "&::before": {
            opacity: "1"
        },
        "&::after": {
            display: "none"
        },
        [`.${ lightTheme } &`]: {
            display: "block",
            backgroundImage: "none",
            backgroundColor: "$background"
        }
    }
});

const overlayLogoContainerStyles: CSS = {
    "&::before": {
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
        marginTop: "-40px",
        background: `${ logoSBackground(216, 216, "white") }, ${ logoCBackground(216, 216, "white") }`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        opacity: "0.25",
        zIndex: "1",
        pointerEvents: "none",
        [`.${ lightTheme } &`]: {
            background: `${ logoSBackground(216, 216, "black") }, ${ logoCBackground(216, 216, "black") }`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: "0.5",
        }
    }
};

const SlideshowWrapperDiv = styled("div", {
    position: "relative",
    display: "block",
    width: "100%",
    height: "100%"
});

const hideMobileSlideshowStyles: CSS = {
    display: "none",
    "@lg": {
        display: "block"
    }
};

interface HeroOptions {
    overlayLogo?: boolean;
    hideMobile?: boolean;
    backgroundImage?: string;
}

interface HeroProps {
    options: HeroOptions;
}

const SLIDESHOW_ITEMS = [{
    src: "/seated.jpg",
    alt: "Spencer",
    priority: true,
    css: {
        "@xxl": {
            "& img": {
                objectPosition: "top"
            }
        }
    }
},{
    src: "/climbing.jpg",
    alt: "Spencer",
    css: {
        "@xxl": {
            "& img": {
                objectPosition: "bottom"
            }
        }
    }
}];

const Hero: FunctionComponent<HeroProps> = ({ options }) => {
    const {
        overlayLogo = false,
        hideMobile = false
    } = options;

    return (
        <>
            <ContainerDiv css={ overlayLogo ? overlayLogoContainerStyles : {} }>
                <SlideshowWrapperDiv css={ hideMobile ? hideMobileSlideshowStyles : {} }>
                    <Slideshow items={ SLIDESHOW_ITEMS } options={{ isHero: true }} />
                </SlideshowWrapperDiv>
            </ContainerDiv>
        </>
        
    );
};

export default Hero;
