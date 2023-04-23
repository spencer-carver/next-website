import Head from "next/head";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageProps } from "../../../@types/global";
import ErrorPage from "../../404";
import BackNavigation from "../../../components/BackNavigation";
import { styled } from "../../../styles/stitches";
import { Post } from "..";
import previewPost from "./post.md";
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
    const [post, setPost] = useState({} as unknown as Post);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoading(true);

        setPost({
            name: "Preview Post",
            createdTime: (new Date()).getTime(),
            modifiedTime: (new Date()).getTime(),
            content: previewPost,
            author: "Spencer Carver"
        });
        setLoading(false);
        setLoaded(true);
    }, [setLoading]);

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
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/blog/preview` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/blog/preview` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
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
