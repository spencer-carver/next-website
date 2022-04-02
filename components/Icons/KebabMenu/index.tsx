import { CSS } from "@stitches/react";
import { lightTheme, yahooGeocitiesTheme } from "../../../styles/stitches";
import Icon from "../shared";

const kebabMenuBackgroundImage = (color) => `url("data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%20100%20100%22%20style%3D%22enable-background%3Anew%200%200%20100%20100%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A${ color }%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Ccircle%20class%3D%22st0%22%20cx%3D%2250%22%20cy%3D%2213.7%22%20r%3D%2211.7%22%2F%3E%0A%09%3Ccircle%20class%3D%22st0%22%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2211.7%22%2F%3E%0A%09%3Ccircle%20class%3D%22st0%22%20cx%3D%2250%22%20cy%3D%2286.3%22%20r%3D%2211.7%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E")`;
const kebabMenuStyles: CSS = {
    backgroundImage: kebabMenuBackgroundImage("white"),
    [`.${ lightTheme } &`]: {
        backgroundImage: kebabMenuBackgroundImage("black")
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundImage: kebabMenuBackgroundImage("black")
    }
};

const KebabMenu = ({ css, onClick }) => <Icon css={{ ...kebabMenuStyles, ...css }} onClick={ onClick } content="Menu" />;

export default KebabMenu;
