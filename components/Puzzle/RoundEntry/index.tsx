import React, { useState, FunctionComponent, useEffect } from "react";
import Link from "../../Link";
import { NEWEST_PUZZLE, PuzzleDetails, PUZZLES } from "../../../constants/Puzzle";
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
    "@md": {
        left: "190px",
        right: "unset"
    },
    "@lg": {
        left: "240px"
    }
});

interface RoundEntryProps extends PuzzleDetails {
    puzzleId: string;
}

const RoundEntry: FunctionComponent<RoundEntryProps> = ({ puzzleId: roundId, title, isMeta, round }) => {
    const [ solved, setSolved ] = useState(null);
    const [ total, setTotal ] = useState(null);

    useEffect(() => {
        try {
            const total = Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === round && !PUZZLES[puzzleId].comingSoon).length;
            const solved = Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === round).reduce((acc: number, puzzleId: string) => {
                try {
                    return acc + (localStorage.getItem(puzzleId.replaceAll("/", ":")) ? 1 : 0);
                } catch (e) {
                    return acc;
                }
            }, 0);
            setSolved(solved);
            setTotal(total);
        } catch (e) {
            //do nothing
            console.error(e);
        }
    }, [roundId, round]);

    const ROUND_OF_NEWEST_PUZZLE = NEWEST_PUZZLE.split("/")[0];

    return (
        <li style={{ position: "relative" }}>
            { roundId === ROUND_OF_NEWEST_PUZZLE && <NewSpan>NEW</NewSpan> }
            <Link href={ `/puzzles/${ roundId }` }>{ isMeta ? <b>{title}</b>: title }</Link>
            { solved === total
                ? <AnswerSpan>{ solved }/{ total }</AnswerSpan>
                : <AnswerSpan css={{ "color": "$onBackground", "&:hover": { cursor: "unset" } }}>{ solved }/{ total }</AnswerSpan>
            }
        </li>
    );
}

export default RoundEntry;