import React, { FunctionComponent, useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { PageProps } from "../../@types/global";
import Link from "../../components/Link";
import { styled, yahooGeocitiesTheme } from "../../styles/stitches";
import BackNavigation from "../../components/BackNavigation";
import { API_URL } from "../../constants/ExternalUrls";
import fetchData from "../../utils/fetch";
import { Post } from "../blog";
import { CSS } from "@stitches/react";

const TITLE = "All Recipes";
const DESCRIPTION = "Some of my favorite recipes for any time of day or year!";

const ContentDiv = styled("div", {
    margin: "0 auto",
    padding: "10px 0",
    maxWidth: "800px",
    textAlign: "left",
    "@lg": {
        paddingTop: "30px"
    }
});

const MenuDiv = styled("div", {
    padding: "20px 60px",
    minHeight: "400px",
    marginBottom: "244px",
    color: "$onSurface",
    "@lg": {
        marginTop: "50px",
        minHeight: "600px",
        border: "1px solid $onBackground",
        boxShadow: "5px 5px 5px $onBackground",
        padding: "20px 100px",
        backgroundColor: "$surface02",
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        marginBottom: "30px"
    }
});

const Heading = styled("h2", {
    textAlign: "center"
});

const SectionHeading = styled("h2", {
    textAlign: "left",
    marginLeft: "-40px"
});

const LinkAnchor = styled("a", {
    color: "$onSurface",
    textDecoration: "none",
    paddingBottom: "1px",
    borderBottom: "1px dotted $primary",
    textTransform: "capitalize"
});

function formatName(name: string): string {
    return name.replace(/-/g, " ");
}

const FilterTag = styled("div", {
    display: "inline-block",
    backgroundColor: "$surface04",
    padding: "5px",
    borderRadius: "5px",
    margin: "3px",
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "$surface08",
        cursor: "pointer"
    }
});

const filterSelectedStyle: CSS = {
    backgroundColor: "$secondary",
    color: "$onSecondary",
    "&:hover": {
        backgroundColor: "$secondary",
        cursor: "pointer"
    }
};

const RecipeTags = styled("span", {
    display: "none",
    "@lg": {
        display: "initial"
    }
});

const Recipes: FunctionComponent<PageProps> = ({ setLoading }) => {
    const [ posts, setPosts ] = useState([] as Post[]);
    const [ tags, setTags ] = useState<Record<string, number>>({});
    const [ filterTags, setFilterTags ] = useState<Record<string, boolean>>({});

    useEffect(() => {
        setLoading(true);
        fetchData(`${ API_URL }/api/recipes`).then((data) => {
            const postList = data as unknown as Post[];

            const tags = {};

            postList.forEach(({ description }) => {
                const candidateTags = description.toLowerCase().split(",");

                candidateTags.forEach((candidate) => tags[candidate.trim()] = (tags[candidate.trim()] || 0) + 1);
            });

            setPosts(postList);
            setTags(tags);
            setLoading(false);
        });
    }, [setLoading]);

    const handleTagClick = useCallback((tag: string) => {
        if (filterTags[tag]) {
            delete filterTags[tag];
        } else {
            filterTags[tag] = true;
        }
        
        setFilterTags({ ...filterTags });
    }, [filterTags]);

    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/recipes` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/recipes` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <BackNavigation to="/" />
            <ContentDiv>
                <MenuDiv>
                    <Heading>Recipes</Heading>
                    <SectionHeading>Drinks</SectionHeading>
                    <div><Link href="/recipes/cocktails" component={ LinkAnchor }>Cocktails</Link></div>
                    <SectionHeading>Dishes { posts.length > 0 && `(${ posts.length })` }</SectionHeading>
                    <div style={{ paddingBottom: "15px" }}>
                        { Object.keys(tags).sort().map((tag, index) => (
                            <FilterTag key={ index } onClick={ () => handleTagClick(tag) } css={ filterTags[tag] ? filterSelectedStyle : {} }>
                                { tag } ({ tags[tag] })
                            </FilterTag>
                        )) }
                    </div>
                    { posts.map((post, index) => {
                        let matchesFilter = true;

                        Object.keys(filterTags).map((tag) => {
                            matchesFilter = matchesFilter && post.description.toLowerCase().includes(tag);
                        });

                        if (!matchesFilter) {
                            return false;
                        }

                        return (
                            <div key={ index } style={{ paddingBottom: "5px", display: "flex", justifyContent: "space-between" }}>
                                <Link href={ `/recipes/${ post.name }` } component={ LinkAnchor }>{ formatName(post.name) }</Link>
                                <RecipeTags style={{ textAlign: "right" }}>{ post.description }</RecipeTags>
                            </div>
                        );
                    })}
                </MenuDiv>
            </ContentDiv>
        </>
    );
};

export default Recipes;
