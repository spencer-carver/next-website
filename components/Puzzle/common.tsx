import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import PuzzleComplete from "./Complete";
import PuzzleAnswerSubmission from "./AnswerCheck";
import { styled } from "../../styles/stitches";
import BackNavigation from "../BackNavigation";

export const PuzzleDiv = styled("div", {
    margin: "0 auto",
    padding: "30px 10px 0",
    maxWidth: "300px",
    overflowX: "visible",
    textAlign: "center",
    minHeight: "calc(100vh - 185px)",
    "@lg": {
        maxWidth: "800px"
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
    title: string;
    description: string;
}

export const PuzzleWrapperComponent: FunctionComponent<PuzzleWrapperProps> = ({ name, title, description, children }) => {
    const [ answer, setAnswer ] = useState(undefined);
    const [ AnswerBanner, setAnswerBanner ] = useState(null);

    useEffect(() => {
        setAnswerBanner(<PuzzleComplete answer={ answer } />);
    }, [answer]);

    useEffect(() => {
        try {
            setAnswer(localStorage.getItem(name));
        } catch (e) {
            // do nothing
        }
    }, [name]);

    const onSuccess = useCallback((answer: string) => {
        try {
            localStorage.setItem(name, answer);
        } catch (e) {
            // do nothing
        }

        setAnswer(answer);
    }, [name]);

    return (
        <>
            <Head>
                <title>{ title }</title>
                <link rel="canonical" href={ `https://spencer.carvers.info/puzzles/${ name }` } />
                <meta name="description" content={ description } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ title } />
                <meta property="og:description" content={ description } />
                <meta property="og:title" content={ title } />
                <meta property="og:url" content={ `https://spencer.carvers.info/puzzles/${ name }` } />
                <meta property="og:image" content={ "https://spencer.carvers.info/seo-puzzle.jpg" } />
                <meta name="twitter:description" content={ description } />
                <meta name="twitter:title" content={ title } />
                <meta name="twitter:image" content={ "https://spencer.carvers.info/seo-puzzle.jpg" } />
            </Head>
            { AnswerBanner }
            <BackNavigation to="/puzzles" />
            <PuzzleDiv>
                <Heading>{ title }</Heading>
                { description && <DescriptionDiv>{ description }</DescriptionDiv> }
                { children }
            </PuzzleDiv>
            <PuzzleAnswerSubmission puzzleName={ name } onSuccess={ onSuccess } />
        </>
    );
};
