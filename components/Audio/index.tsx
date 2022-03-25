import { CSS } from "@stitches/react";
import React, { FunctionComponent } from "react";
import { styled } from "../../styles/stitches";

const Audio = styled("audio", {});

interface AudioTrackProps {
    audioStyles: CSS;
    src: string;
    subtitleSrc: string;
}

const AudioTrack: FunctionComponent<AudioTrackProps> = ({ audioStyles, src, subtitleSrc }) => {
    return (
        <Audio css={ audioStyles } controls>
            <track label="English" kind="captions" srcLang="en" src={ subtitleSrc } default />
            <source src={ src } type="audio/mpeg" />
            Your browser does not support the audio element.
        </Audio>
    );
};

export default AudioTrack;
