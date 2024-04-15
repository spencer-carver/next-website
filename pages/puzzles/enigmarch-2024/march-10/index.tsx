import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import Notification from "../../../../components/Notification";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/pokemon.png";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const P = styled("p", {
    color: "$onBackground",
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "200px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "301px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "700px",
        height: "468px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "800px",
        height: "534px",
        marginLeft: "-20px"
    },
    "@xxl": {
        width: "1000px",
        height: "668px",
        marginLeft: "-120px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-10">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <Notification css={{ marginBottom: "10px" }}>
                <P>Erattum (4/14/24): Corrected the the number of blanks for the entry containing the &quot;1&quot; and the direction for the arrow labeled &quot;Lv. 36&quot;.</P>
            </Notification>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A graph representing some odd connections." layout="fill" />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
