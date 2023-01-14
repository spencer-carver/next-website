import { styled } from "../../styles/stitches";
import Link from "../Link";


const BackAnchor = styled("a", {
    position: "absolute",
    top: "65px",
    left: "30px",
    textDecoration: "none",
    color: "$onBackground",
    zIndex: "2",
    "&:hover": {
        textDecoration: "underline"
    }
});

const BackNavigation = ({ to }) => {
    const text = to === "/" ? "Go Home" : "Back";

    return <Link href={ to } component={ BackAnchor }>&#10094; { text }</Link>;
};

export default BackNavigation;
