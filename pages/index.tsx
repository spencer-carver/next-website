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
                <SubHeading>April 23, 2023</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/recipes" component={ A }>Recipes</Link></ListItem>
                </List>
                <P>Still working on more features and better functionality here, but the main recipes page can now be populated with the contents of our shared recipe folder, and has rudimentary filtering based on tags.</P>
                <SubHeading>April 18, 2023</SubHeading>
                <List>
                    <ListItem>Incoming support: Recipes</ListItem>
                </List>
                <P>Extending the blog structure to allow for Kathy&apos;s recipes to start filling that section of the site. More details TBD, but for now, <Link component={ A } href="/recipes/dutch-baby">direct links</Link> work, but they aren&apos;t yet searchable.</P>
                <SubHeading>April 9, 2023</SubHeading>
                <List>
                    <ListItem>New Page: <Link href="/past-updates" component={ A }>Past Updates</Link></ListItem>
                    <ListItem>New Page: <Link href="/legal" component={ A }>Privacy Policy</Link></ListItem>
                    <ListItem>Minor bug fixes</ListItem>
                </List>
                <P>Nothing glamourous today. Moving site updates older than a few months to their own page, officially adding a privacy policy considering the stats feature relies on a user Id, and fixing some bugs.</P>
                <SubHeading>April 8, 2023</SubHeading>
                <List>
                    <ListItem>New feature: Puzzle Stats!</ListItem>
                </List>
                <P>Solution guides are still on their way, but was more motivated to work on something else right away. The answer checker will now keep statistics about number of attempts and incorrect guesses globally! For puzzles that have a solution guide available, these stats are now showcased at the top of that page. Check out the <Link href="/puzzles/tutorial" component={ A }>Tutorial</Link> puzzle for an example.</P>
                <SubHeading>March 2023</SubHeading>
                <List>
                    <ListItem>Updated Puzzle Round: <Link href="/puzzles/enigmarch-2023" component={ A }>#Enigmarch 2023</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/meta" component={ A }>March: META</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-31" component={ A }>March 31: REVERSE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-30" component={ A }>March 30: PUSH</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-29" component={ A }>March 29: QUOTE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-28" component={ A }>March 28: DIAGONAL</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-27" component={ A }>March 27: FIRE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-26" component={ A }>March 26: GROW</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-25" component={ A }>March 25: KNOT</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-24" component={ A }>March 24: CRYPT</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-23" component={ A }>March 23: DICE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-22" component={ A }>March 22: VISION</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-21" component={ A }>March 21: HALVE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-20" component={ A }>March 20: FISH</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-19" component={ A }>March 19: SPACE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-18" component={ A }>March 18: ROYAL</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-17" component={ A }>March 17: SHELL</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-16" component={ A }>March 16: MASK</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-15" component={ A }>March 15: ROOM</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-14" component={ A }>March 14: SECOND</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-13" component={ A }>March 13: MATCH</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-12" component={ A }>March 12: TOWER</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-11" component={ A }>March 11: BOLD</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-10" component={ A }>March 10: HAZARD</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-9" component={ A }>March 9: GLITCH</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-8" component={ A }>March 8: CURSE</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-7" component={ A }>March 7: ARROW</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-6" component={ A }>March 6: MYTHICAL</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-5" component={ A }>March 5: GEM</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-4" component={ A }>March 4: LIGHT</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-3" component={ A }>March 3: WIND</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-2" component={ A }>March 2: NEST</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/enigmarch-2023/march-1" component={ A }>March 1: KEY</Link></ListItem>
                </List>
                <P>Happy #Enigmarch! Each day I&apos;ll be adding a new puzzle from the inspirational prompts posted on the <Link href="https://twitter.com/EnigmarchHQ" component={ A }>EnigmarchHQ twitter</Link>.</P>
                
                <SubHeading>February 25, 2023</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/about" component={ A }>About Me</Link></ListItem>
                    <ListItem>New Puzzle: <Link href="/puzzles/130-bpm" component={ A }>130 BPM</Link></ListItem>
                </List>
                <P>Section for conference talks / publications added.</P>
                <P>A new puzzle has been added! Right before #Enigmarch as well (where I plan to add 31 puzzles over 31 days). This puzzle is the implementation of an idea I have had for a long time, with heavy inspiration from a particularly wonderful MIT Mysteryhunt puzzle from 2020.</P>
                <SubHeading>January 28, 2023</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/puzzles" component={ A }>Puzzle landing page</Link></ListItem>
                    <ListItem>New Puzzle Round: <Link href="/puzzles/enigmarch-2023" component={ A }>#Enigmarch 2023</Link></ListItem>
                    <ListItem>Various Site Enhancements</ListItem>
                </List>
                <P>While we are still over a month away from March, I set up some of the scaffolding for the puzzles to come!</P>
                <P>Additionally, made some caching, storage, and timeout related updates to the site to (hopefully) allow things to load quicker, more reliably, and using less browser resources.</P>
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
