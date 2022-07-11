import React, { FunctionComponent } from "react";
import Head from "next/head";
import Link from "../../components/Link";
import { CSS } from "@stitches/react";
import { styled } from "../../styles/stitches";
import BackNavigation from "../../components/BackNavigation";
import Image from "../../components/Image";

const ART_CROP_URL_PREFIX = "https://c1.scryfall.com/file/scryfall-cards/art_crop/front";

const TITLE = "All Magic: the Gathering Decks";
const DESCRIPTION = "Magic is one of my favorite hobbies, both playing and collecting! Check out what I like to play.";

const ContentDiv = styled("div", {
    marginTop: "10px",
    padding: "20px 0"
});

const Heading = styled("h1", {
    color: "$onBackground"
});

const DecksDiv = styled("div", {
    width: "300px",
    padding: "5px",
    margin: "0 auto",
    borderRadius: "@border",
    "h2:first-of-type": {
        marginTop: "0"
    },
    "@lg": {
        width: "740px"
    }
});

const Description = styled("p", {
    color: "$onSurface",
    margin: "0 40px"
});

const PrimaryDeck = styled("span", {
    position: "relative",
    "&::before": {
        content: "⭐",
        color: "$onBackground",
        position: "absolute",
        marginLeft: "-25px"
    }
});

const Magic: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href="https://spencer.carvers.info/magic" />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content="https://spencer.carvers.info/magic" />
                <meta property="og:image" content="https://spencer.carvers.info/seo.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo.jpg" />
            </Head>
            <BackNavigation to="/" />
            <ContentDiv>
                <Heading css={{ textAlign: "center" }}>
                    My Magic: the Gathering decks
                </Heading>
                <Description  css={{ textAlign: "center" }}>
                    ⭐ indicates my primary deck for the format
                </Description>
                <DecksDiv>
                    <div>
                        <Heading as="h2">Pioneer</Heading>
                        <ul>
                            <DeckLink
                                name="5-Color Humans"
                                id="party-pyre"
                                colors="⚪🔵⚫🔴🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/9/0/90bad312-80e3-45b0-9556-60ce06808a47.jpg` }
                            />
                            <PrimaryDeck>
                                <DeckLink
                                    name="Lotus Field Combo"
                                    id="lotus-field-combo"
                                    colors="⚪🔵⚫🟢"
                                    imageUrl={ `${ ART_CROP_URL_PREFIX }/0/e/0e013033-3995-4ba8-b0c3-0614c79aaaab.jpg` }
                                />
                            </PrimaryDeck>
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Modern</Heading>
                        <ul>
                            <PrimaryDeck>
                                <DeckLink
                                    name="Amulet Titan"
                                    id="amulet-titan"
                                    colors="🟢"
                                    imageUrl={ `${ ART_CROP_URL_PREFIX }/4/5/4550b26a-3a73-4724-99d5-1e0a52c36701.jpg` }
                                />
                            </PrimaryDeck>
                            <DeckLink
                                name="Bogles"
                                id="bogles"
                                colors="⚪🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/1/9/19714d6c-2bfa-4ee0-aa2f-5ccc196bc5d8.jpg` }
                            />
                            <DeckLink
                                name="Eldrazi Tron"
                                id="eldrazi-tron"
                                colors=""
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/8/c/8cf632ef-70e3-46f2-af21-14ea7ef30237.jpg` }
                            />
                            <DeckLink
                                name="Gifts Storm"
                                id="gifts-storm"
                                colors="🔵🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/f/0/f079df56-60f9-46e5-8f2e-032e62b6a5f1.jpg` }
                            />
                            <DeckLink
                                name="Merfolk"
                                id="merfolk"
                                colors="🔵"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/2/f/2ff414bc-6736-428b-bb60-9d62793a5ae5.jpg` }
                            />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Legacy</Heading>
                        <Description>
                            I have a Legacy Battlebox with 12 decks designed to play against each other.
                            Each deck is playable in a general Legacy metagame, but will not be the most
                            up-to-date or tuned.
                        </Description>
                        <ul>
                            <DeckLink
                                name="Burn"
                                id="burn"
                                colors="🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/8/9/89af0f45-c11c-4f13-9950-b1489440ee5b.jpg` }
                            />
                            <DeckLink
                                name="Death &amp; Taxes"
                                id="death-and-taxes"
                                colors="⚪"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/8/2/824423ff-6441-4be6-b754-810adf9ca6a2.jpg` }
                            />
                            <DeckLink
                                name="Delver"
                                id="izzet-delver"
                                colors="🔵🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/1/1/11bf83bb-c95b-4b4f-9a56-ce7a1816307a.jpg` }
                            />
                            <DeckLink
                                name="Elves"
                                id="elves"
                                colors="⚫🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/5/7/57948c65-4324-42bc-97ae-7cc700eb3817.jpg` }
                            />
                            <DeckLink
                                name="Enchantress"
                                id="enchantress"
                                colors="⚪⚫🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/0/b/0babfe00-9bad-48fc-b3b1-df8280242fd2.jpg` }
                            />
                            <PrimaryDeck>
                                <DeckLink
                                    name="Lands"
                                    id="lands"
                                    colors="🔴🟢"
                                    imageUrl={ `${ ART_CROP_URL_PREFIX }/1/5/15c34f32-49d9-4a0d-83b2-28172f54fdd1.jpg` }
                                />
                            </PrimaryDeck>
                            <DeckLink
                                name="Manaless Dredge"
                                id="manaless-dredge"
                                colors="🔵⚫🔴🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/0/4/04628d6f-8985-4e4b-a746-fbb2ef631694.jpg` }
                            />
                            <DeckLink
                                name="Miracles"
                                id="miracles"
                                colors="⚪🔵🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/0/9/0982ea7e-05a4-4e40-98ab-ea9aa6c7342e.jpg` }
                            />
                            <DeckLink
                                name="Omnitell"
                                id="omnitell"
                                colors="🔵"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/4/b/4b851c17-55ed-4671-b471-dc7b34944432.jpg` }
                            />
                            <DeckLink
                                name="Painter"
                                id="strawberry-shortcake"
                                colors="⚪🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/1/7/17cd920a-de09-454a-a9da-c84512e3aff1.jpg` }
                            />
                            <DeckLink
                                name="Reanimator"
                                id="reanimator"
                                colors="⚪⚫🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/b/e/bee3dad4-88d8-424c-b3f8-d089b6891fb8.jpg` }
                            />
                            <DeckLink
                                name="Storm"
                                id="storm"
                                colors="🔵⚫🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/7/8/78f5ebe1-4ee2-4719-b897-9e829f8f87d9.jpg` }
                            />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Pauper</Heading>
                        <ul>
                            <DeckLink
                                name="Mono-Green Land Destruction"
                                id="mono-g-ponza"
                                colors="🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/0/0/00ae906b-2c4d-48e9-9f2d-217777e22292.jpg` }
                            />
                            <DeckLink
                                name="Tortured Existance"
                                id="tortured-existance"
                                colors="⚪⚫🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/1/7/1754b92b-d6f9-4503-af01-dee03f72a048.jpg` }
                            />
                            <DeckLink
                                name="Teachings Control"
                                id="teachings-control"
                                colors="⚪🔵⚫🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/f/7/f7cb51cd-8418-43ee-bf4f-6b959cc5b131.jpg` }
                            />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Commander</Heading>
                        <ul>
                            <DeckLink
                                name="Karador"
                                id="karador"
                                colors="⚪⚫🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/6/2/6200ac79-b166-43d0-9a0b-5b547625ed57.jpg` }
                            />
                            <DeckLink
                                name="Muldrotha"
                                id="muldrotha"
                                colors="🔵⚫🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/c/6/c654737d-34ac-42ff-ae27-3a3bbb930fc1.jpg` }
                            />
                            <DeckLink
                                name="Nahiri"
                                id="nahiri"
                                colors="⚪"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/9/a/9a226eae-1c77-45a9-9115-f846b76681a3.jpg` }
                            />
                            <DeckLink
                                name="Sasaya"
                                id="sasaya"
                                colors="🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/d/2/d224c50f-8146-4c91-9401-04e5bd306d02.jpg` }
                            />
                            <DeckLink
                                name="Sen Triplets"
                                id="sen-triplets"
                                colors="⚪🔵⚫"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/4/1/418f8ecb-544b-430c-8ae9-61aaaf2dfba6.jpg` }
                            />
                            <DeckLink
                                name="Zedruu"
                                id="zedruu"
                                colors="⚪🔵🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/e/9/e9ea2a6b-5aaf-4178-b945-f409fe83c41a.jpg` }
                            />
                            <DeckLink
                                name="Zur"
                                id="zur"
                                colors="⚪🔵⚫"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/2/5/253e19db-28a1-4909-b235-e02631a38c35.jpg` }
                            />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Oathbreaker</Heading>
                        <ul>
                            <DeckLink
                                name="Wrenn &amp; Six"
                                id="wrenn-and-six"
                                colors="🔴🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/4/a/4a706ecf-3277-40e3-871c-4ba4ead16e20.jpg` }
                            />
                            <DeckLink
                                name="Calix, Destiny&apos;s Hand"
                                id="calix-enchantress"
                                colors="⚪🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/8/6/86458929-ea21-4de8-84d8-a07398ed3bc0.jpg` }
                            />
                        </ul>
                    </div>
                    <div>
                        <Heading as="h2">Other</Heading>
                        <ul>
                            <DeckLink
                                name="Pre-Modern: Astral Slide"
                                id="astral-slide"
                                colors="⚪🔴"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/d/1/d14993b6-ed8d-4b9b-b54c-2837b343a61e.jpg` }
                            />
                            <DeckLink
                                name="Proxy Vintage: Oath of Druids"
                                id="oath-of-druids"
                                colors="⚪🔵⚫🔴🟢"
                                imageUrl={ `${ ART_CROP_URL_PREFIX }/9/d/9dad6b50-c415-4c55-8eac-bbc9d656c2fc.jpg` }
                            />
                            <Link href="https://cubecobra.com/cube/overview/2ec8o"><Heading as="h3">Cube</Heading></Link>
                        </ul>
                    </div>
                </DecksDiv>
            </ContentDiv>
        </>
    );
};

const pipStyles: CSS = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "inline-block",
    marginLeft: "2px",
    border: "1px solid $onBackground"
};

const WhitePip = styled("span", {
    ...pipStyles,
    backgroundColor: "white"
});

const BluePip = styled("span", {
    ...pipStyles,
    backgroundColor: "blue"
});

const BlackPip = styled("span", {
    ...pipStyles,
    backgroundColor: "black"
});

const RedPip = styled("span", {
    ...pipStyles,
    backgroundColor: "red"
});

const GreenPip = styled("span", {
    ...pipStyles,
    backgroundColor: "green"
});

const DeckLinkAnchor = styled("a", {
    color: "$primary",
    "&:hover": {
        color: "$primaryVariant"
    }
});

const DeckListItem = styled("li", {
    position: "relative",
    listStyle: "none",
    display: "block"
});

const DeckNameHeader = styled("h3", {});

const DeckColorSpan = styled("span", {
    display: "none",
    float: "right",
    position: "absolute",
    top: "0",
    right: "0",
    "@lg": {
        display: "inline"
    }
});

const ImageWrapper = styled("div", {
    position: "relative",
    width: "211px",
    height: "156px"
});

interface DeckLinkProps {
    name: string;
    id: string;
    colors?: string;
    imageUrl?: string;
}

const DeckLink: React.FunctionComponent<DeckLinkProps> = ({ name, id, colors, imageUrl }) => {
    const colorEl = colors && (
        <>
            { colors.includes("⚪") && <WhitePip /> }
            { colors.includes("🔵") && <BluePip /> }
            { colors.includes("⚫") && <BlackPip /> }
            { colors.includes("🔴") && <RedPip /> }
            { colors.includes("🟢") && <GreenPip /> }
        </>
    );

    return (
        <Link href={ `/magic/deck/${ id }` } component={ DeckLinkAnchor }>
            <DeckListItem>
                <DeckNameHeader>{name}</DeckNameHeader>
                {colorEl && <DeckColorSpan>{ colorEl }</DeckColorSpan>}
                {imageUrl && <ImageWrapper><Image src={ imageUrl } alt="name" layout="fill" /></ImageWrapper>}
            </DeckListItem>
        </Link>
    );
};

export default Magic;
