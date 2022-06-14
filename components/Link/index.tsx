import { FunctionComponent, ReactNode } from "react";
import NextLink from "next/link";
import { styled } from "../../styles/stitches";

const DefaultAnchor = styled("a", {
    color: "$onBackground"
});

interface LinkProps {
    href: string;
    component?: FunctionComponent<any>;
    children?: ReactNode;
}

const Link: FunctionComponent<LinkProps> = ({ href, component: Component = DefaultAnchor, children }) => {
    if (href.startsWith("https")) {
        return <NextLink href={ href } passHref={ true }><Component target="_blank" rel="noreferrer noopener">{ children }</Component></NextLink>;
    }

    return <NextLink href={ href } passHref={ true }><Component>{ children }</Component></NextLink>;
};

export default Link;
