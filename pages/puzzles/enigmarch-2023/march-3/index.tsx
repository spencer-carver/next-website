import React, { FunctionComponent } from "react";
import Link from "../../../../components/Link";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const SRC = "/puzzles/enigmarch-2023/mahjong.png";

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
    height: "300px",
    margin: "0 auto",
    "@sm": {
        width: "360px",
        height: "360px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "500px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "760px",
        height: "760px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "900px",
        height: "900px",
        marginLeft: "-100px"
    }
});

const WrapperDiv = styled("div", {
    position: "relative",
    width: "180px",
    margin: "0 auto",
    paddingTop: "24px",
    fontSize: "11px",
    "@sm": {
        width: "240px",
        fontSize: "14px"
    },
    "@md": {
        width: "370px",
        paddingTop: "80px",
        fontSize: "18px"
    },
    "@lg": {
        paddingTop: "220px"
    },
    "@xl": {
        paddingTop: "280px"
    }
});

const P = styled("p", {
    color: "white"
});

const A = styled("a", {
    color: "white",
    "&:visited": {
        color: "white"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-3">
            <WarningDiv>{"\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!"}</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="The end state of a game of Mahjong" layout="fill" />
                <WrapperDiv>
                    <P>
                        You&apos;ve won with a hand worth 16 points! As you look around you see each opponent could have won depending on what you discarded if an opponent hadn&apos;t gotten rid of what you needed!
                    </P>
                    <P>
                        Additionally, you realize your hand and your opponent&apos;s potential scores are related in another way as well.
                    </P>
                    <P>
                        _ _ _ _ _
                    </P>
                    <P>
                        (As there are many styles of Mahjong, please reference the scoring calculator <Link href="https://www.mahjonghandcalculator.com/" component={ A }>here</Link>.)
                    </P>
                </WrapperDiv>
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
