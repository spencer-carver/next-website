import { CSS } from "@stitches/react";
import React, { forwardRef } from "react";
import { styled } from "../../styles/stitches";

const Audio = styled("audio", {});

interface AudioTrackProps {
    audioStyles: CSS;
    src: string;
    subtitleSrc: string;
    defaultMuted?: boolean;
}

const AudioTrack = forwardRef<HTMLAudioElement, AudioTrackProps>(({ audioStyles, src, subtitleSrc, defaultMuted = false }, ref) => {
    return (
        <Audio ref={ ref } css={ audioStyles } controls { ...(defaultMuted ? { muted: true } : {}) } onAuxClick={ console.log }>
            <track label="English" kind="captions" srcLang="en" src={ subtitleSrc } default />
            <source src={ src } type="audio/mpeg" />
            Your browser does not support the audio element.
        </Audio>
    );
});

AudioTrack.displayName = "AudioTrack";

export default AudioTrack;
