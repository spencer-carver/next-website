import React, { useState, useEffect } from "react";
import { CSS } from "@stitches/react";
import { styled } from "../../../styles/stitches";
import useStorage from "../../../utils/useStorage";

const Div = styled("div", {
    width: "80px",
    padding: "2px 0 0",
    margin: "10px auto",
    borderRadius: "10px",
    backgroundColor: "$background",
    border: "1px solid $onBackground",
    "@lg": {
        width: "160px"
    }
});

const activeStyles: CSS = {
    cursor: "pointer"
};

const Path = styled("path", {
    fill: "$background"
});
const Polygon = styled("polygon", {
    fill: "$background"
});
const Circle = styled("circle", {});

const segmentEnabled: CSS = {
    fill: "$error"
};

const LCD_SEGMENTS = [
    [1, 1, 1, 0, 1, 1, 1], // 0
    [0, 0, 1, 0, 0, 1, 0], // 1
    [1, 0, 1, 1, 1, 0, 1], // 2
    [1, 0, 1, 1, 0, 1, 1], // 3
    [0, 1, 1, 1, 0, 1, 0], // 4
    [1, 1, 0, 1, 0, 1, 1], // 5
    [1, 1, 0, 1, 1, 1, 1], // 6
    [1, 0, 1, 0, 0, 1, 0], // 7
    [1, 1, 1, 1, 1, 1, 1], // 8
    [1, 1, 1, 1, 0, 1, 1]  // 9
];

interface TimerProps {
    name: string;
    timeLimit: number;
    paused?: boolean;
    active?: boolean;
    onTimeout: () => void;
    onClick?: () => void;
}

const Timer = ({ name, timeLimit, active = true, paused, onTimeout, onClick }: TimerProps) => {
    const [ timeRemaining, setTimeRemaining ] = useState(timeLimit);
    const [ previousTimeRemaining, setPreviousTimeRemaining ] = useState(undefined);
    const storage = useStorage("puzzle");

    const minutesRemaining = Math.floor(timeRemaining / 60);
    const secondsRemaining = timeRemaining % 60;

    const minuteSegmentTens = LCD_SEGMENTS[Math.floor(minutesRemaining / 10)];
    const minuteSegmentOnes = LCD_SEGMENTS[minutesRemaining % 10];
    const secondSegmentTens = LCD_SEGMENTS[Math.floor(secondsRemaining / 10)];
    const secondSegmentOnes = LCD_SEGMENTS[secondsRemaining % 10];

    useEffect(() => {
        try {
            const previousValue = storage.getItem<string>(`${ name }-time`);

            if (Number.isNaN(parseInt(previousValue))) {
                throw new Error("not a valid previous value");
            }

            setPreviousTimeRemaining(parseInt(previousValue));
            setTimeRemaining(parseInt(previousValue));
        } catch (e) {
            setPreviousTimeRemaining(timeLimit);
        }
    }, [name, timeLimit, storage]);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (paused || !active) {
                return;
            }

            setTimeRemaining((tr) => {
                const newTimeRemaining = Math.max(0, tr - 1);

                if (!previousTimeRemaining) {
                    return newTimeRemaining;
                }

                try {
                    storage.setItem<number>(`${ name }-time`, Math.min(previousTimeRemaining, newTimeRemaining));
                } catch (e) {
                    //do nothing
                }

                return Math.min(previousTimeRemaining, newTimeRemaining);
            });
        }, 1000);
        return () => {
            clearInterval(countdown);
        };
    }, [paused, active, name, previousTimeRemaining, storage]);

    useEffect(() => {
        if (timeRemaining === 0) {
            onTimeout();

            return;
        }
    }, [timeRemaining, onTimeout]);

    const actionWord = timeRemaining === timeLimit ? "Begin" : "Resume";

    return (
        <Div
            title={ onClick && active ? `Click to ${ paused ? actionWord : "Pause" }` : undefined }
            onClick={ active ? onClick : undefined }
            css={ active ? activeStyles : {} }
        >
            <svg id='clock' viewBox='40 36 84 36' xmlns='http://www.w3.org/2000/svg'>
                <g id='seconds'>
                    <g>
                        <Path css={ secondSegmentOnes[6] && segmentEnabled } d='M106,69l3-3h6l3,3c0,0-1,1-3,1h-6C107,70,106,69,106,69z' />
                        <Path css={ secondSegmentOnes[5] && segmentEnabled } d='M119,55l-3,2v8l3,3c0,0,1-1,1-3v-7C120,56,119,55,119,55z' />
                        <Path css={ secondSegmentOnes[4] && segmentEnabled } d='M105,55l3,2v8l-3,3c0,0-1-1-1-3v-7C104,56,105,55,105,55z' />
                        <Polygon css={ secondSegmentOnes[3] && segmentEnabled } points='109,52 115,52 118,54 115,56 109,56 106,54' />
                        <Path css={ secondSegmentOnes[2] && segmentEnabled } d='M119,40l-3,3v8l3,2c0,0,1-1,1-3v-7C120,41,119,40,119,40z' />
                        <Path css={ secondSegmentOnes[1] && segmentEnabled } d='M105,40l3,3v8l-3,2c0,0-1-1-1-3v-7C104,41,105,40,105,40z' />
                        <Path css={ secondSegmentOnes[0] && segmentEnabled } d='M106,39l3,3h6l3-3c0,0-1-1-3-1h-6C107,38,106,39,106,39z' />
                    </g>
                    <g>
                        <Path css={ secondSegmentTens[6] && segmentEnabled } d='M88,69l3-3h6l3,3c0,0-1,1-3,1h-6C89,70,88,69,88,69z' />
                        <Path css={ secondSegmentTens[5] && segmentEnabled } d='M101,55l-3,2v8l3,3c0,0,1-1,1-3v-7C102,56,101,55,101,55z' />
                        <Path css={ secondSegmentTens[4] && segmentEnabled } d='M87,55l3,2v8l-3,3c0,0-1-1-1-3v-7C86,56,87,55,87,55z' />
                        <Polygon css={ secondSegmentTens[3] && segmentEnabled } points='91,52 97,52 100,54 97,56 91,56 88,54' />
                        <Path css={ secondSegmentTens[2] && segmentEnabled } d='M101,40l-3,3v8l3,2c0,0,1-1,1-3v-7C102,41,101,40,101,40z' />
                        <Path css={ secondSegmentTens[1] && segmentEnabled } d='M87,40l3,3v8l-3,2c0,0-1-1-1-3v-7C86,41,87,40,87,40z' />
                        <Path css={ secondSegmentTens[0] && segmentEnabled } d='M88,39l3,3h6l3-3c0,0-1-1-3-1h-6C89,38,88,39,88,39z' />
                    </g>
                </g>
                <g id='dots'>
                    <g>
                        <Circle css={ segmentEnabled } cx='82' cy='50' r='2' />
                        <Circle css={ segmentEnabled } cx='82' cy='58' r='2' />
                    </g>
                </g>
                <g id='minutes'>
                    <g>
                        <Path css={ minuteSegmentOnes[6] && segmentEnabled } d='M64,69l3-3h6l3,3c0,0-1,1-3,1h-6C65,70,64,69,64,69z' />
                        <Path css={ minuteSegmentOnes[5] && segmentEnabled } d='M77,55l-3,2v8l3,3c0,0,1-1,1-3v-7C78,56,77,55,77,55z' />
                        <Path css={ minuteSegmentOnes[4] && segmentEnabled } d='M63,55l3,2v8l-3,3c0,0-1-1-1-3v-7C62,56,63,55,63,55z' />
                        <Polygon css={ minuteSegmentOnes[3] && segmentEnabled } points='67,52 73,52 76,54 73,56 67,56 64,54' />
                        <Path css={ minuteSegmentOnes[2] && segmentEnabled } d='M77,40l-3,3v8l3,2c0,0,1-1,1-3v-7C78,41,77,40,77,40z' />
                        <Path css={ minuteSegmentOnes[1] && segmentEnabled } d='M63,40l3,3v8l-3,2c0,0-1-1-1-3v-7C62,41,63,40,63,40z' />
                        <Path css={ minuteSegmentOnes[0] && segmentEnabled } d='M64,39l3,3h6l3-3c0,0-1-1-3-1h-6C65,38,64,39,64,39z' />
                    </g>
                    <g>
                        <Path css={ minuteSegmentTens[6] && segmentEnabled } d='M46,69l3-3h6l3,3c0,0-1,1-3,1h-6C47,70,46,69,46,69z' />
                        <Path css={ minuteSegmentTens[5] && segmentEnabled } d='M59,55l-3,2v8l3,3c0,0,1-1,1-3v-7C60,56,59,55,59,55z' />
                        <Path css={ minuteSegmentTens[4] && segmentEnabled } d='M45,55l3,2v8l-3,3c0,0-1-1-1-3v-7C44,56,45,55,45,55z' />
                        <Polygon css={ minuteSegmentTens[3] && segmentEnabled } points='49,52 55,52 58,54 55,56 49,56 46,54' />
                        <Path css={ minuteSegmentTens[2] && segmentEnabled } d='M59,40l-3,3v8l3,2c0,0,1-1,1-3v-7C60,41,59,40,59,40z' />
                        <Path css={ minuteSegmentTens[1] && segmentEnabled } d='M45,40l3,3v8l-3,2c0,0-1-1-1-3v-7C44,41,45,40,45,40z' />
                        <Path css={ minuteSegmentTens[0] && segmentEnabled } d='M46,39l3,3h6l3-3c0,0-1-1-3-1h-6C47,38,46,39,46,39z' />
                    </g>
                </g>
            </svg>
        </Div>
    );
};

export default Timer;
