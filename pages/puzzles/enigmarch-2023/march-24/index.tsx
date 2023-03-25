import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const ListItem = styled("li", {
    fontFamily: "monospace",
    listStyle: "none",
    color: "$onBackground",
    fontSize: "11px",
    "@md": {
        fontSize: "16px"
    }
});

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    height: "30px",
    width: "30px",
    fontSize: "6px",
    color: "$onBackground",
    border: "1px solid transparent",
    textAlign: "left",
    fontFamily: "monospace",
    "@lg": {
        height: "68px",
        width: "68px",
        fontSize: "16px"
    },
    "&:hover": {
        cursor: "pointer",
        color: "$onPrimary",
        backgroundColor: "$primary"
    }
});

const spacer1Style: CSS = {
    width: "10px",
    borderTop: "0",
    "@lg": {
        width: "10px"
    },
    "&:hover": {
        cursor: "default",
        color: "$onBackground",
        backgroundColor: "transparent"
    }
};

const spacer2Style: CSS = {
    width: "45px",
    borderTop: "0",
    "@lg": {
        width: "45px"
    },
    "&:hover": {
        cursor: "default",
        color: "$onBackground",
        backgroundColor: "transparent"
    }
};

const LINE_1 = "q N S J|Y b T t|s Q D U|w X C l|O I R k|e J O h|x i h N|F I I E|b y L y|Z Y Z c";
const LINE_2 = "R m M B|O Z x P|b x B i|P b y D|B q Z I|r B q E|B k P E|f C Q Y|v H B V";
const LINE_3 = "b N N j|k X e N|G B i I|Y s s D|z C c y|W B u T|C F W H";

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-24">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the text clearly!!!" }</WarningDiv>
            <ul style={{ marginTop: "20px", paddingInlineStart: "0" }}>
                <ListItem>SORBONNE CHAPEL, PARIS, FRANCE</ListItem>
                <ListItem>TEMPLE OF THE COMET STAR, ROME, ITALY</ListItem>
                <ListItem>ST MICHAEL&apos;S CHURCH, HERTFORDSHIRE, ENGLAND</ListItem>
            </ul>
            <Table css={{ marginTop: "20px" }}>
                <tbody>
                    <tr>{ LINE_1.split("|").map((letter, index) => <Datum key={ index }>{ letter }</Datum>) }</tr>
                </tbody>
            </Table>
            <Table>
                <tbody>
                    <tr>{ LINE_2.split("|").map((letter, index) => <Datum key={ index } css={{ borderTop: "0" }}>{ letter }</Datum>) }<Datum css={ spacer1Style } /></tr>
                </tbody>
            </Table>
            <Table>
                <tbody>
                    <tr>{ LINE_3.split("|").map((letter, index) => <Datum key={ index } css={{ borderTop: "0" }}>{ letter }</Datum>) }<Datum css={ spacer2Style } /></tr>
                </tbody>
            </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
