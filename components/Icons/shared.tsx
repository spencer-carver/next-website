import { CSS } from "@stitches/react";
import { MouseEventHandler } from "react";
import { styled } from "../../styles/stitches";

const Icon = styled("a", {
    display: "inline-block",
    width: "30px",
    height: "30px",
    margin: "10px 5px",
    lineHeight: "0",
    color: "transparent",
    "&:last-child": {
        marginRight: "10px"
    },
    "&:hover": {
        cursor: "pointer"
    }
});

const GenericIcon = ({ css, href, onClick, content }: { css: CSS; onClick?: MouseEventHandler; href?: string; content: string }) => {
    if (href) return <Icon css={ css } href={ href } target="_blank" rel="noopener noreferrer" title={ content }>{ content }</Icon>;

    return <Icon css={ css } as="button" onClick={ onClick } title={ content }>{ content }</Icon>;
};

export default GenericIcon;
