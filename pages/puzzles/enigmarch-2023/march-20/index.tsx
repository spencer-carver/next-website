import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const Table = styled("table", {
    margin: "20px auto 0",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    height: "25px",
    color: "$onBackground",
    border: "1px solid transparent",
    textAlign: "left",
    "@md": {
        paddingRight: "20px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-20">
            <Table>
                <tbody>
                    <tr><Datum>3. ARMY</Datum></tr>
                    <tr><Datum>5. GAGGLE</Datum></tr>
                    <tr><Datum>4. SKULK</Datum></tr>
                    <tr><Datum>4. FLUFFLE</Datum></tr>
                    <tr><Datum>8. OBSTINACY</Datum></tr>
                    <tr><Datum>2. PRICKLE</Datum></tr>
                    <tr><Datum>1. PANDEMONIUM</Datum></tr>
                    <tr><Datum>2. TRIBE</Datum></tr>
                    <tr><Datum>1. DAZZLE</Datum></tr>
                    <tr><Datum>3. KALEIDOSCOPE</Datum></tr>
                    <tr><Datum>7. SCURRY</Datum></tr>
                    <tr><Datum>4. CONGREGATION</Datum></tr>
                    <tr><Datum>3. PRIDE</Datum></tr>
                    <tr><Datum>1. CONGRESS</Datum></tr>
                    <tr><Datum>6. KETTLE</Datum></tr>
                </tbody>
            </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
