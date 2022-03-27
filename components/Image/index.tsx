import NextImage, { ImageProps } from "next/image";
import { FunctionComponent } from "react";

const NON_OPTIMIZED_DOMAINS = [
    "c1.scryfall.com"
];

const Image: FunctionComponent<ImageProps> = (props) => {
    if (typeof props.src === "string" && NON_OPTIMIZED_DOMAINS.find((domain) => (props.src as string).includes(domain))) {
        return <NextImage { ...props } loader={ ({ src }) => src } />;
    }

    return <NextImage {...props} />;
}

export default Image;
