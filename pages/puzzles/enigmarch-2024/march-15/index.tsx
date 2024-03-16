import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const IMAGE_WIDTH = 1974;

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "563px",
    margin: "0 auto",
    background: "url(/puzzles/enigmarch-2024/later-alligator.png)",
    backgroundRepeat: "no-repeat",
    overflowX: "",
    "@md": {
        width: "450px",
        marginLeft: "-75px"
    },
    "@lg": {
        width: "600px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "900px",
        marginLeft: "-70px"
    },
    "@xxl": {
        width: "1200px",
        marginLeft: "-220px"
    },
    cursor: "move",
    "&:hover": {
        cursor: "grab"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    const [dragging, setDragging] = useState(false);
    const [currentOffset, setCurrentOffset] = useState(0);
    const [startPosition, setStartPosition] = useState(0);
    const imageRef = useRef<HTMLDivElement>();

    useEffect(() => {
        const setDraggingTrue = () => setDragging(true);
        const setDraggingFalse = () => setDragging(false);
        window.addEventListener("mousedown", setDraggingTrue);
        window.addEventListener("mouseup", setDraggingFalse);
        window.addEventListener("touchstart", setDraggingTrue);
        window.addEventListener("touchend", setDraggingFalse);

        return () => {
            window.removeEventListener("mousedown", setDraggingTrue);
            window.removeEventListener("mouseup", setDraggingFalse);
            window.removeEventListener("touchstart", setDraggingTrue);
            window.removeEventListener("touchEnd", setDraggingFalse);
        };
    }, []);

    const onDown = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const clientX = (event as React.MouseEvent<HTMLDivElement>).clientX || (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX;

        setStartPosition(clientX);
    };

    const onMove = (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!dragging) {
            return;
        }

        const clientX = (event as React.MouseEvent<HTMLDivElement>).clientX || (event as React.TouchEvent<HTMLDivElement>).touches[0].clientX;
        const position = currentOffset + clientX - startPosition;
        const MAX_SCROLL = -1 * (IMAGE_WIDTH - imageRef.current.getBoundingClientRect().width);
        const boundedOffset = position < MAX_SCROLL ? MAX_SCROLL : (position > 0 ? 0 : position);

        requestAnimationFrame(() => {
            imageRef.current.style.backgroundPositionX = `${ boundedOffset }px`;
        });

        setStartPosition(clientX);
        setCurrentOffset(boundedOffset);
    };

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-15">
            <ImageWrapperDiv
                ref={ imageRef }
                onMouseDown={ onDown }
                onTouchStart={ onDown }
                onMouseMove={ onMove }
                onTouchMove={ onMove }
                draggable="false"
            />
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
