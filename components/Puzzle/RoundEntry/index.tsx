import React, { useState, FunctionComponent, useEffect } from "react";
import Link from "../../Link";
import { NEWEST_PUZZLE, ROUNDS, PUZZLES, RoundDetails } from "../../../constants/Puzzle";
import { styled } from "../../../styles/stitches";
import useStorage from "../../../utils/useStorage";

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

interface RoundEntryProps {
    round: RoundDetails;
}

const RoundEntry: FunctionComponent<RoundEntryProps> = ({ round }) => {
    const storage = useStorage("puzzle");
    const [ solved, setSolved ] = useState(null);
    const [ total, setTotal ] = useState(null);

    useEffect(() => {
        try {
            const total = Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === round.id && !PUZZLES[puzzleId].comingSoon).length;
            const solved = Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === round.id).reduce((acc: number, puzzleId: string) => {
                try {
                    return acc + (storage.getItem<string>(puzzleId) ? 1 : 0);
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
    }, [storage, round]);

    const ROUND_OF_NEWEST_PUZZLE = NEWEST_PUZZLE.split(":")[0];

    return (
        <li style={{ position: "relative" }}>
            { round.id === ROUND_OF_NEWEST_PUZZLE && <NewSpan>New</NewSpan> }
            { total === 0 && <NewSpan css={{ color: "$primary" }}>Coming Soon</NewSpan> }
            <Link href={ `/puzzles/${ round.id }` }>{ round.title }</Link>
            { total > 0 && (solved === total
                ? <AnswerSpan>{ solved }/{ total }</AnswerSpan>
                : <AnswerSpan css={{ color: "$onBackground", "&:hover": { cursor: "unset" } }}>{ solved }/{ total }</AnswerSpan>
            ) }
        </li>
    );
}

export default RoundEntry;
