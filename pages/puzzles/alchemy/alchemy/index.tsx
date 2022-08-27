import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";
import { Meta } from "../../../../components/Puzzle/circles";
import { PuzzleRounds } from "../../../../constants/Puzzle";

const metaStyles: CSS = {
    opacity: "0.6",
    width: "320px",
    height: "300px",
    top: "0",
    left: "0",
    "@lg": {
        width: "640px",
        height: "600px",
        left: "75px"
    }
};

const Table = styled("table", {
    position: "absolute",
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    top: "27px",
    left: "36px",
    "@lg": {
        top: "54px",
        left: "141px"
    }
});

const Datum = styled("td", {
    width: "23px",
    height: "36px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    "@lg": {
        width: "50px",
        height: "76px",
        fontSize: "30px"
    }
});

const FeederList = styled("ul", {
    position: "absolute",
    bottom: "0",
    listStyle: "none",
    color: "$onBackground",
    textTransform: "uppercase",
    textAlign: "left"
});

const PuzzleComponent: FunctionComponent = () => {
    const [ fourElementsAnswer, setFourElementsAnswer ] = useState("");
    const [ fiveElementsAnswer, setFiveElementsAnswer ] = useState("");
    const [ sixElementsAnswer, setSixElementsAnswer ] = useState("");
    const [ sevenElementsAnswer, setSevenElementsAnswer ] = useState("");

    useEffect(() => {
        setFourElementsAnswer(localStorage.getItem("alchemy:four-elements"));
        setFiveElementsAnswer(localStorage.getItem("alchemy:five-elements"));
        setSixElementsAnswer(localStorage.getItem("alchemy:six-elements"));
        setSevenElementsAnswer(localStorage.getItem("alchemy:seven-elements"));
    }, []);

    return (
        <PuzzleWrapperComponent name="alchemy:alchemy">
            <div style={{ position: "relative", height: "60vh" }}>
                <Meta css={ metaStyles } />
                <Table>
                    <tbody>
                        <tr><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /></tr>
                        <tr><Datum css={{ borderLeft: "1px solid transparent", borderBottom: "1px solid transparent" }} /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum css={{ borderRight: "1px solid transparent", borderBottom: "1px solid transparent" }} /></tr>
                        <tr><Datum css={{ borderLeft: "1px solid transparent", borderBottom: "1px solid transparent" }} /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum css={{ borderRight: "1px solid transparent", borderBottom: "1px solid transparent" }} /><Datum css={{ border: "1px solid transparent" }} /></tr>
                        <tr><Datum css={{ borderLeft: "1px solid transparent" }} /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum css={{ borderRight: "1px solid transparent" }} /><Datum css={{ border: "1px solid transparent" }} /></tr>
                        <tr><Datum>C</Datum><Datum css={{ borderBottom: "1px solid transparent", borderRight: "1px solid transparent" }} /><Datum css={{ borderBottom: "1px solid transparent", borderRight: "1px solid transparent" }} /><Datum css={{ borderBottom: "1px solid transparent", borderRight: "1px solid transparent" }} /><Datum css={{ borderBottom: "1px solid transparent", borderRight: "1px solid transparent" }} /><Datum css={{ borderBottom: "1px solid transparent", borderRight: "1px solid transparent" }} /><Datum css={{ borderBottom: "1px solid transparent", borderRight: "1px solid transparent" }} /><Datum css={{ borderBottom: "1px solid transparent" }} /><Datum>T</Datum><Datum css={{ border: "1px solid transparent" }} /></tr>
                    </tbody>
                </Table>
                <FeederList>
                    <li>{ fourElementsAnswer }</li>
                    <li>{ fiveElementsAnswer }</li>
                    <li>{ sixElementsAnswer }</li>
                    <li>{ sevenElementsAnswer }</li>
                    <br />
                    <span style={{ textTransform: "initial" }}>Each alchemist reached their namesake creature.</span>
                </FeederList>
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
