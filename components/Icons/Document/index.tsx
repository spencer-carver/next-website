import { CSS } from "@stitches/react";
import Icon from "../shared";

const documentBackgroundImage = (color, backgroundColor) => `url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20fill%3D%22%23${ color }%22%20height%3D%2250px%22%20width%3D%2250px%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20viewBox%3D%220%200%20504%20504%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cg%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20d%3D%22M395.57%2C155.992l-90.54-90.728C303.546%2C63.78%2C301.542%2C63%2C299.45%2C63H65.142c-11.968%2C0-21.696%2C9.672-21.696%2C21.632%20%20%20%20l-0.124%2C397.692c0%2C11.96%2C9.736%2C21.676%2C21.7%2C21.676H376.05c11.96%2C0%2C21.696-9.708%2C21.7-21.664l0.116-320.796%22%20fill%3D%22${ backgroundColor }%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M395.57%2C155.992l-90.54-90.728C303.546%2C63.78%2C301.542%2C63%2C299.45%2C63H65.142c-11.968%2C0-21.696%2C9.672-21.696%2C21.632%20%20%20%20l-0.124%2C397.692c0%2C11.96%2C9.736%2C21.676%2C21.7%2C21.676H376.05c11.96%2C0%2C21.696-9.708%2C21.7-21.664l0.116-320.796%20%20%20%20C397.866%2C159.452%2C397.042%2C157.468%2C395.57%2C155.992z%20M381.994%2C482.332c0%2C3.276-2.668%2C5.924-5.944%2C5.924H65.022%20%20%20%20c-3.28%2C0-5.948-2.624-5.948-5.9l0.124-397.708c0-3.276%2C2.664-5.896%2C5.944-5.896h231.04l85.924%2C86.076L381.994%2C482.332z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.454%2C153.564h-31.972c-8.356%2C0-15.352-6.712-15.352-15.068v-67.72c0-4.352-3.528-7.876-7.876-7.876%20%20%20%20c-4.348%2C0-7.876%2C3.528-7.876%2C7.876v67.72c0%2C17.044%2C14.056%2C30.816%2C31.1%2C30.816h31.972c4.348%2C0%2C7.88-3.52%2C7.88-7.872%20%20%20%20S358.802%2C153.564%2C354.454%2C153.564z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%0A%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M105.738%2C192.936H86.57c-4.348%2C0-7.876%2C3.524-7.876%2C7.876c0%2C4.352%2C3.528%2C7.876%2C7.876%2C7.876h19.168%20%20%20%20c4.344%2C0%2C7.876-3.524%2C7.876-7.876C113.614%2C196.46%2C110.082%2C192.936%2C105.738%2C192.936z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C192.936H141.114c-4.356%2C0-7.876%2C3.524-7.876%2C7.876c0%2C4.352%2C3.524%2C7.876%2C7.876%2C7.876H354.33%20%20%20%20c4.352%2C0%2C7.876-3.524%2C7.876-7.876C362.206%2C196.46%2C358.682%2C192.936%2C354.33%2C192.936z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C232.312h-59.74c-4.352%2C0-7.876%2C3.524-7.876%2C7.876s3.524%2C7.876%2C7.876%2C7.876h59.74c4.352%2C0%2C7.876-3.524%2C7.876-7.876%20%20%20%20S358.682%2C232.312%2C354.33%2C232.312z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M259.218%2C232.312H86.574c-4.348%2C0-7.876%2C3.524-7.876%2C7.876s3.528%2C7.876%2C7.876%2C7.876h172.644%20%20%20%20c4.344%2C0%2C7.876-3.524%2C7.876-7.876S263.562%2C232.312%2C259.218%2C232.312z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C271.684H86.574c-4.348%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.528%2C7.876%2C7.876%2C7.876H354.33%20%20%20%20c4.352%2C0%2C7.876-3.528%2C7.876-7.876C362.206%2C275.212%2C358.682%2C271.684%2C354.33%2C271.684z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C389.812H86.574c-4.348%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.528%2C7.876%2C7.876%2C7.876H354.33%20%20%20%20c4.352%2C0%2C7.876-3.528%2C7.876-7.876C362.206%2C393.34%2C358.682%2C389.812%2C354.33%2C389.812z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M105.738%2C311.06H86.57c-4.348%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.528%2C7.876%2C7.876%2C7.876h19.168%20%20%20%20c4.344%2C0%2C7.876-3.528%2C7.876-7.876C113.614%2C314.588%2C110.082%2C311.06%2C105.738%2C311.06z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C311.06H141.114c-4.356%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.524%2C7.876%2C7.876%2C7.876H354.33%20%20%20%20c4.352%2C0%2C7.876-3.528%2C7.876-7.876C362.206%2C314.588%2C358.682%2C311.06%2C354.33%2C311.06z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C350.436h-59.74c-4.352%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.524%2C7.876%2C7.876%2C7.876h59.74%20%20%20%20c4.352%2C0%2C7.876-3.528%2C7.876-7.876C362.206%2C353.964%2C358.682%2C350.436%2C354.33%2C350.436z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M259.218%2C350.436H86.574c-4.348%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.528%2C7.876%2C7.876%2C7.876h172.644%20%20%20%20c4.344%2C0%2C7.876-3.528%2C7.876-7.876C267.094%2C353.964%2C263.562%2C350.436%2C259.218%2C350.436z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M105.738%2C429.184H86.57c-4.348%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.528%2C7.876%2C7.876%2C7.876h19.168%20%20%20%20c4.344%2C0%2C7.876-3.528%2C7.876-7.876C113.614%2C432.712%2C110.082%2C429.184%2C105.738%2C429.184z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20d%3D%22M354.33%2C429.184H141.114c-4.356%2C0-7.876%2C3.528-7.876%2C7.876c0%2C4.348%2C3.524%2C7.876%2C7.876%2C7.876H354.33%20%20%20%20c4.352%2C0%2C7.876-3.528%2C7.876-7.876C362.206%2C432.712%2C358.682%2C429.184%2C354.33%2C429.184z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%0A%0A%0A%0A%0A%0A%0A%3C%2Fsvg%3E")`;
const documentStyles: CSS = {
    display: "block",
    height: "50px",
    width: "50px",
    margin: "-3px 0 0",
    backgroundImage: documentBackgroundImage("black", "transparent"),
    "&:hover": {
        backgroundImage: documentBackgroundImage("black", "white"),
    }
};

const DocumentIcon = ({ href, content }: { href: string; content: string }) => <Icon css={ documentStyles } href={ href } content={ content } />;

export default DocumentIcon;