import Hero from "../components/Hero";
import { lightTheme, styled, yahooGeocitiesTheme } from "../styles/stitches";
import FirstTimeVisitor from "../components/FirstTimeVisitor";
import ConstructionGif from "../components/ConstructionGif";
import Link from "../components/Link";
import { TWITCH_URL, YOUTUBE_URL } from "../constants/ExternalUrls";
import Head from "next/head";

const metadata = {
    description: "Spencer Carver's personal website. Details about his hobbies, skills, and interests, as well as contact information.",
    siteName: "Spencer's Personal Website",
    siteUrl: "https://spencer.carvers.info"
};

const PageDiv = styled("div", {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "10px 20px 0",
    color: "$onBackground",
    [`.${yahooGeocitiesTheme} &`]: {
        marginBottom: "180px"
    }
});
const Heading = styled("h2", {});
const SubHeading = styled("h3", {});
const List = styled("ul", {});
const ListItem = styled("li", {});
const P = styled("p", {});
const A = styled("a", {
    color: "$onBackground",
    textDecoration: "none",
    borderBottom: "2px dotted $secondary",
    "&:hover": {
        backgroundColor: "$secondary"
    },
    [`.${lightTheme} &`]: {
        borderBottom: "2px dotted $onBackground"
    }
});

export default ({ theme, lastUpdate }) => {
    return (
        <>
            <Head>
                <title>{ metadata.siteName }</title>
                <link rel="canonical" href={metadata.siteUrl} />
                <meta name="description" content={metadata.description} />
                <meta name="homepage" content="true" />
                <meta property="og:site_name" content={metadata.siteName} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:title" content={metadata.siteName} />
                <meta property="og:url" content={metadata.siteUrl} />
                <meta property="og:image" content={`${metadata.siteUrl}/seo.jpg`} />
                <meta name="twitter:description" content={metadata.description} />
                <meta name="twitter:title" content={metadata.siteName} />
                <meta name="twitter:image" content={`${metadata.siteUrl}/seo.jpg`} />
            </Head>
            <Hero options={{ overlayLogo: true, hideMobile: true }} />
            <PageDiv>
                <FirstTimeVisitor lastUpdate={lastUpdate} />
                <ConstructionGif theme={theme} />
                <Heading>Site News:</Heading>
                <SubHeading>March 28, 2022</SubHeading>
                <P>Nothing notable here aside from a bunch of minor styling updates noticed now that I have a blog post to look at. I also updated the page metadata for unfurling (e.g. when I post pages to Facebook or Twitter, it will now have details about that page rather than just the site) and messed around with a few of the 'noscript' settings, but would be wholely surprised if anyone legitimately encountered those.</P>
                <SubHeading>March 27, 2022</SubHeading>
                <List>
                    <ListItem>New Website!</ListItem>
                </List>
                <P>The <Link href="https://github.com/spencer-carver/website" component={A}>original version of my website</Link> was an interesting project, but after running into some annoyances with maintainability, it&apos;s time to begin anew! If you&apos;re reading this message, the <Link href="https://github.com/spencer-carver/next-website" component={A}>new website</Link> is live! It matches the previous version functionality-wise (mostly), and has a new (more fun) theme than just light/dark mode! It also introduces a new feature that I (hopefully) will make an effort to update at least once a week...</P>
                <List>
                    <ListItem>Blog!</ListItem>
                </List>
                <P>That&apos;s right, we&apos;re back in the blog-o-sphere! Previously I had tried using external blog sites and linking them around, but none of them really met my style. A few considerations went into this thought, but ultimately I figured it was worthwhile to build myself if I&apos;m going to actually try and stay on with it. The <Link href="/blog/a-tale-of-two-websites" component={A}>first blog post</Link> on this site will talk about the differences between the previous project and this one, and why it took catching COVID to give me the uninterrupted time blocks to actually finish.</P>
                <List>
                    <ListItem>Content!?</ListItem>
                </List>
                <P>One of the first things I built on the previous website were link-outs to my <Link href={YOUTUBE_URL} component={A}>Youtube Channel</Link> and <Link href={TWITCH_URL} component={A}>Twitch Stream</Link>, but outside of a small amount of content in 2020, I really didn&apos;t put anything out there. As the world re-opens, I&apos;m hoping to have more time for hobbies, and looking to capture them in a meaningful way to share with others, and one (or both) of those locations will likely be where any video-form content goes. Will it be good quality? Likely not at first, but I&apos;m a reasonably particular person, and I care about production value, so if it is something I become more interested in who knows how it will turn out.</P>
                <List>
                    <ListItem>Wrap-up</ListItem>
                </List>
                <P>And that concludes the first "Site News" update. I encourage anyone who has never visited this site to take a look around (the icon in the top-right-corner of the nav can be clicked to see full site navigation). There&apos;s a good number of hobby showcases, and a handful of puzzles to explore. If you came to this site in some way that I wasn&apos;t aware of, I would be interested in hearing what you think, and can be reached at <Link href="mailto:website@carvers.info" component={A}>website@carvers.info</Link>.</P>
                <P>That&apos;s all for now, here&apos;s to the start of something new (and hopefully well supported)!</P>
            </PageDiv>
        </>
    );
};

export async function getStaticProps() {
    return {
        props: {
            lastUpdate: (new Date()).getTime()
        }
    }
}
