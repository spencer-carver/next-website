import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const LI = styled("li", {
    color: "$onBackground",
    fontSize: "20px",
    paddingBottom: "5px",
    listStyle: "none"
});

const CLUES = [
    "The Cold Queen's Frozen Putter [5]",
    "Candystripe Putter [5]",
    "Clawed Putter [4]",
    "The Iron Matron [2]",
    "Omnitool Putter [2]",
    "Gnarled Staff Putter [2]",
    "Nan's Special Putter [2]",
    "The Putter of Queen Amytis [6]",
    "The Widow's Wail [3]",
    "A Putter crafted by Eduwar the Smith [5]",
    "Captain Fawke's Saber [4]",
    "The Sacred Putter of Isis [4]",
    "Highland Lotus Putter [3]",
    "Cave Staff Putter [4]",
    "Ol' Bogey's Lariat Putter [7]",
    "Xavier O. Ferrara's Personal Putter [3]",
    "Bamboo Putter [4]",
    "International Traveler Putter [6]"
];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-18">
            <ul>
                { CLUES.map((clue, index) => <LI key={ index }>{ clue }</LI>) }
            </ul>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;