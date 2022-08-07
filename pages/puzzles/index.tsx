import React, { useState, FunctionComponent, useEffect } from "react";
import Head from "next/head";
import { CSS } from "@stitches/react";
import PuzzleComplete from "../../components/Puzzle/Complete";
import { DescriptionDiv, Heading, PuzzleDiv } from "../../components/Puzzle/common";
import RowEntry from "../../components/Puzzle/RowEntry";
import BackNavigation from "../../components/BackNavigation";
import { PuzzleRounds, PUZZLES } from "../../constants/Puzzle";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import RoundEntry from "../../components/Puzzle/RoundEntry";

const NAME = "All Puzzles";
const DESCRIPTION = "A list of all puzzles available at Spencer Carver's website.";

const puzzleDivOverrides: CSS = {
    minHeight: "calc(100vh - 131px)",
    [`.${ yahooGeocitiesTheme } &`]: {
        minHeight: "calc(100vh - 269px)"
    }
};

const PuzzleList = styled("ul", {
    textAlign: "left",
    listStyle: "none",
    fontSize: "18px",
    lineHeight: "36px",
    margin: "20px 0 40px",
    color: "$onBackground",
    paddingInlineStart: "0",
    "& a": {
        textDecoration: "none",
        "&:hover": {
            borderBottom: "2px dotted $secondary"
        }
    },
    "@lg": {
        paddingInlineStart: "40px",
        margin: "20px 20px 40px"
    }
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

const Puzzles: FunctionComponent = () => {
    const [ numberAnswered, setNumberAnswered ] = useState(0);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ `SOLVED: ${ numberAnswered }` } />);
    }, [numberAnswered]);

    useEffect(() => {
        setNumberAnswered(Object.keys(PUZZLES).reduce((count: number, puzzleId: string): number => count + (localStorage.getItem(puzzleId) ? 1 : 0), 0));
    }, []);

    const clearAnswer = (puzzleId: string): void => {
        try {
            localStorage.removeItem(puzzleId);
        } catch (e) {
            //do nothing
        }

        setNumberAnswered(numberAnswered - 1);
    };

    return (
        <>
            <Head>
                <title>{ NAME }</title>
                <link rel="canonical" href="https://spencer.carvers.info/puzzles" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content="https://spencer.carvers.info/puzzles" />
                <meta property="og:image" content="https://spencer.carvers.info/seo-puzzle.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo-puzzle.jpg" />
            </Head>
            <BackNavigation to="/" />
            { AnswerBanner }
            <PuzzleDiv css={ puzzleDivOverrides }>
                <Heading>Puzzles</Heading>
                <DescriptionDiv as="p">
                    I&apos;m trying to make puzzles! Here are all of my attempts in percieved order of difficulty.
                    If you need help with a puzzle in a way that the built-in hint system doesn&apos;t assist,
                    email your question to <a href="mailto:puzzle@carvers.info">puzzle@carvers.info</a> with the puzzle name as the subject and I will try and assist you.
                    This page is not a puzzle.
                </DescriptionDiv>
                <PuzzleList>
                    <li style={{ position: "relative", textDecoration: "underline" }}>Puzzle<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Answer</AnswerSpan></li>
                    { Object.keys(PUZZLES).map((puzzleId: string, index: number) => {
                        if (PUZZLES[puzzleId].round) {
                            return null;
                        }

                        return <RowEntry key={ index } puzzleId={ puzzleId } title={ PUZZLES[puzzleId].title } clearAnswer={ clearAnswer } />;
                    }) }
                </PuzzleList>
                <DescriptionDiv as="p">
                    Rounds comprise a set of puzzles that all connect together into a &apos;meta puzzle&apos;, which uses the answers from the other puzzles to reach a final answer.
                </DescriptionDiv>
                <PuzzleList>
                    <li style={{ position: "relative", textDecoration: "underline" }}>Round<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Solved</AnswerSpan></li>
                    { [PuzzleRounds.ALCHEMY].map((puzzleId: string, index: number) => <RoundEntry key={ index } puzzleId={ puzzleId.toLowerCase() } title={ puzzleId } round={ PuzzleRounds.ALCHEMY } />) }
                </PuzzleList>
                { numberAnswered > 0 && (
                    <DescriptionDiv as="p">
                        If you want to erase an answer (perhaps to let someone else try the puzzle), just click on it!
                    </DescriptionDiv>
                ) }
            </PuzzleDiv>
        </>
    );
};

export default Puzzles;
