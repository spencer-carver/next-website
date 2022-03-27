import React, { FunctionComponent, useEffect, useState } from "react";
import { PageProps } from "../../@types/global";
import Link from "../../components/Link";
import { API_URL } from "../../constants/ExternalUrls";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import fetchFromCache from "../../utils/cache";

function formatName(name: string): string {
    return name.replace(/-/g, " ");
}

const PageDiv = styled("div", {
    margin: "20px",
    padding: "20px",
    color: "$onSurface",
    backgroundColor: "$surface01",
    "@lg": {
        margin: "20px auto",
        maxWidth: "690px"
    },
    "@xxl": {
        margin: "20px auto",
        maxWidth: "1024px"
    }
});

const Heading = styled("h1", {
    margin: "0"
});

const BlogList = styled("ul", {
    marginBottom: "calc(100vh - 340px)",
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "calc(100vh - 472px)"
    }
});

const BlogLink = styled("li", {
    fontSize: "24px",
    textTransform: "capitalize"
});

const DateSpan = styled("span", {
    display: "block",
    "&:not(:first-of-type)": {
        marginTop: "20px"
    }
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
}

const BlogIndex: FunctionComponent<PageProps> = ({ setLoading }) => {
    const [ posts, setPosts ] = useState([] as Post[]);

    useEffect(() => {
        setLoading(true);
        fetchFromCache(`${ API_URL }/api/blog`).then((data) => {
            setPosts(data as unknown as Post[]);
            setLoading(false);
        });
    }, []);

    if (!posts.length) {
        return null;
    }

    return (
        <PageDiv>
            <Heading>Blog</Heading>
        <BlogList>
            { posts.map((post, index) => (
                <div key={ index }>
                    <DateSpan>{ new Date(post.createdTime).toDateString() }</DateSpan>
                    <Link href={ `/blog/${ post.name }` }>
                        <BlogLink>{ formatName(post.name) }</BlogLink>
                    </Link>
                    <DescriptionSpan>{ post.description }</DescriptionSpan>
                </div>
            )) }
        </BlogList>
        </PageDiv>
    );
};

export default BlogIndex;
