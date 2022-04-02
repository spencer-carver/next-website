import { useCallback } from "react";
import Image from "../../Image";
import { styled } from "../../../styles/stitches";

interface CardComponentProps {
    name: string;
    image?: string;
    id: string;
    type?: "constructed" | "commander" | "oathbreaker" | "sideboard" | "featured";
    index: number;
    setLoaded?: (boolean) => void;
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

const CardComponent: React.FunctionComponent<CardComponentProps> = ({ name, image, setLoaded }) => {
    const cardLoaded = useCallback(() => setLoaded(true), [setLoaded]);

    return (
        <CardContainerDiv>
            <Image src={ image?.replace("large", "normal") } alt={ name } width="250px" height="349px" onLoad={ cardLoaded } />
        </CardContainerDiv>
    );
};

export default CardComponent;
