import { useRouter } from "next/router";
import Head from "next/head";
import React, { FunctionComponent, Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HeadingComponent, SpecialComponents, TableDataCellComponent, TableHeaderCellComponent } from "react-markdown/lib/ast-to-react";
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

const SmartTableCell = ({ children }) => {
    const {
        scaleFactor,
        ingredientSet, setIngredientSet,
        generalizedIngredientSet, setGeneralizedIngredientSet
    } = useRecipe();

    useEffect(() => {
        if (!children || !Number.isNaN(parseFloat(children[0]))) {
            return;
        }

        const value = children[0] as string;

        ingredientSet.add(value.toLowerCase());

        if (value.includes(" ")) {
            value.split(" ").forEach((v) => v && generalizedIngredientSet.add(v.toLowerCase()));
        }

        // TODO plural?

        setIngredientSet(ingredientSet);
        setGeneralizedIngredientSet(generalizedIngredientSet);
    }, [children, ingredientSet, setIngredientSet, generalizedIngredientSet, setGeneralizedIngredientSet]);

    if (!children) {
        return <TableCell>{ children }</TableCell>;
    }

    const value = children[0] as string;

    if (!Number.isNaN(parseFloat(value))) {
        return <TableCell>{ Math.round(scaleFactor * parseFloat(value) * 100) / 100 }</TableCell>
    }

    const ingredients = [value.toLowerCase()];

    if (value.includes(" ")) {
        value.split(" ").forEach((v) => v && ingredients.push(v.toLowerCase()));

        //TODO plural?
    }

    return <TableCell data-ingredients={ ingredients }>{ value }</TableCell>;
};

const H4 = styled("h4", {});

const SmartH4 = ({ children }) => {
    const { ingredientSet, setIngredientSet } = useRecipe();

    useEffect(() => {
        if (!children || !children[0]) {
            return;
        }

        const ingredientList = children[0].split(":")[1].trim();

        ingredientList.split(",").forEach((v) => ingredientSet.add(v.trim().toLowerCase()));

        //TODO two-words?
        //TODO plural?

        setIngredientSet(ingredientSet);
    }, [children, ingredientSet, setIngredientSet]);

    const [ heading, ingredients ] = children[0].split(":");

    return (
        <H4>{ heading }: { ingredients.trim().split(",").map((i, ind) =>
            <React.Fragment key={ ind }>
                { ind !== 0 && ", " }
                <span data-ingredients={ [i.trim().toLowerCase()] }>
                    { i.trim() }
                </span>
            </React.Fragment>
        ) }
        </H4>
    );
};

const Li = styled("li", {});

const SmartListItem = ({ children }) => {
    const { ingredientSet, generalizedIngredientSet } = useRecipe();

    if (!children || !children[0]) {
        return;
    }

    const instruction = children[0] as string;
    const ingredients = [];

    ingredientSet.forEach((ingredient) => {
        if (instruction.toLowerCase().includes(ingredient)) {
            ingredients.push(ingredient);
        }
    });

    generalizedIngredientSet.forEach((ingredient) => {
        if (instruction.toLowerCase().includes(ingredient)) {
            ingredients.push(ingredient);
        }
    });

    return (
        <Li data-ingredients={ ingredients }>
            { instruction }
        </Li>
    );
};

interface RecipeProps {
    scaleFactor: number;
    ingredientSet: Set<string>;
    setIngredientSet: Dispatch<SetStateAction<Set<string>>>;
    generalizedIngredientSet: Set<string>;
    setGeneralizedIngredientSet: Dispatch<SetStateAction<Set<string>>>;
}

const RecipeContext = createContext<RecipeProps>({
    scaleFactor: 1,
    ingredientSet: new Set<string>(),
    setIngredientSet: () => {},
    generalizedIngredientSet: new Set<string>(),
    setGeneralizedIngredientSet: () => {}
});

function useRecipe() {
    return useContext(RecipeContext);
}

const Recipe: FunctionComponent<PageProps> = ({ setLoading }) => {
    const router = useRouter();
    const { recipe: recipeName } = router.query;
    const [recipe, setRecipe] = useState({} as unknown as Post);
    const [loaded, setLoaded] = useState(false);
    const [scaleFactor, setScaleFactor] = useState(1);
    const [ingredientSet, setIngredientSet] = useState(new Set<string>());
    const [generalizedIngredientSet, setGeneralizedIngredientSet] = useState(new Set<string>());

    useEffect(() => {
        setLoading(true);
        if (!recipeName) {
            return;
        }

        fetchData(`${ API_URL }/api/recipes/${ recipeName }`).then((data) => {
            if (typeof (data as unknown as Post).content === "string") {
                setRecipe(data as unknown as Post);
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
    const DESCRIPTION = `A recipe by ${ recipe.author }`;

    // eslint-disable-next-line react/no-children-prop
    return (
        <RecipeContext.Provider value={{ scaleFactor, ingredientSet, setIngredientSet, generalizedIngredientSet, setGeneralizedIngredientSet }}>
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
                        h4: SmartH4 as unknown as HeadingComponent,
                        table: Table as unknown as NormalComponents["table"],
                        th: TableHeading as unknown as TableHeaderCellComponent,
                        td: SmartTableCell as unknown as TableDataCellComponent,
                        li: SmartListItem as unknown as SpecialComponents["li"]
                    }}>
                    { recipe.content }
                </ReactMarkdown>
            </PageDiv>
        </RecipeContext.Provider>
    );
};

export default Recipe;
