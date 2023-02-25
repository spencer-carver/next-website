import React, { useState, useEffect, FunctionComponent, useCallback } from "react";
import { CSS } from "@stitches/react";
import Image from "../Image";
import { styled, lightTheme } from "../../styles/stitches";

const TRANSITION_TIME = 8000; // in ms

declare global {
    interface Window {
        slideshowTimer: NodeJS.Timeout;
    }
}

const ContainerDiv = styled("div", {
    margin: "0 auto",
    "@lg": {
        maxWidth: "800px"
    }
});

const heroContainerStyles: CSS = {
    width: "100%",
    height: "100vh",
    position: "relative",
    backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), radial-gradient(circle at top right, rgba(34, 167, 240, 0.6), rgba(0,0,0,0), rgba(217, 30, 24, 0.6)), radial-gradient(circle at bottom right, rgba(0, 230, 64, 0.6), rgba(0,0,0,0), rgba(77, 19, 209, 0.6))",
    backgroundColor: "$surface04",
    marginTop: "-50px",
    zIndex: "1000002",
    "&::after": {
        content: "Scroll down to enter",
        position: "absolute",
        bottom: "80px",
        width: "100px",
        textAlign: "center",
        color: "white"
    },
    "@lg": {
        height: "100%",
        background: "none",
        maxWidth: "unset",
        "&::before": {
            opacity: "1"
        },
        "&::after": {
            display: "none"
        }
    }
};

const ImageWrapperDiv = styled("div", {
    position: "absolute",
    width: "100%",
    height: "100%",
    verticalAlign: "top",
    top: "0",
    "& img": {
        objectFit: "cover"
    }
});

const SlideshowDiv = styled("div", {
    position: "relative",
    display: "block",
    width: "100%",
    height: "100%"
});

const heroSlideshowStyles: CSS = {
    [`${ ImageWrapperDiv }`]: {
        filter: "grayscale()",
        opacity: "0.6"
    },
    [`.${ lightTheme } &`]: {
        [`${ ImageWrapperDiv }`]: {
            opacity: "0.7"
        },
    }
};

const IndicatorsDiv = styled("div", {
    position: "absolute",
    right: "20px",
    bottom: "20px"
});

const controlDivStyles: CSS = {
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "auto",
    padding: "16px 16px 24px",
    marginTop: "-50px",
    color: "$onBackground",
    fontWeight: "bold",
    fontSize: "48px",
    borderRadius: "0 5px 5px 0",
    userSelect: "none",
    left: "0",
    "&:hover": {
        backgroundColor: "rgba(255,255,255,0.2)"
    }
};

const PreviousControlDiv = styled("div", controlDivStyles);
const NextControlDiv = styled("div", {
    ...controlDivStyles,
    left: "unset",
    right: "0",
    borderRadius: "5px 0 0 5px"
});

interface SlideshowOptions {
    isHero?: boolean;
    overlayLogo?: boolean;
    hideMobile?: boolean;
    backgroundImage?: string;
}

interface SlideshowProps {
    items: Array<{ [key: string]: any }>;
    component?: FunctionComponent<any>;
    updateSelected?: (index: number) => void;
    startingIndex?: number;
    options: SlideshowOptions;
}

const Slideshow: FunctionComponent<SlideshowProps> = ({ items, component: Component = ImageSlide, updateSelected, startingIndex, options }) => {
    const {
        isHero = false
    } = options;

    const [ selected, setInternalSelected ] = useState(startingIndex || 0);

    const setSelected = useCallback((nextIndex: number) => {
        setInternalSelected(nextIndex);
        updateSelected?.(nextIndex);
    }, [updateSelected]);

    const nextItem = useCallback(() => {
        const newIndex = selected === items.length - 1
            ? 0
            : selected + 1;

        setSelected(newIndex);

        if (!isHero) {
            return;
        }

        clearInterval(window.slideshowTimer);
        window.slideshowTimer = setInterval(nextItem, 2 * TRANSITION_TIME);
    }, [isHero, items, selected, setSelected]);

    const previousItem = useCallback(() => {
        const newIndex = selected === 0
            ? items.length - 1
            : selected - 1;

        setSelected(newIndex);

        if (!isHero) {
            return;
        }

        clearInterval(window.slideshowTimer);
        window.slideshowTimer = setInterval(previousItem, 2 * TRANSITION_TIME);
    }, [isHero, items, selected, setSelected]);

    useEffect(() => {
        if (!isHero) {
            return;
        }

        window.slideshowTimer = setInterval(nextItem, TRANSITION_TIME);

        return (): void => clearInterval(window.slideshowTimer);
    });

    useEffect(() => {
        setSelected(startingIndex || 0);
    }, [setSelected, startingIndex]);

    return (
        <>
            <ContainerDiv css={ isHero ? heroContainerStyles : {} }>
                <SlideshowDiv css={ isHero ? heroSlideshowStyles : {} }>
                    { items.map((props, index) => <Component { ...props } key={ index } index={ index } selected={ selected } />) }
                    <IndicatorsDiv>
                        { items.map((item, index) => <Indicator key={ index } index={ index } selected={ selected } setSelected={ setSelected } />) }
                    </IndicatorsDiv>
                    { !isHero && (
                        <>
                            <PreviousControlDiv role="button" aria-label="Previous" tabIndex={ 0 } onClick={ previousItem } onKeyPress={ previousItem }>&#10094;</PreviousControlDiv>
                            <NextControlDiv role="button" aria-label="Next" tabIndex={ 0 } onClick={ nextItem } onKeyPress={ nextItem }>&#10095;</NextControlDiv>
                        </>
                    ) }
                </SlideshowDiv>
            </ContainerDiv>
        </>
        
    );
};

const IndicatorDiv = styled("div", {
    display: "inline-block",
    height: "20px",
    width: "20px",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: "5px",
    margin: "0 3px",
    textAlign: "center",
    cursor: "pointer",
    [`.${ lightTheme } &`]: {
        backgroundColor: "rgba(0,0,0,0.1)",
    }
});

const indicatorSelectedStyles: CSS = {
    backgroundColor: "rgba(255,255,255,0.4)",
    [`.${ lightTheme } &`]: {
        backgroundColor: "rgba(0,0,0,0.3)",
    }
};

const IndicatorTextSpan = styled("span", {
    color: "$onBackground"
});

interface IndicatorProps {
    index: number;
    selected: number;
    setSelected: Function;
}

const Indicator: FunctionComponent<IndicatorProps> = ({ index, selected, setSelected }) => {
    const setIndicator = (): void => setSelected(index);

    return (
        <IndicatorDiv css={ selected === index ? indicatorSelectedStyles : {} }
            role="button"
            tabIndex={ 0 }
            onClick={ setIndicator }
            onKeyPress={ setIndicator }>
            <IndicatorTextSpan>{ index + 1 }</IndicatorTextSpan>
        </IndicatorDiv>
    );
};

const SlideDiv = styled("div", {
    opacity: "0",
    transition: "opacity 1s ease-in-out"
});

const slideSelectedStyles: CSS = {
    opacity: "1"
};

interface ImageSlideProps {
    index: number;
    selected: number;
    src: string;
    alt: string;
    priority?: boolean;
    css?: CSS;
}

export const ImageSlide: FunctionComponent<ImageSlideProps> = ({ index, src, alt, selected, priority, css }) => {
    return (
        <SlideDiv css={ selected === index ? slideSelectedStyles : {} }>
            <ImageWrapperDiv css={ css }>
                <Image src={ src } alt={ alt } layout="fill" priority={ priority } />
            </ImageWrapperDiv>
        </SlideDiv>
    );
};

export default Slideshow;
