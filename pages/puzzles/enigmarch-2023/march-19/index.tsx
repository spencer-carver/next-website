import React, { FunctionComponent } from "react";
import Notification from "../../../../components/Notification";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground",
    margin: "0",
    display: "block",
    marginBottom: "5px",
    paddingLeft: "5px",
    textAlign: "left"
});

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
        <PuzzleWrapperComponent name="enigmarch-2023:march-19">
            <Notification css={{ marginBottom: "10px" }}>
                <P>Erattum (4/28/24): Corrected the value equation for THE RIVER.</P>
            </Notification>
            <Table>
                <thead>
                    <tr style={{ fontWeight: "bold" }}>
                        <Datum>Region</Datum>
                        <Datum>Diameter</Datum>
                        <Datum>Order</Datum>
                        <Datum>Value</Datum>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Datum>THE HUNTING DOGS</Datum>
                        <Datum>XZZ - YZZ h⁻¹ Mpc</Datum>
                        <Datum>X-Z+2</Datum>
                        <Datum>2Y+Z-1</Datum>
                    </tr>
                    <tr>
                        <Datum>THE HERDSMAN</Datum>
                        <Datum>XYZ h⁻¹ Mpc</Datum>
                        <Datum>4X+3-Z</Datum>
                        <Datum>2X+Y+2</Datum>
                    </tr>
                    <tr>
                        <Datum>THE WATER-CARRIER</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>Z-X-1</Datum>
                        <Datum>Z/2+Y</Datum>
                    </tr>
                    <tr>
                        <Datum>THE FURNACE</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>Y+Z</Datum>
                        <Datum>Y-X+Z</Datum>
                    </tr>
                    <tr>
                        <Datum>THE WHALE</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>Y+Z-1</Datum>
                        <Datum>X</Datum>
                    </tr>
                    <tr>
                        <Datum>THE SCULPTOR</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>X</Datum>
                        <Datum>(Z-1)/Y</Datum>
                    </tr>
                    <tr>
                        <Datum>THE PHOENIX</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>3X+Z-1</Datum>
                        <Datum>X+Y</Datum>
                    </tr>
                    <tr>
                        <Datum>THE WINGED HORSE</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>X-Y-1</Datum>
                        <Datum>(X+Z/2)-1</Datum>
                    </tr>
                    <tr>
                        <Datum>THE RIVER</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>Y+1</Datum>
                        <Datum>X-Z+1</Datum>
                    </tr>
                    <tr>
                        <Datum>THE HORNED GOAT</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>X+Y-Z</Datum>
                        <Datum>X+Z-Y-1</Datum>
                    </tr>
                    <tr>
                        <Datum>THE SCULPTOR</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>X+Z+1</Datum>
                        <Datum>Y</Datum>
                    </tr>
                    <tr>
                        <Datum>THE BULL</Datum>
                        <Datum>XY.Z h⁻¹ Mpc</Datum>
                        <Datum>3X-Z</Datum>
                        <Datum>X+Y</Datum>
                    </tr>
                </tbody>
            </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
