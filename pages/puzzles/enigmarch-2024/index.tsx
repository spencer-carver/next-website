import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { PartialAnswerCheck, PuzzleAnswer } from "../../../components/Puzzle/AnswerCheck";
//import Image from "../../../components/Image";
import { styled } from "../../../styles/stitches";
//import { API_URL } from "../../../constants/ExternalUrls";
import useStorage from "../../../utils/useStorage";

const NAME = "enigmarch-2024";

interface PuzzleStepProps {
    step: number;
    completeStep: (step: number, value: string) => void;
}

const DailyPuzzleDiv = styled("div", {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    color: "$onBackground"
});

const TextBoxDiv = styled("div", {
    height: "300px",
    display: "flex",
    alignItems: "center",
    "& div": {
        width: "100%"
    }
});

const Text: (title: string, text: string, fontSize?: string) => FunctionComponent<PuzzleStepProps> = (title, text, fontSize) => function TextPuzzle({ step, completeStep }) {
    return (
        <DailyPuzzleDiv>
            { title && <div style={{ ...(fontSize ? { fontSize }: {}) }}>{ title }</div> }
            <TextBoxDiv>
                <div style={{ ...(fontSize ? { fontSize }: {}) }}>{ text }</div>
            </TextBoxDiv>
            { step !== 0 && text !== "???" && <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" /> }
        </DailyPuzzleDiv>
    );
};

/*
const Picture: (url: string) => FunctionComponent<PuzzleStepProps> = (url) => function PicturePuzzle({ step, completeStep }) {
    return (
        <DailyPuzzleDiv>
            <Image src={ url } alt="Today&apos;s Image" width={ 300 } height={ 300 } />
            <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" />
        </DailyPuzzleDiv>
    );
};
*/

const STEP_TO_PUZZLE_TYPE: FunctionComponent<PuzzleStepProps>[] = [
    Text("", "Click a date to begin"),
    Text("Day 1: Door", "Coming Soon!"),
    Text("Day 2: ???", "Coming Soon!"),
    Text("Day 3: ???", "Coming Soon!"),
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
    ["","","","","","🚪",""],
    ["","","","","","",""],
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
        backgroundColor: "$surface02",
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
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ fontSize: "9px", "&:hover": { cursor: "pointer" } }} onClick={ clearCalendar }>Clear Calendar</TableCell>
                                            }

                                            if (!cell) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } />
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(activeDay === cell ? { backgroundColor: "$surface02", color: "$onSurface" } : {}),
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {})
                                            };

                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }>
                                                    <DayOfMonth>{cell}</DayOfMonth>
                                                    {intermediates[cell] || MARCH_2024_VALUES[rowIndex][columnIndex]}
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
                    return <div key={ index } style={{ display: index === activeStep ? "inline-block" : "none" }}><Puzzle step={ index } completeStep={ completeStep } /></div>;
                }) }
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
