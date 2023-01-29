import React, { FunctionComponent, ReactNode, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import PuzzleComplete from "./Complete";
import PuzzleAnswerSubmission from "./AnswerCheck";
import BackNavigation from "../BackNavigation";
import { PUZZLES } from "../../constants/Puzzle";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import useStorage from "../../utils/useStorage";

export const PuzzleDiv = styled("div", {
    margin: "0 auto",
    padding: "30px 10px 0",
    maxWidth: "300px",
    overflowX: "visible",
    textAlign: "center",
    minHeight: "calc(100vh - 185px)",
    "@lg": {
        maxWidth: "760px"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        minHeight: "calc(100vh - 322px)"
    }
});

export const Heading = styled("h1", {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "$onBackground",
    "@lg": {
        fontSize: "30px"
    }
});

export const DescriptionDiv = styled("div", {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "$onBackground",
    "@lg": {
        fontSize: "20px"
    }
});

interface PuzzleWrapperProps {
    name: string;
    children?: ReactNode;
}

export const PuzzleWrapperComponent: FunctionComponent<PuzzleWrapperProps> = ({ name, children }) => {
    const storage = useStorage("puzzle");
    const [ answer, setAnswer ] = useState(undefined);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ answer } />);
    }, [answer]);

    useEffect(() => {
        try {
            setAnswer(storage.getItem<string>(name));
        } catch (e) {
            // do nothing
        }
    }, [storage, name]);

    const onSuccess = useCallback((answer: string) => {
        try {
            storage.setItem<string>(name, answer);
        } catch (e) {
            // do nothing
        }

        setAnswer(answer);
    }, [storage, name]);

    const {
        title,
        description,
        round,
        solutionAvailable
    } = PUZZLES[name];
    const path = round ? name.replaceAll(":", "/"): name;

    return (
        <>
            <Head>
                <title>{ title }</title>
                <link rel="canonical" href={ `https://spencer.carvers.info/puzzles/${ path }` } />
                <meta name="description" content={ description } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ title } />
                <meta property="og:description" content={ description } />
                <meta property="og:title" content={ title } />
                <meta property="og:url" content={ `https://spencer.carvers.info/puzzles/${ path }` } />
                <meta property="og:image" content={ "https://spencer.carvers.info/seo-puzzle.jpg" } />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta name="twitter:image" content={ "https://spencer.carvers.info/seo-puzzle.jpg" } />
            </Head>
            { AnswerBanner }
            <BackNavigation to={ `/puzzles${ round ? `/${ round.toLowerCase() }` : "" }` } />
            <PuzzleDiv>
                <Heading>{ title }</Heading>
                { description && <DescriptionDiv>{ description }</DescriptionDiv> }
                { children }
            </PuzzleDiv>
            <PuzzleAnswerSubmission puzzleName={ name } answer={ answer } onSuccess={ onSuccess } solutionLink={ solutionAvailable ? `/puzzles/${ path }/solution` : undefined } />
        </>
    );
};
