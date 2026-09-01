import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const RowDiv = styled("div", {
    height: "50px",
    textAlign: "left"
});

const Row: FunctionComponent<{ description: string }> = ({ description }) => {
    return (
        <RowDiv>
            { description }
        </RowDiv>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="franca-lingua">
            <div style={{ marginTop: "50px" }}>
                <Row description="🇧🇷 A cais crê pera as flores laicas brancas ande copra livres. [2, 5]" />
                <Row description="🇩🇪 Er ruf flotts aber er haus in der dessert, arrangiert er rund er zentral fontäne. [6, 12]" />
                <Row description="🇳🇱 Een interieur voor is 't of mus roem kolommen in een stroomlijn de façade. [15, 16]" />
                <Row description="🇮🇹 Gol spira estende forma blu rufo tu spanna valli. [2, 3]" />
                <Row description="🇪🇸 A glas en estilo pira mide glosa laica vi con. [2, 18]" />
                <Row description="🇹🇷 E de sert kamp haz e kanvas ruh o ver ret bi̇ms. [5, 6]" />
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
