import NextImage, { ImageProps } from "next/image";
import { FunctionComponent } from "react";

const Image: FunctionComponent<ImageProps> = (props) => {
    return <NextImage { ...props } loader={ ({ src }) => src } unoptimized={ true } />;
}

export default Image;
