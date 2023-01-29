import React, { ReactElement, FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";
import Image from "../Image";

const flipCardFaceStyles: CSS = {
    position: "absolute",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden"
};
const FlipCardFrontDiv = styled("div", flipCardFaceStyles);

const flipCardFrontEnabledStyles: CSS = {
    backgroundColor: "$surface08",
    [`.${ lightTheme } &`]: {
        backgroundColor: "$background"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "transparent"
    }
};

const flipCardFrontDisabledStyles: CSS = {
    backgroundColor: "$surface02",
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "transparent"
    }
};

const FlipCardBackDiv = styled("div", {
    ...flipCardFaceStyles,
    color: "$onBackground",
    transform: "rotateY(180deg)",
    [`.${ yahooGeocitiesTheme } &`]: {
        transform: "unset",
        backgroundColor: "transparent"
    }
});

const FlipCardContainerDiv = styled("div", {
    backgroundColor: "black",
    width: "150px",
    height: "150px",
    perspective: "1000px",
    margin: "5px",
    [`.${ yahooGeocitiesTheme } &`]: {
        height: "50px",
        border: "2px groove $surface07",
        backgroundColor: "rgba(195,195,195,0.4)"
    }
});

const flipCardContainerEnabledStyles: CSS = {
    "&:hover": {
        [`${ FlipCardFrontDiv }`]: {
            transform: "rotateY(180deg)"
        },
        [`${ FlipCardBackDiv }`]: {
            transform: "rotateY(0)"
        }
    },
    [`.${ lightTheme } &`]: {
        filter: "grayscale()",
        "&:hover": {
            filter: "unset"
        }
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        "&:hover": {
            [`${ FlipCardFrontDiv }`]: {
                transform: "unset"
            },
            [`${ FlipCardBackDiv }`]: {
                transform: "unset"
            }
        },
    }
};
const flipCardContainerDisabledStyles: CSS = {
    filter: "grayscale()",
    "&:hover": {
        cursor: "pointer"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        filter: "unset"
    }
};

const FlipCardInnerDiv = styled("div", {
    position: "relative",
    width: "100%",
    height: "100%",
    textAlign: "center",
    [`.${ yahooGeocitiesTheme } &`]: {
        display: "flex",
        flexDirection: "row"
    }
});

const EarmarkDiv = styled("div", {
    position: "absolute",
    height: "0",
    width: "0",
    borderTop: "10px solid transparent",
    borderLeft: "10px solid transparent",
    borderBottom: "10px solid $surface08",
    borderRight: "10px solid $surface08",
    [`.${ lightTheme } &`]: {
        borderBottom: "10px solid $background",
        borderRight: "10px solid $background",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        right: "0",
        borderTop: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "10px solid rgb(78,78,78)",
        borderLeft: "10px solid rgb(78,78,78)",
    }
});

const earmarkDisabledStyles: CSS = {
    borderBottom: "10px solid transparent",
    borderRight: "10px solid transparent",
    [`.${ lightTheme } &`]: {
        borderBottom: "10px solid transparent",
        borderRight: "10px solid transparent",
    }
};

const ImageWrapperDiv = styled("div", {
    float: "left",
    height: "100px",
    width: "100px",
    margin: "25px",
    [`.${ yahooGeocitiesTheme } &`]: {
        transform: "scale(50%, 50%)",
        marginLeft: "-25px",
        marginTop: "-25px"
    }
});

const ImageContainerDiv = styled("div", {
    height: "100px"
});

interface FlipcardProps {
    id: string;
    imageSrc: string;
    imageAlt: string;
    theme: CSS;
    selected: boolean;
    onClick: Function;
    children?: Array<ReactElement> | ReactElement;
}

const Flipcard: FunctionComponent<FlipcardProps> = (props) => {
    const {
        imageSrc,
        imageAlt,
        selected,
        onClick,
        children,
        theme
    } = props;

    function enableGroup(): void {
        return !selected && onClick();
    }

    return (
        <FlipCardContainerDiv css={ selected ? flipCardContainerEnabledStyles : flipCardContainerDisabledStyles }
            role="button"
            aria-label="Select Card"
            tabIndex={ 0 }
            onClick={ enableGroup }
            onKeyPress={ enableGroup }>
            <FlipCardInnerDiv>
                <FlipCardFrontDiv css={ selected ? flipCardFrontEnabledStyles : flipCardFrontDisabledStyles }>
                    <EarmarkDiv css={ selected ? theme : earmarkDisabledStyles } />
                    <ImageWrapperDiv><ImageContainerDiv>
                        <Image src={ imageSrc } alt={ imageAlt } height={ 100 } width={ 100 } /></ImageContainerDiv>
                    </ImageWrapperDiv>
                </FlipCardFrontDiv>
                <FlipCardBackDiv css={ theme }>{ children }</FlipCardBackDiv>
            </FlipCardInnerDiv>
        </FlipCardContainerDiv>
    );
};

export default Flipcard;
