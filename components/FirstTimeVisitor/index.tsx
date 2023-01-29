import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { keyframes, styled } from "../../styles/stitches";
import Link from "../Link";
import useStorage from "../../utils/useStorage";

const ContainerDiv = styled("div", {
    height: "0px",
    maxHeight: "0px"
});

const displayMessageStyles: CSS = {
    height: "auto",
    maxHeight: "100px",
    transition: "max-height 1s"
};

const fadeIn = keyframes({
    "0%": {
        opacity: "0"
    },
    "15%": {
        opacity: "0"
    },
    "100%": {
        opacity: "1"
    }
});

const MessageDiv = styled("div", {
    position: "relative",
    border: "1px solid $primary",
    padding: "10px 25px",
    color: "$onSurface",
    backgroundColor: "$surface01",
    animation: `${ fadeIn } 1.5s`
});

const Line = styled("p", {
    display: "block",
    margin: "0",
    "&:not(:last-of-type)": {
        marginBottom: "8px"
    }
});

const CloseSpan = styled("span", {
    position: "absolute",
    top: "4px",
    right: "8px",
    "&:hover": {
        cursor: "pointer"
    }
});

interface VisitedProps {
    dismissed: boolean;
    time: number;
}

const FirstTimeVisitor: FunctionComponent<{ lastUpdate: number; }> = ({ lastUpdate }) => {
    const storage = useStorage("settings");
    const [isDismissed, setIsDismissed] = useState(true);
    const [firstTime, setFirstTime] = useState(false);

    useEffect(() => {
        try {
            const hasVisited = storage.getItem<VisitedProps>("visited");

            if (!hasVisited) {
                setFirstTime(true);
                setIsDismissed(false);

                storage.setItem<VisitedProps>("visited", { dismissed: false, time: (new Date()).getTime() });

                return;
            }

            const { dismissed, time } = hasVisited;

            const updatedDismissed = time > lastUpdate ? dismissed : false;

            storage.setItem<VisitedProps>("visited", { dismissed: updatedDismissed, time: (new Date()).getTime() });

            setIsDismissed(updatedDismissed);
        } catch(e) {
            // do nothing
        }
    }, [storage, lastUpdate]);

    const dismissComponent = useCallback(() => {
        try {
            storage.setItem<VisitedProps>("visited", { dismissed: true, time: (new Date()).getTime() });
        } catch (e) {
            // do nothing
        }

        setIsDismissed(true);
    }, [storage]);

    if (isDismissed) {
        return (
            <ContainerDiv>
                <noscript>
                    <MessageDiv>
                        You need Javascript enabled to do most things on this site.
                    </MessageDiv>
                </noscript>
            </ContainerDiv>
        );
    }

    return (
        <ContainerDiv css={ displayMessageStyles }>
            <MessageDiv>
                <CloseSpan role="button" aria-label="Previous" tabIndex={ 0 } onClick={ dismissComponent } onKeyPress={ dismissComponent }>&#10006;</CloseSpan>
                <Line>There&apos;s been an update since your last visit! Read below for more information.</Line>
                { firstTime && <Line>If this is your first time here, be sure to check out the <Link href="/about">About Me</Link> page. Welcome!</Line> }
            </MessageDiv>
        </ContainerDiv>
    );
};

export default FirstTimeVisitor;