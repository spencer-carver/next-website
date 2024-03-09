import React, { FunctionComponent, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { DescriptionDiv, Heading, PuzzleDiv, PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";
import useStorage from "../../../utils/useStorage";
import BackNavigation from "../../../components/BackNavigation";
import { PuzzleRounds, PUZZLES, ROUNDS } from "../../../constants/Puzzle";
import RowEntry from "../../../components/Puzzle/RowEntry";
import PuzzleComplete from "../../../components/Puzzle/Complete";
import Head from "next/head";
import Link from "../../../components/Link";

const NAME = "Puzzle Round: #Enigmarch 2024";
const DESCRIPTION = "A puzzle a day is the best way to play.";

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

const MARCH_2024 = [
    [0,0,0,0,0,1,2],
    [3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16],
    [17,18,19,20,21,22,23],
    [24,25,26,27,28,29,30],
    [31,0,0,0,0,0,0]
];

const MARCH_2024_VALUES = [
    ["","","","","","🚪","❌"],
    ["🎶","🔼","🚧","🔴","⌚","🌑","🧵"],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""],
    ["","","","","","",""]
];

const WrapperDiv = styled("div", {
    color: "$onBackground",
    marginTop: "10px"
});

const Calendar = styled("table", {
    borderSpacing: "0",
    borderCollapse: "collapse",
    margin: "0px auto",
    width: "286px"
});

const TableCell = styled("td", {
    position: "relative",
    width: "40px",
    height: "40px",
    border: "1px solid $onBackground",
    textAlign: "center"
});

const DayOfMonth = styled("span", {
    position: "absolute",
    fontSize: "10px",
    top: "4px",
    left: "4px"
});

const buttonCellStyles: CSS = {
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "$surface02",
        color: "$onSurface"
    }
};

const Anchor = styled("a", {
    color: "$onBackground",
    textDecoration: "none",
    "&:visited": {
        textDecoration: "none"
    }
});

export const FinalAnswerComponent = ({ intermediates }) => {
    return (
        <WrapperDiv>
            <b>March 2024</b>
            <Calendar>
                <thead>
                    <tr>
                        <TableCell>Sun</TableCell>
                        <TableCell>Mon</TableCell>
                        <TableCell>Tue</TableCell>
                        <TableCell>Wed</TableCell>
                        <TableCell>Thu</TableCell>
                        <TableCell>Fri</TableCell>
                        <TableCell>Sat</TableCell>
                    </tr>
                </thead>
                <tbody>
                    {
                        MARCH_2024.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            if (!cell) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } />
                                            }

                                            if (cell === 32) {
                                                const additionalStyles = {
                                                    ...buttonCellStyles,
                                                    ...(intermediates[cell] ? { backgroundColor: "$primary", color: "$onPrimary", "&:hover": { backgroundColor: "$primary" } } : {})
                                                };

                                                return (
                                                    <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } title="Meta" css={ additionalStyles }>
                                                        <Link href="/puzzles/enigmarch-2024/meta" component={ Anchor }>
                                                            <div style={{ width: "100%", height: "100%" }}>
                                                                <DayOfMonth>META</DayOfMonth>
                                                            </div>
                                                        </Link>
                                                    </TableCell>
                                                );
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {})
                                            };

                                            const intermediateValue = intermediates[cell]?.split("|").length > 1 ? intermediates[cell].split("|")[1] : intermediates[cell];

                                            if (!MARCH_2024_VALUES[rowIndex][columnIndex]) {
                                                return (
                                                    <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } title={ `March ${ cell }` } css={{ ...additionalStyles, cursor: "unset" }}>
                                                        <div style={{ width: "100%", height: "100%" }}>
                                                            <DayOfMonth>{ cell }</DayOfMonth>
                                                        </div>
                                                        <span style={{ position: "absolute", top: "10px", left: "10px", pointerEvents: "none" }}>
                                                            { intermediateValue || MARCH_2024_VALUES[rowIndex][columnIndex] }
                                                        </span>
                                                    </TableCell>
                                                );
                                            }

                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } title={ `March ${ cell }` } css={ additionalStyles }>
                                                    <Link href={ `/puzzles/enigmarch-2024/march-${ cell }` }>
                                                        <div style={{ width: "100%", height: "100%" }}>
                                                            <DayOfMonth>{ cell }</DayOfMonth>
                                                        </div>
                                                    </Link>
                                                    <span style={{ position: "absolute", top: "10px", left: "10px", pointerEvents: "none" }}>
                                                        { intermediateValue || MARCH_2024_VALUES[rowIndex][columnIndex] }
                                                    </span>
                                                </TableCell>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Calendar>
        </WrapperDiv>
    );
};

const Puzzles: FunctionComponent = () => {
    const storage = useStorage("puzzle");
    const [ roundPuzzles ] = useState(Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === PuzzleRounds.ENIGMARCH2024 && !PUZZLES[puzzleId].isMeta));
    const [ numberAnswered, setNumberAnswered ] = useState(0);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);
    const [ intermediates, setIntermediates ] = useState(new Array(32));
    const [ todayDayNumber ] = useState((new Date()).getDate());

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ `SOLVED: ${ numberAnswered }` } />);
    }, [numberAnswered]);

    useEffect(() => {
        storage.removeItem("enigmarch-2024-intermediates");

        const puzzleAnswers = roundPuzzles.map((puzzleId: string) => storage.getItem<string>(puzzleId));
        puzzleAnswers.unshift(null);
        puzzleAnswers.push(storage.getItem<string>("enigmarch-2024:meta"));

        setIntermediates(puzzleAnswers);
        setNumberAnswered(puzzleAnswers.filter((answer) => !!answer).length);
    }, [storage, roundPuzzles]);

    const clearAnswer = (puzzleId: string): void => {
        try {
            storage.removeItem(puzzleId);

            if (puzzleId === "enigmarch-2024:meta") {
                intermediates[32] = undefined;
            } else {
                const parts = puzzleId.split("-");
                intermediates[parts[parts.length - 1]] = undefined;
            }

            setIntermediates(intermediates);
        } catch (e) {
            //do nothing
        }

        setNumberAnswered(numberAnswered - 1);
    };

    return (
        <>
            <Head>
                <title>{ NAME }</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/puzzles/enigmarch-2024` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/puzzles/enigmarch-2024` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo-puzzle.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo-puzzle.jpg` } />
            </Head>
            <BackNavigation to="/puzzles" />
            { AnswerBanner }
            <PuzzleDiv css={ puzzleDivOverrides }>
                <Heading>{ ROUNDS[PuzzleRounds.ENIGMARCH2024].title }</Heading>
                <DescriptionDiv as="p">{ DESCRIPTION }</DescriptionDiv>
                <div style={{ position: "relative", maxWidth: "740px", paddingLeft: "10px" }}>
                    <FinalAnswerComponent intermediates={ intermediates } />
                </div>
                { roundPuzzles.length > 0 && (
                    <PuzzleList>
                        <li style={{ position: "relative", textDecoration: "underline" }}>Puzzle<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Answer</AnswerSpan></li>
                        { roundPuzzles.map((puzzleId: string, index: number) => <RowEntry key={ index } puzzleId={ puzzleId } { ...PUZZLES[puzzleId] } clearAnswer={ clearAnswer } showComingSoon={ index <= todayDayNumber } />) }
                        <RowEntry puzzleId="enigmarch-2024:meta" { ...PUZZLES["enigmarch-2024:meta"] } clearAnswer={ clearAnswer } />
                    </PuzzleList>
                ) }
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
