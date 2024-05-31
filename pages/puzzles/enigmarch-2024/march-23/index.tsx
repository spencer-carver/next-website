import React, { FunctionComponent, useCallback, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import Notification from "../../../../components/Notification";
import { styled } from "../../../../styles/stitches";

const FILE_BASE = "/puzzles/enigmarch-2024/the-stanley-parable";

const P = styled("p", {
    color: "$onBackground",
    textAlign: "left"
});

const Button = styled("button", {
    width: "100px",
    height: "100px",
    margin: "10px"
});

const TRANSCRIPTS = {
    "opening-0": "Stanley awoke in a room he didn't remember being in.",
    "opening-1": "Suddenly, Stanley was back in the first room.",
    "doors-0": "In front of him were 3 doors.",
    "doors-1": "In front of him was a swimming pool, filled with a sparkling... Just kidding. In front of him stood 3 doors.",
    "correction-left": "Wait... No... I mean.... Of course Stanley went left.",
    "correction-middle": "I was just messing with you, of course Stanley would go through the middle door.",
    "correction-right": "Right? Right... Stanley went right.",
    "left-0": "Stanley went through the door on the left.",
    "left-1": "The door on the left called to Stanley for some reason, and so he chose to go through it.",
    "left-2": "Stanley was getting some weird vibes from the other two doors, and so decided to go through the left door.",
    "middle-0": "The middle door certainly looked inviting, at least to Stanley, so he decided to go through it.",
    "middle-1": "Stanley knew where he wanted to go, and to get there, the middle door made the most sense.",
    "middle-2": "Stanley confidently walked forward and opened the middle door.",
    "right-0": "Of course! The right door. 'It was right for a reason' Stanley thought as he went through it.",
    "right-1": "Stanley had a weird feeling, like he had been here before and that two of the doors weren't going to help. Therefore, he went through the right door.",
    "right-2": "Stanley went through the door on the right.",
    "any": "Because Stanley made the correct choice, he was confident that any door would take him somewhere he wanted to go.",
    "end-0": "The room was completely empty? How could the room be empty? Stanley actually followed my instructions, and I wouldn't lead him astray.",
    "end-1": "Stanley entered the room and saw a large, brown painting with the letter 'R' on it. Nothing else was in the room.",
    "end-2": "On the wall opposite Stanley, a dull gray painting with only the letter 'E'. Stanley could do nothing else but stare at it.",
    "end-3": "Upon entering the room, Stanley saw only a blackend portrait, perhaps containing the letter 'S', but everything was too dark to tell clearly.",
    "end-4": "A green painting of a lowercase 'L'? No no, it's a capital 'I'. The room was otherwise empty.",
    "end-5": "A black portrait with the letter 'S'. Had Stanley seen this somewhere before? No, this was definitely different.",
    "end-6": "A brilliant yellow background proudly displaying the letter, 'T'. Why anyone would commission such a painting was beyond Stanley, and to be honest I don't quite understand myself.",
    "end-7": "A murky brown painting with a large, centered 'O'. Is this a trend now? Dark backgrounds with a single letter?",
    "end-8": "Upon entering the room, Stanley saw a vibrant green portrait containing the letter 'R'. Stanley was transfixed. 'This is Art!' He proclaimed to the empty room."
};

function getNextDeterminedChoice(pathChoices, choice) {
    if (pathChoices.length === 1) {
        return 1;
    }

    if (pathChoices.length === 2 && choice === 0) {
        return 2;
    }

    if (pathChoices.length === 2 && choice === 2) {
        return 0;
    }

    if (pathChoices.length === 3 && pathChoices[2] === 0 && choice === 0) {
        return 0;
    }

    if (pathChoices.length === 3 && pathChoices[2] === 0 && choice === 1) {
        return 1;
    }

    if (pathChoices.length === 3 && pathChoices[2] === 2 && choice === 1) {
        return 2;
    }

    if (pathChoices.length === 3 && pathChoices[2] === 2 && choice === 2) {
        return 0;
    }

    return -1;
}

function chooseAudioFile(pathChoices, determinedChoice, choice): [string, string | null, string | null, number] {
    const nextDeterminedChoice = getNextDeterminedChoice(pathChoices, choice);
    const determinedDoor = ["left", "middle", "right"][nextDeterminedChoice];
    const randomTrack = Math.floor(Math.random() * 3);

    if (pathChoices.length === 1) {
        return [
            `opening-${ pathChoices[0] === -1 ? 0 : 1 }`,
            "doors-0",
            `${ determinedDoor }-${ randomTrack }`,
            nextDeterminedChoice
        ];
    }

    if (pathChoices.length === 4 && (determinedChoice === -1 || determinedChoice === choice)) {
        return [
            "end-0",
            null,
            null,
            -1
        ];
    }

    if (pathChoices.length == 4) {
        let ending = 0;

        if (pathChoices[2] === 0 && pathChoices[3] === 0 && choice === 1) {
            ending = 1;
        } else if (pathChoices[2] === 0 && pathChoices[3] === 0 && choice === 2) {
            ending = 2;
        } else if (pathChoices[2] === 0 && pathChoices[3] === 1 && choice === 0) {
            ending = 3;
        } else if (pathChoices[2] === 0 && pathChoices[3] === 1 && choice === 2) {
            ending = 4;
        } else if (pathChoices[2] === 2 && pathChoices[3] === 1 && choice === 0) {
            ending = 5;
        } else if (pathChoices[2] === 2 && pathChoices[3] === 1 && choice === 1) {
            ending = 6;
        } else if (pathChoices[2] === 2 && pathChoices[3] === 2 && choice === 1) {
            ending = 7;
        } else if (pathChoices[2] === 2 && pathChoices[3] === 2 && choice === 2) {
            ending = 8;
        }

        return [
            `end-${ ending }`,
            null,
            null,
            -1
        ];
    }

    const doorNumber = (Math.floor(Math.random() * 20) - 18) < 0 ? 0 : 1;

    if (determinedChoice === -1 || determinedChoice === choice) {
        return [
            "any",
            `doors-${ doorNumber }`,
            null,
            -1
        ];
    }

    return [
        `correction-${ ["left", "middle", "right"][choice] }`,
        `doors-${ doorNumber }`,
        `${ determinedDoor }-${ randomTrack }`,
        nextDeterminedChoice
    ];
}

async function playAudioFile(fileName): Promise<Event | void> {
    return new Promise((resolve) => {
        if (!fileName) {
            resolve();

            return;
        }

        const audio = new Audio(`${ FILE_BASE }/${ fileName }.mp3`);
        audio.volume = 0.3;
        audio.loop = false;
        audio.onended = resolve;

        audio.play();
    });
}

const PuzzleComponent: FunctionComponent = () => {
    const [pathChoices, setPathChoices] = useState([-1]);
    const [determinedChoice, setDeterminedChoice] = useState(1);
    const [pastChoices, setPastChoices] = useState<string[][]>([]);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);

    const advanceLevel = (e) => {
        const choice = Number.parseInt(e.target.value);

        if (choice === 3) {
            const [choiceFileName, intermediateFileName, nextFileName, nextChoice] = chooseAudioFile([0], 1, -1);
            setIsAudioPlaying(true);
            playAudioFile(choiceFileName).then(() => {
                playAudioFile(intermediateFileName)
                    .then(() => {
                        playAudioFile(nextFileName).then(() => setIsAudioPlaying(false));
                        nextFileName && setPastChoices((pc) => [...pc, [false, TRANSCRIPTS[nextFileName]]]);
                    });
                intermediateFileName && setPastChoices((pc) => [...pc, [false, TRANSCRIPTS[intermediateFileName]]]);
            });
            setPathChoices([0,0]);
            setPastChoices([[false, TRANSCRIPTS[choiceFileName]]]);
            setDeterminedChoice(nextChoice);

            return;
        }

        const [choiceFileName, intermediateFileName, nextFileName, nextChoice] = chooseAudioFile(pathChoices, determinedChoice, choice);

        setIsAudioPlaying(true);
        playAudioFile(choiceFileName).then(() => {
            playAudioFile(intermediateFileName)
                .then(() => {
                    playAudioFile(nextFileName).then(() => setIsAudioPlaying(false));
                    nextFileName && setPastChoices((pc) => [...pc, [false, TRANSCRIPTS[nextFileName]]]);
                });
            intermediateFileName && setPastChoices((pc) => [...pc, [false, TRANSCRIPTS[intermediateFileName]]]);
        });

        setPathChoices([...pathChoices, choice]);
        setDeterminedChoice(nextChoice);
        setPastChoices([...pastChoices, [pathChoices.length > 1, TRANSCRIPTS[choiceFileName]]]);
    };

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-23">
            <Notification css={{ marginBottom: "10px" }}>
                <P>Erattum (5/30/24): Three endings had an incorrrect value in the initial puzzle. It has been corrected.</P>
            </Notification>
            <div style={{ minHeight: "300px" }}>
                { pastChoices.map(([isChoice, transcript], index) => <P key={ index } css={ isChoice ? { color: "$primary" } : {} }>{ transcript }</P>) }
            </div>
            { (pathChoices.length === 1 && pathChoices[0] === -1) && <Button value={ 0 } onClick={ advanceLevel }>Begin</Button> }
            { ((pathChoices.length > 1 || pathChoices[0] !== -1) && pathChoices.length < 5) && (
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <Button value={ 0 } onClick={ advanceLevel } disabled={ isAudioPlaying }>Go through the Left door</Button>
                    <Button value={ 1 } onClick={ advanceLevel } disabled={ isAudioPlaying }>Go through the Middle door</Button>
                    <Button value={ 2 } onClick={ advanceLevel } disabled={ isAudioPlaying }>Go through the Right door</Button>
                </div>
            ) }
            { (pathChoices.length > 4) && <Button value={ 3 } onClick={ advanceLevel } disabled={ isAudioPlaying }>Restart</Button> }
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
