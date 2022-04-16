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

const Wrapper = styled("span", {
    position: "relative",
    display: "inline-block",
    borderBottom: "2px dotted $secondary",
    "&:hover": {
        backgroundColor: "$secondary",
        [`& ${ TooltipSpan }`]: {
            visibility: "visible"
        },
    },
    [`.${ lightTheme } &`]: {
        borderBottom: "2px dotted $onBackground"
    }
});

const Tooltip = ({ tooltip, children, css = {}, tooltipCss = {} }) => {
    return (
        <Wrapper css={ css }>
            { children }
            <TooltipSpan css={ tooltipCss }>{ tooltip }</TooltipSpan>
        </Wrapper>
    );
};

export default Tooltip;
