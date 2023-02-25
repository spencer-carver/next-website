import { CSS } from "@stitches/react";
import { useCallback, useState } from "react";
import { lightTheme, styled } from "../../styles/stitches";

const TooltipSpan = styled("span", {
    visibility: "hidden",
    backgroundColor: "$surface02",
    color: "$onSurface",
    borderRadius: "6px",
    position: "absolute",
    zIndex: "1",
    left: "0px",
    bottom: "10px",
    padding: "5px"
});

const hoverStyles: CSS = {
    backgroundColor: "$secondary",
    [`& ${ TooltipSpan }`]: {
        visibility: "visible"
    },
};

const Wrapper = styled("span", {
    position: "relative",
    display: "inline-block",
    borderBottom: "2px dotted $secondary",
    "&:hover": hoverStyles,
    [`.${ lightTheme } &`]: {
        borderBottom: "2px dotted $onBackground"
    }
});

const Tooltip = ({ tooltip, children, css = {}, tooltipCss = {} }) => {
    const [ showTooltip, setShowTooltip ] = useState(false);
    const openTooltip = useCallback(() => setShowTooltip(true), []);
    const closeTooltip = useCallback(() => setShowTooltip(false), []);

    return (
        <Wrapper css={{ ...css, ...(showTooltip ? hoverStyles : {}) }} onTouchStart={ openTooltip } onTouchEnd={ closeTooltip }>
            { children }
            <TooltipSpan css={ tooltipCss }>{ tooltip }</TooltipSpan>
        </Wrapper>
    );
};

export default Tooltip;
