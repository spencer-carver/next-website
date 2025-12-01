import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import Head from "next/head";
import { FunctionComponent } from "react";
import { PageProps } from "../../@types/global";
import BackNavigation from "../../components/BackNavigation";
import Link from "../../components/Link";
import Image from "../../components/Image";

const NAME = "Spencer's Personal Website";
const DESCRIPTION = "Games on Spencer's Personal Website.";

const PageDiv = styled("div", {
    maxWidth: "1024px",
    minHeight: "calc(100vh - 131px)",
    margin: "0 auto",
    padding: "10px 20px 0",
    color: "$onBackground",
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "180px",
        minHeight: "calc(100vh - 425px)"
    }
});

const Heading = styled("h2", {
    margin: "0"
});

const P = styled("p", {
    margin: "0"
});

const LinkWrapper = styled("a", {
    textDecoration: "none"
});

const Banner = styled("span", {
    position: "absolute",
    backgroundColor: "$primary",
    color: "$onPrimary",
    top: "5px",
    left: "0px",
    padding: "3px 15px",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px"
});

const CardContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    margin: "40px 0",
    "@lg": {
        flexDirection: "row"
    }
});

const Card = styled("div", {
    width: "280px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "20px 10px 10px",
    borderRadius: "10px",
    color: "$onBackground",
    "&:hover": {
        backgroundColor: "$surface04",
        color: "$onSurface"
    }
});

const Games: FunctionComponent<PageProps> = ({ theme }) => {
    return (
        <>
            <Head>
                <title>{NAME}</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/games` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="true" />
                <meta property="og:site_name" content={ NAME } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ NAME } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/games` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo-puzzle.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ NAME } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo-puzzle.jpg` } />
            </Head>
            <PageDiv>
                <BackNavigation to="/" />
                <Heading css={{ margin: "40px 0" }}>Games</Heading>
                <CardContainer>
                <Link href="https://spencer-carver.github.io/cryptex" component={ LinkWrapper }>
                    <Card>
                        <Banner>Daily</Banner>
                        <Image src="https://spencer-carver.github.io/cryptex/launcher-icon-192.png" height={ 192 } width={ 192 } alt="A Cylinder" />
                        <Heading as="h3">Cryptex</Heading>
                        <P>A cylindrical word guessing game</P>
                    </Card>
                </Link>
                <Link href="https://spencer-carver.github.io/diagram" component={ LinkWrapper }>
                    <Card>
                        <Banner css={{ backgroundColor: "$secondary", color: "$onSecondary" }}>Weekly - Sunday</Banner>
                        <Image src="https://spencer-carver.github.io/diagram/launcher-icon-192.png" height={ 192 } width={ 192 } alt="A Venn Diagram" />
                        <Heading as="h3">Diagram</Heading>
                        <P>A category overlap deduction game</P>
                    </Card>
                </Link>
                <Link href="https://spencer-carver.github.io/pareamid" component={ LinkWrapper }>
                    <Card>
                        <Banner css={{ backgroundColor: "$secondary", color: "$onSecondary" }}>Weekly - Monday</Banner>
                        <Image src="https://spencer-carver.github.io/pareamid/launcher-icon-192.png" height={ 192 } width={ 192 } alt="A Pyramid" />
                        <Heading as="h3"><i>Pare</i>amid</Heading>
                        <P>A pyramidal word chain game from two-word phrases</P>
                    </Card>
                </Link>
                <Link href="https://spencer-carver.github.io/prefix-pareamid" component={ LinkWrapper }>
                    <Card>
                        <Banner css={{ backgroundColor: "$secondary", color: "$onSecondary" }}>Weekly - Friday</Banner>
                        <Image src="https://spencer-carver.github.io/prefix-pareamid/launcher-icon-192.png" height={ 192 } width={ 192 } alt="An Inverted Pyramid" />
                        <Heading as="h3">Prefix <i>Pare</i>amid</Heading>
                        <P>Another pyramidal word chain game from two-word phrases</P>
                    </Card>
                </Link>
                </CardContainer>
            </PageDiv>
        </>
    );
};

export default Games;
