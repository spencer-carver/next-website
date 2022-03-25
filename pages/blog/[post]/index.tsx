import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { HeadingComponent } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import remarkGfm from "remark-gfm";
import { PageProps } from "../../../@types/global";
import { API_URL } from "../../../constants/ExternalUrls";
import { styled, yahooGeocitiesTheme } from "../../../styles/stitches";
import fetchFromCache from "../../../utils/cache";

const PageDiv = styled("div", {
    margin: "20px",
    padding: "20px",
    backgroundColor: "$surface01",
    "@lg": {
        margin: "20px auto",
        maxWidth: "690px"
    },
    "@xl": {
        margin: "20px auto",
        maxWidth: "1024px"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "transparent"
    }
});

const Header1 = styled("h1", {
    color: "$onBackground"
});
const Header2 = styled("h2", {
    margin: "0",
    color: "$onBackground"
});
const Paragraph = styled("p", {
    color: "$onBackground"
});

const BlogPost: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const { post } = router.query;
    const [ contents, setContents ] = useState("");

    useEffect(() => {
        setLoading(true);
        if (!post) {
            return;
        }

        fetchFromCache(`${ API_URL }/api/blog/${ post }`).then((data) => {
            setContents(data as unknown as string);
            setLoading(false);
        });
    }, [post]);

    if (!contents) {
        return null;
    }

    // eslint-disable-next-line react/no-children-prop
    return (
        <PageDiv>
            <ReactMarkdown
                children={ contents }
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: Header1 as unknown as HeadingComponent,
                    h2: Header2 as unknown as HeadingComponent,
                    p: Paragraph as unknown as NormalComponents["p"]
                }}
            />
        </PageDiv>
    );
};

export default BlogPost;
