import { useCallback, useEffect, useRef, useState } from "react";
import { CSS } from "@stitches/react";
import WORDS from "./valid";
import { styled } from "../../../styles/stitches";

const invalidWordStyles: CSS = {
    backgroundColor: "$error"
};

const wrongPlaceStyle: CSS = {
    backgroundColor: "yellow"
};

const correctPlaceStyle: CSS = {
    backgroundColor: "$secondary"
};

const nonMatchStyle: CSS = {
    backgroundColor: "black",
    color: "gray"
};

function validateWord(answerArray, candidateArray) {
    const candidate = candidateArray.join("");
    const validWord = WORDS.includes(candidate.toLowerCase());

    if (!validWord) {
        return [invalidWordStyles, invalidWordStyles, invalidWordStyles, invalidWordStyles, invalidWordStyles];
    }

    const response = Array(5);

    for (let i = 0; i < candidateArray.length; ++i) {
        if (candidateArray[i] === answerArray[i]) {
            response[i] = correctPlaceStyle;
        }
    }

    for (let i = 0; i < candidateArray.length; ++i) {
        for (let j = 0; j < candidateArray.length; ++j) {
            if (response[i]) {
                break;
            } else if (i===j) {
                continue;
            } else {
                if (candidateArray[i] === answerArray[j] && candidateArray[j] !== answerArray[j]) {
                    response[i] = wrongPlaceStyle;
                }
            }
        }
    }

    return response;
}

const DailyPuzzleDiv = styled("div", {
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    color: "$onBackground"
});

const Tile = styled("input", {
    width: "44px",
    height: "44px",
    margin: "3px",
    fontSize: "32px",
    textAlign: "center",
    cursor: "default"
});

const FormRow = styled("form", {});

const Row = ({ index: rowIndex, answer, onComplete, existingData, firstLetter, isCorrect, setIsCorrect }) => {
    const [ entry, setEntry ] = useState(existingData);
    const [ validationStyles, setValidationStyles ] = useState([{},{},{},{},{}]);
    const [ rowDisabled, setRowDisabled ] = useState(isCorrect);
    const secondLetter = useRef(null);
    const thirdLetter = useRef(null);
    const fourthLetter = useRef(null);
    const fifthLetter = useRef(null);

    const RowRef = [firstLetter, secondLetter, thirdLetter, fourthLetter, fifthLetter];

    const answerChars = atob(answer).split("");

    const updateLetter = useCallback((index: number, value: string) => {
        if (value === "") {
            const newEntry = entry.slice();
            newEntry[index] = "";
            setEntry(newEntry);

            return;
        }

        const massagedValue = value.toUpperCase();
        

        if(!/[A-Z]/.test(massagedValue) || massagedValue.length !== 1) {
            return;
        }

        const newEntry = entry.slice();
        newEntry[index] = massagedValue;
        setEntry(newEntry);

        if (index !== 4) {
            RowRef[index + 1]?.current.focus();

            return;
        }
    }, [entry, setEntry]);

    const changeTiles = useCallback((index: number, value: string) => {
        if (value === "Backspace") {
            if (index !== 0) {
                RowRef[index - 1]?.current.focus();
            }

            return;
        }

        if (value === "Enter" && index === 4 && entry.find((letter) => !!letter)) {
            const validatedStyles = validateWord(answerChars, entry);

            setValidationStyles(validatedStyles);

            if (validatedStyles[0] !== invalidWordStyles) {
                setRowDisabled(true);

                onComplete(rowIndex, entry, validatedStyles);
            }

            return;
        }
    }, [entry, setRowDisabled, onComplete]);

    useEffect(() => {
        if (existingData.find((letter) => !!letter)) {
            const validatedStyles = validateWord(answerChars, entry);

            setValidationStyles(validatedStyles);

            if (validatedStyles[0] !== invalidWordStyles) {
                setRowDisabled(true);

                onComplete(rowIndex, entry, validatedStyles);
            }
        }
    }, []);

    const disabled = isCorrect || rowDisabled;

    return (
        <FormRow>
            <Tile ref={ firstLetter } value={ entry[0] || "" } onKeyDown={ (e) => changeTiles(0, e.key) } onChange={ (e) => updateLetter(0, e.target.value) } disabled={ disabled } css={ validationStyles[0] } />
            <Tile ref={ secondLetter } value={ entry[1] || ""  } onKeyDown={ (e) => changeTiles(1, e.key)  } onChange={ (e) => updateLetter(1, e.target.value) } disabled={ disabled } css={ validationStyles[1] } />
            <Tile ref={ thirdLetter } value={ entry[2] || ""  } onKeyDown={ (e) => changeTiles(2, e.key)  } onChange={ (e) => updateLetter(2, e.target.value) } disabled={ disabled } css={ validationStyles[2] } />
            <Tile ref={ fourthLetter } value={ entry[3] || ""  } onKeyDown={ (e) => changeTiles(3, e.key)  } onChange={ (e) => updateLetter(3, e.target.value) } disabled={ disabled } css={ validationStyles[3] } />
            <Tile ref={ fifthLetter } value={ entry[4] || ""  } onKeyDown={ (e) => changeTiles(4, e.key)  } onChange={ (e) => updateLetter(4, e.target.value) } disabled={ disabled } css={ validationStyles[4] } />
        </FormRow>
    );
};

const KeySpan = styled("div", {
    display: "inline-block",
    width: "20px",
    height: "20px",
    textAlign: "center",
    border: "1px solid $onBackground",
    margin: "2px"
});

const Key = ({ letter, validationStyle }) => <KeySpan css={ validationStyle }>{ letter }</KeySpan>;

const Keyboard = ({ letters }) => {
    return (
        <div>
            <div>
                <Key letter="Q" validationStyle={ letters["Q"] } />
                <Key letter="W" validationStyle={ letters["W"] } />
                <Key letter="E" validationStyle={ letters["E"] } />
                <Key letter="R" validationStyle={ letters["R"] } />
                <Key letter="T" validationStyle={ letters["T"] } />
                <Key letter="Y" validationStyle={ letters["Y"] } />
                <Key letter="U" validationStyle={ letters["U"] } />
                <Key letter="I" validationStyle={ letters["I"] } />
                <Key letter="O" validationStyle={ letters["O"] } />
                <Key letter="P" validationStyle={ letters["P"] } />
            </div>
            <div>
                <Key letter="A" validationStyle={ letters["A"] } />
                <Key letter="S" validationStyle={ letters["S"] } />
                <Key letter="D" validationStyle={ letters["D"] } />
                <Key letter="F" validationStyle={ letters["F"] } />
                <Key letter="G" validationStyle={ letters["G"] } />
                <Key letter="H" validationStyle={ letters["H"] } />
                <Key letter="J" validationStyle={ letters["J"] } />
                <Key letter="K" validationStyle={ letters["K"] } />
                <Key letter="L" validationStyle={ letters["L"] } />
            </div>
            <div>
                <Key letter="Z" validationStyle={ letters["Z"] } />
                <Key letter="X" validationStyle={ letters["X"] } />
                <Key letter="C" validationStyle={ letters["C"] } />
                <Key letter="V" validationStyle={ letters["V"] } />
                <Key letter="B" validationStyle={ letters["B"] } />
                <Key letter="N" validationStyle={ letters["N"] } />
                <Key letter="M" validationStyle={ letters["M"] } />
            </div>
        </div>
    );
};

const Wordle = ({ encodedAnswer, existingData, step, submitAnswer }) => {
    const [ usedLetters, setUsedLetters ] = useState({});
    const [ isCorrect, setIsCorrect ] = useState(false);
    const [ nextRef, setNextRef ] = useState(null);
    const firstRow = useRef(null);
    const secondRow = useRef(null);
    const thirdRow = useRef(null);
    const fourthRow = useRef(null);
    const fifthRow = useRef(null);
    const sixthRow = useRef(null);
    
    async function onComplete(index, letters, validation) {
        setIsCorrect(await submitAnswer(letters.join("")));

        const newLetters = {
            ...usedLetters,
        };

        for (let i = 0; i < letters.length; ++i) {
            const letter = letters[i];

            if (newLetters[letter] !== correctPlaceStyle) {
                newLetters[letters[i]] = validation[i] || nonMatchStyle;
            }
        }

        setUsedLetters(newLetters);

        if (index === 5) {
            return;
        }

        const rowRefs = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow];

        rowRefs[index+1]?.current.focus();

        setNextRef(rowRefs[index+1]);
    }

    useEffect(() => {
        setNextRef(firstRow);
    }, []);

    return (
        <DailyPuzzleDiv onClick={ () => nextRef?.current.focus() }>
            <Row index={ 0 } answer={ encodedAnswer } existingData={ existingData[0] } onComplete={ onComplete } firstLetter={ firstRow } isCorrect={ isCorrect } setIsCorrect={ setIsCorrect } />
            <Row index={ 1 } answer={ encodedAnswer } existingData={ existingData[1] } onComplete={ onComplete } firstLetter={ secondRow } isCorrect={ isCorrect } setIsCorrect={ setIsCorrect } />
            <Row index={ 2 } answer={ encodedAnswer } existingData={ existingData[2] } onComplete={ onComplete } firstLetter={ thirdRow } isCorrect={ isCorrect } setIsCorrect={ setIsCorrect } />
            <Row index={ 3 } answer={ encodedAnswer } existingData={ existingData[3] } onComplete={ onComplete } firstLetter={ fourthRow } isCorrect={ isCorrect } setIsCorrect={ setIsCorrect } />
            <Row index={ 4 } answer={ encodedAnswer } existingData={ existingData[4] } onComplete={ onComplete } firstLetter={ fifthRow } isCorrect={ isCorrect } setIsCorrect={ setIsCorrect } />
            <Row index={ 5 } answer={ encodedAnswer } existingData={ existingData[5] } onComplete={ onComplete } firstLetter={ sixthRow } isCorrect={ isCorrect } setIsCorrect={ setIsCorrect } />
            <Keyboard letters={ usedLetters } />
        </DailyPuzzleDiv>
    );
};

export default Wordle;
