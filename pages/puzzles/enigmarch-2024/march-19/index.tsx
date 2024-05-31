import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import Notification from "../../../../components/Notification";
import { styled } from "../../../../styles/stitches";

const UL = styled("ul", {
    margin: "20px 0px",
    marginLeft: "-20px",
    "@lg": {
        margin: "60px 20px"
    }
});

const LI = styled("li", {
    color: "$onBackground",
    textAlign: "left",
    fontSize: "20px",
    paddingBottom: "10px",
    listStyle: "none"
});

const ClueSpan = styled("span", {
    display: "inline-block",
    wordWrap: "normal",
    maxWidth: "120px",
    fontSize: "16px",
    "@lg": {
        maxWidth: "500px"
    }
});

const P = styled("p", {
    color: "$onBackground",
    fontSize: "20px",
});

const P2 = styled("p", {
    color: "$onBackground",
    margin: "0",
    display: "block",
    marginBottom: "5px",
    paddingLeft: "5px",
    textAlign: "left"
});

const CLUES = [
    ["Fact", "True", "False"],
    ["Holds the record for most disliked YouTube video for a video game trailer", "J", "S"],
    ["Is the last World War II era Call of Duty game", "O", "L"],
    ["Will be the 2024 release for the franchise", "C", "A"],
    ["Contains the controversial level 'No Russian'", "P", "W"],
    ["Has more of the 'Standalone' category releases than the even numbered titles", "Y", "R"],
];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-19">
            <Notification css={{ marginBottom: "10px" }}>
                <P2>Erattum (5/30/24): The final hint has been clarified to avoid confusion with certain references being updated after this puzzle was released.</P2>
            </Notification>
            <UL>
                { CLUES.map((clue, index) => (
                    <LI key={ index } css={ index === 0 ? { fontWeight: "bold", textDecoration: "underline" } : {} }>
                        <ClueSpan>{ clue[0] }</ClueSpan>
                        <span style={{ float: "right" }}>
                            <span style={{ display: "inline-block", width: "50px", textAlign: "center" }}>{ clue[1] }</span>
                            <span style={{ display: "inline-block", width: "50px", textAlign: "center" }}>{ clue[2] }</span>
                        </span>
                    </LI>
                )) }
            </UL>
            <P>Then use your result with the number of odd entries developed by Treyarch as of March 2024 and a method attributed to a character from a cancelled Vicarious Visions entry to the franchise!</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;