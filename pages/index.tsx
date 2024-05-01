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
                <SubHeading>April 2024</SubHeading>
                <P>While I was hoping to get solutions for all of this year&apos;s puzzles up this month, I did finally get through all of 2023&apos;s, and about half of 2024. Take a look if you don&apos;t mind spoilers!</P>
                <SubHeading>March 2024</SubHeading>
                <P>Happy #Enigmarch! Each day I&apos;ll be adding a <Link href="/puzzles/enigmarch-2024" component={ A }>new puzzle</Link> from the inspirational prompts posted on the <Link href="https://enigmarch.com/prompts/" component={ A }>Enigmarch website</Link>.</P>
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
                <SubHeading>December 31, 2023</SubHeading>
                <List>
                    <ListItem>New Magic Deck: <Link href="/magic/deck/pramikon" component={ A }>Pramikon, Sky Rampart</Link></ListItem>
                    <ListItem>New Magic Deck: <Link href="/magic/deck/gavi" component={ A }>Gavi, Nest Warden</Link></ListItem>
                    <ListItem>Updated Magic Deck: <Link href="/magic/deck/hanna" component={ A }>Hanna, Ship&apos;s Navigator</Link></ListItem>
                </List>
                <P>Happy New Year!</P>
                <P>Minor changes to some magic related content for now. The &apos;guidance&apos; section of some existing magic sections are also going to be re-written in the near future. This should better align with what they are meant to be (my thoughts on the deck, interesting synergies) rather than explicit matchup instructions, or other knowledge which can go stale (and which currently very much is).</P>
                <SubHeading>December 2, 2023</SubHeading>
                <List>
                    <ListItem>New Puzzle: <Link href="/puzzles/speed-climbing" component={ A }>Speed Climbing</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/an-explosive-discovery" component={ A }>An Explosive Discovery</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/yakuza-zero" component={ A }>Yakuza Zero</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/enigmarch-2022" component={ A }>#Enigmarch 2022</Link></ListItem>
                </List>
                <P>A LONG break! More puzzle answers are still coming Soon™ (I promise), but for now the first speed puzzle for my site, and themed around speed climbing to boot!</P>
                <SubHeading>June 14, 2023</SubHeading>
                <P>A long break! Puzzle answers are still coming Soon™, but for now updated some magic decks in the meantime.</P>
                <SubHeading>April 24, 2023</SubHeading>
                <P>Recipes have moved to <Link href="https://dumpling.academy" component={ A }>Dumpling Academy</Link>, my second website.</P>
                <SubHeading>April 23, 2023</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="https://dumpling.academy/recipes" component={ A }>Recipes</Link></ListItem>
                </List>
                <P>Still working on more features and better functionality here, but the main recipes page can now be populated with the contents of our shared recipe folder, and has rudimentary filtering based on tags.</P>
                <SubHeading>April 18, 2023</SubHeading>
                <List>
                    <ListItem>Incoming support: Recipes</ListItem>
                </List>
                <P>Extending the blog structure to allow for Kathy&apos;s recipes to start filling that section of the site. More details TBD, but for now, <Link component={ A } href="https://dumpling.academy/recipes/dutch-baby">direct links</Link> work, but they aren&apos;t yet searchable.</P>
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
