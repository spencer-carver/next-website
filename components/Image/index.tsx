import NextImage, { ImageProps } from "next/image";
import { FunctionComponent } from "react";

function skipOptimization(props): boolean {
    // don't optimize in development
    if (process.env.NODE_ENV !== "production") {
        return true;
    }

    // don't optimize images from domains I don't control
    if (!(props.src.startsWith("https://spencer.carvers.info") || props.src.indexOf("/") === 0)) {
        return true;
    }

    // don't optimize gifs (breaks animation)
    if (props.src.indexOf(".gif") !== -1) {
        return true;
    }

    return false;
}

const Image: FunctionComponent<ImageProps> = (props) => {
    if (skipOptimization(props)) {
        return <NextImage { ...props } loader={ ({ src }) => src } unoptimized={ true } />;
    }

    return <NextImage { ...props } />;
}

export default Image;
