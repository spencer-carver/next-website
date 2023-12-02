import React from "react";
import { styled } from "../../../styles/stitches";

const Div = styled("div", {
    color: "$onBackground",
});

const Timer = ({ timeLimit }: { timeLimit: number }) => {
    return (
        <Div>
            TIMER: { timeLimit }
        </Div>
    );
};

export default Timer;