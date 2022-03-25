import NextImage, { ImageProps } from "next/image";
import { FunctionComponent } from "react";

const Image: FunctionComponent<ImageProps> = (props) => <NextImage {...props} />;

export default Image;
