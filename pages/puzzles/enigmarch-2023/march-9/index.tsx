import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { keyframes, styled } from "../../../../styles/stitches";

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
    }
});

const glitchKeyframes = keyframes({
    "0%": {
      textShadow: "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00"
    },
    "15%": {
      textShadow: "0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00"
    },
    "16%": {
      textShadow: "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00"
    },
    "49%": {
      textShadow: "-0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00"
    },
    "50%": {
      textShadow: "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00"
    },
    "99%": {
      textShadow: "0.05em 0.035em 0 #00fffc, 0.03em 0 0 #fc00ff, 0 -0.04em 0 #fffc00"
    },
    "100%": {
      textShadow: "-0.05em 0 0 #00fffc, -0.025em -0.04em 0 #fc00ff, -0.04em -0.025em 0 #fffc00"
    }
});

const Datum = styled("td", {
    width: "25px",
    height: "25px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    animation: `${ glitchKeyframes } 0.75s infinite`,
    "@lg": {
        width: "50px",
        height: "50px",
        fontSize: "30px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-9">
            <div style={{ position: "relative", height: "60vh" }}>
                <Table>
                    <tbody>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}>9</Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}>8</Datum><Datum css={{ borderTop: "3px solid $onBackground" }}>3</Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}>5</Datum><Datum css={{ borderTop: "3px solid $onBackground", borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>8</Datum><Datum></Datum><Datum>4</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum><Datum>7</Datum><Datum></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>2</Datum><Datum></Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>9</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum>7</Datum><Datum></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum>6</Datum><Datum></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>3</Datum><Datum></Datum><Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}>9</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}>7</Datum><Datum css={{ borderTop: "3px solid $onBackground", borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>3</Datum><Datum css={{ backgroundColor: "$secondary" }}></Datum><Datum></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>9</Datum><Datum></Datum><Datum>8</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>1</Datum><Datum css={{ backgroundColor: "$secondary" }}></Datum><Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum>8</Datum><Datum css={{ backgroundColor: "$secondary" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum>5</Datum><Datum>4</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum>3</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>2</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}>3</Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderTop: "3px solid $onBackground" }}>4</Datum><Datum css={{ borderTop: "3px solid $onBackground" }}></Datum><Datum css={{ borderTop: "3px solid $onBackground", borderRight: "3px solid $onBackground" }}>7</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum></Datum><Datum>2</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum></Datum><Datum></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}></Datum><Datum></Datum><Datum css={{ borderRight: "3px solid $onBackground" }}></Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderBottom: "3px solid $onBackground" }}></Datum><Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum><Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderBottom: "3px solid $onBackground" }}></Datum><Datum css={{ borderBottom: "3px solid $onBackground" }}>4</Datum><Datum css={{ borderBottom: "3px solid $onBackground" }}>7</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground", borderBottom: "3px solid $onBackground" }}>5</Datum><Datum css={{ borderBottom: "3px solid $onBackground" }}></Datum><Datum css={{ borderRight: "3px solid $onBackground", borderBottom: "3px solid $onBackground", backgroundColor: "$secondary" }}></Datum>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
