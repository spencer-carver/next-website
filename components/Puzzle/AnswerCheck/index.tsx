import React, { useState, FunctionComponent, useMemo } from "react";
import { CSS } from "@stitches/react";
import { API_URL } from "../../../constants/ExternalUrls";
import Link from "../../Link";
import useStorage from "../../../utils/useStorage";
import Timer from "../Timer";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";

const AnswerBoxDiv = styled("div", {
    bottom: "0",
    margin: "10px auto 0",
    width: "calc(100% - 20px)",
    minHeight: "50px",
    backgroundColor: "$background",
    border: "1px solid $onBackground",
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "#121212"
    }
});

const InputForm = styled("form", {
    margin: "0 5px 10px 5px"
});

const SolutionAnchor = styled("a", {
    marginLeft: "5px",
    color: "$onBackground",
    textDecoration: "underline",
    "&:hover": {
        cursor: "pointer"
    }
});

interface PuzzleAnswerSubmissionProps {
    puzzleName: string;
    answer?: string;
    onSuccess: Function;
    solutionLink?: string;
    disabled?: boolean;
}

export interface PuzzleAnswer {
    correct: boolean;
    submission: string;
    value: string;
    intermediate?: boolean;
    hint?: boolean;
    time?: number;
}

const PuzzleAnswerSubmission: FunctionComponent<PuzzleAnswerSubmissionProps> = ({ puzzleName, answer: existingAnswer, onSuccess, solutionLink, disabled }) => {
    const [ answer, setAnswer ] = useState("");
    const [ answers, setAnswers ] = useState([] as PuzzleAnswer[]);
    const [ hintCount, setHintCount ] = useState(0);
    const storage = useStorage("settings");

    function onType(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer((event.target as HTMLInputElement).value);
    }

    async function submit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!answer) {
            return;
        }

        const uuid = storage.getItem<string>("uuid");

        const answerResponse: PuzzleAnswer = await window.fetch(`${ API_URL }/api/puzzle/${ puzzleName }/submit`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ uuid, answer, hintCount })
        }).then(response => response.json());

        if (answerResponse.correct) {
            onSuccess(answerResponse.value);
        }

        if (answerResponse.hint) {
            setHintCount(hintCount + 1);
        }

        setAnswers([ ...answers, { ...answerResponse, time: (new Date()).getTime() } ]);
        setAnswer("");

        const objDiv = document.getElementById("pastAnswers") as HTMLElement;
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    const MemoizedAnswers = useMemo(() => <PastAnswers pastAnswers={ answers } />, [ answers ]);

    return (
        <AnswerBoxDiv css={ answers.length > 0 ? {} : { position: "sticky" } }>
            { MemoizedAnswers }
            <InputForm onSubmit={ submit }>
                { !existingAnswer && (
                    <>
                        <input type="text" placeholder="Answer Here" value={ answer } onChange={ onType } disabled={ disabled }></input>
                        <button type="submit" disabled={ disabled }>Submit</button>
                    </>
                ) }
                { solutionLink && <Link href={ solutionLink } component={ SolutionAnchor }>View Solution</Link> }
            </InputForm>
        </AnswerBoxDiv>
    );
};

function formatTimeDifference(time1: number, time2: number) {
    const diffInSeconds = Math.floor(Math.abs(time2 - time1) / 1000);
    const seconds = diffInSeconds % 60;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const minutes = diffInMinutes % 60;

    let result = "";

    if (minutes > 0) {
        result += `${ minutes }m`;
    }

    if (seconds > 0) {
        result += `${ seconds }s ago`;
    }

    return result;
}

const PastAnswersList = styled("ul", {
    margin: "0",
    padding: "10px 5px",
    maxHeight: "200px",
    overflowY: "scroll"
});

const AnswerListItem = styled("li", {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1px",
    padding: "2px 2px 2px 0",
    color: "$onBackground"
});

const TimeSpan = styled("span", {
    display: "none",
    "@md": {
        display: "unset"
    }
});

const SubmissionSpan = styled("span", {
    padding: "2px 5px",
    marginRight: "5px",
    backgroundColor: "rgba(0,0,0,0.3)"
});

const correctStyle: CSS = {
    backgroundColor: "$secondary"
};

const intermediateStyle: CSS = {
    backgroundColor: "GoldenRod"
};

const hintStyle: CSS = {
    backgroundColor: "DodgerBlue"
};

const incorrectStyle: CSS = {
    backgroundColor: "$error"
};

const PastAnswers: FunctionComponent<{ pastAnswers: PuzzleAnswer[] }> = ({ pastAnswers }) => {
    const now = (new Date()).getTime();

    return (
        <PastAnswersList id="pastAnswers">
            { pastAnswers.map((pastResult, index) => {
                const answerStyle = pastResult.correct
                    ? correctStyle
                    : ( pastResult.intermediate
                        ? intermediateStyle
                        : ( pastResult.hint
                            ? hintStyle
                            : incorrectStyle
                        )
                    );

                const message = (pastResult.hint || pastResult.intermediate)
                    ? pastResult.value
                    : ( pastResult.correct
                        ? "Correct!"
                        : "Incorrect"
                    )

                return (
                    <AnswerListItem key={ index } css={ answerStyle }>
                        <span>
                            <SubmissionSpan>{ pastResult.correct ? pastResult.value : pastResult.submission }</SubmissionSpan>
                            { message }
                        </span>
                        <TimeSpan>{ formatTimeDifference(pastResult.time, now) }</TimeSpan>
                    </AnswerListItem>
                );
            }) }
        </PastAnswersList>
    );
};

const partialInputOverrideStyles: CSS = {
    width: "300px",
    margin: "10px 0 0",
    "& input": {
        width: "230px"
    }
};

export const PartialAnswerCheck = ({ puzzleName, step, completeStep, placeholderText = "Answer Here" }) => {
    const storage = useStorage("settings");
    const [answer, setAnswer] = useState("");
    const [lastGuess, setLastGuess] = useState({} as PuzzleAnswer);

    function onType(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer((event.target as HTMLInputElement).value);
    }

    async function submit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!answer) {
            return;
        }

        const uuid = storage.getItem<string>("uuid");

        const answerResponse: PuzzleAnswer = await window.fetch(`${ API_URL }/api/puzzle/${ puzzleName }/submit`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                uuid,
                answer: `${ step }:${ answer }`,
                hintCount: 0
            })
        }).then(response => response.json());

        if (answerResponse.intermediate) {
            completeStep(step, answerResponse.value);
        }

        setLastGuess({ ...answerResponse, value: answer, time: (new Date()).getTime() });
        setAnswer("");
    }

    const answerStyle = lastGuess.intermediate
        ? correctStyle
        : incorrectStyle;

    return (
        <>
            <InputForm css={ partialInputOverrideStyles } onSubmit={ submit }>
                <input type="text" placeholder={ placeholderText } value={ answer } onChange={ onType }></input>
                <button type="submit">Submit</button>
            </InputForm>
            { lastGuess.value && (
                <AnswerListItem css={{ ...answerStyle, textTransform: "uppercase", justifyContent: "center", marginTop: "5px" }}>
                    { lastGuess.value }
                </AnswerListItem>
            )}
        </>
    );
};

export default PuzzleAnswerSubmission;
