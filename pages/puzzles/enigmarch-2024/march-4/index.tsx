import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { darkTheme, keyframes, lightTheme, styled } from "../../../../styles/stitches";
import { PageProps } from "../../../../@types/global";
import { CSS } from "@stitches/react";
import { PuzzleAnswer } from "../../../../components/Puzzle/AnswerCheck";

const TableWrapper = styled("div", {
    position: "relative",
    marginLeft: "-15px",
    padding: "0",
    maxWidth: "unset",
    height: "360px",
    "@lg": {
        height: "600px",
        marginLeft: "5px"
    }
});

const Table = styled("table", {
    position: "absolute",
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    top: "27px",
    left: "36px",
    "@lg": {
        top: "54px",
        left: "141px"
    },
    filter: "grayscale(1)"
});

const glitchKeyframes = keyframes({
    "0%": {
      textShadow: "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
      boxShadow: "0.25em 0 0 #00fffc, -0.15em -0.2em 0 #fc00ff, 0.125em 0.2em 0 #fffc00"
    },
    "15%": {
      textShadow: "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00",
      boxShadow: "0.25em 0 0 #00fffc, -0.15em -0.2em 0 #fc00ff, 0.125em 0.2em 0 #fffc00"
    },
    "16%": {
      textShadow: "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
      boxShadow: "-0.25em -0.125em 0 #00fffc, 0.125em 0.175em 0 #fc00ff, -0.25em -0.25em 0 #fffc00"
    },
    "49%": {
      textShadow: "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00",
      boxShadow: "-0.25em -0.125em 0 #00fffc, 0.125em 0.175em 0 #fc00ff, -0.25em -0.25em 0 #fffc00"
    },
    "50%": {
      textShadow: "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
      boxShadow: "0.25em 0.175em 0 #00fffc, 0.15em 0 0 #fc00ff, 0 -0.2em 0 #fffc00"
    },
    "99%": {
      textShadow: "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00",
      boxShadow: "0.25em 0.175em 0 #00fffc, 0.15em 0 0 #fc00ff, 0 -0.2em 0 #fffc00"
    },
    "100%": {
      textShadow: "-0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00",
      boxShadow: "-0.25em 0 0 #00fffc, -0.125em -0.2em 0 #fc00ff, -0.2em -0.125em 0 #fffc00"
    }
});

const Datum = styled("td", {
    width: "15px",
    height: "15px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    "@lg": {
        width: "30px",
        height: "30px",
        fontSize: "20px"
    }
});

const transitionStyles: CSS = {
    animation: `${ glitchKeyframes } 0.75s infinite`,
};

const Text = styled("div", {
    color: "$onBackground"
});

const hiddenText: CSS = {
    color: "transparent"
};

const PuzzleComponent: FunctionComponent<PageProps> = ({ theme, setTheme }) => {
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        function toggleTheme(event: KeyboardEvent) {
            if (!event.shiftKey || event.repeat) {
                return;
            }

            setTransitioning(true);
        }

        window.addEventListener("keydown", toggleTheme);

        return () => {
            window.removeEventListener("keydown", toggleTheme);
        };
    }, []);

    useEffect(() => {
        if (!transitioning) {
            return;
        }

        setTimeout(() => {
            if (theme === lightTheme) {
                setTheme(darkTheme);
            } else {
                setTheme(lightTheme);
            }

            setTransitioning(false);
        }, 1000);
    }, [theme, setTheme, transitioning]);

    function handleSubmission({ submission }: PuzzleAnswer) {
        if (submission !== "SHIFT") {
            return;
        }

        setTransitioning(true);
    }

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-4" onSubmit={ handleSubmission }>
            <TableWrapper>
                <Table css={ transitioning ? transitionStyles : {} }>
                    <tbody>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground", ...(theme === lightTheme ? hiddenText : {}) }}>4</Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground", ...(theme === lightTheme ? hiddenText : {}) }}>4</Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderTop: "3px solid $onBackground", borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>4</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>4</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>4</Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>4</Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>4</Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>6</Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>4</Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum css={ theme === lightTheme ? hiddenText : {} }>6</Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>4</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>6</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>6</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>6</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={ theme === lightTheme ? {} : hiddenText }>6</Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground", ...(theme === lightTheme ? hiddenText : {}) }}>4</Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground", ...(theme === lightTheme ? hiddenText : {}) }}>4</Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderRight: "3px solid $onBackground", borderBottom: "3px solid $onBackground" }}></Datum>
                        </tr>
                    </tbody>
                </Table>
            </TableWrapper>
            <Text>{ theme === lightTheme ? "'Welcome to Bright Falls' Hashi" : "'Welcome to Night Springs' Hashi" }</Text>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
