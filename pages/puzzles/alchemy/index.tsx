import React, { useState, FunctionComponent, useEffect, useCallback } from "react";
import Head from "next/head";
import { CSS } from "@stitches/react";
import Link from "../../../components/Link";
import PuzzleComplete from "../../../components/Puzzle/Complete";
import { DescriptionDiv, Heading, PuzzleDiv } from "../../../components/Puzzle/common";
import BackNavigation from "../../../components/BackNavigation";
import { PuzzleDetails, PuzzleRounds, PUZZLES } from "../../../constants/Puzzle";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";
import { Background, CircleFour, CircleFive, CircleSix, CircleSeven, Meta } from "./circles";

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

interface RowEntryProps extends PuzzleDetails {
    puzzleId: string;
    clearAnswer: Function;
}

const RowEntry: FunctionComponent<RowEntryProps> = ({ puzzleId, title, isMeta, clearAnswer }) => {
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
            <Link href={ `/puzzles/${ puzzleId }` }>{ isMeta ? <b>{title}</b>: title }</Link>
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
        setNumberAnswered(roundPuzzles.reduce((count: number, puzzleId: string): number => count + (localStorage.getItem(puzzleId) ? 1 : 0), 0));
        setFourElementsAnswered(!!localStorage.getItem("alchemy/four-elements"));
        setFiveElementsAnswered(!!localStorage.getItem("alchemy/five-elements"));
        setSixElementsAnswered(!!localStorage.getItem("alchemy/six-elements"));
        setSevenElementsAnswered(!!localStorage.getItem("alchemy/seven-elements"));
        setMetaAnswered(!!localStorage.getItem("alchemy/alchemy"));
    }, []);

    const clearAnswer = (puzzleId: string): void => {
        try {
            localStorage.removeItem(puzzleId);
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
                    <CircleFour isComplete={ fourElementsAnswered } />
                    <CircleFive isComplete={ fiveElementsAnswered } />
                    <CircleSix isComplete={ sixElementsAnswered } />
                    <CircleSeven isComplete={ sevenElementsAnswered } />
                    { metaUnlocked && <Meta isComplete={ metaAnswered } /> }
                </div>
                <PuzzleList>
                    <li style={{ position: "relative", textDecoration: "underline" }}>Puzzle<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Answer</AnswerSpan></li>
                    { roundPuzzles.map((puzzleId: string, index: number) => <RowEntry key={ index } puzzleId={ puzzleId } { ...PUZZLES[puzzleId] } clearAnswer={ clearAnswer } />) }
                    { metaUnlocked && <RowEntry puzzleId="alchemy/alchemy" { ...PUZZLES["alchemy/alchemy"] } clearAnswer={ clearAnswer } /> }
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
