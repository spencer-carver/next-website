import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
import Link from "../../Link";
import { NEWEST_PUZZLE, PuzzleDetails } from "../../../constants/Puzzle";
import { styled } from "../../../styles/stitches";
import { CSS } from "@stitches/react";

const NewSpan = styled("span", {
    position: "absolute",
    left: "0px",
    top: "-15px",
    fontSize: "10px",
    fontWeight: "bold",
    color: "$error",
    textTransform: "uppercase",
    pointerEvents: "none"
});

const solutionOverrides: CSS = {
    color: "$secondary",
    left: "unset",
    right: "-10px",
    "@md": {
        left: "190px",
        right: "unset"
    },
    "@lg": {
        left: "240px"
    }
};

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

const RowEntry: FunctionComponent<RowEntryProps> = ({ puzzleId, title, isMeta, comingSoon, solutionAvailable, clearAnswer }) => {
    const [ puzzleAnswer, setPuzzleAnswer ] = useState(null);

    useEffect(() => {
        try {
            setPuzzleAnswer(localStorage.getItem(puzzleId));
        } catch (e) {
            //do nothing
            console.error(e);
        }
    }, [puzzleId]);

    const clearPuzzleAnswer = useCallback((): void => {
        clearAnswer(puzzleId);
        setPuzzleAnswer(null);
    }, [clearAnswer, puzzleId]);

    if (comingSoon) {
        return;
    }

    return (
        <li style={{ position: "relative" }}>
            { puzzleId === NEWEST_PUZZLE && <NewSpan>New</NewSpan> }
            { solutionAvailable && !puzzleAnswer && <NewSpan css={ solutionOverrides }>Available</NewSpan> }
            <Link href={ `/puzzles/${ puzzleId.replaceAll(":", "/") }` }>{ isMeta ? <b>{title}</b>: title }</Link>
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
