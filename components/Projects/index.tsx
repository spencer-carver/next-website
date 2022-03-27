import React, { FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import Link from "../Link";
import Image from "../Image";
import Slideshow from "../Slideshow";
import PROJECT_DETAILS, { Project, Resource } from "./projects";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";

const ResourcesDiv = styled("div", {
    display: "none",
    "@lg": {
        display: "flex",
        flexDirection: "row",
        marginTop: "10px"
    }
});

const SectionTitleSpan = styled("span", {
    padding: "14px 10px 14px 0"
});

const ResourceLink = styled("a", {
    margin: "0 5px"
});

const ResourceImageWrapperDiv = styled("div", {
    marginRight: "10px",
    "&:last-child": {
        marginRight: "0"
    },
    [`.${ lightTheme } &`]: {
        filter: "grayscale()",
        "&:hover": {
            filter: "unset"
        }
    },
});

const resourceLinkStyles: CSS = {
    margin: "0",
    borderRadius: "25px",
    height: "50px",
    backgroundClip: "padding-box",
    "&:hover": {
        backgroundColor: "white"
    }
};

const Resources: FunctionComponent<{ title: string; resources?: Array<Resource> }> = ({ title, resources = [] }) => {
    if (resources.length === 0) {
        return null;
    }

    return (
        <ResourcesDiv>
            <SectionTitleSpan>{ title }:</SectionTitleSpan>
            {
                resources.map(({ image, alt, url }, index) => {
                    if (url) {
                        return (
                            <Link key={ index } href={ url as string } component={ ResourceLink }>
                                <ResourceImageWrapperDiv css={ resourceLinkStyles }>
                                    <Image src={ image } alt={ alt } title={ alt } width="50px" height="50px" />
                                </ResourceImageWrapperDiv>
                            </Link>
                        );
                    }

                    return (
                        <ResourceImageWrapperDiv key={ index }>
                            <Image src={ image } alt={ alt } title={ alt } width="50px" height="50px" />
                        </ResourceImageWrapperDiv>
                    );
                })
            }
        </ResourcesDiv>
    );
};

const CardDiv = styled("div", {
    display: "inline-block",
    textAlign: "center",
    margin: "0 auto",
    padding: "100px 0 20px",
    color: "$onBackground",
    width: "240px",
    "&:last-child": {
        borderBottom: "none"
    },
    "@lg": {
        width: "600px",
        display: "flex",
        flexDirection: "row",
        height: "300px"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        color: "$onSurface"
    }
});

const MainDiv = styled("div", {
    "@lg": {
        width: "165px",
        display: "flex",
        flexDirection: "column-reverse"
    }
});

const TitleSpan = styled("span", {
    display: "block",
    fontSize: "24px",
    "@lg": {
        fontSize: "32px"
    }
});

const CardImageWrapperDiv = styled("div", {
    position: "relative",
    padding: "10px 0",
    height: "100px",
    "@lg": {
        width: "150px",
        height: "200px"
    },
    [`.${ lightTheme } &`]: {
        filter: "grayscale()",
        "&:hover": {
            filter: "unset"
        }
    },
});

const InfoDiv = styled("div", {
    "@lg": {
        margin: "20px 0 0 20px",
        padding: "10px",
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "10px",
        textAlign: "left",
        [`.${ lightTheme } &`]: {
            backgroundColor: "rgba(0,0,0,0.1)"
        },
        [`.${ yahooGeocitiesTheme } &`]: {
            backgroundColor: "rgba(195,195,195,0.4)",
            border: "2px groove $surface07",
            borderRadius: "0"
        }
    }
});

const DescriptionSpan = styled("span", {
    display: "block"
});

const ExtendedDescriptionSpan = styled("span", {
    display: "none",
    "@lg": {
        display: "inherit",
        marginTop: "10px"
    }
});

const ProjectCard: FunctionComponent<Project> = (props) => {
    const {
        title,
        description,
        extendedDescription,
        imageUrl,
        imageAlt,
        utilizes,
        resources
    } = props;

    return (
        <CardDiv>
            <MainDiv>
                <TitleSpan>{ title }</TitleSpan>
                <CardImageWrapperDiv>
                    <Image src={ imageUrl } alt={ imageAlt } layout="fill"  objectFit="contain" />
                </CardImageWrapperDiv>
            </MainDiv>
            <InfoDiv>
                <DescriptionSpan>{ description }</DescriptionSpan>
                <ExtendedDescriptionSpan>{ extendedDescription }</ExtendedDescriptionSpan>
                <Resources title="Technologies" resources={ utilizes } />
                <Resources title="Resources" resources={ resources } />
            </InfoDiv>
        </CardDiv>
    );
};

const CardContainerDiv = styled("div", {
    visibility: "hidden",
    position: "relative",
    display: "none",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px 0 40px"
});

const cardContainerSelectedStyles: CSS = {
    visibility: "visible",
    display: "flex"
};

interface ProjectCardProps extends Project {
    index: number;
    selected: number;
}

const ProjectCardContainer: FunctionComponent<ProjectCardProps> = (props) => {
    const {
        index,
        selected
    } = props;

    return (
        <CardContainerDiv css={ selected === index ? cardContainerSelectedStyles : {} }>
            <ProjectCard { ...props } />
        </CardContainerDiv>
    );
};

const ProjectsDiv = styled("div", {
    position: "relative",
    overflow: "hidden"
});

const ModuleTitleSpan = styled("span", {
    position: "absolute",
    float: "left",
    color: "$onBackground",
    fontSize: "36px",
    textTransform: "capitalize",
    fontWeight: "normal",
    margin: "0",
    top: "40px",
    left: "0px",
    "@lg": {
        left: "10%"
    }
});

const Projects: FunctionComponent = () => {
    const projects = Object.keys(PROJECT_DETAILS).map((key) => PROJECT_DETAILS[key]);

    return (
        <ProjectsDiv>
            <ModuleTitleSpan>Projects</ModuleTitleSpan>
            <Slideshow items={ projects } component={ ProjectCardContainer } options={ {} } />
        </ProjectsDiv>
    );
};

export default Projects;
