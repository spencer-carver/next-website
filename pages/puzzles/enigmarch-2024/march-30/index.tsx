import React, { FunctionComponent, useEffect, useState } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const Book = styled("div", {
    marginTop: "30px",
    width: "300px",
    height: "213px",
    boxShadow: "0 0 100px rgba(0, 0, 0, 0.3)",
    "@md": {
        width: "480px",
        height: "341px",
        marginLeft: "-80px"
    },
    "@lg": {
        width: "720px",
        height: "511px",
        marginLeft: "auto"
    }
});

const Page = styled("label", {
    position: "relative",
    width: "50%",
    height: "100%",
    display: "grid",
    transform: "rotateY(0deg)",
    transition: "transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1)",
    transformOrigin: "0% 0%"
});

const Div = styled("div", {});

const PageText = styled("div", {
    display: "inline-block",
    position: "absolute",
    width: "100px",
    left: "20px",
    top: "80px",
    backgroundColor: "rgba(255,255,255,0.7)",
    color: "black",
    fontSize: "12px",
    padding: "5px",
    "@md": {
        width: "180px",
        left: "20px",
        top: "140px",
        fontSize: "18px",
        padding: "10px",
    },
    "@lg": {
        width: "260px",
        left: "30px",
        top: "200px",
        fontSize: "24px",
        padding: "20px",
    }
});

const flippablePageStyles = {
    position: "absolute",
    right: 0,
    pointerEvents: "none",
    transformStyle: "preserve-3d"
};

const flippedPageStyles = {
    display: "block",
    transition: "transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1), z-index 1.8s",
    transform: "rotateY(-180deg)"
};

const leftPageStyles = {
    "&:after": {
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
        right: "0",
        backgroundImage: "linear-gradient(-90deg, rgba(247, 247, 247, 0.6) 0%, rgba(247, 247, 247, 0) 12%)"
    }
};

const rightPageStyles = {
    "&:after": {
        content: "",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "-1px",
        backgroundImage: "linear-gradient(90deg, rgba(247, 247, 247, 0.6) 0%, rgba(247, 247, 247, 0) 12%)"
    }
};

const PAGES = [
    "/puzzles/enigmarch-2024/cuphead-0.png",
    "/puzzles/enigmarch-2024/cuphead-0.png",
    "/puzzles/enigmarch-2024/cuphead-1.png",
    "/puzzles/enigmarch-2024/cuphead-1.png",
    "/puzzles/enigmarch-2024/cuphead-2.png",
    "/puzzles/enigmarch-2024/cuphead-2.png",
    "/puzzles/enigmarch-2024/cuphead-3.png",
    "/puzzles/enigmarch-2024/cuphead-3.png",
    "/puzzles/enigmarch-2024/cuphead-4.png",
    "/puzzles/enigmarch-2024/cuphead-4.png",
    "/puzzles/enigmarch-2024/cuphead-5.png",
    "/puzzles/enigmarch-2024/cuphead-5.png",
    "/puzzles/enigmarch-2024/cuphead-6.png",
    "/puzzles/enigmarch-2024/cuphead-6.png",
    "/puzzles/enigmarch-2024/cuphead-7.png",
    "/puzzles/enigmarch-2024/cuphead-7.png"
];

const TEXT = [
    "",
    "Each boss was un<i>phase</i>d and issued taunts towards Cuphead and Mugman, to the point where they started to doubt themselves. Could they really pick on opponents of this <i>level</i>?",
    "Buttered, smashed, and mashed. It's over for you.",
    "Sorry, I didn't mean to put you in the h-h-h-hot seat...",
    "Dominate and bombinate -- that's how I bee!",
    "Break a leg...nah, break two!",
    "You dare to gaze?! How 'bout stone boots so you can swim with the fishes!",
    "ICED ALREADY? WHERE PUNY CUPS GO?",
    "Let's be franks here, I'm yer wurst nightmare.",
];

const PuzzleComponent: FunctionComponent = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isPageForward, setIsPageForward] = useState(true);

    const onChangePage = (isPageForward) => {
        setCurrentPage(cp => isPageForward ? Math.min(PAGES.length - 2, cp + 2) : Math.max(0, cp - 2));
        setIsPageForward(isPageForward);
    };

    useEffect(() => {
        function onKeyPress(event: KeyboardEvent) {
            if (event.repeat) {
                return;
            }

            if (event.key === "ArrowLeft") {
                setCurrentPage(cp => Math.max(0, cp - 2));
                setIsPageForward(false);

                return;
            }

            if (event.key === "ArrowRight") {
                setCurrentPage(cp => Math.min(PAGES.length - 2, cp + 2));
                setIsPageForward(true);

                return;
            }
        }

        window.addEventListener("keydown", onKeyPress);

        return () => {
            window.removeEventListener("keydown", onKeyPress);
        };
    }, []);

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-30">
            <Book>
                <Div css={{ width: "100%", height: "100%", display: "flex", perspective: "1200px" }}>
                    <Page css={{ cursor: currentPage !== 0 ? "pointer": "unset", overflow: "hidden", ...leftPageStyles }} title={ currentPage !== 0 ? "Previous Page": undefined } onClick={ () => onChangePage(false) }>
                        <Image src={ PAGES[0] } alt="image" layout="fill" objectFit="cover" objectPosition="left" />
                    </Page>
                    <Page css={{ cursor: currentPage !== PAGES.length - 2 ? "pointer": "unset", overflow: "hidden", ...rightPageStyles }} title={ currentPage !== PAGES.length - 2 ? "Next Page": undefined } onClick={ () => onChangePage(true) }>
                        <Image src={ PAGES[PAGES.length - 1] } alt="image" layout="fill" objectFit="cover" objectPosition="right" />
                        <PageText>{ TEXT[8] }</PageText> 
                    </Page>

                    <DoubleSidedPage number={ 14 } currentPage={ currentPage } isPageForward={ isPageForward } />
                    <DoubleSidedPage number={ 12 } currentPage={ currentPage } isPageForward={ isPageForward } />
                    <DoubleSidedPage number={ 10 } currentPage={ currentPage } isPageForward={ isPageForward } />
                    <DoubleSidedPage number={ 8 } currentPage={ currentPage } isPageForward={ isPageForward } />
                    <DoubleSidedPage number={ 6 } currentPage={ currentPage } isPageForward={ isPageForward } />
                    <DoubleSidedPage number={ 4 } currentPage={ currentPage } isPageForward={ isPageForward } />
                    <DoubleSidedPage number={ 2 } currentPage={ currentPage } isPageForward={ isPageForward } />
                </Div>
            </Book>
        </PuzzleWrapperComponent>
    );
};

const DoubleSidedPage = ({ number, currentPage, isPageForward }) => {
    const flipped = currentPage >= number;
    const visible = Math.abs(currentPage - number) <= 2;

    const pageStyles = {
        ...flippablePageStyles,
        ...(flipped ? flippedPageStyles : {}),
        ...(flipped || (visible && !isPageForward) ? { zIndex: number } : {})
    };

    return (
        <Page css={ pageStyles }>
            <Div css={{ position: "absolute", width: "100%", height: "100%", transform: "rotateY(0deg) translateZ(1px)" }}>
                <Div css={ rightPageStyles }>
                    <Image src={ PAGES[number - 1] } alt="image" layout="fill" objectFit="cover" objectPosition="right" />
                </Div>
                { number === 2 ? <PageText css={{ top: "20px", "@md": { top: "50px" }, "@lg": { top: "120px" } }} dangerouslySetInnerHTML={{ __html: TEXT[1] }}></PageText> : <PageText>{ TEXT[number / 2] }</PageText> }
            </Div>
            <Div css={{ position: "absolute", width: "100%", height: "100%", transform: "rotateY(180deg) translateZ(1px)" }}>
                <Div css={ leftPageStyles }>
                    <Image src={ PAGES[number] } alt="image" layout="fill" objectFit="cover" objectPosition="left" />
                </Div>
            </Div>
        </Page>
    );
};

export default PuzzleComponent;
