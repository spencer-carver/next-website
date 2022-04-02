import React, { FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import ImageComponent from "../../../components/Image";
import AudioTrack from "../../../components/Audio";
import { styled } from "../../../styles/stitches";

const TITLE = "Cheese Sampler";
const DESCRIPTION = "My themed parody group is wrappping up it's first (and only) tour at our biggest venue ever!";
const NAME = "cheese-sampler";

const CHEESES: { [key: string]: string } = {
    "ricotta": "1 🧀 3 🎵",
    "camembert": "7 🧀 1 🎵",
    "kashkaval": "9 🧀 9 🎵",
    "brie": "4 🧀 4 🎵",
    "asiago": "1 🧀 4 🎵",
    "swiss": "1 🧀 2 🎵",
    "manchego": "6 🧀 5 🎵",
    "gouda": "4 🧀 4 🎵",
    "havarti": "2 🧀 6 🎵",
    "stilton": "2 🧀 6 🎵",
    "muenster": "3 🧀 3 🎵",
    "colby-jack": "2 🧀 5 🎵",
    "parmesan": "3 🧀 3 🎵",
    "cheddar": "5 🧀 6 🎵",
    "mozzarella": "7 🧀 3 🎵",
    "gruyere": "2 🧀 14 🎵",
    "primo-sale": "3 🎵"
};

const ContentDiv = styled("div", {
    textAlign: "left",
    margin: "0 30px",
    padding: "20px 0 50px"
});

const sharedSectionStyles: CSS = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    "@lg": {
        justifyContent: "space-around"
    }
};

const ImagesDiv = styled("div", {
    ...sharedSectionStyles,
    marginBottom: "10px",
    "@lg": {
        marginBottom: "30px"
    }
});

const SongsDiv = styled("div", sharedSectionStyles);

const CheeseSampler: FunctionComponent = () => {
    /*
     * No hints here, and the only giveaway is the cheese associated with the audio files and images,
     * which is fairly obvious if you just listen (or attempt to download it).
     * I know I don't have the best singing voice, but you didn't need to avoid hearing it completely!
     */

    return (
        <ContentDiv>
            <ImagesDiv>{ Object.keys(CHEESES).map((cheese, index) => (<Image key={ index } cheese={ cheese } alt="cheese" />)) }</ImagesDiv>
            <SongsDiv>{ Object.keys(CHEESES).sort().map((cheese, index) => (<Song key={ index } cheese={ cheese } />)) }</SongsDiv>
        </ContentDiv>
    );
};

const ImageContainerDiv = styled("div", {
    position: "relative"
});

const LabelSpan = styled("span", {
    position: "absolute",
    top: "5px",
    left: "5px",
    color: "black",
    backgroundColor: "white",
    padding: "2px",
    borderRadius: "5px"
});

interface CheeseProp {
    cheese: string;
    alt?: string;
}

const Image: FunctionComponent<CheeseProp> = ({ cheese, alt }) => {
    return (
        <ImageContainerDiv>
            <ImageComponent src={ `/puzzles/cheese-sampler/${ cheese }.jpg` } alt={ alt } width="200px" height="200px" />
            <LabelSpan>{ CHEESES[cheese] }</LabelSpan>
        </ImageContainerDiv>
    );
};

const songStyles: CSS = {
    marginBottom: "10px"
};

const Song: FunctionComponent<CheeseProp> = ({ cheese }) => {
    return <AudioTrack audioStyles={ songStyles } src={  `/puzzles/cheese-sampler/${ cheese }.mp3` } subtitleSrc={  `/puzzles/cheese-sampler/${ cheese }.vtt` } />;
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME }>
            <CheeseSampler />
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
