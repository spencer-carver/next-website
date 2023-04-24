import React, { FunctionComponent } from "react";
import Link from "../Link";
import Image from "../Image";
import calculateYearsBetween from "../../utils/calculateYearsBetween";
import {
    MOUNTAINPROJECT_URL,
    GOODREADS_URL
} from "../../constants/ExternalUrls";
import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";

const MY_BIRTHDAY = new Date(1991, 2, 23);

const PersonalBlurbDiv = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "$onBackground",
    "@lg": {
        flexDirection: "row"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        border: "2px groove $onBackground"
    }
});

const PhotoContainerWrapper = styled("div", {
    position: "relative",
    margin: "20px auto",
    "@xxl": {
        flex: "1",
    }
});

const PhotoContainerDiv = styled("div", {
    margin: "auto",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    "@lg": {
        width: "250px",
        height: "250px",
    },
    "@xxl": {
        width: "350px",
        height: "350px"
    },
    [`.${ lightTheme } &`]: {
        filter: "grayscale()",
        "&:hover": {
            filter: "unset"
        }
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        borderRadius: "0",
        "&:hover": {
            transform: "scaleX(-1)",
        }
    }
});

const PersonalDetailsDiv = styled("div", {
    fontSize: "18px",
    lineHeight: "27px",
    textAlign: "left",
    margin: "0 40px",
    "@lg": {
        fontSize: "20px",
        lineHeight: "32px"
    },
    "@xxl": {
        fontSize: "24px",
        lineHeight: "36px",
        flex: "1"
    }
});

const LinkTag = styled("a", {
    color: "$onSurface",
    textDecoration: "none",
    borderBottom: "2px dotted $secondary",
    "&:hover": {
        color: "$onSecondary",
        backgroundColor: "$secondary"
    },
    [`.${ lightTheme } &`]: {
        borderBottom: "2px dotted $border",
        color: "$onSurface",
        "&:hover": {
            color: "$onSurface"
        }
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        color: "$onSurface",
        "&:hover": {
            color: "$onSurface"
        }
    }
});

const AboutMe: FunctionComponent = () => {
    return (
        <>
            <div className="sectionContent">
                <PersonalBlurbDiv>
                    <PhotoContainerWrapper>
                        <PhotoContainerDiv>
                            <Image src="/thinking.jpg" alt="Spencer Thinking" layout="intrinsic" objectFit="cover" height={ 350 } width={ 350 } />
                        </PhotoContainerDiv>
                    </PhotoContainerWrapper>
                    <PersonalDetailsDiv>
                        <p>
                            I&apos;m a { calculateYearsBetween(MY_BIRTHDAY) } year old Software Developer based out of New York, New York.
                        </p>
                        <p>
                            I enjoy <Link href={ MOUNTAINPROJECT_URL } component={ LinkTag }>Rock Climbing</Link>
                            , <Link href="/magic" component={ LinkTag }>Magic: the Gathering</Link>,
                            and <Link href="/cocktails" component={ LinkTag }>Cocktails</Link>; though I wouldn&apos;t recommend combining them into a single activity.
                        </p>
                        <p>
                            I&apos;m also a fan of <Link href="/puzzles" component={ LinkTag }>Puzzles</Link>
                            &nbsp;and <Link href={ GOODREADS_URL } component={ LinkTag }>Science Fiction and Fantasy novels</Link>.
                        </p>
                    </PersonalDetailsDiv>
                </PersonalBlurbDiv>
            </div>
        </>
    );
};

export default AboutMe;
