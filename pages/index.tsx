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
                <SubHeading>End of 2025</SubHeading>
                <List>
                    <ListItem>New Game: <Link href="/games" component={ A }>Light up the Room</Link></ListItem>
                    <ListItem>Updated Section: <Link href="/games" component={ A }>Games</Link></ListItem>
                </List>
                <P>Continuing on the game idea trend, my first logic puzzle, <Link href="/games" component={ A }>Light up the Room</Link> is now available! This is a variation of "Light Up" (or Akari) but not close enough where they work the same! This game is starting in the Wednesday slot, but may become promted to daily if I find them easy to generate.</P>
                <P>I also have an <Link href="/blog" component={ A }>End of year blog post</Link> out, recapping many of things I tried this year, both successful and otherwise, and also laying out some goals both for myself and the site coming into 2026!</P>
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
                <SubHeading>September 2024</SubHeading>
                <P>Updates to many Legacy and Commander Magic Decks, and the remaining 6 puzzle solutions from #Enigmarch 2024! With that, all puzzle solutions are now available on the site! 🎉</P>
                <P>Next planned updates:</P>
                <List>
                    <ListItem>Overall puzzle statistics page (per-puzzle stats continue to live on the solution guide)</ListItem>
                    <ListItem>Legacy deck guidance for the remaining 11 decks of the Battlebox.</ListItem>
                    <ListItem>More blogposts! I am thinking of putting out a few in December focused on 2024 in retrospective.</ListItem>
                    <ListItem>New Recipes / updates to <Link href="https://dumpling.academy" component={ A }>Dumpling Academy</Link></ListItem>
                    <ListItem>Investigating infrastructure enhancements so that dynamic content (e.g. blogs, puzzle answers, magic decks) load quicker if they haven&apos;t been updated.</ListItem>
                    <ListItem>Perhaps something new...?</ListItem>
                </List>
                <P>There isn&apos;t a planned time for all of these items, nor a specified order, but wanted to give an update as it has been a few months!</P>
                <SubHeading>May 2024</SubHeading>
                <P>Eight more solutions for #Enigmarch 2024 are now available, hoping to add the final six in June, before some travel for the year!</P>
                <SubHeading>April 2024</SubHeading>
                <P>While I was hoping to get solutions for all of this year&apos;s puzzles up this month, I did finally get through all of 2023&apos;s, and about half of 2024. Take a look if you don&apos;t mind spoilers!</P>
                <SubHeading>March 2024</SubHeading>
                <P>Happy #Enigmarch! Each day I&apos;ll be adding a <Link href="/puzzles/enigmarch-2024" component={ A }>new puzzle</Link> from the inspirational prompts posted on the <Link href="https://enigmarch.com/prompts/2024-archive/" component={ A }>Enigmarch website</Link>.</P>
                <P>Additionally the solution for the corresponding day will be added to <Link href="/puzzles/enigmarch-2023" component={ A }>#Enigmarch 2023</Link>!</P>
                <SubHeading>February 29, 2024</SubHeading>
                <List>
                    <ListItem>New Magic Deck: <Link href="/magic/deck/krrik" component={ A }>K&apos;rrik</Link></ListItem>
                    <ListItem>New Magic Deck: <Link href="/magic/deck/zhulodok" component={ A }>Zhulodok</Link> (replacing <Link href="/magic/deck/liberator" component={ A }>Liberator</Link> in the Commander section)</ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/speed-climbing" component={ A }>Speed Climbing</Link></ListItem>
                </List>
                <P>Continuing our magic mood one month more! A new commander deck (K&apos;rrik), and a re-imagining of the colorless deck as ideas had stalled.</P>
                <SubHeading>January 28, 2024</SubHeading>
                <List>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/alchemy/four-elements" component={ A }>Alchemy: Four Elements</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/alchemy/five-elements" component={ A }>Alchemy: Five Elements</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/alchemy/six-elements" component={ A }>Alchemy: Six Elements</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/alchemy/seven-elements" component={ A }>Alchemy: Seven Elements</Link></ListItem>
                    <ListItem>New Puzzle Solution: Alchemy Meta</ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/130-bpm" component={ A }>130 BPM</Link></ListItem>
                </List>
                <P>End of the month update, 6 new puzzle solutions! I am currently planning to release the solutions for each day of #Enigmarch 2023 with the puzzle for this years challenge. If I can stick to that plan, almost every puzzle on the site will have a solution available!</P>
                <SubHeading>January 15, 2024</SubHeading>
                <List>
                    <ListItem>New Magic Deck: <Link href="/magic/deck/shrines" component={ A }>Go-Shintai of Life&apos;s Origin</Link> (a.k.a. Shrines)</ListItem>
                    <ListItem>New Magic Deck: <Link href="/magic/deck/initiative" component={ A }>Initiative</Link> (replacing <Link href="/magic/deck/burn" component={ A }>Burn</Link> in the Legacy Battle Box)</ListItem>
                    <ListItem>Updated Magic Deck: <Link href="/magic/deck/lord-windgrace" component={ A }>Lord Windgrace</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/x-marks-the-spot" component={ A }>❌ Marks the Spot</Link></ListItem>
                </List>
                <P>Continuing our magic mood going coming into 2024, A new commander deck (shrines) and new legacy deck (initiative) appear along with a finalization of the long &quot;under construction&quot; Windgrace.</P>
                <P>Additionally, I&apos;m continuing the slow-burn of releasing puzzle answers with one more! I have released many music-themed puzzles, but this one was one of the first where I really loved the idea, and tried to force it to work. If you never tried solving it and have no interest, check out the solution and see if you would have found it interesting!</P>
                <hr />
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
