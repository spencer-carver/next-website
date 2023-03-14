import React, { FunctionComponent, useCallback, useMemo, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

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
    marginTop: "-10px",
    fontSize: "48px",
    "@lg": {
        marginTop: "-17px",
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
                    <Dot css={{ transform: "rotateX(180deg)", marginTop: "10px" }}>{ sides[5] }</Dot>
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

const enum GAME_STATES {
    WAITING = "WAITING",
    IN_PROGRESS = "IN_PROGRESS",
    NICK = "NICKED",
    OUT = "THREW OUT",
    WIN = "WIN",
    LOSE = "LOSE"
}

function calculateGameState(main, chance, roll, setChance, setLossStreak) {
    if (chance) {
        if (main === roll) {
            setChance(0);
            setLossStreak(ls => ls+1);

            return GAME_STATES.LOSE;
        }

        if (chance === roll) {
            setChance(0);
            setLossStreak(0);

            return GAME_STATES.WIN;
        }

        return GAME_STATES.IN_PROGRESS;
    }

    if (roll === 2 || roll === 3) {
        setLossStreak(ls => ls+1);

        return GAME_STATES.OUT;
    }

    switch(main) {
        case 5:
        case 9:
            if (roll === main) {
                setLossStreak(0);

                return GAME_STATES.NICK;
            }
            if (roll === 11 || roll === 12) {
                setLossStreak(ls => ls+1);

                return GAME_STATES.OUT;
            }

            setChance(roll);

            return GAME_STATES.IN_PROGRESS;
        case 6:
        case 8:
            if (roll === main || roll === 12) {
                setLossStreak(0);

                return GAME_STATES.NICK;
            }
            if (roll === 11) {
                setLossStreak(ls => ls+1);

                return GAME_STATES.OUT;
            }

            setChance(roll);

            return GAME_STATES.IN_PROGRESS;
        case 7:
            if (roll === main || roll === 11) {
                setLossStreak(0);

                return GAME_STATES.NICK;
            }
            if (roll === 12) {
                setLossStreak(ls => ls+1);

                return GAME_STATES.OUT;
            }

            setChance(roll);

            return GAME_STATES.IN_PROGRESS;
    }
}

const FULL_BOARD = [
    ["F","-","I","N","D","E","M"],
    ["O","J","-","I","C","L","D"],
    ["R","S","H","-","O","R","T"],
    ["N","A","M","E","-","O","V"],
    ["E","R","L","A","P","-","S"]
];

function updateRecord(wins, gameState, main, chance) {
    if (gameState === GAME_STATES.NICK) {
        // unlock the next in this main's row
        for (let i = 0; i < wins[main - 5].length; ++i) {
            if (!wins[main - 5][i]) {
                wins[main - 5][i] = FULL_BOARD[main - 5][i];

                return wins;
            }
        }
    }

    if (gameState === GAME_STATES.WIN && !wins[main - 5][chance - 4]) {
        // unlock the specified cell
        wins[main - 5][chance - 4] = FULL_BOARD[main - 5][chance - 4];

        return wins;
    }

    if (gameState === GAME_STATES.OUT) {
        // invalidate the next in this main's row
        for (let i = 0; i < wins[main - 5].length; ++i) {
            if (!wins[main - 5][i]) {
                wins[main - 5][i] = "❌";

                return wins;
            }
        }
    }

    if (gameState === GAME_STATES.LOSE && !wins[main - 5][chance - 4]) {
        // invalidate the specified cell
        wins[main - 5][chance - 4] = "❌";

        return wins;
    }

    return wins;
}

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

const MainDiv = styled("div", {
    margin: "10px 0",
    height: "20px"
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

const MainSelect = styled("select", {
    width: "100px"
});

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    color: "$onBackground"
});

const Datum = styled("td", {
    width: "24px",
    height: "24px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    "@lg": {
        width: "50px",
        height: "50px",
        fontSize: "30px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    const [main, setMain] = useState(5);
    const [chance, setChance] = useState(0);
    const [lossStreak, setLossStreak] = useState(0);
    const [gameState, setGameState] = useState(GAME_STATES.WAITING);
    const [dieOneResults, setDieOneResults] = useState({x:0,y:0,z:0});
    const [dieTwoResults, setDieTwoResults] = useState({x:0,y:0,z:0});
    const [wins, setWins] = useState<string[][]>([
        ["","-","","","","",""],
        ["","","-","","","",""],
        ["","","","-","","",""],
        ["","","","","-","",""],
        ["","","","","","-",""]
    ]);

    const d1Sides = useMemo(() => ["🧇", "🦞", "☄️", "🌕", "🐭", "🤞"], []);
    const d2Sides = useMemo(() => ["⚠️", "🖨️", "🎲", "☎️", "⛰️", "👓"], []);

    const rollDice = useCallback(() => {
        const d1 = roll();
        const d2 = roll();

        setDieOneResults(d1);
        setDieTwoResults(d2);
        const state = calculateGameState(main, chance, d1.roll + d2.roll, setChance, setLossStreak);
        setWins(wins => updateRecord(wins, state, main, chance));
        setGameState(state);
    }, [main, chance]);

    const reset = useCallback(() => {
        setWins([
            ["","-","","","","",""],
            ["","","-","","","",""],
            ["","","","-","","",""],
            ["","","","","-","",""],
            ["","","","","","-",""]
        ]);
        setLossStreak(0);
        setGameState(GAME_STATES.WAITING);
    }, []);

    const selectMain = useCallback(({ target: { value } }) => setMain(parseInt(value)), []);

    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-10">
            <GameBoard>
                <Die { ...dieOneResults } sides={ d1Sides } />
                <Die { ...dieTwoResults } sides={ d2Sides } />
                { lossStreak === 3 && <StrikeOut>Three losses in a row means you lose caster position. Restart to try again!</StrikeOut> }
            </GameBoard>
            <Controls>
                <MainDiv>
                    <span>Choose a main: </span>
                    <MainSelect onChange={ selectMain } value={ main } disabled={ gameState === GAME_STATES.IN_PROGRESS }>
                        { [5,6,7,8,9].map((value) => <option key={ value } value={ value }>{ value }</option>) }
                    </MainSelect>
                </MainDiv>
                <MainDiv>
                    { !!chance ? <div>Your chance is: { chance }</div> : <div /> }
                    { gameState !== GAME_STATES.WAITING && gameState !== GAME_STATES.IN_PROGRESS
                        ? <div>YOU { gameState }</div>
                        : <div />
                    }
                </MainDiv>
                <Button onClick={ rollDice } disabled={ lossStreak === 3 }>roll</Button>
                <Button onClick={ reset }>restart</Button>
            </Controls>
            <Table>
                    <thead>
                        <tr><Datum css={{ borderTop: "1px solid transparent", borderLeft: "1px solid transparent" }}></Datum><Datum>4</Datum><Datum>5</Datum><Datum>6</Datum><Datum>7</Datum><Datum>8</Datum><Datum>9</Datum><Datum>10</Datum></tr>
                    </thead>
                    <tbody>
                        <tr><Datum>5</Datum>{ wins[0].map((cellValue, index) => <Datum key={ index }>{ cellValue }</Datum>) }</tr>
                        <tr><Datum>6</Datum>{ wins[1].map((cellValue, index) => <Datum key={ index }>{ cellValue }</Datum>) }</tr>
                        <tr><Datum>7</Datum>{ wins[2].map((cellValue, index) => <Datum key={ index }>{ cellValue }</Datum>) }</tr>
                        <tr><Datum>8</Datum>{ wins[3].map((cellValue, index) => <Datum key={ index }>{ cellValue }</Datum>) }</tr>
                        <tr><Datum>9</Datum>{ wins[4].map((cellValue, index) => <Datum key={ index }>{ cellValue }</Datum>) }</tr>
                    </tbody>
                </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
