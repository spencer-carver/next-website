import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import useStorage from "../../../../utils/useStorage";
import { PUZZLES, PuzzleRounds } from "../../../../constants/Puzzle";
import { styled } from "../../../../styles/stitches";
import { PartialAnswerCheck } from "../../../../components/Puzzle/AnswerCheck";
import { Calendar, DayOfMonth, MARCH_2024, MARCH_2024_VALUES, TableCell, WrapperDiv, buttonCellStyles } from "..";

const NAME = "enigmarch-2024:meta";

const P = styled("p", {
    color: "$onBackground"
});

const CLUES = [
    "Click a date to begin.",
    "DOOR: What game's puzzle this month was most thematically appropriate to this prompt? (3 7 7)",
    "FALSE: This puzzle featured logic gates, and one other featured game allows creation of circits. (9)",
    "MUSICAL: Containing the musical number 'Herald of Darkness', this game made a big awards season run in 2023. (4 4 1)",
    "SHIFT: A variant of one of the 2 primary roles, the Shapeshifter can 'Shift' into another player to avoid detection. (5 2)",
    "SIGN: There are over 60 different signs in this entry to the roll-em-up franchise! (2 4 8)",
    "ROUND: This round-based battle royale game takes inspiration from TV shows such as 'Wipeout'. (4 4)",
    "WATCH: Keep your eye on the clock in this game, which requires millisecond-accurate pausing for most advanced strategies! (5 6 4 1)",
    "ROCK: The cultural impact of this game franchise caused many classic rock songs and artists to re-evauate their approach to music licensing. (6 4)",
    "THREAD: The plot threads of this game franchise have been spread through different times, albeit with common elements. However the most recent entries have all stabalized around one specific timeline. (4 2 4)",
    "ZERO: While part of this franchises title, the 'Zero' entry is actually the sixth. I also have a non-Enigmarch puzzle about it on my site! (6)",
    "BRIDGE: The level 'Radical Highway' from this game takes place on the Golden Gate Bridge. (5 9 1 6)",
    "SHIELD: What game franchise has an entrty with this prompt title? (7)",
    "WAVE: While entries in this 3D-platforming series have been varied, this game forgoes planetary exploration for some time at the beach enjoying the waves. (5 5 8)",
    "SPIRIT: The backronym-titled DLC for this game focuses on a spirit character's attempt to regain corporeal form. (7)",
    "3D: What game is the only VR game featured this month? (9 4 4)",
    "HAND: While originally shown needing to remove a finger for the iconic weapon, in later games technology improved without needing to do so. (9 5)",
    "ANCIENT: What starts as a humble quest for good sushi becomes a heroic quest to understand ancient technology and save the sea people in this game. (4 3 5)",
    "CLUB: What game would let you play a 'Flush House' of clubs? (7)",
    "ODD: Each personality core in this game is certainly a bit eccentric, but necessary to finish the game! (6 1)",
    "NEIGHBOR: The primary character you speak with in this game spends the entire time in a neighboring tower, and you never meet in person. (9)",
    "MIX: Waldos are used in this game to mix inputs and combine elements within reactors. (9)",
    "CLOUD: While not the game referenced this month, another game in this franchise features the titular characters repeatedly decending through the clouds to the surface from airborne dwellings. (3 6 2 5)",
    "NEITHER: The NXOR gate featured in this game is most likely to fulfil today's prompt. (4 2 4)",
    "POWER: A pre-war relic, the only variant available in this game requires training from the Brotherhood of Steel. (7 1)",
    "RAISE: The necronomnomicon is used in this game to raise a dire threat to the kingdom; the unbread. (10 1)",
    "CLUE: While not called clues explicitly, this game franchies features documents, relics, and caches which help uncover story points in the games. (4 6)",
    "RULE: The rules of time change in each level of this indie game, which alludes to the manhattan project. (5)",
    "COIN: One of the biggest digital competitors to this game leverages a 'Coin' to help offset the play/draw balance between players. (5 3 9)",
    "SURPRISE: This game spends the entire time trying to convince you the 'The Event' isn't a surprise party, when it clearly is. Isn't it? (5 9)",
    "BOOK: Today's prompt is 2/3 of the protaganist of this game's name! (8 8)",
    "SEQUEL: Some games change genres entirely. What game referenced this month changed from a tower defense to multiplayer third-person shooter? (6 2 7)"
];

const FinalAnswerComponent = ({ intermediates, activeDay, onClickDate, }) => {
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
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }>
                                                    <DayOfMonth>{cell}</DayOfMonth>{ intermediateValue || MARCH_2024_VALUES[rowIndex][columnIndex] }
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
    const [ roundPuzzles ] = useState(Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === PuzzleRounds.ENIGMARCH2024 && !PUZZLES[puzzleId].isMeta));
    const [ intermediates, setIntermediates ] = useState(new Array(32));
    const [ activeDay, setActiveDay ] = useState(0);

    useEffect(() => {
        const puzzleAnswers = roundPuzzles.map((puzzleId: string) => storage.getItem<string>(puzzleId));
        puzzleAnswers.unshift(null);
        puzzleAnswers.push(storage.getItem<string>("enigmarch-2024"));

        setIntermediates(puzzleAnswers);
    }, [storage, roundPuzzles]);

    const completeStep = (step, value) => {
        storage.setItem<string>(`enigmarch-2024:march-${ step }`, value);
        setIntermediates((interm) => interm.map((existingValue, index) => {
            if (index === step) {
                return value;
            }

            return existingValue;
        }));
    };

    return (
        <PuzzleWrapperComponent name={ NAME }>
            <div style={{ position: "relative", maxWidth: "740px", paddingLeft: "10px" }}>
                <FinalAnswerComponent intermediates={ intermediates } activeDay={ activeDay } onClickDate={ (date) => setActiveDay(date) } />
            </div>
            <P>But maybe you didn&apos;t find enough answers to work it out? Here&apos;s another chance! For each day there is a question below about a game or puzzle. Answer it to be given the extra letters needed to solve the meta! (NOTE: This will not reveal the actual answer of the day&apos;s puzzle)</P>
            <div style={{ marginTop: "50px" }}>
                <P>{ CLUES[activeDay] }</P>
                { activeDay !== 0 && <PartialAnswerCheck puzzleName={ NAME } step={ activeDay } completeStep={ completeStep } placeholderText="Today's Answer Here" partialAnswer={ intermediates[activeDay]?.split("|")[0] } /> }
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
