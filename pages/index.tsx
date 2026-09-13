import Hero from "../components/Hero";
import { lightTheme, styled, yahooGeocitiesTheme } from "../styles/stitches";
import FirstTimeVisitor from "../components/FirstTimeVisitor";
import ConstructionGif from "../components/ConstructionGif";
import Link from "../components/Link";
import Head from "next/head";
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
const ListItem = styled("li", {
    margin: "3px 0"
});
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
                <link rel="canonical" href={ process.env.NEXT_PUBLIC_SITE_URL } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="true" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content={ process.env.NEXT_PUBLIC_SITE_URL } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <Hero options={{ overlayLogo: true, hideMobile: true }} />
            <PageDiv>
                <FirstTimeVisitor lastUpdate={ lastUpdate } />
                <ConstructionGif theme={ theme } />
                <Heading>Site News:</Heading>
                <SubHeading>September 2026</SubHeading>
                <List>
                    <ListItem>New Puzzle: <Link href="/puzzles/nesting-birds" component={ A }>Nesting Birds</Link></ListItem>
                </List>
                <P>This is also NOT the puzzle I've been working on for a while. This puzzle was another ChatGPT-powered idea that I've had for a while, but seemed too tedious to construct on my own (I probably could have written a script for it, but changed approaches 3-4x during brainstorming and that would have been miserable to do manually)!</P>
                <SubHeading>August 2026</SubHeading>
                <List>
                    <ListItem>New Puzzle: <Link href="/puzzles/franca-lingua" component={ A }>Franca Lingua</Link></ListItem>
                </List>
                <P>This is NOT the puzzle I've been working on for a while. That one will hopefully release before the end of the year and likely needs a standalone website for it. This one was an exploration with ChatGPT about a domain I really like (languages), but am notoriously bad at to where I would never write something like this on my own. I know ChatGPT can make mistakes, but hoping this is sound to the point of clean for puzzle purposes!</P>
                <SubHeading>March 2026</SubHeading>
                <P>Happy #Enigmarch! Each day I&apos;ll be adding a <Link href="https://spencer-carver.github.io/rows-bouquet/enigmarch-2026" component={ A }>new puzzle</Link> from the inspirational prompts posted on the <Link href="https://enigmarch.com/prompts/" component={ A }>Enigmarch website</Link>.</P>
                <SubHeading>February 2026</SubHeading>
                <List>
                    <ListItem>New Game: <Link href="/games" component={ A }>Rows Bouquet</Link></ListItem>
                    <ListItem>Updated Section: <Link href="/games" component={ A }>Games</Link></ListItem>
                </List>
                <P>Ever since I saw one for the first time, I thought the Rows Garden crossword variant was really cool, but also sort of tedious. With the NYT mini crossword (the only one I really tried) becoming subscriber only, I realized I can make my own mini crossword, and revist the alternative format I liked! I actually did quite a bit of research on existing Rows Garden players (and even bought an app), and I had some serious issues with some of the ways they engage, so I hope all of that is resolved with my version. There are still some pending updates in the future (settings to customize behavior rather than just the way I like playing), but this should be a solid new weekly addition!</P>
                <SubHeading>End of 2025</SubHeading>
                <List>
                    <ListItem>New Game: <Link href="/games" component={ A }>Lanterns</Link></ListItem>
                    <ListItem>Updated Section: <Link href="/games" component={ A }>Games</Link></ListItem>
                </List>
                <P>Continuing on the game idea trend, my first logic puzzle, <Link href="/games" component={ A }>Lanterns</Link> is now available! This is a variation of &quot;Light Up&quot; (also known as Akari) but not close enough where they work the same! This game is starting in the Wednesday slot, but may become promted to daily if I find them easy to generate.</P>
                <P>I also have a few <Link href="/blog" component={ A }>End of year blog posts</Link> coming out just before the New Year, recapping many of things I tried this year, both successful and otherwise, and also laying out some goals both for myself and the site coming into 2026!</P>
                <SubHeading>December 2025</SubHeading>
                <List>
                    <ListItem>New Game: <Link href="/games" component={ A }>Prefix <i>Pare</i>amid</Link></ListItem>
                    <ListItem>Updated Section: <Link href="/games" component={ A }>Games</Link></ListItem>
                </List>
                <P>The reversed version of <i>Pare</i>amid is now in the weekly rotation as well! I find this variation to be much more challenging, so I&apos;ve put it on Friday, and assigned the normal one to Monday, but there isn&apos;t really a difficulty progression, it&apos;s more to keep similar games spread out.</P>
                <P>What do I mean by that? I have decided to try and reach the point of seven weekly games (and at least the daily Cryptex), each releasing on a different day of the week, by the end of 2026! More on that in my new year entry, with hopefully the fourth of seven games as well!</P>
                <SubHeading>October 2025</SubHeading>
                <P><Link href="/games" component={ A }><i>Pare</i>amid</Link> is now a weekly game, but there&apos;s a handful available already to start from the Early Access period! I think if my full time job was coming up with puzzles I could do it daily, but alas, that is not the case</P>
                <P>Weirdly in the past month I have heard from various recruiters that someone who is NOT me is trying to pass off my website, LinkedIn, and github with a modified resume for job interviews? I&apos;m a little flattered, but mostly confused how that helps the person at all, since you know... they are not me and even if they pass the job interviews none of their official documents would be correct? Anyway, if you are the person doing this, I do not believe it will help you in any capacity, other than waste the time many people, but you made me add a disclaimer on all of my pages, so thanks for that I guess. I do also occasionally mentor folks entering the CS/Engineering job markets, so perhaps you could have just asked for assistance rather than tried to impersonate?</P>
                <SubHeading>September 2025</SubHeading>
                <List>
                    <ListItem>New Game: <Link href="/games" component={ A }><i>Pare</i>amid</Link></ListItem>
                </List>
                <P>I&apos;m going to say this game is in &quot;Early Access&quot;. I think it can definitely be a daily game, but I am not certain I want to commit to that yet. If you want to play it, let me know any thoughts!</P>
                <SubHeading>July 2025</SubHeading>
                <List>
                    <ListItem>New Puzzle: <Link href="/puzzles/emerald-princess" component={ A }>Emerald Princess</Link></ListItem>
                </List>
                <P>For several weeks earlier this year I was captivated by the game <Link href="https://www.blueprincegame.com/" component={ A }>Blue Prince</Link>, a first-person puzzle roguelite with incredible charm and cohesiveness. This latest puzzle is a tribute using mechanics found in the normal progression of the game.</P>
                <SubHeading>June 2025</SubHeading>
                <List>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/enigmarch-2025" component={ A }>#Enigmarch 2025</Link></ListItem>
                    <ListItem>New Section: <Link href="/games" component={ A }>Games</Link></ListItem>
                    <ListItem>New Life Milestone: Fatherhood</ListItem>
                </List>
                <P>With the solution to #Enigmarch 2025, all puzzles have solutions once again! Unfortunately there was a pretty big error in the construction of that puzzle, so it was only just now corrected. Apologies to anyone who attempted it in the past 2.5 months.</P>
                <P>Additionally, I have created a landing page for games! I&apos;ve been trying to make some fun daily and weekly NYT-style games for Kathy, and decided to commit keeping it going long-term!</P>
                <SubHeading>March 2025</SubHeading>
                <P>Happy #Enigmarch! Each day I&apos;ll be adding a <Link href="/puzzles/enigmarch-2025" component={ A }>new puzzle</Link> from the inspirational prompts posted on the <Link href="https://enigmarch.com/prompts/" component={ A }>Enigmarch website</Link>.</P>
                <P>Over the past several months there are many new recipes on <Link href="https://dumpling.academy" component={ A }>Dumpling Academy</Link>, as well as a lot of new things in the works (one of which you can preview with this Month&apos;s #Enigmarch content!).</P>
                <P>See even older site updates <Link href="/past-updates" component={ A }>here</Link></P>
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
