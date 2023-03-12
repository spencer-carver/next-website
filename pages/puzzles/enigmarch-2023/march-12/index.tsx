import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const Table = styled("table", {
    margin: "20px auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    width: "13px",
    height: "13px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    "@lg": {
        width: "30px",
        height: "30px"
    }
});

const NonvisibleDatum = styled("td", {
    width: "13px",
    height: "13px",
    "@lg": {
        width: "30px",
        height: "30px"
    }
});

const Clue = styled("li", {
    color: "$onBackground",
    marginBottom: "20px"
});

const CLUES = [
    "This tower, built by the same architectural firm as Chicago's tallest building, has competed back-and-forth with multiple buildings in China for the world's highest observation deck (11)",
    "This building was named one of the Seven Wonders of the Modern World in 1995 (7)",
    "These towers caused contention to the claim of 'Worlds Tallest Building' upon completion, due to the use of decorative spires counting in the total height, whereas the previous title holder did not count antennae. Answer is in the native language for the city (23)",
    "One of the four tallest structures in Europe, this iconic tower is often used as part of an 'establishing shot' to show where a film is taking place (16)",
    "This tower, also completed for a World's Fair, is the most visited monument with an entrance fee in the world (11)",
    "Built for a World's Fair, this observation tower was once the tallest building west of the Mississippi River (11)",
    "For the 160th anniversary of this tower, a sauce label depecting it updated their image to include scaffolding (6)",
    "This 'victory tower' is the tallest in the world made from brick (9)",
    "In 1925 a severe earthquake hit this location, leaving only one in one hundred buildings standing, but these towers were undamaged (12)",
    "Dating back to the 12th century, this tower is on the UNESCO's list of world heritage in danger (12)",
    "This structure was closed to tourists for over 10 years due to a massive repair initiative that successfully saved the building after two previous failed attempts (18)",
    "This town, famous for it's preserved medieval architecture, contains a number of towers exhibiting Romanesque and Gothic architecture (12)",
    "This Obelisk was taken in 1937 by occupying Italian forces and eventually returned, then re-erected in 2008 (13)"
];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-12">
            <Table>
                    <tbody>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /></tr>
                        
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                        <tr><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><Datum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /><NonvisibleDatum /></tr>
                    </tbody>
                </Table>
                <ul style={{ textAlign: "left" }}>
                    { CLUES.map((clue, index) => <Clue key={ index }>{ clue }</Clue>) }
                </ul>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
