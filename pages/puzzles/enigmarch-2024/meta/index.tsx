import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import useStorage from "../../../../utils/useStorage";
import { PUZZLES, PuzzleRounds } from "../../../../constants/Puzzle";
import { FinalAnswerComponent } from "..";

const PuzzleComponent: FunctionComponent = () => {
    const storage = useStorage("puzzle");
    const [ roundPuzzles ] = useState(Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === PuzzleRounds.ENIGMARCH2024 && !PUZZLES[puzzleId].isMeta));
    const [ intermediates, setIntermediates ] = useState(new Array(32));

    useEffect(() => {
        const puzzleAnswers = roundPuzzles.map((puzzleId: string) => storage.getItem<string>(puzzleId));
        puzzleAnswers.unshift(null);
        puzzleAnswers.push(storage.getItem<string>("enigmarch-2024"));

        setIntermediates(puzzleAnswers);
    }, [storage, roundPuzzles]);

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:meta">
            <div style={{ position: "relative", maxWidth: "740px", paddingLeft: "10px" }}>
                <FinalAnswerComponent intermediates={ intermediates } />
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
