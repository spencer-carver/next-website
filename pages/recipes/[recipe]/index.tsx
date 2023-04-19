import { useRouter } from "next/router";
import Head from "next/head";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TableDataCellComponent, TableHeaderCellComponent } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { PageProps } from "../../../@types/global";
import { API_URL } from "../../../constants/ExternalUrls";
import fetchData from "../../../utils/fetch";
import ErrorPage from "../../404";
import BackNavigation from "../../../components/BackNavigation";
import { styled } from "../../../styles/stitches";
import MarkdownComponents from "../../../components/Markdown";
import { Post } from "../../blog";

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

const Table = styled("table", {
    borderCollapse: "collapse"
});

const TableHeading = styled("th", {
    display: "none",
    border: "1px solid transparent",
    padding: "2px"
});

const TableCell = styled("td", {
    border: "1px solid transparent",
    padding: "5px",
    "@lg": {
        "&:not(:last-of-type)": {
            paddingRight: "15px"
        }
    }
});

const Recipe: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const { recipe: recipeName } = router.query;
    const [recipe, setPost] = useState({} as unknown as Post);
    const [loaded, setLoaded] = useState(false);
    const [scaleFactor, setScaleFactor] = useState(1);

    useEffect(() => {
        setLoading(true);
        if (!recipeName) {
            return;
        }

        fetchData(`${ API_URL }/api/blog/${ recipeName }`).then((data) => {
            if (typeof (data as unknown as Post).content === "string") {
                setPost(data as unknown as Post);
            }
            setLoading(false);
            setLoaded(true);
        });
    }, [recipeName, setLoading]);

    if (!loaded) {
        return null;
    }

    if (loaded && !recipe.content) {
        return <ErrorPage title="Recipe not found" statusCode={ 404 } backLink="/recipes" />;
    }

    const publishDate = new Date(recipe.createdTime).toDateString();
    const modifyDate = new Date(recipe.modifiedTime).toDateString();

    const TITLE = formatName(recipe.name);
    const DESCRIPTION = recipe.description || "A recipe by Spencer Carver and/or Kathy Chen";

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <Head>
                <title>{ TITLE }</title>
                <link rel="canonical" href={ `${ process.env.NEXT_PUBLIC_SITE_URL }/recipes/${ recipeName }` } />
                <meta name="description" content={ DESCRIPTION } />
                <meta name="homepage" content="false" />
                <meta property="og:site_name" content={ TITLE } />
                <meta property="og:description" content={ DESCRIPTION } />
                <meta property="og:title" content={ TITLE } />
                <meta property="og:url" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/recipes/${ recipeName }` } />
                <meta property="og:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
                <meta name="twitter:description" content={ DESCRIPTION } />
                <meta name="twitter:title" content={ TITLE } />
                <meta name="twitter:image" content={ `${ process.env.NEXT_PUBLIC_SITE_URL }/seo.jpg` } />
            </Head>
            <BackNavigation to="/recipes" />
            <HeaderDiv>
                <h1>{ TITLE }</h1>
                <span>Published on { publishDate }</span>
                { publishDate !== modifyDate && <span>Modified on { modifyDate }</span>}
            </HeaderDiv>
            <PageDiv>
                <ReactMarkdown
                    remarkPlugins={ [remarkGfm] }
                    components={{
                        ...MarkdownComponents,
                        table: Table as unknown as NormalComponents["table"],
                        th: TableHeading as unknown as TableHeaderCellComponent,
                        td: TableCell as unknown as TableDataCellComponent
                    }}>
                    { recipe.content }
                </ReactMarkdown>
            </PageDiv>
        </>
    );
};

export default Recipe;
