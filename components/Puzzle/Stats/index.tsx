import React from "react";
import { styled } from "../../../styles/stitches";

interface PuzzleStats {
    hints: number;
    intermediates: number;
    incorrect: number;
    correct: number;
    answers?: Record<string, number>;
    firstSolve?: {
        timestamp: number;
        user: string;
    };
}

const WrapperDiv = styled("div", {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "@lg": {
        flexDirection: "row"
    }
});

const Section = styled("div", {
    color: "$onBackground",
    backgroundColor: "$surface02",
    textAlign: "center",
    padding: "10px",
    "&:not(:first-of-type)": {
        marginTop: "5px"
    },
    "@lg": {
        "&:not(:first-of-type)": {
            marginTop: "0"
        }
    },
    "@xxl": {
        width: "220px"
    }
});

const PuzzleStats = ({ stats }: { stats: PuzzleStats }) => {
    return (
        <>
            <WrapperDiv>
                <Section>
                    <div>Incorrect Answers</div>
                    { stats.incorrect }
                </Section>
                <Section>
                    <div>Hints Requested</div>
                    { stats.hints }
                </Section>
                <Section>
                    <div>Intermediates Found</div>
                    { stats.intermediates }
                </Section>
                <Section>
                    <div>Correct Answers</div>
                    { stats.correct }
                </Section>
            </WrapperDiv>
            { stats.firstSolve.timestamp && (<WrapperDiv css={{ marginTop: "5px" }}>
                    <Section>
                        <div>Unique Guesses</div>
                        { Object.keys(stats.answers).length }
                    </Section>
                    <Section>
                        <div>Most Common Guess</div>
                        { Object.keys(stats.answers).reduce((mostFrequent, answer) => {
                            return mostFrequent && stats.answers[mostFrequent] > stats.answers[answer]
                                ? mostFrequent
                                : answer
                            }, undefined)}
                    </Section>
                    <Section>
                        <div>First Solve</div>
                        { new Date(stats.firstSolve.timestamp).toLocaleDateString() }
                    </Section>
                    <Section>
                        <div>First Solved By</div>
                        { stats.firstSolve.user }
                    </Section>
                </WrapperDiv>
            ) }
        </>
    );
};

export default PuzzleStats;