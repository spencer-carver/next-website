import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import Image from "../../../../components/Image";
import { styled } from "../../../../styles/stitches";
import { PuzzleRounds } from "../../../../constants/Puzzle";

const TITLE = "Four Elements";
const DESCRIPTION = "Without the fire scroll, how will we decipher the answer?";
const NAME = "alchemy:four-elements";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "205px",
    margin: "0 auto 20px",
    "&:last-of-type": {
        marginBottom: "0px"
    },
    "@sm": {
        width: "360px",
        height: "240px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "353px",
        marginLeft: "-100px"
    },
    "@lg": {
        marginLeft: "auto"
    },
    "@xl": {
        width: "760px",
        height: "537px"
    }
});

const WrapperDiv = styled("div", {
    position: "relative",
    color: "$onBackground",
    marginBottom: "20px"
});

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    width: "24px",
    height: "24px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    "@lg": {
        width: "50px",
        height: "50px",
        fontSize: "30px"
    }
});

const UpArrowSpan = styled("span", {
    position: "absolute",
    top: "-3px",
    right: "3px",
    "@lg": {
        top: "-5px",
        right: "5px"
    }
});

const DownArrowSpan = styled("span", {
    position: "absolute",
    left: "3px",
    bottom: "2px",
    "@lg": {
        left: "5px",
        bottom: "5px"
    }
});

const LineDiv = styled("div", {
    width: "38px",
    height: "1px",
    borderBottom: "1px solid $onBackground",
    transform: "translateY(-1px) translateX(-7px) rotate(45deg)",
    position: "absolute",
    "@lg": {
        width: "73px",
        transform: "translateY(-1px) translateX(-11px) rotate(45deg)",
    }
});

const AnswerSpan = styled("div", {
    margin: "20px auto",
    color: "$onBackground",
    fontSize: "42px",
    textAlign: "center",
    "@lg": {
        fontSize: "96px",
        margin: "40px auto"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            <ImageWrapperDiv>
                <Image src="/puzzles/alchemy/four/air.png" alt="An airbending scroll" layout="fill" />
            </ImageWrapperDiv>
            <WrapperDiv>Airbending forms move with the wind.</WrapperDiv>
            <ImageWrapperDiv>
                <Image src="/puzzles/alchemy/four/water.png" alt="A waterbending scroll" layout="fill" />
            </ImageWrapperDiv>
            <WrapperDiv>The language of waterbending ebbs and flows.</WrapperDiv>
            <ImageWrapperDiv>
                <Image src="/puzzles/alchemy/four/earth.png" alt="An earthbending scroll" layout="fill" />
            </ImageWrapperDiv>
            <WrapperDiv>Can you find the key to the earthbending forms?</WrapperDiv>
            <WrapperDiv>
                <Table>
                    <tbody>
                        <tr><Datum css={{ position: "relative" }}><DownArrowSpan>↓</DownArrowSpan><UpArrowSpan>↑</UpArrowSpan><LineDiv /></Datum><Datum /><Datum /><Datum /><Datum /></tr>
                        <tr><Datum /><Datum>U</Datum><Datum>W</Datum><Datum>G</Datum><Datum>S</Datum></tr>
                        <tr><Datum /><Datum>I</Datum><Datum>O</Datum><Datum>R</Datum><Datum>D</Datum></tr>
                        <tr><Datum /><Datum>T</Datum><Datum>L</Datum><Datum>C</Datum><Datum>N</Datum></tr>
                        <tr><Datum /><Datum>M</Datum><Datum>K</Datum><Datum>E</Datum><Datum>A</Datum></tr>
                    </tbody>
                </Table>
            </WrapperDiv>
            <AnswerSpan>䷇䷿䷤䷣䷯䷱䷓䷆</AnswerSpan>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
