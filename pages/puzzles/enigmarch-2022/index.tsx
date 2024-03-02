import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { PartialAnswerCheck, PuzzleAnswer } from "../../../components/Puzzle/AnswerCheck";
import Wordle from "../../../components/Puzzle/Wordle";
import Image from "../../../components/Image";
import { styled } from "../../../styles/stitches";
import { API_URL } from "../../../constants/ExternalUrls";
import useStorage, { migrateItem } from "../../../utils/useStorage";

const NAME = "enigmarch-2022";

interface PuzzleStepProps {
    step: number;
    completeStep: (step: number, value: string) => void;
    intermediate?: string;
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

const Text: (text: string, fontSize?: string) => FunctionComponent<PuzzleStepProps> = (text, fontSize) => function TextPuzzle({ step, completeStep, intermediate }) {
    return (
        <DailyPuzzleDiv>
            <TextBoxDiv><div style={{ ...(fontSize ? { fontSize }: {}) }}>{ text }</div></TextBoxDiv>
            { step !== 0 && <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediate?.split("|")[0] } /> }
        </DailyPuzzleDiv>
    );
};

const WordleGenerator: (encodedAnswer: string, existingData: string[][]) => FunctionComponent<PuzzleStepProps> = (encodedAnswer, existingData) => function WordlePuzzle({ step, completeStep, intermediate }) {
    async function submitAnswer(answer) {
        const answerResponse: PuzzleAnswer = await window.fetch(`${ API_URL }/api/puzzle/${ NAME }/submit`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ answer: `${ step }:${ answer }`, hintCount: 0 })
        }).then(response => response.json());
    
        if (answerResponse.intermediate) {
            completeStep(step, answerResponse.value);

            return true;
        }

        return false;
    }

    if (intermediate) {
        const Component =  Text("Wordle Solved! 🎉");

        return <Component step={ step } completeStep={ completeStep } intermediate={ intermediate } />
    }

    return <Wordle encodedAnswer={ encodedAnswer } existingData={ existingData } submitAnswer={ submitAnswer } />;
};

const Picture: (url: string) => FunctionComponent<PuzzleStepProps> = (url) => function PicturePuzzle({ step, completeStep, intermediate }) {
    return (
        <DailyPuzzleDiv>
            <Image src={ url } alt="Today&apos;s Image" width={ 300 } height={ 300 } />
            <PartialAnswerCheck puzzleName={ NAME } step={ step } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediate?.split("|")[0] } />
        </DailyPuzzleDiv>
    );
};

const STEP_TO_PUZZLE_TYPE: FunctionComponent<PuzzleStepProps>[] = [
    Text("Click a date to begin"),
    Picture("/puzzles/enigmarch-2022/day1.png"),
    Picture("/puzzles/enigmarch-2022/day2.jpg"),
    Text("Fjmbkbqoxyib ql fksbpqfdxqflk (11)"),
    Picture("/puzzles/enigmarch-2022/day4.jpg"),
    WordleGenerator("TVVSS1k=", [["R","E","L","A","X"], Array(5), Array(5), Array(5), Array(5), Array(5)]),
    Picture("/puzzles/enigmarch-2022/day6.gif"),
    Picture("/puzzles/enigmarch-2022/day7.jpg"),
    Picture("/puzzles/enigmarch-2022/day8.png"),
    Picture("/puzzles/enigmarch-2022/day9.png"),
    Picture("/puzzles/enigmarch-2022/day10.png"),
    Text("Wpgs id jcstghipcs, htt iwgdjvw (6)"),
    Picture("/puzzles/enigmarch-2022/day12.jpg"),
    Text("shyy bs fzbxr be fbbg (10)"),
    WordleGenerator("RlVaWlk=", [["", "", "", "", ""], Array(5), Array(5), Array(5), Array(5), Array(5)]),
    Picture("/puzzles/enigmarch-2022/day15.png"),
    Text("Swzyccslvo dy sxdobzbod (11)"),
    Picture("/puzzles/enigmarch-2022/day17.jpg"),
    Text("Jmgwvl wzlqvizg cvlmzabivlqvo (6)"),
    Picture("/puzzles/enigmarch-2022/day19.gif"),
    Picture("/puzzles/enigmarch-2022/day20.jpg"),
    Text("Yduj tk hwtxxbtwi (7)"),
    Picture("/puzzles/enigmarch-2022/day22.png"),
    WordleGenerator("RUVSSUU=",[["P", "A", "R", "T", "Y"], Array(5), Array(5), Array(5), Array(5), Array(5)]),
    Picture("/puzzles/enigmarch-2022/day24.jpg"),
    Picture("/puzzles/enigmarch-2022/day25.jpg"),
    Text("(adj.) open to two or more interpretations; or of uncertain nature or significance; or (often) intended to mislead."),
    Text("ΓΣΤ", "60px"),
    Picture("/puzzles/enigmarch-2022/day28.png"),
    Picture("/puzzles/enigmarch-2022/day29.png"),
    Picture("/puzzles/enigmarch-2022/day30.jpg"),
    Picture("/puzzles/enigmarch-2022/day31.png"),
];

const MARCH_2022 = [
    [0,0,1,2,3,4,5],
    [6,7,8,9,10,11,12],
    [13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26],
    [27,28,29,30,31,0,0]
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
            storage.removeItem("enigmarch-2022-intermediates");

            setIntermediates(Array(32));
        } catch (e) {
            // do nothing
        }
    }

    return (
        <WrapperDiv>
            <b>March 2022</b>
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
                        MARCH_2022.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            if (rowIndex === 4 && columnIndex === 6) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ fontSize: "9px", "&:hover": { cursor: "pointer", backgroundColor: "$primary", color: "$onPrimary" } }} onClick={ clearCalendar }>Clear Calendar</TableCell>
                                            }

                                            if (!cell) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } />
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {}),
                                                ...(activeDay === cell ? { backgroundColor: "$primary", color: "$onPrimary", "&:hover": undefined } : {}),
                                            };

                                            const intermediateValue = intermediates[cell]?.split("|").length > 1 ? intermediates[cell].split("|")[1] : intermediates[cell];

                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }><DayOfMonth>{cell}</DayOfMonth>{ intermediateValue }</TableCell>
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
            storage.setItem<string[]>("enigmarch-2022-intermediates", newIntermediates);
        } catch (e) {
            //do nothing
        }
    }, [storage, intermediates, setIntermediates]);

    useEffect(() => {
        try {
            migrateItem("enigmarch-calendar", "enigmarch-2022-intermediates");
            const storedIntermediates = storage.getItem<string[]>("enigmarch-2022-intermediates");

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
                    return <div key={ index } style={{ display: index === activeStep ? "inline-block" : "none" }}><Puzzle step={ index } completeStep={ completeStep } intermediate={ intermediates[index] } /></div>;
                }) }
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
