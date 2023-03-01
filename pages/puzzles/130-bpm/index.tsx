import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import AudioTrack from "../../../components/Audio";
import { styled } from "../../../styles/stitches";

const ContentDiv = styled("div", {
    textAlign: "left",
    margin: "0 30px",
    padding: "20px 0 50px"
});
const SongsDiv = styled("div", {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center"
});

const songStyles: CSS = {
    display: "block",
    marginBottom: "10px"
};

const SecretSpan = styled("span", {
    color: "$background",
    margin: "10px 0",
    cursor: "pointer"
});

const PuzzleComponent: FunctionComponent = () => {
    const [showClickTrack, setShowClickTrack] = useState(false);
    const song = useRef<HTMLAudioElement>(null);
    const clickTrack = useRef<HTMLAudioElement>(null);

    const showSecondTrack = useCallback(() => {
        setShowClickTrack(true);
    }, []);

    return (
        <PuzzleWrapperComponent name="130-bpm">
            <ContentDiv>
                <SongsDiv>
                    <AudioTrack
                        ref={ song }
                        audioStyles={ songStyles }
                        src="/puzzles/130-bpm/130%20BPM.mp3"
                        subtitleSrc="/puzzles/130-bpm/130%20BPM.vtt"
                    />
                    <SecretSpan onClick={ showSecondTrack } css={ showClickTrack ? { color: "$onBackground" } : {} } title={ showClickTrack ? "hope this helps!" : "a secret?" }>trouble keeping time?</SecretSpan>
                    <AudioTrack
                        ref={ clickTrack }
                        audioStyles={{ ...songStyles, ...(showClickTrack ? {} : { visibility: "hidden" }) }}
                        src="/puzzles/130-bpm/130%20BPM%20(with%20click%20track).mp3"
                        subtitleSrc="/puzzles/130-bpm/130%20BPM.vtt"
                    />
                </SongsDiv>
            </ContentDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
