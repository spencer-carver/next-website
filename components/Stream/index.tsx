import React, { FunctionComponent } from "react";
import { TWITCH_URL, YOUTUBE_URL } from "../../constants/ExternalUrls";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";
import Image from "../Image";

const ImageDiv = styled("div", {
    position: "relative",
    width: "50%",
    paddingTop: "5px",
    display: "inline-block",
    backgroundPosition: "50% 100%",
    backgroundRepeat: "no-repeat",
    "&:nth-of-type(1)": {
        textAlign: "right",
        backgroundImage: "linear-gradient(to right, transparent 0%, $youtube 100%)",
    },
    "&:nth-of-type(2)": {
        textAlign: "left",
        backgroundImage: "linear-gradient(to right, $twitch 0%, transparent 100%)",
    },
    "& img": {
        width: "300px",
        height: "140px",
        margin: "10px -1px -10px 0"
    },
    "@lg": {
        "& img": {
            width: "600px",
            height: "280px",
            margin: "10px -4px -10px 0"
        }
    },
    [`.${ lightTheme } &`]: {
        filter: "grayscale()",
        "&:hover": {
            filter: "unset"
        }
    }
});

const ModuleDiv = styled("div", {
    margin: "20px auto 0",
    position: "relative",
    [`.${ yahooGeocitiesTheme } &`]: {
        display: "none"
    }
});

const SiteLink = styled("a", {
    position: "relative",
    width: "50%",
    height: "100%",
    textDecoration: "none",
    fontSize: "24px"
});

const LinkTextSpan = styled("span", {
    position: "absolute",
    display: "inline",
    left: "0",
    bottom: "20px",
    textDecoration: "none",
    fontSize: "24px",
    color: "$onBackground",
    textAlign: "center",
    width: "100%",
    "@sm": {
        bottom: "30px"
    },
    "@md": {
        bottom: "60px"
    }
});

const ExtraSpan = styled("span", {
    display: "none",
    "@lg": {
        display: "unset"
    }
})

const Stream: FunctionComponent = () => {
    return (
        <ModuleDiv>
            <ImageDiv>
                <SiteLink href={ YOUTUBE_URL }>
                    <Image src="/streama.png" alt="youtube logo" layout="intrinsic" width="300" height="280" />
                    <LinkTextSpan>Subscribe <ExtraSpan>to my Channel</ExtraSpan></LinkTextSpan>
                </SiteLink>
            </ImageDiv>
            <ImageDiv>
                <SiteLink css={{ right: "0" }} href={ TWITCH_URL }>
                    <Image src="/streamb.png" alt="twitch logo" layout="intrinsic" width="300" height="280" />
                    <LinkTextSpan>Follow <ExtraSpan>my Stream</ExtraSpan></LinkTextSpan>
                </SiteLink>
            </ImageDiv>
        </ModuleDiv>
    );
};

export default Stream;
