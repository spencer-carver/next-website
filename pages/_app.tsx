import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { defaultTheme } from "../styles/stitches";
import { invalidateExpiredCacheItems } from "../utils/cache";

export default function MyApp({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState(defaultTheme);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        invalidateExpiredCacheItems();
    }, []);

    return (
        <>
            <Head>
                <title>Spencer Carver&apos;s Info</title>
                <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, target-densitydpi=device-dpi" />
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
