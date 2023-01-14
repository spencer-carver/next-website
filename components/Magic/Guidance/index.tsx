import React, { FunctionComponent, useEffect, useCallback, useState, ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CSS } from "@stitches/react";
import { styled } from "../../../styles/stitches";
import { Post } from "../../../pages/blog";
import MarkdownComponents from "../../../components/Markdown";
import Tooltip from "../../Tooltip";
import CardComponent from "../Card";
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import fetchFromCache from "../../../utils/cache";
import { API_URL } from "../../../constants/ExternalUrls";
import { Card } from "../../../pages/magic/deck/[deck]";

const { a, code } = MarkdownComponents;
const Link = a as unknown as FunctionComponent<{ href: string; children: ReactElement | string }>;
const Code = code as unknown as FunctionComponent<{ css?: CSS; children: ReactElement | string }>;

const PageDiv = styled("div", {
    padding: "0 20px",
    backgroundColor: "$background",
    color: "$onBackground",
    "& sup span a": {
        borderBottom: "none"
    },
    "@lg": {
        margin: "20px auto",
        padding: "0 100px 0 20px",
        maxWidth: "690px",
        fontSize: "18px"
    },
    "@xl": {
        maxWidth: "920px"
    },
    "@xxl": {
        maxWidth: "1080px"
    },
    "@xxxl": {
        maxWidth: "1320px"
    }
});

const BackToTopSpan = styled("span", {
    position: "sticky",
    float: "right",
    bottom: "10px",
    right: "20px",
    padding: "2px",
    border: "1px solid $onBackground",
    borderRadius: "5px",
    backgroundColor: "$secondary"
});

const tooltipWrapperStyles: CSS = {
    borderBottom: "none !important",
    "&:hover": {
        backgroundColor: "transparent"
    }
};

const tooltipContainerStyles: CSS = {
    display: "none",
    backgroundColor: "transparent",
    bottom: "25px",
    padding: "0",
    borderRadius: "7px",
    boxShadow: "0px 0px 5px 3px $onBackground",
    "@lg": {
        display: "initial",
        borderRadius: "9px"
    },
    "@xxl": {
        borderRadius: "14px"
    }
};

const cardTooltipStyles: CSS = {
    width: "150px !important",
    "@lg": {
        width: "250px !important"
    }
};

interface GuidanceProps {
    deckName: string;
    format?: string;
    cards: Record<string, Card["card_digest"]>;
    hasLoaded: Function;
}

const Guidance: FunctionComponent<GuidanceProps> = ({ deckName, format, cards, hasLoaded }) => {
    const [post, setPost] = useState({} as unknown as Post);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!deckName) {
            hasLoaded(true);

            return;
        }

        fetchFromCache(`${ API_URL }/api/blog/${ deckName }`).then((data) => {
            if (typeof (data as unknown as Post).content === "string") {
                setPost(data as unknown as Post);
            }
            setLoaded(true);
            hasLoaded(true);
        });
    }, [deckName, hasLoaded]);

    const CardPreview = useCallback(({ children }: { children: string }) => {
        const card = cards[children];

        if (!card) {
            return <Code>{children}</Code>;
        }

        return (
            <Tooltip
                tooltip={ <CardComponent
                    { ...card }
                    image={ card.image_uris.front }
                    index={ 1 }
                    instance={ 1 }
                    count={ 1 }
                    type="featured"
                    setLoaded={ () => { } }
                    css={ cardTooltipStyles }
                /> }
                css={ tooltipWrapperStyles }
                tooltipCss={ tooltipContainerStyles }>
                <Code css={{ "@lg": { "&:hover": { backgroundColor: "$secondary" } } }}>{children}</Code>
            </Tooltip>
        );
    }, [cards]);

    if (!loaded) {
        return null;
    }

    if (loaded && !post.content) {
        return null;
    }

    const modifyDate = new Date(post.modifiedTime).toDateString();

    // eslint-disable-next-line react/no-children-prop
    return (
        <>
            <PageDiv>
                <p>Last Updated: {modifyDate}</p>
                <ReactMarkdown
                    remarkPlugins={ [remarkGfm] }
                    components={{
                        ...MarkdownComponents,
                        code: CardPreview as unknown as CodeComponent
                    }}>
                    {post.content}
                </ReactMarkdown>
            </PageDiv>
            {format && format !== "commander" && <BackToTopSpan><Link href="#Matchups">to Matchups</Link></BackToTopSpan>}
        </>
    );
};

export default Guidance;
