import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const Table = styled("table", {
    margin: "20px auto 0",
    borderCollapse: "collapse",
    borderSpacing: "0px"
});

const Datum = styled("td", {
    height: "25px",
    width: "140px",
    color: "$onBackground",
    border: "1px solid transparent",
    textAlign: "right",
    fontSize: "12px",
    fontFamily: "monospace",
    "@lg": {
        width: "210px",
        fontSize: "20px"
    }
});

const ListItem = styled("li", {
    color: "$onBackground",
    fontSize: "14px",
    fontFamily: "monospace",
    "@lg": {
        fontSize: "20px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-27">
            <Table>
                <tbody>
                    <tr><Datum>[ ].[ ],[13].[ ]</Datum><Datum css={{ width: "20px" }}>=</Datum><Datum>[1].[2].[3]</Datum></tr>
                    <tr><Datum>[ ].[14],[ ].[ ]</Datum><Datum css={{ width: "20px" }}>=</Datum><Datum>[4].[5].[6]</Datum></tr>
                    <tr><Datum>[ ].[ ],[15].[ ]</Datum><Datum css={{ width: "20px" }}>=</Datum><Datum>[7].[8].[9]</Datum></tr>
                    <tr><Datum>[ ].[16],[ ].[ ]</Datum><Datum css={{ width: "20px" }}>=</Datum><Datum>[10].[11].[12]</Datum></tr>
                    <tr><Datum>[13].[14],[15].[16]</Datum><Datum css={{ width: "20px" }}>=</Datum><Datum css={{ color: "$primary" }}>[?].[?].[?]</Datum></tr>
                </tbody>
            </Table>
            <ul style={{ listStyle: "none" }}>
                <ListItem>1. FARM COUNTRY RESOURCES (9)</ListItem>
                <ListItem>2. OFFER TO HELP (9)</ListItem>
                <ListItem>3. WEEKEND WARRIOR&apos;S GAME? (9)</ListItem>
                <ListItem>4. FULL OF CHUTZPAH (5)</ListItem>
                <ListItem>5. EDGES OF BREAD (6)</ListItem>
                <ListItem>6. DIDN&apos;T SIT STILL (8)</ListItem>
                <ListItem>7. MEASUREABLE BY NUMBERS (9)</ListItem>
                <ListItem>8. FUNCTIONARIES, RULES ADMINISTRATORS (9)</ListItem>
                <ListItem>9. THWACKED BUT GOOD (6)</ListItem>
                <ListItem>10. SOME REAL THING (6)</ListItem>
                <ListItem>11. ARMING ALL AROUND (7)</ListItem>
                <ListItem>12. FLUFFY PASTRY FROSTING (11)</ListItem>
            </ul>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
