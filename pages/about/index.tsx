import Image from "../../components/Image";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Stream from "../../components/Stream";
import ConstructionGif from "../../components/ConstructionGif";
import { styled } from "../../styles/stitches";

export default ({ theme }) => {
    return (
        <div style={ { maxWidth: "1024px", margin: "0 auto", paddingTop: "10px" } }>
            <AboutMe />
            <ConstructionGif theme={ theme } />
            <Skills />
            <ConstructionGif theme={ theme } />
            <Projects />
            <Stream />
        </div>
    );
};
