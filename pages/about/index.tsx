import Image from "../../components/Image";
import AboutMe from "../../components/AboutMe";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Stream from "../../components/Stream";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";

const ConstructionDiv = styled ("div", {
    height: "40px",
    margin: "10px auto",
    textAlign: "center"
});

export default ({ theme }) => {
    return (
        <div style={ { maxWidth: "1024px", margin: "0 auto", paddingTop: "10px" } }>
            <AboutMe />
            { theme === yahooGeocitiesTheme && <ConstructionDiv><Image src="/constr16.gif" width="128px" height="40px" /></ConstructionDiv> }
            <Skills />
            { theme === yahooGeocitiesTheme && <ConstructionDiv><Image src="/constr16.gif" width="128px" height="40px" /></ConstructionDiv> }
            <Projects />
            <Stream />
        </div>
    );
};
