import Document, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, globalStyles } from "../styles/stitches";

const MastodonVerificationTag = () => <a rel="me" href="https://masto.nyc/@spencerrc" style={{ display: "none" }}>Mastodon</a>;

export default class MyDocument extends Document {
    render() {
        globalStyles();

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                    <noscript>
                        <style dangerouslySetInnerHTML={{ __html: "body { visibility: visible; opacity: 1; }" }} />
                    </noscript>
                    <link href="https://fonts.googleapis.com/css?family=Lato&amp;display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&amp;display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/favicon.ico` } />
                    <meta name="referrer" content="unsafe-url" />
                    <meta name="referrer" content="always" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@spencerrc" />
                </Head>
                <body>
                    <MastodonVerificationTag />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
