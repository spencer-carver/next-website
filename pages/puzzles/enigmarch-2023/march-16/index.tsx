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
    color: "$onBackground",
    border: "1px solid transparent",
    textAlign: "left"
});

const nameStyles: CSS = {
    width: "250px",
    letterSpacing: "1px"
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-16">
            <Table>
                    <tbody>
                        <tr>
                            <Datum css={ nameStyles }>███████ ████████<Emphasis>█</Emphasis>█</Datum>
                            <Datum>Gingerbread with almond macarons and orange tuiles</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>██<Emphasis>█</Emphasis>█████ ███████</Datum>
                            <Datum>Gingerbread with shards of strawberry and elderflower sugar biscuits and white chocolate roses</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>██████<Emphasis>█</Emphasis>█ ████</Datum>
                            <Datum>Gingerbread with macarons, brandy snaps, and sezchuan pepper sugar biscuits</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>███████<Emphasis>█</Emphasis> ████</Datum>
                            <Datum>Brandysnaps with coffee italian merangue buttercream and spiced fortune cookies</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>████<Emphasis>█</Emphasis>-██████ ████████</Datum>
                            <Datum>Gingerbread with sumac shortbread and tahini & sesame biscuits</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>███████<Emphasis>█</Emphasis> ████</Datum>
                            <Datum>Gingerbread with coconut and lemon shortbread</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>██████ <Emphasis>█</Emphasis>█████████</Datum>
                            <Datum>Gingerbread and whisky-snaps</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>██████<Emphasis>█</Emphasis>███</Datum>
                            <Datum>Coconut and lime biscuit with macadamia florentines and cardamom tuiles</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>███████-█<Emphasis>█</Emphasis>██ ████</Datum>
                            <Datum>Gingerbread with lemon shortbread and a rice paper crown</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }>███<Emphasis>█</Emphasis>██ ████</Datum>
                            <Datum>Spiced polish biscuit with matcha and vanilla shortbread and strawberry sugar biscuits</Datum>
                        </tr>
                        <tr>
                            <Datum css={ nameStyles }><Emphasis>█</Emphasis>██ ████, ███ ████</Datum>
                            <Datum>Lemon and Jasmine Gingerbread with chocolate sandwich biscuits, orange, rose, and pistacho shortbread, and a crown of pistachio and rose macarons</Datum>
                        </tr>
                    </tbody>
                </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
