import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import useStorage from "../../../utils/useStorage";
import { styled } from "../../../styles/stitches";
import { PartialAnswerCheck } from "../../../components/Puzzle/AnswerCheck";
import { Calendar, DayOfMonth, TableCell, WrapperDiv, buttonCellStyles } from "../enigmarch-2024";
import Link from "../../../components/Link";

const NAME = "enigmarch-2025";

const META_VALUE = 32;

const MARCH_2025 = [
    [0,0,0,0,0,0,1],
    [2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15],
    [16,17,18,19,20,21,22],
    [23,24,25,26,27,28,29],
    [30,31,0,0,0,0,32]
];

const MARCH_2025_VALUES = [
    ["","","","","","","🌀"],
    ["🐴","🦚","🐂","🐆","🦉","🐱","🎖️"],
    ["🏖️","🦡","👷","🐻","🤠","🃏","🐮"],
    ["🤵","☘️","🐃","🚂","🤐","🐇","✈️"],
    ["🦆","🐺","🐎","🌽","🦌","👿","🐻"],
    ["🐦","🧥","","","","",""]
];

const PUZZLE_LINKS = [
    ["FLOW", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=1"],
    ["STAFF", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=2"],
    ["PSYCHIC", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=3"],
    ["HEART", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=4"],
    ["TRAP", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=5"],
    ["TURN", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=6"],
    ["LINK", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=7"],
    ["QUARTER", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=8"],
    ["SHIP", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=9"],
    ["HOLLOW", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=10"],
    ["HOUSE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=11"],
    ["FLAG", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=12"],
    ["POINT", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=13"],
    ["JOKER", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=14"],
    ["STAR", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=15"],
    ["BOW", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=16"],
    ["LUCKY", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=17"],
    ["PAUSE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=18"],
    ["MACHINE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=19"],
    ["CASE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=20"],
    ["COMBINE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=21"],
    ["BOARD", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=22"],
    ["RING", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=23"],
    ["SEARCH", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=24"],
    ["RANDOM", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=25"],
    ["PLAY", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=26"],
    ["LOOP", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=27"],
    ["DRAW", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=28"],
    ["COMPASS", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=29"],
    ["ROUTE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=30"],
    ["PUZZLE", "https://crosshare.org/crosswords/SfftQcBd6SCPYWJCgMt4/enigmarch-2025-day-31"]
];

const P = styled("p", {
    color: "$onBackground"
});

const Note = styled("div", {
    backgroundColor: "#E4D6A0",
    padding: "5px",
    color: "black"
});

const StackedLetters = styled("div", {
    display: "inline-flex",
    flexDirection: "column"
});

const UnderlinedLetter = styled("div", {
    display: "inline-block",
    width: "32px",
    paddingBottom: "1px",
    borderBottom: "1px solid black",
    margin: "10px 4px 0 0"
});

const BottomLetter = styled("div", {
    display: "inline-block",
    width: "32px"
});

const FinalAnswerComponent = ({ intermediates, activeDay, onClickDate, }) => {
    return (
        <WrapperDiv>
            <b>March 2025</b>
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
                        MARCH_2025.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            if (!cell) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } />
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {}),
                                                ...(activeDay === cell ? { backgroundColor: "$primary", color: "$onPrimary", "&:hover": undefined } : {}),
                                            };

                                            if (cell === META_VALUE) {
                                                return (
                                                    <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }>
                                                        <DayOfMonth>META</DayOfMonth>
                                                    </TableCell>
                                                );
                                            }

                                            const intermediateValue = intermediates[cell]?.split("|").length > 1 ? intermediates[cell].split("|")[1] : intermediates[cell];

                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }>
                                                    <DayOfMonth>{cell}</DayOfMonth>{ intermediateValue ? MARCH_2025_VALUES[rowIndex][columnIndex] : "" }
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

const MetaPrompt = () => {
    return (
        <>
            <P>
                While many men go bonkers for basketball during this month, I instead focus on my birthday!
                That isn&apos;t to say the two events are unrelated though, as I&apos;ve asked a baker to build me a bracket of desserts to see how I&apos;ll celebrate!
                Frusturatingly, they sent over the following note in place of the winning treat!
            </P>
            <Note>
                I was inspired by your idea from last year, and wanted to make this year special! Find each position occupied in both cases, and take their difference to seed the blanks below.
                <div>
                    <StackedLetters><UnderlinedLetter>L</UnderlinedLetter><BottomLetter>&nbsp;</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>&nbsp;</UnderlinedLetter><BottomLetter>S</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>V</UnderlinedLetter><BottomLetter>&nbsp;</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>&nbsp;</UnderlinedLetter><BottomLetter>MW</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>&nbsp;</UnderlinedLetter><BottomLetter>E</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>&nbsp;</UnderlinedLetter><BottomLetter>MW</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>&nbsp;</UnderlinedLetter><BottomLetter>E</BottomLetter></StackedLetters>
                    <StackedLetters><UnderlinedLetter>&nbsp;</UnderlinedLetter><BottomLetter>MW</BottomLetter></StackedLetters>
                </div>
            </Note>
        </>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    const storage = useStorage("puzzle");
    const [ intermediates, setIntermediates ] = useState(new Array(32));
    const [ activeDay, setActiveDay ] = useState(0);

    useEffect(() => {
        try {
            const storedIntermediates = storage.getItem<string[]>("enigmarch-2025-intermediates");

            if (!storedIntermediates) {
                return;
            }

            setIntermediates(storedIntermediates);
        } catch (e) {
            //do nothing
        }
    }, [storage]);

    const completeStep = useCallback((step: number, value: string) => {
        const newIntermediates = intermediates.slice();
        newIntermediates[step] = value;
        setIntermediates(newIntermediates);

        try {
            storage.setItem<string[]>("enigmarch-2025-intermediates", newIntermediates);
        } catch (e) {
            //do nothing
        }
    }, [storage, intermediates, setIntermediates]);

    return (
        <PuzzleWrapperComponent name={ NAME }>
            <div style={{ position: "relative", maxWidth: "740px", paddingLeft: "10px" }}>
                <FinalAnswerComponent intermediates={ intermediates } activeDay={ activeDay } onClickDate={ (date) => setActiveDay(date) } />
            </div>
            { activeDay !== META_VALUE && <P>Each day a puzzle will be created at some external location! If you solve it, make sure to come back and enter the final answer for the meta puzzle!</P> }
            <div style={{ marginTop: "50px" }}>
                { (activeDay !== 0 && activeDay !== META_VALUE) && <Link href={ PUZZLE_LINKS[activeDay - 1][1] }>March { activeDay }: { PUZZLE_LINKS[activeDay - 1][0] }</Link> }
                { activeDay === META_VALUE && <MetaPrompt />}
            </div>
            <div style={{ marginTop: "50px" }}>
                { (activeDay !== 0 && activeDay !== META_VALUE) && <PartialAnswerCheck puzzleName={ NAME } step={ activeDay } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediates[activeDay]?.split("|")[0] } /> }
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
