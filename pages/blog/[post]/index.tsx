import { useRouter } from "next/router";
import Head from "next/head";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageProps } from "../../../@types/global";
import { API_URL } from "../../../constants/ExternalUrls";
import fetchFromCache from "../../../utils/cache";
import ErrorPage from "../../404";
import BackNavigation from "../../../components/BackNavigation";
import { styled } from "../../../styles/stitches";
import { Post } from "..";
import MarkdownComponents from "../../../components/Markdown";

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

const BlogPost: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const { post: postName } = router.query;
    const [post, setPost] = useState({} as unknown as Post);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoading(true);
        if (!postName) {
            return;
        }

        fetchFromCache(`${ API_URL }/api/blog/${ postName }`).then((data) => {
            if (typeof (data as unknown as Post).content === "string") {
                setPost(data as unknown as Post);
            }
            setLoading(false);
            setLoaded(true);
        });
    }, [postName, setLoading]);

    if (!loaded) {
        return null;
    }

    if (loaded && !post.content) {
        return <ErrorPage title="Blog post not found" statusCode={ 404 } backLink="/blog" />;
    }

    const publishDate = new Date(post.createdTime).toDateString();
    const modifyDate = new Date(post.modifiedTime).toDateString();

    const TITLE = formatName(post.name);
    const DESCRIPTION = post.description || "A blog post by Spencer Carver";

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href={ `https://spencer.carvers.info/blog/${ postName }` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `https://spencer.carvers.info/blog/${ postName }` } />
                <meta property="og:image" content="https://spencer.carvers.info/seo.jpg" />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content="https://spencer.carvers.info/seo.jpg" />
            </Head>
            <BackNavigation to="/blog" />
            <HeaderDiv>
                <h1>{ TITLE }</h1>
                <span>Published on { publishDate }</span>
                { publishDate !== modifyDate && <span>Modified on { modifyDate }</span>}
            </HeaderDiv>
            <PageDiv>
                <ReactMarkdown
                    remarkPlugins={ [remarkGfm] }
                    components={ MarkdownComponents }>
                    { post.content }
                </ReactMarkdown>
            </PageDiv>
        </>
    );
};

export default BlogPost;
