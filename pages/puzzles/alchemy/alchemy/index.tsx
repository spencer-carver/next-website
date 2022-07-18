import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";
import { Meta } from "../circles";
import { PuzzleRounds } from "../../../../constants/Puzzle";

const TITLE = "Alchemy";
const DESCRIPTION = "Find your inner fire.";
const NAME = "alchemy:alchemy";

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

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            <div style={{ position: "relative" }}>
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
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
