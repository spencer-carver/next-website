import React, { useState, FunctionComponent, useEffect } from "react";
import Head from "next/head";
import { CSS } from "@stitches/react";
import PuzzleComplete from "../../components/Puzzle/Complete";
import { DescriptionDiv, Heading, PuzzleDiv } from "../../components/Puzzle/common";
import RowEntry from "../../components/Puzzle/RowEntry";
import BackNavigation from "../../components/BackNavigation";
import { PuzzleRounds, PUZZLES, ROUNDS } from "../../constants/Puzzle";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";
import RoundEntry from "../../components/Puzzle/RoundEntry";
import useStorage from "../../utils/useStorage";

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

const A = styled("a", {
    color: "$onBackground",
    textDecoration: "none",
    borderBottom: "2px dotted $secondary",
    "&:hover": {
        backgroundColor: "$secondary"
    },
    [`.${ lightTheme } &`]: {
        borderBottom: "2px dotted $onBackground"
    }
});

const Puzzles: FunctionComponent = () => {
    const storage = useStorage("puzzle");
    const [ numberAnswered, setNumberAnswered ] = useState(0);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ `SOLVED: ${ numberAnswered }` } />);
    }, [numberAnswered]);

    useEffect(() => {
        setNumberAnswered(Object.keys(PUZZLES).reduce((count: number, puzzleId: string): number => count + (storage.getItem(puzzleId) ? 1 : 0), 0));
    }, [storage]);

    const clearAnswer = (puzzleId: string): void => {
        try {
            storage.removeItem(puzzleId);
        } catch (e) {
            //do nothing
        }

        setNumberAnswered(numberAnswered - 1);
    };

    return (
        <>
            <Head>
                <title>{ NAME }</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/puzzles` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/puzzles` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo-puzzle.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo-puzzle.jpg` } />
            </Head>
            <BackNavigation to="/" />
            { AnswerBanner }
            <PuzzleDiv css={ puzzleDivOverrides }>
                <Heading>Puzzles</Heading>
                <DescriptionDiv as="p">
                    This page is not a puzzle.
                </DescriptionDiv>
                <DescriptionDiv as="p">
                    Rounds comprise a set of puzzles that all connect together into a &apos;meta puzzle&apos;.
                </DescriptionDiv>
                <PuzzleList>
                    <li style={{ position: "relative", textDecoration: "underline" }}>Round<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Solved</AnswerSpan></li>
                    { [PuzzleRounds.ALCHEMY, PuzzleRounds.ENIGMARCH2023].map((roundId: string, index: number) => <RoundEntry key={ index } round={ ROUNDS[roundId] } />) }
                </PuzzleList>
                <DescriptionDiv as="p">
                    The below puzzles are unaffiliated with any broader theme.
                </DescriptionDiv>
                <PuzzleList>
                    <li style={{ position: "relative", textDecoration: "underline" }}>Puzzle<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Answer</AnswerSpan></li>
                    { Object.keys(PUZZLES).map((puzzleId: string, index: number) => {
                        if (PUZZLES[puzzleId].round) {
                            return null;
                        }

                        return <RowEntry key={ index } puzzleId={ puzzleId } { ...PUZZLES[puzzleId] } clearAnswer={ clearAnswer } />;
                    }) }
                </PuzzleList>
                <DescriptionDiv as="p">
                    If you need help with a puzzle in a way that the built-in hint system doesn&apos;t assist,
                    email your question to <A href="mailto:puzzle@carvers.info">puzzle@carvers.info</A> with the puzzle name as the subject and I will try and assist you.
                </DescriptionDiv>
            </PuzzleDiv>
        </>
    );
};

export default Puzzles;
