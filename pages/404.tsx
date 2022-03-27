import React from "react";
import BackNavigation from "../components/BackNavigation";
import Link from "../components/Link";
import { lightTheme, styled, yahooGeocitiesTheme } from "../styles/stitches";

const Back = styled("a", {
    position: "absolute",
    top: "80px",
    left: "30px",
    textDecoration: "none",
    color: "$onBackground",
    zIndex: "1",
    "&:hover": {
        textDecoration: "underline"
    }
});

const ErrorDiv = styled("div", {
    display: "flex",
    height: "calc(100vh - 101px)",
    backgroundColor: "$background",
    color: "$onBackground",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, 'Segoe UI', 'Fira Sans', Avenir, 'Helvetica Neue', 'Lucida Grande', sans-serif",
    [`.${ yahooGeocitiesTheme } &`]: {
        height: "calc(100vh - 239px)",
        backgroundColor: "transparent"
    }
});

const SadFaceSpan = styled("span", {
    position: "absolute",
    top: "20%",
    left: "calc(50% - 60px)",
    fontSize: "200px",
    textAlign: "center",
    [`.${ yahooGeocitiesTheme } &`]: {
        top: "15%",
        backgroundColor: "transparent"
    }
});

const ErrorCodeHeading = styled("h1", {
    display: "inline-block",
    borderRight: "1px solid rgba(255,255,255,0.3)",
    margin: "0px 20px 0px 0px",
    padding: "10px 23px 10px 0px",
    fontSize: "24px",
    fontWeight: "bold",
    verticalAlign: "top",
    [`.${ lightTheme } &`]: {
        borderRight: "1px solid rgba(0,0,0,0.3)"
    }
});

const MessageWrapperDiv = styled("div", {
    display: "inline-block",
    textAlign: "left",
    lineHeight: "49px",
    height: "49px",
    verticalAlign: "middle"
});

const ErrorMessageHeading = styled("h2", {
    fontSize: "14px",
    fontWeight: "normal",
    lineHeight: "inherit",
    margin: "0px",
    padding: "0px"
});

export default function Custom404({ title: errorMessage = "Not Found", statusCode = 404, backLink = undefined }) {
    return (
        <>
            <ErrorDiv>
                <BackNavigation to="/" />
                <SadFaceSpan>:(</SadFaceSpan>
                <ErrorCodeHeading>{ statusCode }</ErrorCodeHeading>
                <MessageWrapperDiv>
                    <ErrorMessageHeading>{ errorMessage }</ErrorMessageHeading>
                </MessageWrapperDiv>
            </ErrorDiv>
        </>
    );
}
