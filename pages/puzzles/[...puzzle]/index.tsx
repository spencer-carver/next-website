import { useRouter } from "next/router";
import Head from "next/head";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageProps } from "../../../@types/global";
import { API_URL } from "../../../constants/ExternalUrls";
import fetchData from "../../../utils/fetch";
import ErrorPage from "../../404";
import BackNavigation from "../../../components/BackNavigation";
import { styled } from "../../../styles/stitches";
import { Post } from "../../blog";
import MarkdownComponents from "../../../components/Markdown";
import PuzzleComplete from "../../../components/Puzzle/Complete";
import useStorage from "../../../utils/useStorage";
import PuzzleStats from "../../../components/Puzzle/Stats";

function formatName(name: string): string {
    return name.replace(/-/g, " ");
}

const HeaderDiv = styled("div", {
    margin: "20px",
    paddingTop: "20px",
    color: "$onBackground",
    position: "relative",
    "& h1": {
        textTransform: "capitalize"
    },
    "& span": {
        display: "block",
        "&:nth-of-type(2)": {
            marginTop: "5px"
        }
    },
    "@lg": {
        margin: "20px auto",
        maxWidth: "730px"
    },
    "@xxl": {
        margin: "20px auto",
        maxWidth: "1024px"
    }
});

const PageDiv = styled("div", {
    padding: "0 20px",
    backgroundColor: "$background",
    color: "$onBackground",
    minHeight: "77vh",
    "& sup span a": {
        borderBottom: "none"
    },
    "@lg": {
        margin: "20px auto",
        border: "1px solid $surface04",
        maxWidth: "690px",
        fontSize: "18px"
    },
    "@xxl": {
        margin: "20px auto",
        maxWidth: "1024px"
    }
});

const ClickHereSpan = styled("span", {
    textDecoration: "underline",
    "&:hover": {
        cursor: "pointer"
    }
});

const PuzzleSolution: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const slug = router.query.puzzle as string[] | undefined;
    const storage = useStorage("puzzle");
    const [post, setPost] = useState({} as unknown as Post);
    const [loaded, setLoaded] = useState(false);
    const [solution, setSolution] = useState("");
    const [showSolution, setShowSolution] = useState(false);
    const [stats, setStats] = useState({} as unknown as PuzzleStats);

    const isSolution = slug && slug[slug.length - 1] === "solution";
    const puzzleName = isSolution ? slug.slice(0, slug.length - 1).join(":") : null;
    const puzzlePath = isSolution ? `/${ slug.slice(0, slug.length - 1).join("/") }` : "";

    useEffect(() => {
        try {
            const solution = storage.getItem<string>(puzzleName);
            setSolution(solution);
            setShowSolution(!!solution);
        } catch (e) {
            // do nothing
        }
    }, [storage, puzzleName]);

    useEffect(() => {
        setLoading(true);

        if (!puzzleName) {
            setLoading(false);
            setLoaded(true);

            return;
        }

        fetchData(`${ API_URL }/api/blog/${ puzzleName.replace(":", "-") }`).then((data) => {
            if (typeof (data as unknown as Post).content === "string") {
                setPost(data as unknown as Post);
            }
            setLoading(false);
            setLoaded(true);
        });

        fetchData(`${ API_URL }/api/puzzle/${ puzzleName.replace(":", "-") }/stats`).then((data) => {
            setStats(data as unknown as PuzzleStats);
        });
    }, [puzzleName, setLoading]);

    if (!loaded) {
        return null;
    }

    if (!post.content) {
        return <ErrorPage title={ `${ isSolution ? "Solution" : "Puzzle" } not found` } statusCode={ 404 } backLink={ `/puzzles${ puzzlePath }` } />;
    }

    const TITLE = formatName(post.name);
    const DESCRIPTION = post.description || `The solution for ${ puzzleName }`;

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <Head>
                <title>{ TITLE } Solution</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/puzzles/${ puzzlePath }/solution` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/puzzles/${ puzzlePath }/solution` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <BackNavigation to={ `/puzzles${ puzzlePath }` } />
            <HeaderDiv>
                <h1>{ TITLE }</h1>
            </HeaderDiv>
            { showSolution ? (
                <PageDiv>
                    { solution && <PuzzleComplete answer={ solution } /> }
                    <PuzzleStats stats={ stats } />
                    <ReactMarkdown
                        remarkPlugins={ [remarkGfm] }
                        components={ MarkdownComponents }>
                        { post.content }
                    </ReactMarkdown>
                </PageDiv>
            ) : (
                <PageDiv>
                    WARNING: It appears you have not yet solved this puzzle! If you would still like to view the solution, please click <ClickHereSpan onClick={ () => setShowSolution(true) }>here</ClickHereSpan>.
                </PageDiv>
            ) }
        </>
    );
};

export default PuzzleSolution;
