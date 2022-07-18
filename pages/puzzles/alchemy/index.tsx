import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
import Head from "next/head";
import { CSS } from "@stitches/react";
import PuzzleComplete from "../../../components/Puzzle/Complete";
import { DescriptionDiv, Heading, PuzzleDiv } from "../../../components/Puzzle/common";
import BackNavigation from "../../../components/BackNavigation";
import { PuzzleDetails, PuzzleRounds, PUZZLES } from "../../../constants/Puzzle";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";
import { Background, CircleFour, CircleFive, CircleSix, CircleSeven, Meta } from "./circles";
import RowEntry from "../../../components/Puzzle/RowEntry";
import Link from "../../../components/Link";

const NAME = "Puzzle Round: Alchemy";
const DESCRIPTION = "A puzzle round themed around Alchemy?";

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
    const [ roundPuzzles ] = useState(Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === PuzzleRounds.ALCHEMY && !PUZZLES[puzzleId].isMeta));
    const [ numberAnswered, setNumberAnswered ] = useState(0);
    const [ fourElementsAnswered, setFourElementsAnswered ] = useState(false);
    const [ fiveElementsAnswered, setFiveElementsAnswered ] = useState(false);
    const [ sixElementsAnswered, setSixElementsAnswered ] = useState(false);
    const [ sevenElementsAnswered, setSevenElementsAnswered ] = useState(false);
    const [ metaAnswered, setMetaAnswered ] = useState(false);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ `SOLVED: ${ numberAnswered }` } />);
    }, [numberAnswered]);

    useEffect(() => {
        setNumberAnswered(
            roundPuzzles.reduce((count: number, puzzleId: string): number => count + (localStorage.getItem(puzzleId.replaceAll("/", ":")) ? 1 : 0), 0)
            + (localStorage.getItem("alchemy:alchemy") ? 1 : 0)
        );
        setFourElementsAnswered(!!localStorage.getItem("alchemy:four-elements"));
        setFiveElementsAnswered(!!localStorage.getItem("alchemy:five-elements"));
        setSixElementsAnswered(!!localStorage.getItem("alchemy:six-elements"));
        setSevenElementsAnswered(!!localStorage.getItem("alchemy:seven-elements"));
        setMetaAnswered(!!localStorage.getItem("alchemy:alchemy"));
    }, [roundPuzzles]);

    const clearAnswer = (puzzleId: string): void => {
        try {
            localStorage.removeItem(puzzleId.replaceAll("/", ":"));

            switch (puzzleId) {
                case "alchemy/four-elements":
                    setFourElementsAnswered(false);
                    break;
                case "alchemy/five-elements":
                    setFiveElementsAnswered(false);
                    break;
                case "alchemy/six-elements":
                    setSixElementsAnswered(false);
                    break;
                case "alchemy/seven-elements":
                    setSevenElementsAnswered(false);
                    break;
                case "alchemy/alchemy":
                    setMetaAnswered(false);
            }
        } catch (e) {
            //do nothing
        }

        setNumberAnswered(numberAnswered - 1);
    };

    const metaUnlocked = fourElementsAnswered && fiveElementsAnswered && sixElementsAnswered && sevenElementsAnswered;

    return (
        <>
            <Head>
                <title>{ NAME }</title>
                <link rel="canonical" href="https://spencer.carvers.info/puzzles/alchemy" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content="https://spencer.carvers.info/puzzles/alchemy" />
                <meta property="og:image" content="https://spencer.carvers.info/seo-puzzle.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo-puzzle.jpg" />
            </Head>
            <BackNavigation to="/puzzles" />
            { AnswerBanner }
            <PuzzleDiv css={ puzzleDivOverrides }>
                <Heading>{ PuzzleRounds.ALCHEMY }</Heading>
                <DescriptionDiv as="p">
                    Elements transform and combine in different ways.
                </DescriptionDiv>
                <div style={{ position: "relative", maxWidth: "740px", paddingLeft: "10px" }}>
                    <Background />
                    <Link href="/puzzles/alchemy/four-elements"><CircleFour isComplete={ fourElementsAnswered } /></Link>
                    <Link href="/puzzles/alchemy/five-elements"><CircleFive isComplete={ fiveElementsAnswered } /></Link>
                    <Link href="/puzzles/alchemy/six-elements"><CircleSix isComplete={ sixElementsAnswered } /></Link>
                    <Link href="/puzzles/alchemy/seven-elements"><CircleSeven isComplete={ sevenElementsAnswered } /></Link>
                    { metaUnlocked || metaAnswered && <Link href="/puzzles/alchemy/alchemy"><Meta isComplete={ metaAnswered } /></Link> }
                </div>
                <PuzzleList>
                    <li style={{ position: "relative", textDecoration: "underline" }}>Puzzle<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Answer</AnswerSpan></li>
                    { roundPuzzles.map((puzzleId: string, index: number) => <RowEntry key={ index } puzzleId={ puzzleId } { ...PUZZLES[puzzleId] } clearAnswer={ clearAnswer } />) }
                    { metaUnlocked || metaAnswered && <RowEntry puzzleId="alchemy/alchemy" { ...PUZZLES["alchemy/alchemy"] } clearAnswer={ clearAnswer } /> }
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
