import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, globalStyles } from "../styles/stitches";

const metadata = {
    description: "Spencer Carver's personal website. Details about his hobbies, skills, and interests, as well as contact information.",
    siteName: "Spencer.Carvers.info",
    siteUrl: "https://spencer.carvers.info",
    twitterHandle: "@spencerrc"
};

export default class MyDocument extends Document {
    render() {
        globalStyles();

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                    <link href="https://fonts.googleapis.com/css?family=Lato&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&amp;display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href={ `${ metadata.siteUrl }/favicon.ico` } />
                    <link rel="canonical" href={ metadata.siteUrl } />
                    <meta name="description" content={ metadata.description } />
                    <meta name="homepage" content="true" />
                    <meta name="referrer" content="unsafe-url" />
                    <meta name="referrer" content="always" />
                    <meta property="og:site_name" content={ metadata.siteName } />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content={ metadata.description } />
                    <meta property="og:title" content={ metadata.siteName } />
                    <meta property="og:url" content={ metadata.siteUrl } />
                    <meta property="og:image" content={ `${ metadata.siteUrl }/seo.jpg` } />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content={ metadata.twitterHandle } />
                    <meta name="twitter:description" content={ metadata.description } />
                    <meta name="twitter:title" content={ metadata.siteName } />
                    <meta name="twitter:image" content={ `${ metadata.siteUrl }/seo.jpg` } />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
