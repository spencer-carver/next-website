import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground"
});

const Word = styled("span", {
    letterSpacing: "1px"
});

const Emphasis = styled("span", {
    color: "$secondary"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-8">
            <P>&quot;My name is Buck, and I&apos;m here to <Word><Emphasis>█</Emphasis>████</Word>.&quot;</P>
            <P>&quot;You are a <Word>███████<Emphasis>█</Emphasis>█</Word>. That&apos;s all you are, you&apos;re a <Word>█████████</Word>.&quot;</P>
            <P>&quot;This town&apos;s like a great big <Word>███████</Word>, just waitin&apos; to get <Word>██<Emphasis>█</Emphasis>████</Word>.&quot;</P>
            <P>&quot;I have had it with these <Word><Emphasis>█</Emphasis>█████-███████</Word>&apos; snakes on this <Word>██████-██-██████</Word> plane!&quot;</P>
            <P>&quot;Yippee ki-yay, <Word>██████</Word> <Word>███<Emphasis>█</Emphasis>██</Word>.&quot;</P>
            <P>&quot;This is what happens when you <Word>████</Word> a stranger in the <Word><Emphasis>█</Emphasis>███</Word>!&quot;</P>
            <P>&quot;Pardon my French, but you&apos;re an <Word>███████<Emphasis>█</Emphasis></Word>!&quot;</P>
            <P>&quot;<Word>████<Emphasis>█</Emphasis>█</Word> me? <Word>██████</Word> you, you mother-<Word>█████████</Word>!&quot;</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
