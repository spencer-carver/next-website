import { lightTheme, styled, yahooGeocitiesTheme } from "../../styles/stitches";
import ConstructionGif from "../../components/ConstructionGif";
import Link from "../../components/Link";
import { TWITCH_URL, YOUTUBE_URL } from "../../constants/ExternalUrls";
import Head from "next/head";
import Tooltip from "../../components/Tooltip";
import { FunctionComponent } from "react";
import { PageProps } from "../../@types/global";
import BackNavigation from "../../components/BackNavigation";

const NAME = "Spencer's Personal Website";
const DESCRIPTION = "Past updates for Spencer Carver's personal website.";

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

const PastUpdates: FunctionComponent<PageProps> = ({ theme }) => {
    return (
        <>
            <Head>
                <title>{ NAME }</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/past-updates` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="true" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/past-updates` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <PageDiv>
                <BackNavigation to="/" />
                <ConstructionGif theme={ theme } />
                <Heading>Past Site News:</Heading>
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
                <P>Happy #Enigmarch! Each day I&apos;ll be adding a new puzzle from the inspirational prompts posted on the <Link href="https://enigmarch.com/prompts/2023-archive/" component={ A }>Enigmarch website</Link>.</P>
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
                <SubHeading>January 27, 2023</SubHeading>
                <P>Myr myr myr! A new legendary creature has prompted a long-time stalwart of the decks page to get an update! Introducing <Link href="/magic/deck/urtet" component={ A }>Urtet, Remnant of Memnarch</Link>!</P>
                <SubHeading>January 13, 2023</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/magic" component={ A }>Magic landing page</Link></ListItem>
                    <ListItem>Updated Pages: Magic deck view</ListItem>
                </List>
                <P>Slight revision to the <Link href="/magic" component={ A }>Magic</Link> page, drawing a different distinction between my decks and my wife&apos;s. Better at larger breakpoints. Also updated the construction status of a few deck ideas.</P>
                <P>Deck view now supports a &quot;stacked&quot; view, and remembers user preference.</P>
                <SubHeading>January 3, 2023</SubHeading>
                <P>Happy New Year! Not much in the way of goings on recently. The next big update is likely to be #Enigmarch 2023, with the intention of being a full round of quick puzzles rather than a single one.</P>
                <P>I have a conference presentation in February I am working on, so expect the <Link href="/about" component={ A }>About</Link> page to get updated with a link to the presentation material once that is completed as well!</P>
                <SubHeading>August 27, 2022</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/puzzles" component={ A }>Puzzle landing page</Link></ListItem>
                    <ListItem>
                        Updated Round: <Link href="/puzzles/alchemy" component={ A }>Alchemy</Link>
                        <List>
                            <ListItem>New Puzzle: <Link href="/puzzles/alchemy/seven-elements" component={ A }>Seven Attributes</Link></ListItem>
                            <ListItem>New Puzzle: Alchemy (Requires Unlock)</ListItem>
                        </List>
                    </ListItem>
                    <ListItem>Updated Puzzle: <Link href="/puzzles/x-marks-the-spot" component={ A }>❌ Marks the Spot</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/travel-diary" component={ A }>Travel Diary</Link></ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/judge-calls-one" component={ A }>Judge Calls</Link></ListItem>
                </List>
                <P>The Alchemy Round is fully complete! Some renamings occurred for clarity, but puzzles have not changed. I have also refined <Link href="/puzzles/x-marks-the-spot" component={ A }>❌ Marks the Spot</Link> to be a bit cleaner as well.</P>
                <SubHeading>August 14, 2022</SubHeading>
                <List>
                    <ListItem>
                        Updated Round: <Link href="/puzzles/alchemy" component={ A }>Alchemy</Link>
                        <List>
                            <ListItem>New Puzzle: <Link href="/puzzles/alchemy/six-elements" component={ A }>Six Heroes</Link></ListItem>
                        </List>
                    </ListItem>
                    <ListItem>New Puzzle Solution: <Link href="/puzzles/tutorial" component={ A }>Tutorial</Link></ListItem>
                </List>
                <P>One more puzzle in the Alchemy round to go! Not sure if this one will come together in the next week, but hopefully having a buffer to still wrap up in August!</P>
                <P>I am also hoping to have a few more puzzle solutions posted and some internal component refactoring done in the next few weeks as well.</P>
                <SubHeading>August 8, 2022</SubHeading>
                <List>
                    <ListItem>New Feature: Puzzle Solutions</ListItem>
                </List>
                <P>As promised, the blog structure was extended for hosting puzzle solutions! I plan to gradually fill these in over time (just like with the Magic content), but the largest hurdle is now complete!</P>
                <P>You can see a solution has been added (part of the answer bar at the bottom of the screen) for the very first puzzle I ever made, <Link href="/puzzles/tetris" component={ A }>Tetris</Link>!</P>
                <SubHeading>August 7, 2022</SubHeading>
                <List>
                    <ListItem>
                        Updated Round: <Link href="/puzzles/alchemy" component={ A }>Alchemy</Link>
                        <List>
                            <ListItem>New Puzzle: <Link href="/puzzles/alchemy/four-elements" component={ A }>Four Nations</Link></ListItem>
                        </List>
                    </ListItem>
                </List>
                <P>Well this one came together quick... Hopefully this means I can roll out the whole round before the end of August!</P>
                <SubHeading>August 6, 2022</SubHeading>
                <List>
                    <ListItem>Updated Page: <Link href="/puzzles" component={ A }>Puzzle landing page</Link></ListItem>
                    <ListItem>
                        New Puzzle Round: <Link href="/puzzles/alchemy" component={ A }>Alchemy</Link>
                        <List>
                            <ListItem>New Puzzle: <Link href="/puzzles/alchemy/five-elements" component={ A }>Five Rings</Link></ListItem>
                        </List>
                    </ListItem>
                </List>
                <P>I have finally created a meta puzzle! To facilitate the concept of round and meta puzzle, I have added to the main puzzle landing page.</P>
                <P>There will be 3 more puzzles in the Alchemy round at some point soon (I know the themes, just not the specifics)!</P>
                <P>I am also working on extending the blog structure to support puzzles, much like how the deck guidance now exists in the magic section (and is still slowly being fleshed out). This will introduce solution pages where I get to talk about how to solve the puzzle (if you have finished it or do not feel inclined to) and also inspirations and motivations.</P>
                <P>At the current rate the next update will be in early September, but I hope to have all 3 remaining Alchemy puzzles ready by then (if not with staggered releases sooner)!</P>
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
                    <ListItem>New Puzzle: <Link href="/puzzles/x-marks-the-spot" component={ A }>❌ Marks the Spot</Link></ListItem>
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
                <P>Yesterday I found out from a friend about <Link href="https://enigmarch.com/" component={ A }>#Enigmarch</Link>, a month long puzzle creation challenge. Well it&apos;s VERY far into March at the moment, but I wanted to participate, and as such have created a single puzzle with the <Tooltip tooltip="Day 30's theme is PHANTOM, so this is close right?">spirit</Tooltip> of a month-long challenge (though I couldn&apos;t find a way to work the <Link href="https://enigmarch.com/prompts/2022-archive/" component={ A }>daily prompts</Link> into each of my days unfortunately). Looking forward to tackling it day-by-day next year!</P>
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

export default PastUpdates;
