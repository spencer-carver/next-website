import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground",
    margin: "0 auto 20px",
    "@lg": {
        width: "500px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-14">
            <P>🏃‍♂️: ██🥈 ███████🥈</P>
            <P>🏊‍♀️: █████ ██🥈██</P>
            <P>🏊‍♂️: ████🥈██ ███🥈█</P>
            <P>🏃‍♂️: ███ ████🥈█</P>
            <P>🏊‍♂️: 🥈🥈██ ████████</P>
            <P>🏃‍♂️: 🥈██████ █████████</P>
            <P>🚴🚴🚴🚴: █████ ██████ ██████, ██████ ██████, ████████ █████████, ██████ 🥈███████</P>
            <P>🏃‍♀️: ███🥈███ ███████🥈</P>
            <P>🏊‍♀️: █████🥈█ ██████🥈</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
