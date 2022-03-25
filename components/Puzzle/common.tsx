import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import Link from "../Link";
import PuzzleComplete from "./Complete";
import PuzzleAnswerSubmission from "./AnswerCheck";
import { styled } from "../../styles/stitches";

export const PuzzleDiv = styled("div", {
    margin: "0 auto",
    maxWidth: "800px",
    textAlign: "center",
    paddingTop: "30px"
});

const BackAnchor = styled("a", {
    float: "left",
    marginTop: "30px",
    marginLeft: "30px",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline"
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
    }, []);

    const onSuccess = useCallback((answer: string) => {
        try {
            localStorage.setItem(name, answer);
        } catch (e) {
            // do nothing
        }

        setAnswer(answer);
    }, []);

    return (
        <>
            { AnswerBanner }
            <Link href="/puzzles" component={ BackAnchor }>&#10094; Back</Link>
            <PuzzleDiv>
                <Heading>{ title }</Heading>
                { description && <DescriptionDiv>{ description }</DescriptionDiv> }
                { children }
            </PuzzleDiv>
            <PuzzleAnswerSubmission puzzleName={ name } onSuccess={ onSuccess } />
        </>
    );
};
