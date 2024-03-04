import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { PartialAnswerCheck } from "../../../components/Puzzle/AnswerCheck";
import Image from "../../../components/Image";
import { styled } from "../../../styles/stitches";
import useStorage from "../../../utils/useStorage";

const NAME = "enigmarch-2024";

interface PuzzleStepProps {
    step: number;
    completeStep: (step: number, value: string) => void;
    intermediate?: string;
}

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@xl": {
        display: "none"
    }
});

const DailyPuzzleDiv = styled("div", {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    color: "$onBackground",
    "@lg": {
        width: "600px"
    },
    "@xl": {
        width: "900px",
        marginLeft: "-68px"
    }
});

const TextBoxDiv = styled("div", {
    height: "300px",
    display: "flex",
    alignItems: "center",
    "& div": {
        width: "100%"
    }
});

const Text: (title: string, text: string, fontSize?: string) => FunctionComponent<PuzzleStepProps> = (title, text, fontSize) => function TextPuzzle({ step, completeStep, intermediate }) {
    return (
        <DailyPuzzleDiv>
            { title && <b>{ title }</b> }
            <TextBoxDiv>
                <div style={{ ...(fontSize ? { fontSize }: {}) }}>{ text }</div>
            </TextBoxDiv>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                { step !== 0 && text !== "???" && <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediate?.split("|")[0] } /> }
            </div>
        </DailyPuzzleDiv>
    );
};

const Picture: (title: string, description: string, url: string, width: number, height: number) => FunctionComponent<PuzzleStepProps> = (title, description, url, width, height) => function PicturePuzzle({ step, completeStep, intermediate }) {
    return (
        <DailyPuzzleDiv>
            { title && <b>{ title }</b> }
            { description && <div style={{ marginTop: "20px", marginBottom: "20px" }}>{ description }</div> }
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <Image src={ url } alt="Today&apos;s Image" width={ width } height={ height } />
            <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediate?.split("|")[0] } />
        </DailyPuzzleDiv>
    );
};

const Video: (title: string, description: string, url: string) => FunctionComponent<PuzzleStepProps> = (title, description, url) => function PicturePuzzle({ step, completeStep, intermediate }) {
    return (
        <DailyPuzzleDiv>
            { title && <b>{ title }</b> }
            { description && <div style={{ marginTop: "20px", marginBottom: "20px" }}>{ description }</div> }
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to see the video clearly!!!" }</WarningDiv>
            <video style={{ width: "100%", maxWidth: "600px" }} controls poster={ undefined }>
                <source src={ url } type="video/mp4" />
                <span style={{ margin: "10px auto" }}>
                    Your browser does not support HTML5 video. To view, download it <a href={ url }>here</a>.
                </span>
            </video>
            <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediate?.split("|")[0] } />
        </DailyPuzzleDiv>
    );
};

const STEP_TO_PUZZLE_TYPE: FunctionComponent<PuzzleStepProps>[] = [
    Text("", "Click a date to begin"),
    Picture("Day 1: Door", "The screendoor zombies aren't too smart, but they can take a beating!", "/puzzles/enigmarch-2024/plants-vs-zombies.png", 900, 450),
    Picture("Day 2: False", "Normally you would make it true, but not today.", "/puzzles/enigmarch-2024/make-it-true.png", 900, 840),
    Video("Day 3: Musical", "Do these notes even match the song? What could they mean?", "/puzzles/enigmarch-2024/guitar-hero.mp4"),
    Text("Day 4: ???", "Coming Soon!"),
    Text("Day 5: ???", "Coming Soon!"),
    Text("Day 6: ???", "Coming Soon!"),
    Text("Day 7: ???", "Coming Soon!"),
    Text("Day 8: ???", "Coming Soon!"),
    Text("Day 9: ???", "Coming Soon!"),
    Text("Day 10: ???", "Coming Soon!"),
    Text("Day 11: ???", "Coming Soon!"),
    Text("Day 12: ???", "Coming Soon!"),
    Text("Day 13: ???", "Coming Soon!"),
    Text("Day 14: ???", "Coming Soon!"),
    Text("Day 15: ???", "Coming Soon!"),
    Text("Day 16: ???", "Coming Soon!"),
    Text("Day 17: ???", "Coming Soon!"),
    Text("Day 18: ???", "Coming Soon!"),
    Text("Day 19: ???", "Coming Soon!"),
    Text("Day 20: ???", "Coming Soon!"),
    Text("Day 21: ???", "Coming Soon!"),
    Text("Day 22: ???", "Coming Soon!"),
    Text("Day 23: ???", "Coming Soon!"),
    Text("Day 24: ???", "Coming Soon!"),
    Text("Day 25: ???", "Coming Soon!"),
    Text("Day 26: ???", "Coming Soon!"),
    Text("Day 27: ???", "Coming Soon!"),
    Text("Day 28: ???", "Coming Soon!"),
    Text("Day 29: ???", "Coming Soon!"),
    Text("Day 30: ???", "Coming Soon!"),
    Text("Day 31: ???", "Coming Soon!")
];

const MARCH_2024 = [
    [0,0,0,0,0,1,2],
    [3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16],
    [17,18,19,20,21,22,23],
    [24,25,26,27,28,29,30],
    [31,0,0,0,0,0,0]
];
const MARCH_2024_VALUES = [
    ["","","","","","🚪","❌"],
    ["🎶","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""]
];

const WrapperDiv = styled("div", {
    color: "$onBackground",
    marginTop: "10px"
});

const Calendar = styled("table", {
    borderSpacing: "0",
    borderCollapse: "collapse",
    margin: "0px auto",
    width: "286px"
});

const TableCell = styled("td", {
    position: "relative",
    width: "40px",
    height: "40px",
    border: "1px solid $onBackground",
    textAlign: "center"
});

const DayOfMonth = styled("span", {
    position: "absolute",
    fontSize: "10px",
    top: "4px",
    left: "4px"
});

const buttonCellStyles: CSS = {
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "$surface06",
        color: "$onSurface"
    }
};

const FinalAnswerComponent = ({ intermediates, setIntermediates, activeDay, onClickDate, storage }) => {
    function clearCalendar() {
        try {
            storage.removeItem("enigmarch-2024-intermediates");

            setIntermediates(Array(32));
        } catch (e) {
            // do nothing
        }
    }

    return (
        <WrapperDiv>
            <b>March 2024</b>
            <Calendar>
                <thead>
                    <tr>
                        <TableCell>Sun</TableCell>
                        <TableCell>Mon</TableCell>
                        <TableCell>Tue</TableCell>
                        <TableCell>Wed</TableCell>
                        <TableCell>Thu</TableCell>
                        <TableCell>Fri</TableCell>
                        <TableCell>Sat</TableCell>
                    </tr>
                </thead>
                <tbody>
                    {
                        MARCH_2024.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            if (rowIndex === 5 && columnIndex === 6) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ fontSize: "9px", "&:hover": { cursor: "pointer", backgroundColor: "$surface06", color: "$onSurface" } }} onClick={ clearCalendar }>Clear Calendar</TableCell>
                                            }

                                            if (!cell) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } />
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {}),
                                                ...(activeDay === cell ? { backgroundColor: "$primary", color: "$onPrimary", "&:hover": undefined } : {})
                                            };

                                            const intermediateValue = intermediates[cell]?.split("|").length > 1 ? intermediates[cell].split("|")[1] : intermediates[cell];

                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }>
                                                    <DayOfMonth>{cell}</DayOfMonth>
                                                    {intermediateValue || MARCH_2024_VALUES[rowIndex][columnIndex]}
                                                </TableCell>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Calendar>
        </WrapperDiv>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    const storage = useStorage("puzzle");
    const [activeStep, setActiveStep] = useState(0);
    const [intermediates, setIntermediates] = useState(new Array(32));
    const completeStep = useCallback((step: number, value: string) => {
        const newIntermediates = intermediates.slice();
        newIntermediates[step] = value;
        setIntermediates(newIntermediates);

        try {
            storage.setItem<string[]>("enigmarch-2024-intermediates", newIntermediates);
        } catch (e) {
            //do nothing
        }
    }, [storage, intermediates, setIntermediates]);

    useEffect(() => {
        try {
            const storedIntermediates = storage.getItem<string[]>("enigmarch-2024-intermediates");

            if (!storedIntermediates) {
                return;
            }

            setIntermediates(storedIntermediates);
        } catch (e) {
            //do nothing
        }
    }, [storage]);

    return (
        <PuzzleWrapperComponent name={ NAME }>
            <FinalAnswerComponent storage={ storage } intermediates={ intermediates } activeDay={ activeStep } onClickDate={ setActiveStep } setIntermediates={ setIntermediates } />
            <div style={{ margin: "10px auto" }}>
                { STEP_TO_PUZZLE_TYPE.map((Puzzle, index) => {
                    return (
                        <div key={ index } style={{ display: index === activeStep ? "inline-block" : "none" }}>
                            <Puzzle step={ index } completeStep={ completeStep } intermediate={ intermediates[index] } />
                        </div>
                    );
                }) }
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
