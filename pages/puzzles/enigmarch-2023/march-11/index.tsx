import React, { FunctionComponent, useCallback, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import Image from "../../../../components/Image";
import { CSS } from "@stitches/react";
import { darkTheme, styled, yahooGeocitiesTheme } from "../../../../styles/stitches";

const ImageWrapperDiv = styled("div", {
    position: "relative",
    display: "inline-block",
    width: "31px",
    height: "31px",
    verticalAlign: "top",
    [`.${ darkTheme } &`]: {
        filter: "invert(100%)"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        filter: "invert(100%)"
    },
    "&:hover": {
        cursor: "pointer"
    }
});

const Dropcap = ({ letter, css, onClick }: { letter: string; css: CSS; onClick: () => void }) => {
    return (
        <ImageWrapperDiv css={ css } onClick={ onClick }>
            <Image src={ `/puzzles/enigmarch-2023/dropcap-${ letter }.png` } alt={ `A fancy ${ letter }` } title={ letter.toUpperCase() } layout="fill" />
        </ImageWrapperDiv>
    );
};

const Story = styled("div", {
    textAlign: "left",
    color: "$onBackground",
    fontFamily: "monospace"
});

const Page = styled("div", {
    margin: "10px 0",
    textAlign: "center"
});

const DropcapParagraphContainer = styled("div", {
    display: "flex",
    alignItems: "end",
    justifyContent: "center",
    margin: "0 auto 1px",
    width: "300px",
    "@lg": {
        width: "400px"
    }
});

const Paragraph = styled("p", {
    textAlign: "left",
    padding: "2px 0",
    borderTop: "1px solid transparent",
    borderBottom: "1px solid transparent",
    margin: "0 auto 1px",
    fontSize: "14px",
    width: "300px",
    color: "$onBackground",
    "@lg": {
        fontSize: "18px",
        width: "400px"
    }
});

const Bold = styled("strong", {
    color: "$onBackground"
});

const paragraphHidden: CSS = {
    color: "transparent"
}

const paragraphWithDropcapStyles: CSS = {
    marginBottom: "0",
    paddingLeft: "2px"
};

const PuzzleComponent: FunctionComponent = () => {
    const [showNonBoldP1, setShowNonBoldP1] = useState(true);
    const [showNonBoldP2, setShowNonBoldP2] = useState(true);

    const toggleP1 = useCallback(() => {
        setShowNonBoldP1(false);
        setShowNonBoldP2(true);
    }, []);

    const toggleP2 = useCallback(() => {
        setShowNonBoldP1(true);
        setShowNonBoldP2(false);
    }, []);

    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-11">
            <Story>
                <Page>
                    <DropcapParagraphContainer>
                        <Dropcap letter="b" onClick={ toggleP1 } css={ showNonBoldP1 ? {} : { visibility: "hidden" } } />
                        <Paragraph css={{ ...paragraphWithDropcapStyles, ...(showNonBoldP1 ? {} : paragraphHidden) }}>
                            <Bold>r</Bold>a<Bold>v</Bold>el<Bold>y</Bold> b<Bold>o</Bold>l<Bold>d</Bold> S<Bold>i</Bold>r <Bold>R</Bold>obin
                        </Paragraph>
                    </DropcapParagraphContainer>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        Rode <Bold>fort</Bold>h <Bold>fr</Bold>om <Bold>Cam</Bold>elot.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        He wa<Bold>s</Bold> <Bold>n</Bold>ot af<Bold>ra</Bold>i<Bold>d</Bold> <Bold>t</Bold>o die,
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        Oh brave Sir Robin.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>H</Bold>e <Bold>w</Bold>as <Bold>n</Bold>ot <Bold>at</Bold> all afraid
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>To</Bold> b<Bold>e</Bold> k<Bold>il</Bold>l<Bold>e</Bold>d <Bold>i</Bold>n nasty ways.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        Bra<Bold>v</Bold>e, <Bold>b</Bold>ra<Bold>v</Bold>e, brave, brave Sir Robin.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        &nbsp;
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        H<Bold>e</Bold> <Bold>w</Bold>as <Bold>n</Bold>ot in t<Bold>he</Bold> l<Bold>ea</Bold>st bit scared
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>T</Bold>o b<Bold>e</Bold> mashed int<Bold>o</Bold> a <Bold>p</Bold>ulp.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>O</Bold>r <Bold>t</Bold>o h<Bold>av</Bold>e his <Bold>e</Bold>yes gouged out,
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        And his elbows broken.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>And</Bold> <Bold>h</Bold>is b<Bold>ody</Bold> b<Bold>ur</Bold>ned away,
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        And his <Bold>l</Bold>im<Bold>b</Bold>s <Bold>al</Bold>l hacked and mangled
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>B</Bold>rav<Bold>e</Bold> Sir <Bold>R</Bold>obin.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        &nbsp;
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>H</Bold>is <Bold>head</Bold> <Bold>sma</Bold>shed in
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        A<Bold>n</Bold>d hi<Bold>s</Bold> <Bold>he</Bold>a<Bold>r</Bold>t cut out
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        And <Bold>h</Bold>i<Bold>s</Bold> <Bold>l</Bold>i<Bold>ve</Bold>r removed
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        And his bowls unplugged
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>A</Bold>n<Bold>d</Bold> <Bold>h</Bold>is <Bold>n</Bold>o<Bold>s</Bold>tr<Bold>i</Bold>ls ripped
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        <Bold>An</Bold>d <Bold>h</Bold>is <Bold>b</Bold>ot<Bold>to</Bold>m burnt off
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        And <Bold>h</Bold>is <Bold>pe</Bold>n-<Bold>-</Bold>
                    </Paragraph>
                    <Paragraph css={ showNonBoldP1 ? {} : paragraphHidden }>
                        &nbsp;
                    </Paragraph>
                </Page>
                <Page>
                    <DropcapParagraphContainer>
                        <Dropcap letter="b" onClick={ toggleP2 } css={ showNonBoldP2 ? {} : { visibility: "hidden" } } />
                        <Paragraph css={{ ...paragraphWithDropcapStyles, ...(showNonBoldP2 ? {} : paragraphHidden) }}>
                            rav<Bold>e</Bold> <Bold>S</Bold>i<Bold>r</Bold> <Bold>R</Bold>o<Bold>bi</Bold>n ran away.
                        </Paragraph>
                    </DropcapParagraphContainer>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        Bravel<Bold>y</Bold> ran a<Bold>w</Bold>a<Bold>y</Bold> away.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        When dange<Bold>r</Bold> reared it&apos;s ugly head,
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        He <Bold>bra</Bold>v<Bold>e</Bold>l<Bold>y</Bold> <Bold>t</Bold>urned his tail and fled.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        Yes<Bold>,</Bold> <Bold>b</Bold>ra<Bold>v</Bold>e <Bold>Si</Bold>r Robin turned about
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        And g<Bold>a</Bold>l<Bold>l</Bold>a<Bold>ntl</Bold>y he chickened out.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        <Bold>Swi</Bold>f<Bold>tl</Bold>y <Bold>tak</Bold>i<Bold>ng</Bold> t<Bold>o</Bold> <Bold>h</Bold>i<Bold>s</Bold> <Bold>fe</Bold>et,
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        He <Bold>b</Bold>e<Bold>a</Bold>t <Bold>a</Bold> v<Bold>e</Bold>ry <Bold>bra</Bold>ve <Bold>r</Bold>e<Bold>t</Bold>reat.
                    </Paragraph>
                    <Paragraph css={ showNonBoldP2 ? {} : paragraphHidden }>
                        Br<Bold>a</Bold>v<Bold>e</Bold>st of the <Bold>b</Bold>rave<Bold>,</Bold> <Bold>S</Bold>ir Robin!
                    </Paragraph>
                </Page>
            </Story>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
