import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import { CSS } from "@stitches/react";
import { styled, DEFAULT_THEME_NAME, THEMES, lightTheme, yahooGeocitiesTheme } from "../../styles/stitches";
import KebabMenu from "../Icons/KebabMenu";
import Image from "../Image";
import { PageProps } from "../../@types/global";
import useStorage, { StorageHandler } from "../../utils/useStorage";
import Link from "../Link";

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

const getSelectedTheme = (storage: StorageHandler): string => {
    let theme;

    try {
        theme = storage.getItem("theme");
    } catch (e) {
        // do nothing
    }

    theme = theme || DEFAULT_THEME_NAME;

    return theme;
};

const Theme: FunctionComponent<{ setTheme: Function }> = ({ setTheme }) => {
    const storage = useStorage("settings");
    const [ showMenu, setShowMenu ] = useState(false);

    const onClick = (): void => setShowMenu(!showMenu);

    const changeTheme = useCallback((e) => {
        const newTheme = e.target.getAttribute("data-theme");

        setTheme(THEMES[newTheme]);
    }, [setTheme]);

    const selectedTheme = getSelectedTheme(storage);

    return (
        <>
            { showMenu && (
                <MenuDiv onClick={ () => setShowMenu(false) }>
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

const GeocitiesCoolPageLink = styled("a", {
    "&:hover": {
        cursor: "pointer"
    }
});

const FooterElement = styled("footer", {
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

const CopyrightNotice = styled("p", {
    display: "inline-block"
});

const PrivacyPolicy = styled("span", {
    position: "absolute",
    right: "5px",
    bottom: "15px",
    fontSize: "10px",
    "@lg": {
        bottom: "22px"
    }
});

const Line2 = styled("div", {
    "@lg": {
        display: "inline-block",
        marginLeft: "3px"
    }
});

const PrivacyLink = styled("a", {
    textDecoration: "none",
    color: "$onBackground"
});

const SONG = "https://www.bensound.com/bensound-music/bensound-house.mp3";

const Footer: FunctionComponent<PageProps & { setTheme: Function }> = ({ theme, setTheme }) => {
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
                    <div style={{ height: "40px", width: "193px", textAlign: "center" }}><Image src="/constr16.gif" alt="Under Construction" width={ 128 } height={ 40 } /></div>
                    <div style={{ height: "31px", width: "193px", textAlign: "center" }}><Image src="/netscapenow.gif" alt="Netscape Now!" width={ 88 } height={ 31 } /></div>
                    <GeocitiesCoolPageLink href="https://cameronsworld.net" target="_blank" rel="noreferrer noopener"><Image src="/geocitie.gif" alt="Cool page of the day" width={ 193 } height={ 106 } /></GeocitiesCoolPageLink>
                    <div style={{ height: "31px", width: "193px", textAlign: "center" }}><Image src="/ie_logo.gif" alt="Free Internet Explorer" width={ 88 } height={ 31 } /></div>
                    <div style={{ height: "40px", width: "193px", textAlign: "center" }}><Image src="/constr16.gif" alt="Under Construction" width={ 128 } height={ 40 } /></div>
                    </GeocitiesBannerDiv>
                    <MusicCreditDiv>Music: https://www.bensound.com/royalty-free-music</MusicCreditDiv>
                </>
            ) }
            <FooterElement>
                <Theme setTheme={ setTheme } />
                <CopyrightNotice>&#169; 2019-{ (new Date()).getFullYear() } Spencer Carver</CopyrightNotice>
                <PrivacyPolicy>
                    <Link href="/legal" component={ PrivacyLink }>
                        Privacy
                        <Line2>Policy</Line2>
                    </Link>
                </PrivacyPolicy>
            </FooterElement>
        </>
    );
};

export default Footer;
