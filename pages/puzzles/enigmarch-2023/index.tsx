import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { DescriptionDiv, Heading, PuzzleDiv, PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";
import useStorage from "../../../utils/useStorage";
import BackNavigation from "../../../components/BackNavigation";
import { PuzzleRounds, PUZZLES, ROUNDS } from "../../../constants/Puzzle";
import RowEntry from "../../../components/Puzzle/RowEntry";
import PuzzleComplete from "../../../components/Puzzle/Complete";
import Head from "next/head";

const NAME = "Puzzle Round: #Enigmarch 2023";
const DESCRIPTION = "Coming soon!";

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

const MARCH_2023 = [
    [0,0,0,1,2,3,4],
    [5,6,7,8,9,10,11],
    [12,13,14,15,16,17,18],
    [21,20,21,22,23,24,25],
    [26,27,28,29,30,31,0]
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

const FinalAnswerComponent = ({ intermediates, setIntermediates, activeDay, onClickDate, storage }) => {
    function clearCalendar() {
        try {
            storage.removeItem("enigmarch-2023-intermediates");

            setIntermediates(Array(32));
        } catch (e) {
            // do nothing
        }
    }

    return (
        <WrapperDiv>
            <br />
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
                        MARCH_2023.map((row, rowIndex) => {
                            return (
                                <tr key={ rowIndex }>
                                    {
                                        row.map((cell, columnIndex) => {
                                            if (rowIndex === 4 && columnIndex === 6) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } css={{ fontSize: "9px", "&:hover": { cursor: "pointer" } }} onClick={ clearCalendar }>Clear Calendar</TableCell>
                                            }

                                            if (!cell) {
                                                return <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } />
                                            }

                                            const additionalStyles = {
                                                ...buttonCellStyles,
                                                ...(activeDay === cell ? { backgroundColor: "$surface02", color: "$onSurface" } : {}),
                                                ...(intermediates[cell] ? { backgroundColor: "$secondary", color: "$onSecondary" } : {})
                                            };

                                            return (
                                                <TableCell key={ `cell-${ rowIndex }-${ columnIndex }` } role="button" onClick={ () => onClickDate(cell) } title={ `March ${ cell }` } css={ additionalStyles }><DayOfMonth>{cell}</DayOfMonth>{intermediates[cell]}</TableCell>
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
    const [ roundPuzzles ] = useState(Object.keys(PUZZLES).filter((puzzleId: string) => PUZZLES[puzzleId].round === PuzzleRounds.ENIGMARCH2023 && !PUZZLES[puzzleId].isMeta));
    const [ numberAnswered, setNumberAnswered ] = useState(0);
    const [ metaAnswered, setMetaAnswered ] = useState(false);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);
    const [intermediates, setIntermediates] = useState(new Array(32));
    const [activeStep, setActiveStep] = useState(0);
    const metaUnlocked = !!intermediates[31];

    useEffect(() => {
        try {
            const storedIntermediates = storage.getItem<string[]>("enigmarch-2023-intermediates");

            if (!storedIntermediates) {
                return;
            }

            setIntermediates(storedIntermediates);
        } catch (e) {
            //do nothing
        }
    }, [storage]);

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ `SOLVED: ${ numberAnswered }` } />);
    }, [numberAnswered]);

    useEffect(() => {
        setNumberAnswered(
            roundPuzzles.reduce((count: number, puzzleId: string): number => count + (storage.getItem<string>(puzzleId) ? 1 : 0), 0)
            + (storage.getItem<string>("enigmarch-2023:march-31") ? 1 : 0)
        );
        setMetaAnswered(!!storage.getItem<string>("enigmarch-2023:march-31"));
    }, [storage, roundPuzzles]);

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
                <link rel="canonical" href="https://spencer.carvers.info/puzzles/enigmarch-2023" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content="https://spencer.carvers.info/puzzles/enigmarch-2023" />
                <meta property="og:image" content="https://spencer.carvers.info/seo-puzzle.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo-puzzle.jpg" />
            </Head>
            <BackNavigation to="/puzzles" />
            { AnswerBanner }
            <PuzzleDiv css={ puzzleDivOverrides }>
                <Heading>{ ROUNDS[PuzzleRounds.ENIGMARCH2023].title }</Heading>
                <div style={{ position: "relative", maxWidth: "740px", paddingLeft: "10px" }}>
                    <FinalAnswerComponent
                        storage={ storage }
                        intermediates={ intermediates }
                        activeDay={ activeStep }
                        onClickDate={ setActiveStep }
                        setIntermediates={ setIntermediates }
                    />
                </div>
                <DescriptionDiv as="p">{ DESCRIPTION }</DescriptionDiv>
                { roundPuzzles.length > 0 && (
                    <PuzzleList>
                        <li style={{ position: "relative", textDecoration: "underline" }}>Puzzle<AnswerSpan css={{ color: "$onBackground", fontWeight: "normal", textDecoration: "underline", "&:hover": { cursor: "unset" } }}>Answer</AnswerSpan></li>
                        { roundPuzzles.map((puzzleId: string, index: number) => <RowEntry key={ index } puzzleId={ puzzleId } { ...PUZZLES[puzzleId] } clearAnswer={ clearAnswer } />) }
                        { (metaUnlocked || metaAnswered) && <RowEntry puzzleId="enigmarch-2023:march-31" { ...PUZZLES["enigmarch-2023:march-31"] } clearAnswer={ clearAnswer } /> }
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