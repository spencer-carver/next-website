import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-13">
            <P>Swimming deep the diver named Dave,</P>
            <P>Net the Tunny and drone away,</P>
            <P>Many depths he will have to brave.</P>
            <br />
            <P>A small light inside of a cave,</P>
            <P>Defeat the lure, don&apos;t make him prey,</P>
            <P>Swimming deep the diver named Dave.</P>
            <br />
            <P>A void-like maze, light he must crave,</P>
            <P>A trapped rank 5 to make his day,</P>
            <P>Many depths he will have to brave.</P>
            <br />
            <P>To the tunnel made gadon grave,</P>
            <P>Another catch, ears on display,</P>
            <P>Swimming deep the diver named Dave.</P>
            <br />
            <P>Among the ice there&apos;s a close shave,</P>
            <P>Translucent fish against the gray,</P>
            <P>Many depths he will have to brave.</P>
            <br />
            <P>On the floor, arthropod to save,</P>
            <P>Six fish he caught and now must weigh.</P>
            <P>Swimming deep the diver named Dave,</P>
            <P>Many depths he has had to brave.</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
