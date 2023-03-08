import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground"
});

const Emphasis = styled("span", {
    color: "$secondary"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-8">
            <P>&quot;My name is Buck, and I&apos;m here to <Emphasis>█</Emphasis>████.&quot;</P>
            <P>&quot;You are a ███████<Emphasis>█</Emphasis>█. That&apos;s all you are, you&apos;re a █████████.&quot;</P>
            <P>&quot;This town&apos;s like a great big ███████, just waitin&apos; to get ██<Emphasis>█</Emphasis>████.&quot;</P>
            <P>&quot;I have had it with these <Emphasis>█</Emphasis>█████-███████&apos; snakes on this ██████-██-██████ plane!&quot;</P>
            <P>&quot;Yippee ki-yay, ██████ ███<Emphasis>█</Emphasis>██.&quot;</P>
            <P>&quot;This is what happens when you ████ a stranger in the <Emphasis>█</Emphasis>███!&quot;</P>
            <P>&quot;Pardon my French, but you&apos;re an ███████<Emphasis>█</Emphasis>!&quot;</P>
            <P>&quot;████<Emphasis>█</Emphasis>█ me? ██████ you, you mother-█████████!&quot;</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
