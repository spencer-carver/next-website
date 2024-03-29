import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
import Link from "../../Link";
import { NEWEST_PUZZLE, PuzzleDetails } from "../../../constants/Puzzle";
import { styled } from "../../../styles/stitches";
import { CSS } from "@stitches/react";
import useStorage from "../../../utils/useStorage";

const Row = styled("li", {
    position: "relative",
    fontSize: "14px",
    "@lg": {
        fontSize: "unset"
    }
});

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

const speedPuzzleMarker: CSS = {
    "&::before": {
        content: "⏱️",
        marginLeft: "-28px",
        marginRight: "5px"
    }
};

interface RowEntryProps extends PuzzleDetails {
    puzzleId: string;
    clearAnswer: Function;
    showComingSoon?: boolean;
}

const RowEntry: FunctionComponent<RowEntryProps> = ({ puzzleId, title, isMeta, timeLimit, comingSoon, solutionAvailable, clearAnswer, showComingSoon }) => {
    const storage = useStorage("puzzle");
    const [ puzzleAnswer, setPuzzleAnswer ] = useState(null);

    useEffect(() => {
        try {
            setPuzzleAnswer(storage.getItem(puzzleId));
        } catch (e) {
            //do nothing
            console.error(e);
        }
    }, [storage, puzzleId]);

    const clearPuzzleAnswer = useCallback((): void => {
        clearAnswer(puzzleId);
        clearAnswer(`${ puzzleId }-time`);
        setPuzzleAnswer(null);
    }, [clearAnswer, puzzleId]);

    if (comingSoon && !showComingSoon) {
        return;
    }

    return (
        <Row css={ timeLimit ? speedPuzzleMarker : {} }>
            { puzzleId === NEWEST_PUZZLE && <NewSpan>New</NewSpan> }
            { comingSoon && <NewSpan css={{ color: "$primary" }}>Coming Soon</NewSpan> }
            { solutionAvailable && !puzzleAnswer && <NewSpan css={ solutionOverrides }>Available</NewSpan> }
            { comingSoon && <span style={{ pointerEvents: "none" }}>{ isMeta ? <b>{title}</b>: title }</span> }
            { !comingSoon && <Link href={ `/puzzles/${ puzzleId.replaceAll(":", "/") }` }>{ isMeta ? <b>{title}</b>: title }</Link> }
            { puzzleAnswer ? (
                <AnswerSpan
                    role="button"
                    tabIndex={ 0 }
                    title="Clear Answer"
                    onKeyPress={ clearPuzzleAnswer }
                    onClick={ clearPuzzleAnswer }
                >
                    { puzzleAnswer.split("|")[0] }
                </AnswerSpan>
            ) : <AnswerSpan css={{ "color": "$onBackground", "&:hover": { cursor: "unset" } }}>???</AnswerSpan> }
        </Row>
    );
}

export default RowEntry;
