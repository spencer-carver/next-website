import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-13">
            <P>Swimming deep the diver Dave,</P>
            <P>Net the Tunny and drone away,</P>
            <P>Many depths he&apos;ll have to brave.</P>
            <br />
            <P>See the light within a cave,</P>
            <P>Defeat the lure, don&apos;t become prey,</P>
            <P>Swimming deep the diver Dave.</P>
            <br />
            <P>Void-like maze with path to crave,</P>
            <P>A trapped rank 5 to make his day,</P>
            <P>Many depths he&apos;ll have to brave.</P>
            <br />
            <P>Gadon tunnel turned to grave,</P>
            <P>Another catch, ears to display,</P>
            <P>Swimming deep the diver Dave.</P>
            <br />
            <P>Glacial beasts cause a close shave,</P>
            <P>Translucent fish against the gray,</P>
            <P>Many depths he&apos;ll have to brave.</P>
            <br />
            <P>Ancient arthropod to save,</P>
            <P>Six fish he caught and now must weigh.</P>
            <P>Swimming deep the diver Dave,</P>
            <P>Many depths he had to brave.</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
