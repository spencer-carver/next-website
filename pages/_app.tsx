import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { darkTheme, defaultTheme, lightTheme, THEMES } from "../styles/stitches";
import { invalidateExpiredCacheItems } from "../utils/fetch";
import StorageHandler from "../utils/useStorage";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [ storage ] = useState(new StorageHandler("settings"));
    const [theme, setTheme] = useState(defaultTheme);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        invalidateExpiredCacheItems();

        try {
            const selectedTheme = THEMES[storage.getItem<string>("theme")];

            if (selectedTheme) {
                setTheme(selectedTheme);
            } else if  (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme(darkTheme);
            } else if  (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
                setTheme(lightTheme);
            }

            const body = document.getElementsByTagName("body")[0];
            body.style.visibility = "visible";
            body.style.opacity = "1";
        } catch (e) {
            //do nothing
        }
    }, [storage]);

    return (
        <>
            <Head>
                <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
            </Head>
            <main className={ theme }>
                <Navigation isLoading={ loading }>
                    <Component theme={ theme } setLoading={ setLoading } { ...pageProps } />
                </Navigation>
                <Footer theme={ theme } setTheme={ setTheme } />
            </main>
        </>
    );
};
