import React, { ReactElement, useState, useEffect, FunctionComponent, useCallback } from "react";
import Link from "../Link";
import InstagramIcon from "../Icons/Instagram";
import FacebookIcon from "../Icons/Facebook";
import TwitterIcon from "../Icons/Twitter";
import LinkedInIcon from "../Icons/LinkedIn";
import SiteLogoIcon from "../Icons/SiteLogo";
import LoadingSpinner from "../LoadingSpinner";
import { styled, lightTheme, yahooGeocitiesTheme } from "../../styles/stitches";
import { GITHUB_URL } from "../../constants/ExternalUrls";
import { CSS } from "@stitches/react";

function ensureArray(value: Array<ReactElement> | ReactElement): Array<ReactElement> {
    return Array.isArray(value)
        ? value
        : [ value ];
}

function getIdFromDOM(): string | undefined {
    let inViewArr;

    if (document.elementsFromPoint) {
        inViewArr = document.elementsFromPoint(100, 200);
        // This is a bit of a hack, but the 'elementsFromPoint' dom util always returns the hierarchy top down.
        // I know bottom-up is: 'html', 'body', 'div#root', 'main.page', 'div.spacer', 'div#sectionId'
        // So I can reverse index into the array and find the sectionId (if it exists)
        return (inViewArr[inViewArr.length - 6] || {}).id;
    }

    // IE11 does not support the 'elementsFromPoint' method, but does have it's own which isn't
    // categorized by typescript. Additionally, IE11 does not recognize the '<main>' element, so
    // it will return an array that is 1 less element than modern browsers
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inViewArr = (document as any).msElementsFromPoint(100, 200);
    return (inViewArr[inViewArr.length - 5] || {}).id;
}

const NavigationElement = styled("nav", {
    position: "relative",
    height: "50px"
});

interface NavigationProps {
    isLoading?: boolean;
    children: Array<ReactElement> | ReactElement;
}

const Navigation: FunctionComponent<NavigationProps> = ({ isLoading = false, children }) => {
    const [ focus, setFocus ] = useState(0);
    const [ expanded, setExpanded ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ stillLoading, setStillLoading ] = useState(false);

    function toggleMenu(): void {
        setExpanded(!expanded);
    }

    const sectionNames = ensureArray(children).reduce((accumulatedNames: string[], { props: { id } }: { props: { id: string } }) => {
        accumulatedNames.push(id || "");

        return accumulatedNames;
    }, []);

    useEffect(() => {
        function reportScrollY(): void {
            if (sectionNames.length === 0) {
                return;
            }

            const id = getIdFromDOM();

            if (!id) {
                return;
            }

            setFocus(Math.max(0, sectionNames.indexOf(id)));
        }

        window.addEventListener("scroll", reportScrollY);

        return (): void => {
            window.removeEventListener("scroll", reportScrollY);
        };
    });

    useEffect(() => {
        if (isLoading && !stillLoading) {
            setTimeout(() => setStillLoading(true), 75);
        }

        if (stillLoading && isLoading && !loading) {
            setLoading(true);
        }

        if (stillLoading && !isLoading && !loading) {
            setStillLoading(false);
        }

        if (!isLoading && loading) {
            setStillLoading(false);
            setTimeout(() => setLoading(false), 750);
        }
    }, [ isLoading, loading, stillLoading ]);

    return (
        <>
            <NavigationElement>
                <SiteLogo expanded={ expanded } onClick={ toggleMenu } />
                <SocialLinks />
                <SiteNav expanded={ expanded } />
                <PageNav sections={ sectionNames } selected={ focus } setSelected={ setFocus } expanded={ expanded } />
            </NavigationElement>
            { loading && <LoadingSpinner fadeOut={ !stillLoading } /> }
            { children }
        </>
    );
};

const SocialLinksDiv = styled("div", {
    textAlign: "right",
    color: "$onSurface",
    zIndex: "1000003",
    width: "205px",
    borderRadius: "0 0 0 16px",
    paddingLeft: "5px",
    position: "fixed",
    top: "0",
    right: "0",
    [`.${ yahooGeocitiesTheme } &`]: {
        width: "auto"
    }
});

const SocialLinks: FunctionComponent = () => <SocialLinksDiv><InstagramIcon /><FacebookIcon /><TwitterIcon /><LinkedInIcon /></SocialLinksDiv>;

const SiteNavDiv = styled("div", {
    top: "45px",
    position: "fixed",
    margin: "5px 30px 5px 0",
    padding: "10px 0 10px 10px",
    zIndex: "1000003",
    width: "85px",
    height: "130px"
});

const SiteNavContentsDiv = styled("div", {
    position: "relative",
    color: "$onSurface",
    display: "flex",
    flexDirection: "column"
});

const SiteNavLinkAnchor = styled("a", {
    color: "$onSurface",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        color: "$onSecondary",
        "&:hover": {
            color: "$onSurface"
        }
    }
});

interface SiteNavProps {
    expanded: boolean;
}

const SiteNav: FunctionComponent<SiteNavProps> = ({ expanded }) => {
    return (
        <SiteNavDiv css={ expanded ? {} : { display: "none" } }>
            <SiteNavContentsDiv css={ expanded ? { zIndex: "1000003" } : {} }>
                <Link href="/" component={ SiteNavLinkAnchor }>Home</Link>
                <Link href="/about" component={ SiteNavLinkAnchor }>About Me</Link>
                <Link href="/blog" component={ SiteNavLinkAnchor }>Blog</Link>
                <Link href="/puzzles" component={ SiteNavLinkAnchor }>Puzzles</Link>
                <Link href="/magic" component={ SiteNavLinkAnchor }>Magic</Link>
                <Link href="/recipes" component={ SiteNavLinkAnchor }>Recipes</Link>
                <Link href={ GITHUB_URL } component={ SiteNavLinkAnchor }>Github</Link>
            </SiteNavContentsDiv>
        </SiteNavDiv>
    );
};

const NavBarDiv = styled("div", {
    position: "fixed",
    top: "0",
    width: "100%",
    height: "50px",
    backgroundColor: "$surface01",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    zIndex: "1000000",
    borderBottom: "1px solid transparent",
    [`.${ lightTheme } &`]: {
        borderBottom: "1px solid black"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "$secondary"
    }
});

const NavContainerDiv = styled("div", {
    width: "calc(100% - 50px)"
});

const PageNavDiv = styled("div", {
    display: "block",
    textAlign: "center",
    margin: "13px 0 0",
    padding: "0 0 17px 0",
    height: "20px"
});

const SiteNavBackgroundDiv = styled("div", {
    backgroundColor: "$surface01",
    width: "120px",
    height: "150px",
    marginLeft: "-50px",
    borderBottomRightRadius: "$borderRadius",
    borderBottom: "1px solid $onBackground",
    borderRight: "1px solid $onBackground",
    [`.${ yahooGeocitiesTheme } &`]: {
        backgroundColor: "$secondary",
        borderBottom: "1px solid transparent",
        borderRight: "1px solid transparent",

    }
});

interface PageNavProps {
    sections?: Array<string>;
    selected: number;
    setSelected: Function;
    expanded: boolean;
}

const PageNav: FunctionComponent<PageNavProps> = ({ sections = [], selected, setSelected, expanded }) => {
    return (
        <NavBarDiv id="navBar">
            <NavContainerDiv>
                <PageNavDiv>
                    <noscript>
                        <style dangerouslySetInnerHTML={ { __html: `${ NavBarDiv } { z-index: 1000003; background-color: transparent; border-bottom: 0 !important; } ${ PageNavDiv } { text-align: left; padding: 0 0 17px 30px; }` } } />
                        <Link href="/">Home</Link> | <Link href="/about">About</Link>
                    </noscript>
                    {  
                        sections.map((name, index) => {
                            if (!name) {
                                return null;
                            }

                            return (
                                <NavItem
                                    key={ name }
                                    name={ name }
                                    index={ index }
                                    selected={ selected === index }
                                    setSelected={ setSelected }
                                />
                            );
                        })
                    }
                </PageNavDiv>
                <SiteNavBackgroundDiv css={ expanded ? {} : { display: "none" } } />
            </NavContainerDiv>
        </NavBarDiv>
    );
};

const LogoDiv = styled("div", {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000003",
    "&:hover": {
        cursor: "pointer"
    }
});

interface SiteLogoProps {
    expanded: boolean;
    onClick: ((event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent) => void);
}

const SiteLogo: FunctionComponent<SiteLogoProps> = ({ expanded, onClick }) => {
    const [hasExpanded, setHasExpanded] = useState(false);
    const onLogoInteract = useCallback((event) => {
        !expanded && setHasExpanded(true);
        onClick(event);
    }, [expanded, onClick]);

    return (
        <LogoDiv
            role="button"
            aria-label={ expanded ? "Close Site Nav" : "Open Site Nav" }
            tabIndex={ 0 }
            onClick={ onLogoInteract }
            onKeyPress={ onLogoInteract }
        >
        <SiteLogoIcon expanded={ expanded } hasExpanded={ hasExpanded } />
        </LogoDiv>
    );
};

const NavItemDiv = styled("div", {
    display: "none",
    margin: "15px 5px",
    color: "$onSurface",
    textTransform: "capitalize",
    "@lg": {
        display: "initial",
        "&::after": {
            content: "",
            display: "inline-block"
        }
    }
});

const navItemDivSelectedStyles: CSS = {
    textDecoration: "underline",
    animation: "fadein 1s"
};

interface NavItemProps {
    name: string;
    index: number;
    selected?: boolean;
    setSelected: Function;
}

declare module "react" {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      reference?: string;
    }
}

const NavItem: FunctionComponent<NavItemProps> = ({ name, index, selected = false, setSelected }) => {
    function onItemClick(event: React.MouseEvent<HTMLElement, MouseEvent> | React.KeyboardEvent): void {
        setSelected(index);

        if (!event || !event.target) {
            return;
        }

        const eventTarget = event.target as HTMLElement;
        const reference = eventTarget.getAttribute("reference");

        if (!reference) {
            return;
        }

        const referenceElement = document.getElementById(reference);

        if (!referenceElement) {
            return;
        }

        const elementY = referenceElement.getBoundingClientRect().top;
        window.scrollBy(0, elementY - 50);
    }

    const readableName = name.replace("-", " ");

    return (
        <NavItemDiv css={ selected ? navItemDivSelectedStyles : undefined }
            reference={ name }
            role="button"
            aria-label={ `Go to ${ readableName }` }
            tabIndex={ 0 }
            onClick={ onItemClick }
            onKeyPress={ onItemClick }>
            { readableName }
        </NavItemDiv>
    );
};

export default Navigation;
