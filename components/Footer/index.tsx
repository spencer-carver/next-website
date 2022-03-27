import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { styled, DEFAULT_THEME_NAME, THEMES, lightTheme, yahooGeocitiesTheme } from "../../styles/stitches";
import KebabMenu from "../Icons/KebabMenu";
import Image from "../Image";

const MenuDiv = styled("div", {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    bottom: "45px",
    left: "-40px",
    margin: "5px 30px",
    padding: "10px 15px",
    zIndex: "1000003",
    backgroundColor: "$surface01",
    borderTopRightRadius: "$borderRadius",
    borderTop: "1px solid transparent",
    borderRight: "1px solid transparent",
    [`.${ lightTheme } &`]: {
        borderTop: "1px solid black",
        borderRight: "1px solid black"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "$secondary",
        color: "$onSecondary"
    }
});
const ThemeButton = styled("button", {
    "&:hover": {
        cursor: "pointer"
    }
});
const selectedThemeButtonStyles: CSS = {
    backgroundColor: "$surface01",
    color: "$onSurface",
    [`.${ lightTheme } &`]: {
        backgroundColor: "$onSurface",
        color: "$surface01"
    }
};
const kebabMenuStyles: CSS = {
    float: "left",
    marginLeft: "10px",
    marginTop: "10px",
    backgroundColor: "transparent",
    border: "none",
    "&:hover": {
        cursor: "pointer"
    }
};

const getSelectedTheme = (): string => {
    let theme;

    try {
        theme = localStorage.getItem("theme");
    } catch (e) {
        // do nothing
    }

    theme = theme || DEFAULT_THEME_NAME;

    return theme;
};

const Theme: FunctionComponent<{ setTheme: Function }> = ({ setTheme }) => {
    const [ showMenu, setShowMenu ] = useState(false);

    const onClick = (): void => setShowMenu(!showMenu);

    useEffect(() => { setTheme(THEMES[getSelectedTheme()]) }, []);

    const changeTheme = useCallback((e) => {
        const newTheme = e.target.getAttribute("data-theme");

        try {
            localStorage.setItem("theme", newTheme);
        } catch (e) {
            // do nothing
        }

        setTheme(THEMES[newTheme]);
    }, []);

    const selectedTheme = getSelectedTheme();

    return (
        <>
            { showMenu && (
                <MenuDiv>
                    Theme:&nbsp;
                    { Object.keys(THEMES).map((themeName) => <ThemeButton key={ themeName } css={ themeName === selectedTheme ? selectedThemeButtonStyles : {} } data-theme={ themeName } onClick={ changeTheme }>{ themeName }</ThemeButton>) }
                </MenuDiv>
            ) }
            <KebabMenu
                css={ kebabMenuStyles }
                onClick={ onClick }
            />
        </>
    );
};

const MusicCreditDiv = styled("div", {
    color: "$primary",
    textAlign: "center",
    marginBottom: "10px"
});

const GeocitiesBannerDiv = styled("div", {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
});

const GeocitiesCoolPageLink = styled ("a", {
    "&:hover": {
        cursor: "pointer"
    }
});

const Footer = styled("footer", {
    position: "relative",
    bottom: "0",
    backgroundColor: "$surface01",
    height: "50px",
    width: "100%",
    textAlign: "center",
    color: "$onSurface",
    fontSize: "14px",
    borderTop: "1px solid transparent",
    [`.${ lightTheme } &`]: {
        borderTop: "1px solid black"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "$secondary",
        color: "$onSecondary"
    }
});

const CopyrightNotice = styled ("p", {
    display: "inline-block"
});

const SONG = "https://www.bensound.com/bensound-music/bensound-house.mp3";

export default ({ theme, setTheme }) => {
    useEffect(() => {
        if (theme !== yahooGeocitiesTheme) {
            return;
        }

        const audio = new Audio(SONG);
        audio.volume = 0.3;
        audio.loop = true;

        const playAudioListener = async () => {
            try {
                await audio.play();
            } catch (e) {
                // do nothing
            }
        };

        playAudioListener();

        document.addEventListener("click", playAudioListener, { once: true });

        return () => {
            audio.pause();
            document.body.removeEventListener("click", playAudioListener);
        };
    }, [theme]);

    return (
        <>
            { (theme === yahooGeocitiesTheme) && (
                <>
                    <GeocitiesBannerDiv>
                    <div style={{ height: "40px", width: "193px", textAlign: "center" }}><Image src="/constr16.gif" width="128px" height="40px" /></div>
                    <div style={{ height: "31px", width: "193px", textAlign: "center" }}><Image src="/netscapenow.gif" width="88px" height="31px" /></div>
                    <GeocitiesCoolPageLink href="https://cameronsworld.net" target="_blank" rel="noreferrer noopener"><Image src="/geocitie.gif" width="193px" height="106px" /></GeocitiesCoolPageLink>
                    <div style={{ height: "31px", width: "193px", textAlign: "center" }}><Image src="/ie_logo.gif" width="88px" height="31px" /></div>
                    <div style={{ height: "40px", width: "193px", textAlign: "center" }}><Image src="/constr16.gif" width="128px" height="40px" /></div>
                    </GeocitiesBannerDiv>
                    <MusicCreditDiv>Music: https://www.bensound.com/royalty-free-music</MusicCreditDiv>
                </>
            ) }
            <Footer>
                <Theme setTheme={ setTheme } />
                <CopyrightNotice>&#169; 2019-{ (new Date()).getFullYear() } Spencer Carver</CopyrightNotice>
            </Footer>
        </>
    );
};
