import { CSS } from "@stitches/react";
import { FACEBOOK_URL } from "../../../constants/ExternalUrls";
import { lightTheme, yahooGeocitiesTheme } from "../../../styles/stitches";
import Icon from "../shared";


const facebookBackgroundImage = (color) => `url("data:image/svg+xml;charset=utf8,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 32 32'%3E%3Ctitle%3Efacebook%3C/title%3E%3Cpath fill='${ color }' d='M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z'%3E%3C/path%3E%3C/svg%3E")`;
const facebookIconStyles: CSS = {
    backgroundImage: facebookBackgroundImage("white"),
    "&:hover": {
        backgroundImage: facebookBackgroundImage(encodeURIComponent("#4267b2"))
    },
    [`.${ lightTheme } &`]: {
        backgroundImage: facebookBackgroundImage("black"),
        "&:hover": {
            backgroundImage: facebookBackgroundImage(encodeURIComponent("#4267b2"))
        }
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        position: "relative",
        backgroundImage: "none",
        width: "67px",
        margin: "10px 5px",
        lineHeight: "30px",
        "&::before": {
            content: "MySpace",
            lineHeight: "30px",
            color: "$onSecondary",
            textDecoration: "underline",
            position: "absolute",
            left: "0"
        },
        "&:hover": {
            "&::before": {
                color: "$primary",
            }
        },
    }
};


export default () => <Icon css={ facebookIconStyles } href={ FACEBOOK_URL } content="Facebook" />;
