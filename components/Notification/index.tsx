import { FunctionComponent, ReactNode, useCallback, useState } from "react";
import { CSS } from "@stitches/react";
import { keyframes, styled } from "../../styles/stitches";

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

const CloseSpan = styled("span", {
    position: "absolute",
    top: "4px",
    right: "8px",
    "&:hover": {
        cursor: "pointer"
    }
});

interface NotificationProps {
    isDismissed?: boolean;
    onClose?: () => void;
    children: ReactNode; css?: CSS
}

const Notification: FunctionComponent<NotificationProps> = ({ isDismissed = false, onClose = () => {}, children, css = {} }) => {
    const [dismissed, setDismissed] = useState(false);

    const dontShowMessage = dismissed || isDismissed;

    const onDismiss = useCallback(() => {
        setDismissed(true);
        onClose();
    }, [onClose]);

    if (dontShowMessage) {
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
        <ContainerDiv css={{ ...displayMessageStyles, ...css }}>
            <MessageDiv>
                <CloseSpan role="button" aria-label="Previous" tabIndex={ 0 } onClick={ onDismiss } onKeyPress={ onDismiss }>&#10006;</CloseSpan>
                { children }
            </MessageDiv>
        </ContainerDiv>
    );
};
 
export default Notification;
