import React, { FunctionComponent } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2024/yakuza.png";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "338px",
    margin: "0 auto",
    "@md": {
        width: "450px",
        height: "507px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "700px",
        height: "789px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "767px",
        height: "865px"
    }
});

const DAYS = [
    [
        "Started the day bowling",
        "Took a taxi ride",
        "Went breakdancing",
        "Hit some balls at the batting center",
        "Wrapped up with some arcade games on Theatre Ave."
    ],
    [
        "Began with some arcade games on Nakamichi St.",
        "Grabbed a burger for lunch",
        "Had two drinks",
        "Stopped by Club Shine",
        "Played a game of Shogi",
        "Went back to Club Shine",
        "Grabbed another burger for dinner"
    ],
    [
        "Met up on Park Alley",
        "Encountered a silent, masked stranger in West Park",
        "Walked over to the park entrance",
        "Played some darts",
        "Parted ways in Park Alley"
    ],
    [
        "Started the day at Pocket Circuit Stadium",
        "Perused some magazines together",
        "Had a dance battle",
        "Stopped off at the bowling alley for a bit",
        "Ended the day with one last Pocket Circuit race"
    ],
    [
        "Met up at the arcade on Nakamichi St.",
        "Purchased a bento box from the convienience store",
        "Got frisked by a police officer?",
        "Stopped by Club Shine",
        "Went back to the arcade to end the day"
    ],
    [
        "Met at the entrance to West Park",
        "Once again passed by a quiet masked man",
        "Stopped off at the DVD shop to inspect some non-video wares",
        "Re-enacted a Zombie movie scene",
        "Played some pool",
        "Parted ways in Park Alley again"
    ]
];

const DayWrapper = styled("div", {
    margin: "0 auto",
    width: "300px",
    "@lg": {
        width: "500px"
    }
});

const H3 = styled("h3", {
    color: "$onBackground",
    textAlign: "left"
});

const OL = styled("ol", {
    color: "$onBackground",
    textAlign: "left"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-29">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="The city of Kamurocho from the 'Yakuza' franchise" layout="fill" />
            </ImageWrapperDiv>
            <DayWrapper>
                { DAYS.map((activities, index) => (
                    <>
                        <H3>Day { index + 1 }:</H3>
                        <OL>
                            { activities.map((activity, activityIndex) => <li key={ `${ index }-${ activityIndex }` }>{ activity }</li>) }
                        </OL>
                    </>
                )) }
            </DayWrapper>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
