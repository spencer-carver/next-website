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

const Label = styled("div", {
    fontWeight: "bold",
    paddingBottom: "5px"
});

const PuzzleStats = ({ stats }: { stats: PuzzleStats }) => {
    return (
        <>
            <WrapperDiv>
                <Section>
                    <Label>Incorrect Answers</Label>
                    { stats.incorrect }
                </Section>
                <Section>
                    <Label>Hints Requested</Label>
                    { stats.hints }
                </Section>
                <Section>
                    <Label>Intermediates Found</Label>
                    { stats.intermediates }
                </Section>
                <Section>
                    <Label>Correct Answers</Label>
                    { stats.correct }
                </Section>
            </WrapperDiv>
            { stats.firstSolve?.timestamp && (<WrapperDiv css={{ marginTop: "5px" }}>
                    <Section>
                        <Label>Unique Guesses</Label>
                        { Object.keys(stats.answers).length }
                    </Section>
                    <Section>
                        <Label>Most Common Guess</Label>
                        { Object.keys(stats.answers).reduce((mostFrequent, answer) => {
                            return mostFrequent && stats.answers[mostFrequent] > stats.answers[answer]
                                ? mostFrequent
                                : answer
                            }, undefined)}
                    </Section>
                    <Section>
                        <Label>First Solve</Label>
                        { new Date(stats.firstSolve.timestamp).toLocaleDateString() }
                    </Section>
                    <Section>
                        <Label>First Solved By</Label>
                        { stats.firstSolve.user }
                    </Section>
                </WrapperDiv>
            ) }
        </>
    );
};

export default PuzzleStats;
