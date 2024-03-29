import React, { FunctionComponent, useEffect, useState } from "react";
import Head from "next/head";
import { PageProps } from "../../@types/global";
import Link from "../../components/Link";
import { API_URL } from "../../constants/ExternalUrls";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import fetchData from "../../utils/fetch";
import BackNavigation from "../../components/BackNavigation";

const TITLE = "All Blog Posts";
const DESCRIPTION = "A list of all Spencer's blog postings";

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
    "@lg": {
        margin: "20px auto",
        maxWidth: "730px"
    },
    "@xl": {
        paddingTop: "0px"
    },
    "@xxl": {
        margin: "20px auto",
        maxWidth: "1024px"
    }
});

const PageDiv = styled("div", {
    padding: "0 20px",
    color: "$onBackground",
    backgroundColor: "$background",
    "@lg": {
        margin: "20px auto",
        maxWidth: "690px"
    },
    "@xxl": {
        margin: "20px auto",
        maxWidth: "1024px"
    }
});

const BlogList = styled("ul", {
    marginBottom: "calc(100vh - 340px)",
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "calc(100vh - 472px)"
    }
});

const PostDiv = styled("div", {
    "&:not(:first-of-type)": {
        marginTop: "10px",
        borderTop: "1px dotted $onSurface",
        paddingTop: "10px"
    }
});

const BlogLink = styled("li", {
    fontSize: "24px",
    textTransform: "capitalize"
});

const DateSpan = styled("span", {
    display: "block"
});

const DescriptionSpan = styled("span", {
    display: "block",
    paddingTop: "10px"
});

export interface Post {
    name: string;
    description?: string;
    createdTime: number;
    modifiedTime: number;
    content?: string;
    author: string;
}

const BlogIndex: FunctionComponent<PageProps> = ({ setLoading }) => {
    const [ posts, setPosts ] = useState([] as Post[]);

    useEffect(() => {
        setLoading(true);
        fetchData(`${ API_URL }/api/blog`).then((data) => {
            setPosts(data as unknown as Post[]);
            setLoading(false);
        });
    }, [setLoading]);

    if (!posts.length) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{TITLE}</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/blog` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/blog` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <BackNavigation to="/" />
            <HeaderDiv>
                <p>All opinions expressed here are my own.</p>
                <h1>Blog</h1>
            </HeaderDiv>
            <PageDiv>
                <BlogList>
                    {posts.map((post, index) => (
                        <PostDiv key={ index }>
                            <DateSpan>{new Date(post.createdTime).toDateString()}</DateSpan>
                            <Link href={ `/blog/${ post.name }` }>
                                <BlogLink>{formatName(post.name)}</BlogLink>
                            </Link>
                            <DescriptionSpan>{post.description}</DescriptionSpan>
                        </PostDiv>
                    ))}
                </BlogList>
            </PageDiv>
        </>
    );
};

export default BlogIndex;
