import React, { FunctionComponent, useEffect, useState } from "react";
import Image from "../../../components/Image";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const WrapperDiv = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    width: "300px",
    "@md": {
        marginLeft: "-100px",
        width: "500px",
    },
    "@lg": {
        marginLeft: "unset",
        width: "720px",
    }
});

const HeaderImageWrapper = styled("div", {
    position: "relative",
    width: "300px",
    height: "200px",
    "@md": {
        width: "480px",
        height: "320px",
    },
    "@lg": {
        width: "720px",
        height: "480px",
    }
});

const Gallery = styled("div", {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    gap: "20px",
    flexWrap: "wrap",
    "@lg": {
        gap: "30px"
    }
});

const PaintingLabel = styled("div", {
    padding: "5px",
    color: "black",
    backgroundColor: "ivory"
});

const OptionSpan = styled("span", {
    fontWeight: "bold"
});

const CyanSpan = styled("span", {
    color: "#5ba8b2"
});

const YellowSpan = styled("span", {
    color: "#e8c535"
});

const MagentaSpan = styled("span", {
    color: "#e77ab4"
});

const PurpleSpan = styled("span", {
    color: "#6542d0"
});

const GalleryItem = styled("div", {
    "&:hover": {
        cursor: "pointer"
    }
});

const GalleryInstructions = styled("div", {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "$onBackground",
    padding: "0 20px"
});

const FeaturedImagesWrapper = styled("div", {
    display: "flex",
    flexDirection: "row",
    gap: "10px"
});

const FeaturedImageFrame = styled("div", {
    border: "15px solid goldenrod"
});

const PaintingImageWrapper = styled("div", {
    position: "relative",
    width: "125px",
    height: "125px",
    "@md": {
        width: "205px",
        height: "205px",
    },
    "@lg": {
        width: "332px",
        height: "332px",
    }
});

const GalleryImageWrapper = styled("div", {
    position: "relative",
    width: "140px",
    height: "140px",
    "@md": {
        width: "150px",
        height: "150px",
    }
});

const NoticeSpan = styled("span", {
    color: "$onBackground"
});

const PAINTINGS = [
    "bead.png",
    "chap.png",
    "lift.png",
    "meek.png",
    "ball.png",
    "boar.png",
    "bond.png",
    "dice.png",
    "clay.png",
    "cure.png",
    "gray.png",
    "plot.png"
];
const PAINTING_INFO = {
    "ball.png": <OptionSpan>#&nbsp;<CyanSpan>2</CyanSpan><YellowSpan>1</YellowSpan><MagentaSpan>12</MagentaSpan><PurpleSpan>12</PurpleSpan></OptionSpan>,
    "bead.png": <OptionSpan>#&nbsp;<CyanSpan>2</CyanSpan><MagentaSpan>5</MagentaSpan><PurpleSpan>1</PurpleSpan><YellowSpan>4</YellowSpan></OptionSpan>,
    "boar.png": <OptionSpan>#&nbsp;<CyanSpan>2</CyanSpan><MagentaSpan>15</MagentaSpan><PurpleSpan>1</PurpleSpan><YellowSpan>18</YellowSpan></OptionSpan>,
    "bond.png": <OptionSpan>#&nbsp;<CyanSpan>2</CyanSpan><MagentaSpan>15</MagentaSpan><YellowSpan>14</YellowSpan><PurpleSpan>4</PurpleSpan></OptionSpan>,
    "chap.png": <OptionSpan>#&nbsp;<CyanSpan>3</CyanSpan><MagentaSpan>8</MagentaSpan><PurpleSpan>1</PurpleSpan><YellowSpan>16</YellowSpan></OptionSpan>,
    "clay.png": <OptionSpan>#&nbsp;<CyanSpan>3</CyanSpan><MagentaSpan>12</MagentaSpan><PurpleSpan>1</PurpleSpan><YellowSpan>25</YellowSpan></OptionSpan>,
    "cure.png": <OptionSpan>#&nbsp;<CyanSpan>3</CyanSpan><MagentaSpan>21</MagentaSpan><YellowSpan>18</YellowSpan><PurpleSpan>5</PurpleSpan></OptionSpan>,
    "dice.png": <OptionSpan>#&nbsp;<CyanSpan>24</CyanSpan><MagentaSpan>9</MagentaSpan><PurpleSpan>18</PurpleSpan><YellowSpan>5</YellowSpan></OptionSpan>,
    "gray.png": <OptionSpan>#&nbsp;<CyanSpan>7</CyanSpan><MagentaSpan>18</MagentaSpan><YellowSpan>1</YellowSpan><PurpleSpan>25</PurpleSpan></OptionSpan>,
    "lift.png": <OptionSpan>#&nbsp;<CyanSpan>12</CyanSpan><YellowSpan>9</YellowSpan><PurpleSpan>6</PurpleSpan><MagentaSpan>20</MagentaSpan></OptionSpan>,
    "meek.png": <OptionSpan>#&nbsp;<CyanSpan>13</CyanSpan><MagentaSpan>5</MagentaSpan><PurpleSpan>5</PurpleSpan><YellowSpan>11</YellowSpan></OptionSpan>,
    "plot.png": <OptionSpan>#&nbsp;<CyanSpan>16</CyanSpan><YellowSpan>12</YellowSpan><MagentaSpan>15</MagentaSpan><PurpleSpan>20</PurpleSpan></OptionSpan>
};

type Props = {
    image: string;
    updateFeaturedImages: (image: string) => void;
};

const PaintingWithLabel: FunctionComponent<Props> = ({ image, updateFeaturedImages }) => {
    return (
        <GalleryItem onClick={ () => updateFeaturedImages(image) }>
            <GalleryImageWrapper>
                <Image src={ `/puzzles/emerald-princess/${ image }` } layout="fill" alt="A sketch" />
            </GalleryImageWrapper>
            <PaintingLabel>
                { PAINTING_INFO[image] }
            </PaintingLabel>
        </GalleryItem>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    const [featuredImages, setFeaturedImages] = useState<string[]>([]);

    function updateFeaturedImages(newFeaturedImage) {
        if (featuredImages.length < 2) {
            setFeaturedImages(fi => [...fi, newFeaturedImage]);

            return;
        }

        setFeaturedImages(fi => [fi[1], newFeaturedImage]);
    }

    const message = <GalleryInstructions>Click an image from the gallery to see it in more detail</GalleryInstructions>;

    return (
        <PuzzleWrapperComponent name="emerald-princess">
            <WarningDiv>{"\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to see the image clearly!!!"}</WarningDiv>
            <WrapperDiv>
                <HeaderImageWrapper>
                    <Image src="/puzzles/emerald-princess/book.png" layout="fill" alt="storybook about the emerald princess" />
                </HeaderImageWrapper>
                <FeaturedImagesWrapper>
                    <FeaturedImageFrame>
                        <PaintingImageWrapper>
                            {featuredImages[0] ? <Image src={ `/puzzles/emerald-princess/${ featuredImages[0] }` } layout="fill" alt="A sketch" /> : message}
                        </PaintingImageWrapper>
                    </FeaturedImageFrame>
                    <FeaturedImageFrame>
                        <PaintingImageWrapper>
                            {featuredImages[1] ? <Image src={ `/puzzles/emerald-princess/${ featuredImages[1] }` } layout="fill" alt="A sketch" /> : message}
                        </PaintingImageWrapper>
                    </FeaturedImageFrame>
                </FeaturedImagesWrapper>
                <Gallery>
                    {PAINTINGS.map((image, index) => <PaintingWithLabel key={ index } image={ image } updateFeaturedImages={ updateFeaturedImages } />)}
                </Gallery>
                <NoticeSpan>Images and poetry for this puzzle were created by ChatGPT.</NoticeSpan>
            </WrapperDiv>

        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
