import React, { useState, FunctionComponent, useMemo } from "react";
import { CSS } from "@stitches/react";
import { API_URL } from "../../../constants/ExternalUrls";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../../styles/stitches";

const AnswerBoxDiv = styled("div", {
    bottom: "0",
    margin: "0 auto",
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

interface PuzzleAnswerSubmissionProps {
    puzzleName: string;
    onSuccess: Function;
}

interface PuzzleAnswer {
    correct: boolean;
    intermediate?: boolean;
    hint?: boolean;
    value: string;
    time?: number;
}

const PuzzleAnswerSubmission: FunctionComponent<PuzzleAnswerSubmissionProps> = ({ puzzleName, onSuccess }) => {
    const [ answer, setAnswer ] = useState("");
    const [ answers, setAnswers ] = useState([] as PuzzleAnswer[]);
    const [ hintCount, setHintCount ] = useState(0);

    function onType(event: React.ChangeEvent<HTMLInputElement>): void {
        setAnswer((event.target as HTMLInputElement).value);
    }

    async function submit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!answer) {
            return;
        }

        const answerResponse: PuzzleAnswer = await window.fetch(`${ API_URL }/api/puzzle/${ puzzleName }/submit`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({ answer, hintCount })
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
                <input type="text" placeholder="Answer Here" value={ answer } onChange={ onType }></input>
                <button type="submit">Submit</button>
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
    display: "block",
    marginBottom: "1px",
    color: "$onBackground"
});

const TimeSpan = styled("span", {
    float: "right"
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

                return <AnswerListItem key={ index } css={answerStyle }>{ pastResult.value }<TimeSpan>{ formatTimeDifference(pastResult.time, now) }</TimeSpan></AnswerListItem>;
            }) }
        </PastAnswersList>
    );
};

export default PuzzleAnswerSubmission;
