import React, { FunctionComponent } from "react";
import Image from "../../../components/Image";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

const SRC = "/puzzles/nesting-birds.png";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    margin: "0 auto",
    width: "300px",
    height: "166px",
    overflow: "hidden",
    "& span": {
        marginTop: "-40px !important"
    },
    "@sm": {
        width: "360px",
        height: "208px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "420px",
        height: "236px",
        marginLeft: "-50px",
        "& span": {
            marginTop: "-53px !important"
        }
    },
    "@lg": {
        width: "760px",
        height: "423px",
        marginLeft: "auto",
        "& span": {
            marginTop: "-100px !important"
        }
    },
    "@xl": {
        width: "1020px",
        height: "556px",
        marginLeft: "-130px",
        "& span": {
            marginTop: "-125px !important"
        }
    },
    "@xxl": {
        width: "1240px",
        height: "689px",
        marginLeft: "-243px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="nesting-birds">
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A nesting ground littered with eggs" layout="fill" priority={ true } />
            </ImageWrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
