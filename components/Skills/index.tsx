import React, { useState, FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";
import calculateYearsBetween from "../../utils/calculateYearsBetween";
import Flipcard from "../FlipCard";
import SKILLS, { SkillType } from "./skills";

const SectionDiv = styled("div", {
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "500px",
    "@md": {
        maxWidth: "660px"
    },
    "@lg": {
        maxWidth: "960px"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        margin: "0 auto 10px"
    }
});

export const ControlsDiv = styled("div", {
    width: "280px",
    margin: "20px",
    textAlign: "center",
    paddingTop: "12px",
    color: "$onBackground",
    [`.${ yahooGeocitiesTheme } &`]: {
        margin: "0",
        padding: "0",
        width: "100%"
    }
});

export const SelectorSpan = styled("span", {
    fontSize: "36px",
    color: "$onSurface",
    backgroundColor: "transparent"
});

const themeActive: CSS = {
    color: "$secondary",
    [`.${ lightTheme } &`]: {
        color: "unset",
        fontWeight: "bold",
        "&:hover": {
            color: "$secondary"
        }
    }
};

const themeInactive: CSS = {
    "&:hover": {
        cursor: "pointer"
    },
    [`.${ lightTheme } &`]: {
        color: "unset",
        "&:hover": {
            color: "$secondary"
        }
    }
};

const SELECTOR_THEMES = {
    [SkillType.skill]: { backgroundColor: "$secondary" },
    [SkillType.interest]: { color: "black", backgroundColor: "$secondary" },
    [SkillType.certification]: { backgroundColor: "$secondary" }
};

const Skills: FunctionComponent = () => {
    const [ selectedCategory, setSelectedCategory ] = useState(SkillType.skill);

    const setSkillsSelected = (): void => setSelectedCategory(SkillType.skill);
    const setInterestsSelected = (): void => setSelectedCategory(SkillType.interest);
    const setCertificationsSelected = (): void => setSelectedCategory(SkillType.certification);

    return (
        <SectionDiv>
            <ControlsDiv>
                <SelectorSpan css={ selectedCategory === SkillType.skill ? themeActive : themeInactive }
                    role="button"
                    aria-label="Skills"
                    tabIndex={ 0 }
                    onClick={ setSkillsSelected }
                    onKeyPress={ setSkillsSelected }>
                    Skills
                </SelectorSpan> &amp; 
                <SelectorSpan css={ selectedCategory === SkillType.interest ? themeActive : themeInactive }
                    role="button"
                    aria-label="Interests"
                    tabIndex={ 0 }
                    onClick={ setInterestsSelected }
                    onKeyPress={ setInterestsSelected }>
                    Interests
                </SelectorSpan> &amp;
                <SelectorSpan css={ selectedCategory === SkillType.certification ? themeActive : themeInactive }
                    role="button"
                    aria-label="Certifications"
                    tabIndex={ 0 }
                    onClick={ setCertificationsSelected }
                    onKeyPress={ setCertificationsSelected }>
                    Certifications
                </SelectorSpan>
            </ControlsDiv>
            {
                SKILLS.map((entry, index) => {
                    return (
                        <Flipcard key={ index }
                            selected={ selectedCategory === entry.type }
                            onClick={ (): void => setSelectedCategory(entry.type) }
                            theme={ SELECTOR_THEMES[entry.type] }
                            id={ entry.id }
                            imageSrc={ entry.imageSrc }
                            imageAlt={ entry.imageAlt }
                        >
                            <SkillTab { ...entry }/>
                        </Flipcard>
                    );
                })
            }
        </SectionDiv>
    );
};

const SkillDiv = styled("div", {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    justifyContent: "right",
    alignContent: "center",
    width: "150px",
    padding: "20px 0",
    [`.${ yahooGeocitiesTheme } &`]: {
        marginLeft: "50px",
        marginTop: "7px",
        width: "101px",
        padding: "0"
    }
});

const DetailsDiv = styled("div", {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    float: "right",
    maxWidth: "150px"
});

const SkillSpan = styled("span", {
    margin: "10px auto 0",
    textAlign: "center",
    color: "black",
    [`.${ yahooGeocitiesTheme } &`]: {
        color: "$primary"
    }
});

const extraSpanStyles: CSS = {
    [`.${ yahooGeocitiesTheme } &`]: {
        display: "none"
    }
};

interface SkillTabParams {
    id: string;
    title: string;
    startDate?: Date;
    endDate?: Date;
    restartDate?: Date;
    reendDate?: Date;
    experienceLevel?: string;
    showTenure?: boolean;
}

const SkillTab: FunctionComponent<SkillTabParams> = (props) => {
    const {
        id,
        title,
        startDate,
        endDate = undefined,
        restartDate = undefined,
        reendDate = undefined,
        experienceLevel,
        showTenure = false
    } = props;

    const experienceYears = calculateYearsBetween(startDate, endDate) + calculateYearsBetween(restartDate, reendDate);
    const experienceText = experienceYears === 0
        ? "Learning"
        : `${ experienceYears } Years`;

    return (
        <SkillDiv>
            <DetailsDiv>
                <SkillSpan>{ title }</SkillSpan>
                { experienceLevel && <SkillSpan css={ extraSpanStyles }>{ experienceLevel }</SkillSpan> }
                { !experienceLevel && <SkillSpan css={ extraSpanStyles } >{ experienceText }</SkillSpan> }
                { !(experienceLevel && !showTenure) && startDate && <SkillSpan css={ extraSpanStyles }>{ startDate.getFullYear() } - { endDate ? endDate.getFullYear() : "Present" }</SkillSpan> }
                { !(experienceLevel && !showTenure) && restartDate && <SkillSpan css={ extraSpanStyles }>{ restartDate.getFullYear() } - { reendDate ? reendDate.getFullYear() : "Present" }</SkillSpan> }
            </DetailsDiv>
        </SkillDiv>
    );
};
export default Skills;
