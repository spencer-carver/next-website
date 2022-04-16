import { FunctionComponent, SyntheticEvent, useCallback, useState } from "react";
import { CSS } from "@stitches/react";
import Image from "../../Image";
import { styled } from "../../../styles/stitches";

interface CardComponentProps {
    name: string;
    image?: string;
    image_uris: {
        front: string;
        back?: string;
    };
    id: string;
    type?: "constructed" | "commander" | "oathbreaker" | "sideboard" | "featured";
    instance?: number;
    count: number;
    index: number;
    setLoaded?: (boolean) => void;
    css?: CSS;
}

const CardContainerDiv = styled("div", {
    position: "relative",
    height: "44px",
    width: "100px",
    overflowY: "visible",
    textAlign: "center",
    "& img": {
        position: "relative",
        margin: "0 auto",
        borderRadius: "6px",
        zIndex: "1",
        "&:hover": {
            zIndex: "2",
            "&::after": {
                opacity: "1",
            },
        },
    },
    "@sm": {
        width: "110px",
        "& img": {
            borderRadius: "6px"
        }
    },
    "@md": {
        width: "125px"
    },
    "@lg": {
        width: "155px",
        "& img": {
            borderRadius: "8px"
        }
    },
    "@xxl": {
        width: "250px",
        "& img": {
            borderRadius: "13px"
        }
    }
});

const DualFacedCardComponent: FunctionComponent<{ css: CSS; name: string; frontFace?: string; backFace?: string; cardLoaded: (e: SyntheticEvent<HTMLImageElement, Event>) => void; }> = ({ css, name, frontFace, backFace, cardLoaded }) => {
    const [showBack, setShowBack] = useState(false);

    const image = showBack ? backFace : frontFace;

    return (
        <CardContainerDiv css={ css }>
            <Image src={ image?.replace("large", "normal") } alt={ name } title="Click to Transform" width="250px" height="349px" onLoad={ cardLoaded } onClick={ () => setShowBack(!showBack) } />
        </CardContainerDiv>
    );
};

const CardComponent: FunctionComponent<CardComponentProps> = (props) => {
    const { name, image, image_uris, setLoaded, css = {} } = props;
    const cardLoaded = useCallback(() => setLoaded(true), [setLoaded]);

    if (image_uris.front && image_uris.back) {
        return <DualFacedCardComponent css={ css } name={ name } frontFace={ image_uris.front } backFace={ image_uris.back } cardLoaded={ cardLoaded } />;
    }

    return (
        <CardContainerDiv css={ css }>
            <Image src={ image?.replace("large", "normal") } alt={ name } width="250px" height="349px" onLoad={ cardLoaded } />
        </CardContainerDiv>
    );
};

export default CardComponent;
