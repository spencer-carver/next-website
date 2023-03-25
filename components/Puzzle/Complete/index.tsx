import { FunctionComponent } from "react";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";

const SolvedDiv = styled("div", {
    backgroundColor: "$secondary",
    position: "absolute",
    top: "55px",
    right: "5px", 
    padding: "4px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "12px",
    letterSpacing: "1px",
    color: "$onSecondary",
    borderRadius: "10px",
    boxShadow: "0 0 3px rgba(0,0,0,.3)",
    zIndex: "1",
    "@lg": {
        width: "300px",
        position: "fixed",
        top: "100px",
        right: "-80px",
        fontSize: "14px",
        lineHeight: "50px",
        transform: "rotate(45deg)",
        borderRadius: "0",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "$secondaryVariant"
    }
});

const PuzzleComplete: FunctionComponent<{ answer: string | null }> = ({ answer }) => {
    if (!answer) {
        return null;
    }

    return <SolvedDiv>{ answer }</SolvedDiv>;
};

export default PuzzleComplete;
