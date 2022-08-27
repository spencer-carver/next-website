import React, { FunctionComponent } from "react";
import { CSS } from "@stitches/react";
import { PuzzleWrapperComponent } from "../../../components/Puzzle/common";
import { styled } from "../../../styles/stitches";

type Segment = [string, number];

const RowDiv = styled("div", {
    height: "50px",
    "&:first-of-type": {
        marginTop: "50px"
    }
});

const SymbolDiv = styled("div", {
    display: "inline-block",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    margin: "0 5px",
    color: "White",
    "&::before": {
        position: "relative",
        top: "4px",
        fontSize: "24px",
        fontWeight: "bold",
        color: "inherit"
    }
});

const StopsSpan = styled("span", {
    color: "$onBackground"
});

const SYMBOL_TO_CSS: Record<string, CSS> = {
    1: { backgroundColor: "red" },
    2: { backgroundColor: "red" },
    6: { backgroundColor: "green" },
    7: { backgroundColor: "purple" },
    C: { backgroundColor: "blue" },
    D: { backgroundColor: "orange" },
    E: { backgroundColor: "blue" },
    F: { backgroundColor: "orange" },
    L: { backgroundColor: "gray" },
    M: { backgroundColor: "orange" },
    N: { color: "black", backgroundColor: "yellow" },
    R: { color: "black", backgroundColor: "yellow" },
    S: { backgroundColor: "gray" },
    W: { color: "black", backgroundColor: "yellow" },
    "↩️": { color: "$onBackground", margin: "0", transform: "rotate(90deg)" },
    "🚶": { margin: "0" }
};

const Route: FunctionComponent<{ route: Segment[] }> = ({ route }) => {
    return (
        <RowDiv>
            { route.map(([ symbol, stops ], index) => (
                <span key={ index }>
                    <SymbolDiv css={{ ...SYMBOL_TO_CSS[symbol], "&::before": { "content": symbol } }} />
                    { stops !== 0 && <StopsSpan>{ stops }</StopsSpan> }
                </span>
            )) }
        </RowDiv>
    );
};

const Subway: FunctionComponent = () => {
    return (
        <>
            <Route route={ [[ "1", 2 ], [ "C", 2 ], [ "E", 2 ]] } />
            <Route route={ [[ "M", 2 ], [ "W", 3 ], [ "6", 3 ]] } />
            <Route route={ [[ "1", 3 ], [ "↩️", 1 ], [ "2", 1 ]] } />
            <Route route={ [[ "F", 3 ], [ "🚶", 0 ], [ "7", 1 ], [ "6", 4 ], [ "L", 1 ]] } />
            <Route route={ [[ "S", 1 ], [ "🚶", 0 ], [ "E", 2 ], [ "D", 2 ], [ "M", 3 ]] } />
            <Route route={ [[ "N", 1 ], [ "R", 5 ]] } />
        </>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="travel-diary">
            <Subway />
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
