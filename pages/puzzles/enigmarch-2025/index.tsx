import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import useStorage from "../../../utils/useStorage";
import { styled } from "../../../styles/stitches";
import { PartialAnswerCheck } from "../../../components/Puzzle/AnswerCheck";
import { Calendar, DayOfMonth, TableCell, WrapperDiv, buttonCellStyles } from "../enigmarch-2024";
import Link from "../../../components/Link";

const NAME = "enigmarch-2025";

const LATEST_PUZZLE_MADE = 18;

const MARCH_2025 = [
    [0,0,0,0,0,0,1],
    [2,3,4,5,6,7,8],
    [9,10,11,12,13,14,15],
    [16,17,18,19,20,21,22],
    [23,24,25,26,27,28,29],
    [30,31,0,0,0,0,0]
];

const MARCH_2025_VALUES = [
    ["","","","","","","🌀"],
    ["🐴","🦚","🐂","🐆","🦉","🐱","🎖️"],
    ["🏖️","🦡","👷","🐻","🤠","🃏","🐮"],
    ["🤵","☘️","🐃","","","",""],
    ["","","","","","",""],
    ["","","","","","",""]
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
    ["PAUSE", "https://spencer-carver.github.io/diagram/enigmarch-2025?day=18"]
];

const P = styled("p", {
    color: "$onBackground"
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

                                            if (cell > LATEST_PUZZLE_MADE) {
                                                return (
                                                    <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` }>
                                                        <DayOfMonth>{cell}</DayOfMonth>
                                                    </TableCell>
                                                );
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {}),
                                                ...(activeDay === cell ? { backgroundColor: "$primary", color: "$onPrimary", "&:hover": undefined } : {}),
                                            };

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
            <P>Each day a puzzle will be created at some external location! If you solve it, make sure to come back and enter the final answer for the meta puzzle!</P>
            <div style={{ marginTop: "50px" }}>
                { activeDay !== 0 && <Link href={ PUZZLE_LINKS[activeDay - 1][1] }>March { activeDay }: { PUZZLE_LINKS[activeDay - 1][0] }</Link> }
            </div>
            <div style={{ marginTop: "50px" }}>
                { activeDay !== 0 && <PartialAnswerCheck puzzleName={ NAME } step={ activeDay } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediates[activeDay]?.split("|")[0] } /> }
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
