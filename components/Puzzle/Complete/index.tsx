import { FunctionComponent } from "react";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";

const SolvedDiv = styled("div", {
    backgroundColor: "$secondary",
    position: "absolute",
    top: "5px",
    right: "5px", 
    padding: "4px",
    textAlign: "center",
    fontSize: "12px",
    letterSpacing: "1px",
    color: "$onSecondary",
    borderRadius: "10px",
    boxShadow: "0 0 3px rgba(0,0,0,.3)",
    zIndex: "1",
    "@lg": {
        width: "260px",
        position: "fixed",
        top: "95px",
        right: "-60px",
        fontSize: "16px",
        lineHeight: "50px",
        letterSpacing: "1px",
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
