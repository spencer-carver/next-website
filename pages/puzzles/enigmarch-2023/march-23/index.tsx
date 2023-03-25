import React, { FunctionComponent, useCallback, useEffect, useMemo, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";

const CubeWrapper = styled("div", {
    position: "relative",
    width: "100px",
    height: "100px",
    "@lg": {
        width: "150px",
        height: "150px",
    }
});

const CubeDiv = styled("div", {
    position: "absolute",
    transformOrigin: "50px 50px",
    transformStyle: "preserve-3d",
    transition: "transform 1s ease 0s",
    "@lg": {
        transformOrigin: "75px 75px",
    }
});

const Face = styled("div", {
    position: "absolute",
    display: "flex",
    backgroundColor: "$background",
    borderRadius: "30px",
    border: "3px solid $surface04",
    background: "$surface01",
    textAlign: "center",
    justifyContent: "center",
    width: "100px",
    height: "100px",
    "@lg": {
        width: "150px",
        height: "150px",
    }
});

const Dot = styled("span", {
    alignSelf: "center",
    fontSize: "48px",
    color: "$onSurface",
    "@lg": {
        fontSize: "72px",
    }
});

const d = [
    undefined,
    [0, 0, 0],
    [0, -90, 0],
    [-90, 0, 0],
    [90, 0, 0],
    [0, 90, 0],
    [0, -180, 0]
];

function roll() {
    const value = Math.floor(Math.random() * 6) + 1;

    return {
        roll: value,
        x: d[value][0] + 360 * Math.floor(2 + value / 2),
        y: d[value][1] + 360 * value,
        z: d[value][2]
    }
}

const Die = ({ x, y, z, sides}: { x: number; y: number; z: number; sides: string[] }) => {
    return (
        <CubeWrapper>
            <CubeDiv css={{ transform: `rotateX(${ x }deg) rotateY(${ y }deg) rotateZ(${ z }deg)` }}>
                <Face css={{ transform: "translateZ(50px)", "@lg": { transform: "translateZ(75px)" } }}>
                    <Dot>{ sides[0] }</Dot>
                </Face>
                <Face css={{ transform: "rotateY(90deg) translateZ(50px)", "@lg": { transform: "rotateY(90deg) translateZ(75px)" } }}>
                    <Dot>{ sides[1] }</Dot>
                </Face>
                <Face css={{ transform: "rotateX(90deg) translateZ(50px)", "@lg": { transform: "rotateX(90deg) translateZ(75px)" } }}>
                    <Dot>{ sides[2] }</Dot>
                </Face>
                <Face css={{ transform: "rotateX(-90deg) translateZ(50px)", "@lg": { transform: "rotateX(-90deg) translateZ(75px)" } }}>
                    <Dot>{ sides[3] }</Dot>
                </Face>
                <Face css={{ transform: "rotateY(-90deg) translateZ(50px)", "@lg": { transform: "rotateY(-90deg) translateZ(75px)" } }}>
                    <Dot>{ sides[4] }</Dot>
                </Face>
                <Face css={{ transform: "rotateX(-180deg) translateZ(50px)", "@lg": { transform: "rotateX(-180deg) translateZ(75px)" } }}>
                    <Dot css={{ transform: "rotateX(180deg) rotateY(-180deg)", marginTop: "10px" }}>{ sides[5] }</Dot>
                </Face>
            </CubeDiv>
        </CubeWrapper>
    );
};

const GameBoard = styled("div", {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    margin: "40px auto",
    "@lg": {
        justifyContent: "space-evenly"
    }
});

const Controls = styled("div", {
    paddingBottom: "20px",
    color: "$onBackground"
});

const Button = styled("button", {
    width: "100px",
    height: "40px",
    fontSize: "16px",
    "&:hover": {
        cursor: "pointer"
    }
});

const StrikeOut = styled("span", {
    position: "absolute",
    top: "23px",
    backgroundColor: "$error",
    color: "$onError",
    padding: "10px",
    "@lg": {
        top: "60px"
    }
});

const ListItem = styled("li", {
    fontFamily: "monospace",
    listStyle: "none",
    color: "$onBackground",
    fontSize: "16px"
});

const ITEM_STYLES: CSS[] = [
    { color: "$primary" },
    { color: "$secondary" }
];

const DIE_ONE = [
    ["B", "O", "O", "V", "B", "M"],
    ["Z", "F", "B", "S", "M", "Z"]
];

const DIE_TWO = [
    ["L", "V", "D", "I", "F", "O"],
    ["H", "B", "U", "F", "B", "V"]
];

const PuzzleComponent: FunctionComponent = () => {
    const [version, setVersion] = useState(0);
    const [offset, setOffset] = useState(0);
    const [seenAll, setSeenAll] = useState(false);
    const [seenDie1, setSeenDie1] = useState([true,false,false,false,false,false]);
    const [seenDie2, setSeenDie2] = useState([true,false,false,false,false,false]);
    const [dieOneResults, setDieOneResults] = useState({roll: 1, x: 0, y: 0, z: 0 });
    const [dieTwoResults, setDieTwoResults] = useState({roll: 1, x: 0, y: 0, z: 0 });
    const [pastResults, setPastResults] = useState([]);

    const d1Sides = useMemo(() => DIE_ONE[version].map((char) => {
            const newCharCode = char.charCodeAt(0) + offset;
            return String.fromCharCode(newCharCode > 90 ? newCharCode - 26 : newCharCode);
    }), [version, offset]);
    const d2Sides = useMemo(() => DIE_TWO[version].map((char) => {
        const newCharCode = char.charCodeAt(0) + offset;
        return String.fromCharCode(newCharCode > 90 ? newCharCode - 26 : newCharCode);
    }), [version, offset]);

    const rollDice = useCallback(() => {
        const d1 = roll();
        const d2 = roll();

        setDieOneResults(d1);
        setDieTwoResults(d2);

        setSeenDie1(sd1 => sd1.map((old, index) => index === d1.roll - 1 ? true : old));
        setSeenDie2(sd2 => sd2.map((old, index) => index === d2.roll - 1 ? true : old));
    }, []);

    useEffect(() => {
        setSeenAll(seenDie1.filter((v) => !v).length + seenDie2.filter((v) => !v).length === 0);
    }, [seenDie1, seenDie2]);

    const reset = useCallback(() => {
        setPastResults([
            [
                version,
                d1Sides.map((side, index) => seenDie1[index] ? side : "_").concat(d2Sides.map((side, index) => seenDie2[index] ? side : "_"))
            ],
            ...pastResults
        ]);

        setSeenDie1([false,false,false,false,false,false]);
        setSeenDie2([false,false,false,false,false,false]);
        setSeenAll(false);

        setVersion(Math.floor(Math.random() * 2));
        setOffset(Math.floor(Math.random() * 25));
    }, [version, d1Sides, d2Sides, seenDie1, seenDie2, pastResults]);

    const onRestart = () => {
        reset();
        rollDice();
    };

    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-23">
            <GameBoard>
                <Die { ...dieOneResults } sides={ d1Sides } />
                <Die { ...dieTwoResults } sides={ d2Sides } />
                { seenAll && <StrikeOut>You&apos;ve seen all iterations of these dice, why not try again?</StrikeOut> }
            </GameBoard>
            <Controls>
                <Button onClick={ rollDice } disabled={ seenAll }>roll</Button>
                <Button onClick={ onRestart }>restart</Button>
            </Controls>
            <ul style={{ paddingInlineStart: "0" }}>
                <ListItem css={ ITEM_STYLES[version] }>
                    { d1Sides.reduce((prev, result, index) => `${ prev } ${ seenDie1[index] ? result : "_" } `, "") }
                    { d2Sides.reduce((prev, result, index) => `${ prev } ${ seenDie2[index] ? result : "_" } `, "") }
                </ListItem>
                { pastResults.map(([v, results], index) => <ListItem key={ index } css={ ITEM_STYLES[v] }>{ results.reduce((prev, result) => `${ prev } ${ result } `, "") }</ListItem>) }
            </ul>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
