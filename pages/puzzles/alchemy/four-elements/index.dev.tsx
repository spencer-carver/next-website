import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";
import { PuzzleRounds } from "../../../../constants/Puzzle";

const TITLE = "Four Elements";
const DESCRIPTION = "";
const NAME = "alchemy:four-elements";

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            TBD
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
