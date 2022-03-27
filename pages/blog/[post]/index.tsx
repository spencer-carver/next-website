import { useRouter } from "next/router";
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { TableCellComponent } from "react-markdown/lib/ast-to-react";
import { PageProps } from "../../../@types/global";
import { API_URL } from "../../../constants/ExternalUrls";
import fetchFromCache from "../../../utils/cache";
import ErrorPage from "../../404";
import BackNavigation from "../../../components/BackNavigation";
import { styled } from "../../../styles/stitches";
import { Post } from "..";

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
    margin: "20px",
    padding: "20px",
    backgroundColor: "$surface01",
    color: "$onSurface",
    "@lg": {
        margin: "20px auto",
        maxWidth: "690px"
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
    border: "1px solid $onSurface",
    padding: "2px"
});

const TableCell = styled("td", {
    border: "1px solid $onSurface",
    padding: "2px"
});

const Link = styled("a", {
    color: "$onSurface",
    textDecoration: "none",
    borderBottom: "2px dotted $secondary"
});

const BlogLink = (props): ReactElement => {
    if (props.id) {
        return <span><a id={ props.id } style={ { paddingTop: "50px", pointerEvents: "none" } } /><Link { ...props } id={ undefined } /></span>;
    }

    return <Link { ...props } />;
};

const Pre = styled("pre", {
    backgroundColor: "$surface02",
    padding: "10px",
    "& code": {
        backgroundColor: "unset"
    }
});

const Code = styled("code", {
    backgroundColor: "$surface02",
    padding: "0 2px",
    borderRadius: "2px"
});

const BlockQuote = styled("blockquote", {
    borderLeft: "5px solid $surface04",
    paddingLeft: "20px",
    marginLeft: "0px"
});

const Image = styled("img", {
    maxWidth: "100%"
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

        fetchFromCache(`${API_URL}/api/blog/${ postName }`).then((data) => {
            if (typeof (data as unknown as Post).content === "string") {
                setPost(data as unknown as Post);
            }
            setLoading(false);
            setLoaded(true);
        });
    }, [postName]);

    if (!loaded) {
        return null;
    }

    if (loaded && !post.content) {
        return <ErrorPage title="Blog post not found" statusCode={404} backLink="/blog" />;
    }

    const publishDate = new Date(post.createdTime).toDateString();
    const modifyDate = new Date(post.modifiedTime).toDateString();

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <BackNavigation to="/blog" />
            <HeaderDiv>
                <h1>{ formatName(postName as string) }</h1>
                <span>Published on { publishDate }</span>
                { publishDate !== modifyDate && <span>Modified on { modifyDate }</span>}
            </HeaderDiv>
            <PageDiv>
                <ReactMarkdown
                    children={post.content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        table: Table as unknown as NormalComponents["table"],
                        th: TableHeading as unknown as TableCellComponent,
                        td: TableCell as unknown as TableCellComponent,
                        a: BlogLink as unknown as NormalComponents["a"],
                        pre: Pre as unknown as NormalComponents["pre"],
                        code: Code as unknown as NormalComponents["code"],
                        blockquote: BlockQuote as unknown as NormalComponents["blockquote"],
                        img: Image as unknown as NormalComponents["img"]
                    }}
                />
            </PageDiv>
        </>
    );
};

export default BlogPost;
