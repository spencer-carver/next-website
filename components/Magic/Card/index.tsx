import { FunctionComponent, SyntheticEvent, useCallback, useState } from "react";
import { CSS } from "@stitches/react";
import Image from "../../Image";
import { DeckView } from "../../../constants/Magic";
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
    view: DeckView;
    css?: CSS;
}

interface DualFacedCardComponentProps {
    css: CSS;
    name: string;
    frontFace?: string;
    backFace?: string;
    cardLoaded: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
    view: DeckView;
    count: number;
}

const CardContainerDiv = styled("span", {
    display: "block",
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

const StackedCardCountSpan = styled("span", {
    zIndex: "2",
    position: "absolute",
    top: "17px",
    right: "9px",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "4px 6px",
    borderRadius: "25%",
    "@sm": {
        top: "18px",
        right: "10px"
    },
    "@md": {
        top: "21px"
    },
    "@lg": {
        top: "25px",
        right: "13px"
    },
    "@xxl": {
        top: "42px",
        right: "22px"
    }
});

const stackedViewCss: CSS = {
    height: "140px",
    "@sm": {
        width: "110px",
        height: "154px",
        "& img": {
            borderRadius: "6px"
        }
    },
    "@md": {
        width: "125px",
        height: "175px"
    },
    "@lg": {
        width: "155px",
        height: "216px",
        "& img": {
            borderRadius: "8px"
        }
    },
    "@xxl": {
        width: "250px",
        height: "349px",
        "& img": {
            borderRadius: "13px"
        }
    }
};

const DualFacedCardComponent: FunctionComponent<DualFacedCardComponentProps> = ({ css, name, view, count, frontFace, backFace, cardLoaded }) => {
    const [showBack, setShowBack] = useState(false);

    const image = showBack ? backFace : frontFace;

    return (
        <CardContainerDiv css={ css }>
            <Image src={ image?.replace("large", "normal") } alt={ name } title="Click to Transform" width="250px" height="349px" onLoad={ cardLoaded } onClick={ () => setShowBack(!showBack) } />
            { view === DeckView.stacked && count > 1 && <StackedCardCountSpan>x { count }</StackedCardCountSpan> }
        </CardContainerDiv>
    );
};

const CardComponent: FunctionComponent<CardComponentProps> = (props) => {
    const { name, image, image_uris, count, instance, setLoaded, view, css } = props;
    const cardLoaded = useCallback(() => setLoaded(true), [setLoaded]);

    if (view === DeckView.stacked && instance > 1) {
        return;
    }

    if (image_uris.front && image_uris.back) {
        return <DualFacedCardComponent css={ css } name={ name } view={ view } count={ count } frontFace={ image_uris.front } backFace={ image_uris.back } cardLoaded={ cardLoaded } />;
    }

    return (
        <CardContainerDiv css={ css || view === DeckView.stacked ? stackedViewCss : {} }>
            <Image src={ image?.replace("large", "normal") } alt={ name } width="250px" height="349px" onLoad={ cardLoaded } />
            { view === DeckView.stacked && count > 1 && <StackedCardCountSpan>x { count }</StackedCardCountSpan> }
        </CardContainerDiv>
    );
};

export default CardComponent;
