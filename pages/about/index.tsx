import Head from "next/head";
import AboutMe from "../../components/AboutMe";
import { Projects } from "../../components/Projects";
import Skills from "../../components/Skills";
import Stream from "../../components/Stream";
import ConstructionGif from "../../components/ConstructionGif";
import { FunctionComponent } from "react";
import { PageProps } from "../../@types/global";
import { styled } from "../../styles/stitches";

const TITLE = "About Me";
const DESCRIPTION = "Details about Spencer Carver, who created this webpage.";

const PageDiv = styled("div", {
    maxWidth: "1024px",
    margin: "0 auto",
    paddingTop: "10px"
});

const About: FunctionComponent<PageProps> =  ({ theme }) => {
    return (
        <>
            <Head>
                <title>{TITLE}</title>
                <link rel="canonical" href="https://spencer.carvers.info/about" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content="https://spencer.carvers.info/about" />
                <meta property="og:image" content="https://spencer.carvers.info/seo.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo.jpg" />
            </Head>
            <PageDiv>
                <AboutMe />
                <ConstructionGif theme={ theme } />
                <Skills />
                <ConstructionGif theme={ theme } />
                <Projects />
                <Stream />
            </PageDiv>
        </>
    );
};

export default About;
