import { CSS } from "@stitches/react";
import { LINKEDIN_URL } from "../../../constants/ExternalUrls";
import { lightTheme, yahooGeocitiesTheme } from "../../../styles/stitches";
import Icon from "../shared";

const linkedInBackgroundImage = (color) => `url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 32 32'%3E%3Ctitle%3Elinkedin%3C/title%3E%3Cpath fill='${ color }' d='M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z'%3E%3C/path%3E%3C/svg%3E")`;
const linkedInStyles: CSS = {
    backgroundImage: linkedInBackgroundImage("white"),
    borderRadius: "5px",
    "&:hover": {
        backgroundImage: linkedInBackgroundImage(encodeURIComponent("#0077b5")),
        backgroundColor: "white"
    },
    [`.${ lightTheme } &`]: {
        backgroundImage: linkedInBackgroundImage("black"),
        "&:hover": {
            backgroundImage: linkedInBackgroundImage(encodeURIComponent("#0077b5")),
            backgroundColor: "white"
        }
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        display: "none"
    }
};

const LinkedInIcon = () => <Icon css={ linkedInStyles } href={ LINKEDIN_URL } content="Linked In" />;

export default LinkedInIcon;
