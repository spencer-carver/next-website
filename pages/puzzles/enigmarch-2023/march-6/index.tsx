import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import Image from "../../../../components/Image";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    display: "inline-block",
    width: "50px",
    height: "50px",
    verticalAlign: "top",
    "@lg": {
        width: "100px",
        height: "100px",
    }
});

const Dropcap = ({ letter }: { letter: string }) => {
    return (
        <ImageWrapperDiv>
            <Image src={ `/puzzles/enigmarch-2023/dropcap-${ letter }.png` } alt={ `A fancy ${ letter }` } title={ letter.toUpperCase() } layout="fill" />
        </ImageWrapperDiv>
    );
};

const Story = styled("div", {
    textAlign: "left",
    color: "$onBackground"
});

const Page = styled("div", {
    marginBottom: "10px"
});

const Paragraph = styled("p", {
    margin: "0",
    display: "inline-block",
    marginBottom: "10px"
});

const paragraphWithDropcapStyles: CSS = {
    paddingLeft: "5px",
    width: "calc(100% - 105px)"
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-6">
            <Story>
                <Page>
                    <Dropcap letter="m" />
                    <Paragraph css={ paragraphWithDropcapStyles }>
                         any a story of adventure and bravery will start from humble beginnings; a hero-to-be heeds the call of destiny
                        and sets out on a quest knowing not where it will take them, or a young apprentice begins training at a noble profession.
                        This is not one of those stories, but rather of a tournament, and the path of one such participant. It begins in a land
                        recently ravaged by plague, which had become sequestered and isolated and had only just begun to fully re-open. 
                    </Paragraph>
                    <Paragraph>
                        The tournament made a grand announcement! Sixteen competitors to qualify for the largest prize in history! Many seeked entrance,
                        but invitations were required, and those chosen eventually assembled. Three swordsmen, two charioteers, and a handful of others.
                        An impressive assortment of talent, even 2 so-called gods were in attendance! The tournament began with a division into four groups
                        of four to determine placement. 
                    </Paragraph>
                </Page>
                <Page>
                    <Dropcap letter="e" />
                    <Paragraph css={ paragraphWithDropcapStyles }>
                         ach group was hardfought, and after which they were mixed for a gauntlet for final tournament placement. Emerging from the series of
                        grueling matches were 2 gods, 2 swordsmen, a ninja, a dinosaur tamer, a ranger, and a charioteer. Those eight competitors, already
                        haven proven themselves in front of the roaring crowd, earned themselves a boon in the tournament proper, for while they had already
                        bested several competitors, the main event was about to begin.
                    </Paragraph>
                    <Paragraph>
                        Part of the appeal of a tournament such as this is that, being eliminated once was not enough to fully disqualify a competitor from claiming
                        the grand prize. Nay, each participant must be felled twice in battle before they are truly out, allowing for the possibility of redemption
                        much to the chagrin of the watching masses. As the eight boon-weilding constants stood to one side, the bruised remainder
                        relegated to the other, the formal proceedings were addressed as excitement welled among the crowd. Each match was a one-on-one bout where the
                        two participants were granted five markers, known colloquially as stocks, and won their bout if they successfully removed all of their
                        opponent&apos;s stocks before their own were thus destroyed. There were a multitude of arenas where each bout could occur, and only by defeating
                        their opponent in three separate bouts would victory in the round be theirs.
                    </Paragraph>
                    <Paragraph>
                        Each competitor knew these rules well, and began their preparations. The boon-wielding combatants squared off in fantastical displays of agility
                        and physical prowess. The two swordsman fought valiantly, but it was clear one was the better, and he easily won his round in the first three bouts.
                        One of the gods moved on, but one fell, losing their boon, in four bouts versus the ninja. The final match of the higher tier of competitors
                        resulted in the ranger besting the charioteer, and turning the attention of the crowds to the lower tier of the arena.
                    </Paragraph>
                </Page>
                <Page>
                    <Dropcap letter="l" />
                    <Paragraph css={ paragraphWithDropcapStyles }>
                         osing their boon so early was a bismirchment upon the name of our now fallen god, and he awaited his next round with a brooding energy as each
                        competitor remaining in the lower tier was quite literally fighting for their tournament life. While another ranger did well to win their first match,
                        the fallen god dispatched them mercilessly in 3 bouts, turning their attention and anger towards their next match. A second charioteer was two victories
                        through the lower tier, gaining confidence and crowd favor, but they too were dispatched with haste in three bouts.
                    </Paragraph>
                    <Paragraph>
                        Back in the higher tier the skilled swordsman quickly dispatched the ninja, setting themselves firmly into the seat of tournament favorite, while the other
                        god knocked away the boon of the formerly most decorated ranger. It was that ranger&apos;s misfortune to then face the fallen god, and while they managed one
                        bout in their favor, they too were dispatched.
                    </Paragraph>
                </Page>
                <Page>
                    <Dropcap letter="e" />
                    <Paragraph css={ paragraphWithDropcapStyles }>
                         yes were then all drawn to the winner&apos;s final, where the tournament favorite swordsman faced the wrath of an unbeaten god of battle. The god drew first
                        blood and scored a victorious bout, but the swordsman, unfazed, proved just why they hand earned the moniker and proceeded to dispatch the god over three additional
                        bouts. In the lower tier, the rampage of the first felled god was pitted once again against the ninja who had bested them once. However momentum is a difficult thing
                        to stop, particularly when it&apos;s a god, and the ninja was bested across four bouts.
                    </Paragraph>
                    <Paragraph>
                        At this point in the tournament only three competitors remained eligilble to claim the grand prize. The undefeated swordsman, still wearing their boon, and the two
                        fallen gods, which made the next match something fierce and terrifying. As you might imagine, these gods had clashed before, many times throughout tournaments past,
                        and while at times one would be favored, their matches were very even, which raised the stakes so much more that these two titans were clasing in the loser&apos;s finals!
                        The battlefield of the first bout was cleanly won by the first-fallen god, continuing their momentum from earlier with a bloody, and closer win on the second. The other god
                        picked up the third bout, and the crowd cheered, hoping for a full five before them. Alas, it was not to be as the first-fallen god pulled out the fourth bout, winning this
                        pairing against their long-time foe, and moving on to the final match, hopeful of the prize they wished to claim.
                    </Paragraph>
                </Page>
                <Page>
                    <Dropcap letter="e" />
                    <Paragraph css={ paragraphWithDropcapStyles }>
                         very voice from the crowd grew hushed as the undefeated swordsman and the champion god of the lower tier stepped into the stadium. Murmurs of rumor floated about as the two
                        combatants squared off. Would the undefeated swordsman best the god and win this tournament? Would the god continue their rampage and put an end to the swordsman&apos;s winning
                        streak? While in past tournaments the god had struggled against this particular swordsman, they brought with them momentum and a new plan of attack.
                    </Paragraph>
                    <Paragraph>
                        As the sworsdman still carried their boon, they would need to be bested twice, and this fact clearly gave them confidence as the first bout began. While it was a close-fought
                        contest, the swordsman emerged victorous once, and then again once more, putting the god&apos;s tournament life down to a single bout. Miraculously
                        this seemed to only strengthen them, as they clawed back the third bout with the most dominant victory of the match so far. Looking to end things, the swordsman then selected
                        an arena that worked in their favor, hoping it would be the edge they needed to secure one final win. The god stepped out onto what could be their final destination with confidence,
                        and despite supposedly being at a disadvantage, held their ground and won the fourth bout. The crowd and announcers went wild as the next match, held in the same arena which should
                        favor the swordsman was won even more difinitively by the god, claiming victory of the round and handing the swordsman their first loss of the tournament!
                    </Paragraph>
                    <Paragraph>
                        But for the (formerly) undefeated swordsman, a single loss was not enough to remove them from the tournament, and thus a second match between the two competitors began anew on even
                        footing! The swordsman quickly took the first bout, but the god recovered footing and won the second. The swordsman won the third with a larger margin, but fell in the fourth, bringing
                        an even score and the entire tournament down to a single bout. The battlefield was set, the crowd on the edge of their seats as these two titans of combat squared off, and while the
                        swordsman may have been favored initially, it was the god who emerged victorious in a hard-fought bout both competitors could be proud of.
                    </Paragraph>
                    <Paragraph>
                        Who was this victorious god of combat? That dear reader, is indeed the question for you to answer.
                    </Paragraph>
                </Page>
            </Story>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
