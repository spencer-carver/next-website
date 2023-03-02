import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const Svg = styled("svg", {
    width: "300px",
    height: "300px",
    "@lg": {
        width: "580px",
        height: "580px"
    }
});

const Group = styled("g", {
    fill: "$onBackground"
});

const BackgroundDiv = styled("div", {
    opacity: "0.2",
    margin: "0px auto",
    width: "264px",
    paddingLeft: "1px",
    paddingTop: "16px",
    "@lg": {
        width: "537px",
        paddingLeft: "16px",
        paddingTop: "19px"
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
    }
});

const Datum = styled("td", {
    width: "25px",
    height: "25px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    borderTop: "3px solid $onBackground",
    borderBottom: "3px solid $onBackground",
    fontWeight: "bold",
    "@lg": {
        width: "50px",
        height: "50px",
        fontSize: "30px"
    }
});

const Background: FunctionComponent = () => (
    <BackgroundDiv>
        <Svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="300.000000pt" height="300.000000pt" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet">
            <Group transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M1285 2983 c-123 -15 -327 -79 -455 -143 -276 -139 -531 -394 -670 -670 -46 -92 -101 -245 -126 -355 -27 -117 -27 -513 0 -630 69 -295 197 -528 410 -741 213 -213 445 -341 741 -410 117 -28 513 -28 630 0 296 69 528 197 741 410 213 213 341 445 410 741 28 117 28 513 0 630 -69 296 -197 528 -410 741 -181 180 -351 286 -585 364 -169 57 -257 69 -472 68 -101 -1 -197 -3 -214 -5z m525 -76 c284 -68 503 -189 705 -392 269 -268 408 -587 422 -965 6 -184 -15 -337 -71 -505 -138 -411 -471 -753 -876 -900 -224 -81 -490 -105 -719 -66 -311 53 -565 184 -786 406 -222 221 -353 475 -406 786 -18 104 -20 149 -16 279 14 378 153 697 422 965 216 217 470 350 772 405 154 28 403 22 553 -13z"/>
                <path d="M1290 2816 c-527 -93 -943 -469 -1075 -971 -38 -143 -48 -243 -42 -399 11 -264 78 -470 224 -689 190 -286 494 -489 843 -564 119 -25 401 -25 520 0 475 102 853 436 1004 888 48 145 61 231 61 419 0 131 -5 196 -18 260 -57 266 -179 492 -367 680 -185 185 -410 308 -670 365 -101 22 -380 29 -480 11z m465 -51 c518 -108 913 -508 1016 -1030 18 -93 18 -377 0 -470 -80 -404 -333 -737 -700 -922 -284 -143 -626 -171 -946 -78 -390 114 -719 433 -849 825 -255 771 248 1578 1050 1689 97 14 334 6 429 -14z"/>
                <path d="M1420 2340 c-185 -33 -330 -162 -374 -335 -41 -156 1 -321 111 -436 l57 -60 -42 -167 c-23 -92 -63 -245 -87 -340 -42 -161 -44 -175 -31 -206 30 -71 25 -70 446 -71 415 0 413 0 446 61 l19 34 -88 353 c-48 193 -87 355 -87 359 0 3 20 29 43 57 90 106 131 242 110 366 -33 192 -174 341 -360 380 -74 16 -96 17 -163 5z m215 -61 c157 -59 258 -192 272 -359 10 -119 -43 -258 -129 -335 l-36 -33 89 -354 c49 -194 89 -365 89 -380 0 -17 -7 -31 -19 -38 -23 -12 -779 -14 -797 -2 -29 19 -22 60 66 397 l91 347 -53 48 c-175 156 -184 444 -20 609 117 117 295 157 447 100z"/>
                <path d="M1414 2240 c-103 -21 -210 -104 -254 -195 -12 -25 -27 -75 -33 -111 -23 -134 45 -279 171 -364 l22 -15 -94 -355 c-51 -195 -91 -361 -88 -367 3 -10 85 -13 362 -13 198 0 361 4 364 8 3 5 -34 175 -82 378 l-87 370 46 45 c26 25 60 70 75 100 26 49 29 63 29 159 0 97 -2 110 -30 163 -73 145 -247 230 -401 197z m211 -73 c112 -57 178 -162 179 -282 1 -60 -4 -80 -32 -138 -22 -44 -50 -81 -83 -109 -27 -24 -49 -50 -49 -59 0 -8 38 -169 85 -356 47 -188 85 -345 85 -349 0 -5 -140 -8 -311 -6 -289 2 -311 4 -307 20 3 9 45 167 93 351 l89 334 -23 16 c-13 9 -46 36 -73 61 -181 163 -124 450 105 532 73 26 175 20 242 -15z"/>
            </Group>
        </Svg>
    </BackgroundDiv>
);

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-1">
            <div style={{ position: "relative", height: "60vh" }}>
                <Background />
                <Table>
                    <tbody>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>I</Datum><Datum>S</Datum><Datum>E</Datum><Datum>U</Datum><Datum>I</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>K</Datum><Datum>B</Datum><Datum>M</Datum><Datum>O</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>T</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>K</Datum><Datum>W</Datum><Datum>C</Datum><Datum>N</Datum><Datum>O</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>C</Datum><Datum>O</Datum><Datum>I</Datum><Datum>E</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>Z</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>S</Datum><Datum>K</Datum><Datum>T</Datum><Datum>E</Datum><Datum>S</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>V</Datum><Datum>E</Datum><Datum>F</Datum><Datum>D</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>U</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>H</Datum><Datum>Y</Datum><Datum>U</Datum><Datum>P</Datum><Datum>P</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>T</Datum><Datum>S</Datum><Datum>L</Datum><Datum>P</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>B</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>T</Datum><Datum>F</Datum><Datum>V</Datum><Datum>Q</Datum><Datum>M</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>Z</Datum><Datum>T</Datum><Datum>Y</Datum><Datum>E</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>N</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>M</Datum><Datum>I</Datum><Datum>H</Datum><Datum>F</Datum><Datum>I</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>S</Datum><Datum>S</Datum><Datum>A</Datum><Datum>K</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>H</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>H</Datum><Datum>X</Datum><Datum>E</Datum><Datum>F</Datum><Datum>M</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>W</Datum><Datum>L</Datum><Datum>U</Datum><Datum>S</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>N</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>A</Datum><Datum>X</Datum><Datum>Z</Datum><Datum>W</Datum><Datum>D</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>H</Datum><Datum>M</Datum><Datum>F</Datum><Datum>Y</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>S</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>A</Datum><Datum>G</Datum><Datum>P</Datum><Datum>N</Datum><Datum>S</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>M</Datum><Datum>I</Datum><Datum>Y</Datum><Datum>M</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>Y</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>A</Datum><Datum>A</Datum><Datum>J</Datum><Datum>A</Datum><Datum>C</Datum>
                            <Datum css={{ borderLeft: "3px solid $onBackground" }}>K</Datum><Datum>E</Datum><Datum>P</Datum><Datum>L</Datum><Datum css={{ borderRight: "3px solid $onBackground" }}>Y</Datum>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
