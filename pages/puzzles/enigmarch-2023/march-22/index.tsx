import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";

const Emphasis = styled("span", {
    color: "$secondary"
});

const Table = styled("table", {
    margin: "20px auto 0",
    borderCollapse: "collapse",
    borderSpacing: "0px"
});

const Datum = styled("td", {
    height: "25px",
    width: "40px",
    color: "$onBackground",
    border: "1px solid transparent",
    textAlign: "right",
    "@lg": {
        height: "40px",
        width: "60px",
        fontSize: "24px"
    }
});

const nameStyles: CSS = {
    width: "unset",
    letterSpacing: "1px",
    textAlign: "left",
    paddingLeft: "10px"
};

const Footnote = styled("div", {
    color: "$onBackground",
    marginTop: "30px"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-22">
            <Table>
                    <tbody>
                        <tr>
                            <Datum>🥇🇫🇮</Datum>
                            <Datum css={ nameStyles }>██<Emphasis>█</Emphasis> ███ ███</Datum>
                        </tr>
                        <tr>
                            <Datum>🇮🇸</Datum>
                            <Datum css={ nameStyles }><Emphasis>█</Emphasis>████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇦🇺</Datum>
                            <Datum css={ nameStyles }><Emphasis>█</Emphasis>██████</Datum>
                        </tr>
                        <tr>
                            <Datum>🥈🇦🇹</Datum>
                            <Datum css={ nameStyles }>███ ███ ██<Emphasis>█</Emphasis>█ ██ █████?</Datum>
                        </tr>
                        <tr>
                            <Datum>🥉🇫🇷</Datum>
                            <Datum css={ nameStyles }>████<Emphasis>█</Emphasis>█████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇮🇱</Datum>
                            <Datum css={ nameStyles }><Emphasis>█</Emphasis>██████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇲🇩</Datum>
                            <Datum css={ nameStyles }>█<Emphasis>█</Emphasis>█████ ██ ████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇳🇱</Datum>
                            <Datum css={ nameStyles }><Emphasis>█</Emphasis>██████ ████████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇩🇪</Datum>
                            <Datum css={ nameStyles }><Emphasis>█</Emphasis>████ & ███████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇦🇲</Datum>
                            <Datum css={ nameStyles }>██████ <Emphasis>█</Emphasis>████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇨🇿</Datum>
                            <Datum css={ nameStyles }>██ ████<Emphasis>█</Emphasis>█&apos;█ █████</Datum>
                        </tr>
                        <tr>
                            <Datum>🇵🇹</Datum>
                            <Datum css={ nameStyles }>██ ██<Emphasis>█</Emphasis>████</Datum>
                        </tr>
                    </tbody>
                </Table>
                <Footnote>(Not part of the puzzle, but my top 3 choices are labeled!)</Footnote>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
