import React, { FunctionComponent, useEffect, useState } from "react";
import { PageProps } from "../../@types/global";
import Link from "../../components/Link";
import { API_URL } from "../../constants/ExternalUrls";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import fetchFromCache from "../../utils/cache";

const PageDiv = styled("div", {
    margin: "20px",
    padding: "20px",
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
    color: "$onSurface"
});

const BlogList = styled("ul", {
    marginBottom: "calc(100vh - 301px)",
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "calc(100vh - 435px)"
    }
});

const BlogIndex: FunctionComponent<PageProps> = ({ setLoading }) => {
    const [ posts, setPosts ] = useState([] as string[]);

    useEffect(() => {
        setLoading(true);
        fetchFromCache(`${ API_URL }/api/blog`).then((data) => {
            setPosts(data as unknown as string[]);
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
            { posts.map((post, index) => <Link key={ index } href={ `/blog/${ post }` }><li>{ post }</li></Link>) }
        </BlogList>
        </PageDiv>
    );
};

export default BlogIndex;
