import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/minecraft.png";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "268px",
    height: "441px",
    margin: "0 auto"
});

const SignText = styled("p", {
    color: "white",
    fontSize: "14px",
    fontWeight: "bold",
    width: "120px",
    position: "absolute",
    letterSpacing: "2px",
    top: "20px",
    left: "65px",
    transform: "skew(0deg, 26deg)"
});

const VersionText = styled("p", {
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    position: "absolute",
    letterSpacing: "10px",
    bottom: "25px",
    left: "50px"
});

const ENTRIES = [{
    version: "?.[?].?",
    note: "Tamed cats no longer slide around while sitting"
},{
    version: "?.?.[?]",
    note: "Fish now attempt to avoid axolotls"
},{
    version: "?.[?].?",
    note: "Horses no longer become invisible after being dismounted"
}, {
    version: "?.?.[?]",
    note: "Players can now use emotes while standing on scaffolding"
}];

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-5">
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "40px" }}>
             <ImageWrapperDiv>
                    <Image src={ SRC } alt="A sign from Minecraft sitting atop a bedrock block" layout="fill" />
                    <SignText css={{ top: "30px" }}>{ENTRIES[0].note}</SignText>
                    <VersionText>{ENTRIES[0].version}</VersionText>
                </ImageWrapperDiv>
                <ImageWrapperDiv>
                    <Image src={ SRC } alt="A sign from Minecraft sitting atop a bedrock block" layout="fill" />
                    <SignText css={{ top: "36px" }}>{ENTRIES[1].note}</SignText>
                    <VersionText>{ENTRIES[1].version}</VersionText>
                </ImageWrapperDiv>
                <ImageWrapperDiv>
                    <Image src={ SRC } alt="A sign from Minecraft sitting atop a bedrock block" layout="fill" />
                    <SignText>{ENTRIES[2].note}</SignText>
                    <VersionText>{ENTRIES[2].version}</VersionText>
                </ImageWrapperDiv>
                <ImageWrapperDiv>
                    <Image src={ SRC } alt="A sign from Minecraft sitting atop a bedrock block" layout="fill" />
                    <SignText>{ENTRIES[3].note}</SignText>
                    <VersionText>{ENTRIES[3].version}</VersionText>
                </ImageWrapperDiv>
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
