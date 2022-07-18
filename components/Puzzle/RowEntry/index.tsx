import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
import Link from "../../Link";
import { NEWEST_PUZZLE, PuzzleDetails } from "../../../constants/Puzzle";
import { styled } from "../../../styles/stitches";

const NewSpan = styled("span", {
    position: "absolute",
    left: "0px",
    top: "-15px",
    fontSize: "10px",
    fontWeight: "bold",
    color: "$error"
});

const AnswerSpan = styled("span", {
    position: "absolute",
    right: "-10px",
    fontWeight: "bold",
    color: "$secondary",
    "&:hover": {
        cursor: "pointer"
    },
    "@md": {
        left: "190px",
        right: "unset"
    },
    "@lg": {
        left: "240px"
    }
});

interface RowEntryProps extends PuzzleDetails {
    puzzleId: string;
    clearAnswer: Function;
}

const RowEntry: FunctionComponent<RowEntryProps> = ({ puzzleId, title, isMeta, clearAnswer }) => {
    const [ puzzleAnswer, setPuzzleAnswer ] = useState(null);

    useEffect(() => {
        try {
            setPuzzleAnswer(localStorage.getItem(puzzleId.replaceAll("/", ":")));
        } catch (e) {
            //do nothing
            console.error(e);
        }
    }, [puzzleId]);

    const clearPuzzleAnswer = useCallback((): void => {
        clearAnswer(puzzleId);
        setPuzzleAnswer(null);
    }, [clearAnswer, puzzleId]);

    return (
        <li style={{ position: "relative" }}>
            { puzzleId === NEWEST_PUZZLE && <NewSpan>NEW</NewSpan> }
            <Link href={ `/puzzles/${ puzzleId }` }>{ isMeta ? <b>{title}</b>: title }</Link>
            { puzzleAnswer ? (
                <AnswerSpan
                    role="button"
                    tabIndex={ 0 }
                    title="Clear Answer"
                    onKeyPress={ clearPuzzleAnswer }
                    onClick={ clearPuzzleAnswer }
                >
                    { puzzleAnswer }
                </AnswerSpan>
            ) : <AnswerSpan css={{ "color": "$onBackground", "&:hover": { cursor: "unset" } }}>???</AnswerSpan> }
        </li>
    );
}

export default RowEntry;
