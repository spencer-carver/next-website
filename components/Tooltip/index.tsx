import { lightTheme, styled } from "../../styles/stitches";

const TooltipSpan = styled("span", {
    visibility: "hidden",
    backgroundColor: "$surface02",
    color: "$onSurface",
    borderRadius: "6px",
    position: "absolute",
    zIndex: "1",
    bottom: "10px",
    padding: "5px"
});

const WrapperDiv = styled("div", {
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

const Tooltip = ({ tooltip, children, tooltipWidth = "150px" }) => {
    return (
        <WrapperDiv>
            { children }
            <TooltipSpan css={{ width: tooltipWidth }}>{ tooltip }</TooltipSpan>
        </WrapperDiv>
    );
};

export default Tooltip;
