import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const UL = styled("ul", {
    margin: "0px",
    marginLeft: "-20px",
    "@lg": {
        margin: "20px"
    }
});

const LI = styled("li", {
    color: "$onBackground",
    textAlign: "left",
    fontSize: "20px",
    paddingBottom: "10px",
    listStyle: "none"
});

const SpeakerSpan = styled("span", {
    fontWeight: "bold",
    marginRight: "10px",
    color: "$secondary"
});

const P = styled("p", {
    fontWeight: "bold",
    color: "$primary",
    fontSize: "20px",
});

const SCENARIOS = [{
    map: "The Skeld",
    A: "I went east from the start and did my task in the center of the next room. If you had been with me you'd have seen it.",
    B: "I went south and into the Admin area. I spent way too much time trying to swipe my ID card before checking on the map.",
    C: "I went west to the Storage area, as I had to fill up my fuel can before heading to the Engine Room.",
    D: "I had the 'Download Data' task in the Cafeteria. I think I saw someone going east, but don't know if it was A."
}, {
    map: "MIRA HQ",
    E: "I was helping resolve the Comms Sabotage from Communications. When it was resolved I checked the door log and saw G had gone to the Office to help.",
    F: "I was in Reactor with H and didn't see them anymore, so I assume they went to help too.",
    G: "I got to Office about the same time as H and they fixed the sabatoge there.",
    H: "Yeah I came over to help fix the problem, and G got to the office right after me.",
}, {
    map: "Polus",
    I: "I immediately went south to the closest Decontamination to head for the Specimen Room.",
    J: "I went with K to the Med Bay so they could watch me scan.",
    K: "I went with J as I had a task in the Laboratory. They scanned.",
    L: "I headed west to Security, saw nothing, and started back towards the Office area."
}, {
    map: "The Airship",
    M: "I was doing the 'Download Data' task in the Cockpit.",
    N: "Weird, I was doing the 'Download Data' task too, but in the Vault.",
    O: "Ok one of you has to be lying, because I had 'Download Data' too in the Records room.",
    P: "Guys you're not going to believe this.... but I also had that task in Security!"
}, {
    map: "The Fungle",
    Q: "I was collecting vegetables from the Greenhouse and saw T heading up to The Cliff. I then went through the Meeting Room to the Kitchen and saw R.",
    R: "I was on the Beach collecting shells before heading to the Kitchen to crank the Genrator.",
    S: "I was heading from the Laboratory to the Dropship to complete my next task.",
    T: "I went to the Lookout and saw both R and Q with the binoculars on the Beach."
}];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-20">
            {
                SCENARIOS.map((scenario) => {
                    return (
                        <>
                            <P>{ scenario.map }</P>
                            <UL>
                                { Object.keys(scenario).map((key, index) => {
                                    if (index === 0) {
                                        return;
                                    }

                                    return <LI key={ index }><SpeakerSpan>Crewmate { key }:</SpeakerSpan>&quot;{ scenario[key] }&quot;</LI>
                                }) }
                            </UL>
                        </>
                    );
                })
            }
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;