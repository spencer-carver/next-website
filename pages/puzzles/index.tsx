import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
import Head from "next/head";
import { CSS } from "@stitches/react";
import Link from "../../components/Link";
import PuzzleComplete from "../../components/Puzzle/Complete";
import { DescriptionDiv, Heading, PuzzleDiv } from "../../components/Puzzle/common";
import BackNavigation from "../../components/BackNavigation";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";

const NAME = "All Puzzles";
const DESCRIPTION = "A list of all puzzles available at Spencer Carver's website.";
const NEWEST_PUZZLE = "x-marks-the-spot";

const PUZZLES = {
    "tutorial": "Tutorial",
    "tetris": "Tetris",
    "travel-diary": "Travel Diary",
    "an-explosive-discovery": "An Explosive Discovery",
    "yakuza-zero": "Yakuza 0",
    "cheese-sampler": "Cheese Sampler",
    "x-marks-the-spot": "X Marks the Spot",
    "enigmarch-2022": "#Enigmarch 2022",
    "judge-calls-one": "Judge Calls"
};

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

const RowEntry: FunctionComponent<{ puzzleId: string; index: number; clearAnswer: Function; }> = ({ puzzleId, index, clearAnswer }) => {
    const [ puzzleAnswer, setPuzzleAnswer ] = useState(null);

    useEffect(() => {
        try {
            setPuzzleAnswer(localStorage.getItem(puzzleId));
        } catch (e) {
            //do nothing
        }
    }, [puzzleId]);

    const clearPuzzleAnswer = useCallback((): void => {
        clearAnswer(puzzleId);
        setPuzzleAnswer(null);
    }, [clearAnswer, puzzleId]);

    return (
        <li style={{ position: "relative" }}>
            { puzzleId === NEWEST_PUZZLE && <NewSpan>NEW</NewSpan> }
            <Link href={ `/puzzles/${ puzzleId }` }>{ PUZZLES[puzzleId] }</Link>
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
                    { Object.keys(PUZZLES).map((puzzleId: string, index: number) => <RowEntry key={ index } puzzleId={ puzzleId } index={ index } clearAnswer={ clearAnswer } />) }
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
