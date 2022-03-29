import Image from "../Image";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";

const ConstructionDiv = styled("div", {
    height: "40px",
    margin: "10px auto",
    textAlign: "center"
});

const ConstructionGif = ({ theme, useFallback = false }) => {
    if (theme === yahooGeocitiesTheme) {
        return <ConstructionDiv><Image src="/constr16.gif" alt="Under Construction" width="128px" height="40px" /></ConstructionDiv>;
    }

    if (useFallback) {
        return <span>Coming Soon</span>
    }

    return null;
};

export default ConstructionGif;