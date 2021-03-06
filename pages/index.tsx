import Hero from "../components/Hero";
import { lightTheme, styled, yahooGeocitiesTheme } from "../styles/stitches";
import FirstTimeVisitor from "../components/FirstTimeVisitor";
import ConstructionGif from "../components/ConstructionGif";
import Link from "../components/Link";
import { TWITCH_URL, YOUTUBE_URL } from "../constants/ExternalUrls";
import Head from "next/head";
import Tooltip from "../components/Tooltip";
import { FunctionComponent } from "react";
import { PageProps } from "../@types/global";

const NAME = "Spencer's Personal Website";
const DESCRIPTION = "Spencer Carver's personal website. Details about his hobbies, skills, and interests, as well as contact information.";

const PageDiv = styled("div", {
    maxWidth: "1024px",
    margin: "0 auto",
    padding: "10px 20px 0",
    color: "$onBackground",
    [`.${ yahooGeocitiesTheme } &`]: {
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
    [`.${ lightTheme } &`]: {
        borderBottom: "2px dotted $onBackground"
    }
});

const Homepage: FunctionComponent<PageProps & { lastUpdate: number; }> = ({ theme, lastUpdate }) => {
    return (
        <>
            <Head>
                <title>{ NAME }</title>
                <link rel="canonical" href="https://spencer.carvers.info" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="true" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content="https://spencer.carvers.info" />
                <meta property="og:image" content="https://spencer.carvers.info/seo.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo.jpg" />
            </Head>
            <Hero options={{ overlayLogo: true, hideMobile: true }} />
            <PageDiv>
                <FirstTimeVisitor lastUpdate={ lastUpdate } />
                <ConstructionGif theme={ theme } />
                <Heading>Site News:</Heading>
                <SubHeading>July 11, 2022</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/magic" component={ A }>Magic landing page</Link></ListItem>
                </List>
                <P>I have redone the main landing page and added stubs for decks that are in progress. In the coming weeks I am looking to add at least a short philosophy blurb under each completed deck, and those updates should come without a full site enhancement.</P>
                <P>On the puzzle front, I have captured some ideas for my first round, but am still ways away from both finalizing that idea, and finding a way to represent it here.</P>
                <P>And finally the blog is... a struggle. But if I come up with something worthwhile I will definitely keep at it!</P>
                <SubHeading>June 28, 2022</SubHeading>
                <List>
                    <ListItem>New Legacy Deck: <Link href="/magic/deck/burn" component={ A }>Burn</Link></ListItem>
                </List>
                <P>I have gotten a chance to play some more magic recently! Working on fleshing out the deck details for my Legacy decks, and picked up the 11th deck for my battlebox!</P>
                <SubHeading>June 17, 2022</SubHeading>
                <List>
                    <ListItem>New Puzzle: <Link href="/puzzles/x-marks-the-spot" component={ A }>X Marks the Spot</Link></ListItem>
                </List>
                <P>This idea came together pretty quickly! While it ended in a different format than what I originally had in mind, I quite like it! Hopefully you do too!</P>
                <SubHeading>June 13, 2022</SubHeading>
                <P>I&apos;ve been preoccupied with other things and a lovely vacation, but hoping to resume some entries in the coming weeks. Added a disclaimer indicating that all my opinions are my own, because all my opinions are my own.</P>
                <SubHeading>April 16, 2022</SubHeading>
                <P>The Magic deck details pages have been updated to support philosophy and sideboarding guidance for select decks. Currently only <Link href="/magic/deck/amulet-titan" component={ A }>Amulet Titan</Link> has any details added (and even that is a work-in-progress), but more to come over time! I&apos;ve also began tracking match results, and will look to see how I can integrate statistics of this regard cleanly into the page as well, or if I will need to update that section manually.</P>
                <SubHeading>April 2, 2022</SubHeading>
                <P>Image optimization is here! Site experience should load faster (aside from blog posts as I am not self-hosting most of those images currently).</P>
                <SubHeading>March 30, 2022</SubHeading>
                <List>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2022" component={ A }>#Enigmarch 2022</Link></ListItem>
                </List>
                <P>Yesterday I found out from a friend about <Link href="https://enigmarch.com/" component={ A }>#Enigmarch</Link>, a month long puzzle creation challenge. Well it&apos;s VERY far into March at the moment, but I wanted to participate, and as such have created a single puzzle with the <Tooltip tooltip="Day 30's theme is PHANTOM, so this is close right?">spirit</Tooltip> of a month-long challenge (though I couldn&apos;t find a way to work the daily prompts into each of my days unfortunately). Looking forward to tackling it day-by-day next year!</P>
                <SubHeading>March 28, 2022</SubHeading>
                <P>Nothing notable here aside from a bunch of minor styling updates noticed now that I have a blog post to look at. I also updated the page metadata for unfurling (e.g. when I post pages to Facebook or Twitter, it will now have details about that page rather than just the site) and messed around with a few of the &apos;noscript&apos; settings, but would be wholely surprised if anyone legitimately encountered those.</P>
                <SubHeading>March 27, 2022</SubHeading>
                <List>
                    <ListItem>New Website!</ListItem>
                </List>
                <P>The <Link href="https://github.com/spencer-carver/website" component={ A }>original version of my website</Link> was an interesting project, but after running into some annoyances with maintainability, it&apos;s time to begin anew! If you&apos;re reading this message, the <Link href="https://github.com/spencer-carver/next-website" component={ A }>new website</Link> is live! It matches the previous version functionality-wise (mostly), and has a new (more fun) theme than just light/dark mode! It also introduces a new feature that I (hopefully) will make an effort to update at least once a week...</P>
                <List>
                    <ListItem>Blog!</ListItem>
                </List>
                <P>That&apos;s right, we&apos;re back in the blog-o-sphere! Previously I had tried using external blog sites and linking them around, but none of them really met my style. A few considerations went into this thought, but ultimately I figured it was worthwhile to build myself if I&apos;m going to actually try and stay on with it. The <Link href="/blog/a-tale-of-two-websites" component={ A }>first blog post</Link> on this site will talk about the differences between the previous project and this one, and why it took catching COVID to give me the uninterrupted time blocks to actually finish.</P>
                <List>
                    <ListItem>Content!?</ListItem>
                </List>
                <P>One of the first things I built on the previous website were link-outs to my <Link href={ YOUTUBE_URL } component={ A }>Youtube Channel</Link> and <Link href={ TWITCH_URL } component={ A }>Twitch Stream</Link>, but outside of a small amount of content in 2020, I really didn&apos;t put anything out there. As the world re-opens, I&apos;m hoping to have more time for hobbies, and looking to capture them in a meaningful way to share with others, and one (or both) of those locations will likely be where any video-form content goes. Will it be good quality? Likely not at first, but I&apos;m a reasonably particular person, and I care about production value, so if it is something I become more interested in who knows how it will turn out.</P>
                <List>
                    <ListItem>Wrap-up</ListItem>
                </List>
                <P>And that concludes the first &quot;Site News&quot; update. I encourage anyone who has never visited this site to take a look around (the icon in the top-right-corner of the nav can be clicked to see full site navigation). There&apos;s a good number of hobby showcases, and a handful of puzzles to explore. If you came to this site in some way that I wasn&apos;t aware of, I would be interested in hearing what you think, and can be reached at <Link href="mailto:website@carvers.info" component={ A }>website@carvers.info</Link>.</P>
                <P>That&apos;s all for now, here&apos;s to the start of something new (and hopefully well supported)!</P>
            </PageDiv>
        </>
    );
};

export default Homepage;

export async function getStaticProps() {
    return {
        props: {
            lastUpdate: (new Date()).getTime()
        }
    }
}
