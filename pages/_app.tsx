import { AppProps } from "next/app";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { darkTheme, lightTheme, defaultTheme, THEMES } from "../styles/stitches";
import { invalidateExpiredCacheItems } from "../utils/fetch";
import useStorage from "../utils/useStorage";

export default function MyApp({ Component, pageProps }: AppProps) {
    const storage = useStorage("settings");
    const [theme, setInternalTheme] = useState(defaultTheme);
    const [loading, setLoading] = useState(false);

    const setTheme = useCallback((newTheme) => {
        try {
            const newThemeName = Object.keys(THEMES).find((themeName) => THEMES[themeName] === newTheme);

            console.log(`Changing theme to ${ newThemeName }`);

            storage.setItem<string>("theme", newThemeName);
        } catch (e) {
            // do nothing
        }

        setInternalTheme(newTheme);
    }, [storage]);

    useEffect(() => {
        invalidateExpiredCacheItems();

        try {
            const selectedTheme = THEMES[storage.getItem<string>("theme")];

            if (selectedTheme) {
                setInternalTheme(selectedTheme);
            } else if  (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme(darkTheme);
            } else if  (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
                setTheme(lightTheme);
            }

            const body = document.getElementsByTagName("body")[0];
            body.style.visibility = "visible";
            body.style.opacity = "1";

            const uuid = storage.getItem<string>("uuid");

            if (!uuid) {
                storage.setItem("uuid", crypto.randomUUID());
            }
        } catch (e) {
            //do nothing
        }
    }, [storage, setTheme]);

    return (
        <>
            <Head>
                <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
            </Head>
            <main className={ theme }>
                <Navigation isLoading={ loading }>
                    <Component theme={ theme } setTheme={ setTheme } setLoading={ setLoading } { ...pageProps } />
                </Navigation>
                <Footer theme={ theme } setTheme={ setTheme } />
            </main>
        </>
    );
};
