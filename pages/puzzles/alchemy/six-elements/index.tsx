import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { darkTheme, styled, yahooGeocitiesTheme } from "../../../../styles/stitches";
import Image from "../../../../components/Image";
import { PuzzleRounds } from "../../../../constants/Puzzle";

const WrapperDiv = styled("div", {
    position: "relative",
    color: "$onBackground",
    marginBottom: "20px"
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "288px",
    height: "320px",
    margin: "0 auto 20px",
    "&:last-of-type": {
        marginBottom: "0px"
    },
    "@md": {
        width: "389px",
        height: "432px"
    },
    [`.${ darkTheme } &`]: {
        filter: "invert(100%)"
    },
    [`.${ yahooGeocitiesTheme } &`]: {
        filter: "invert(74%) sepia(32%) saturate(7440%) hue-rotate(220deg) brightness(102%) contrast(98%)"
    }
});

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    width: "15px",
    height: "15px",
    fontSize: "8px",
    border: "1px solid $onBackground",
    "@lg": {
        width: "30px",
        height: "30px",
        fontSize: "24px"
    }
});

const LongDatum = styled("td", {
    width: "45px",
    height: "15px",
    fontSize: "8px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: "5px",
    "@lg": {
        width: "100px",
        height: "30px",
        fontSize: "24px"
    }
});

const TallDatum = styled("td", {
    width: "15px",
    height: "45px",
    fontSize: "8px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    textTransform: "",
    "@lg": {
        width: "30px",
        height: "100px",
        fontSize: "24px"
    }
});

const Span = styled("span", {});

const RotatedText = styled("span", {
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    height: "45px",
    textAlign: "left",
    "@lg": {
        height: "100px"
    }
});

const HIDE = "1px solid transparent";
const BOLD = "3px solid $onBackground";

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="alchemy:six-elements">
            <ImageWrapperDiv>
                <Image src="/puzzles/alchemy/six/final-grid.png" alt="A mysterious grid with arrows" layout="fill" />
            </ImageWrapperDiv>
            <WrapperDiv>
                <Table>
                    <tbody>
                        <tr>
                            <Datum css={{ border: HIDE }} /><LongDatum css={{ borderLeft: HIDE, borderTop: HIDE, borderBottom: HIDE }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }}><Span css={{ position: "absolute", top: "6px", marginLeft: "-6px", "@lg": { top: "4px", marginLeft: "-20px" } }}>Toa</Span></Datum><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }}><Span css={{ position: "absolute", top: "6px", marginLeft: "-15px", "@lg": { top: "4px", marginLeft: "-45px" } }}>Location</Span></Datum><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }}><Span css={{ position: "absolute", top: "6px", marginLeft: "-6px", "@lg": { top: "4px", marginLeft: "-20px" } }}>Ally</Span></Datum><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: BOLD }} />
                        </tr>
                        <tr>
                            <TallDatum css={{ border: HIDE }} /><LongDatum css={{ borderLeft: HIDE, borderTop: HIDE }} />
                            <TallDatum css={{ borderLeft: BOLD, borderTop: BOLD }}><RotatedText>Gali</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Onua</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Lewa</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Kopaka</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Pohatu</RotatedText></TallDatum>
                            <TallDatum css={{ borderLeft: BOLD, borderTop: BOLD }}><RotatedText>Mata Nui</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Karzahni</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Xia</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Destral</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Artakha</RotatedText></TallDatum>
                            <TallDatum css={{ borderLeft: BOLD, borderTop: BOLD }}><RotatedText>Norik</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Iruini</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Gaaki</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD }}><RotatedText>Kualus</RotatedText></TallDatum><TallDatum css={{ borderTop: BOLD, borderRight: BOLD }}><RotatedText>Pouks</RotatedText></TallDatum>
                        </tr>
                        <tr>
                            <Datum css={{ borderTop: BOLD, borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderTop: BOLD, borderLeft: BOLD }}>100</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }}>A</Datum><Datum css={{ borderTop: BOLD }}>G</Datum><Datum css={{ borderTop: BOLD }}>T</Datum><Datum css={{ borderTop: BOLD }}>D</Datum><Datum css={{ borderTop: BOLD }}>R</Datum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }}>J</Datum><Datum css={{ borderTop: BOLD }}>E</Datum><Datum css={{ borderTop: BOLD }}>N</Datum><Datum css={{ borderTop: BOLD }}>K</Datum><Datum css={{ borderTop: BOLD }}>Q</Datum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }}>B</Datum><Datum css={{ borderTop: BOLD }}>F</Datum><Datum css={{ borderTop: BOLD }}>S</Datum><Datum css={{ borderTop: BOLD }}>O</Datum><Datum css={{ borderTop: BOLD, borderRight: BOLD }}>V</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>200</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>C</Datum><Datum>I</Datum><Datum>O</Datum><Datum>N</Datum><Datum>P</Datum>
                            <Datum css={{ borderLeft: BOLD }}>U</Datum><Datum>B</Datum><Datum>R</Datum><Datum>S</Datum><Datum>C</Datum>
                            <Datum css={{ borderLeft: BOLD }}>M</Datum><Datum>D</Datum><Datum>U</Datum><Datum>I</Datum><Datum css={{ borderRight: BOLD }}>K</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE, position: "relative" }}><RotatedText css={{ position: "absolute", left: "-1px", bottom: "-13px", "@lg": { height: "120px", left: "0", bottom: "-48px" } }}>Swarm Size</RotatedText></Datum><LongDatum css={{ borderLeft: BOLD }}>300</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>F</Datum><Datum>E</Datum><Datum>L</Datum><Datum>U</Datum><Datum>M</Datum>
                            <Datum css={{ borderLeft: BOLD }}>M</Datum><Datum>W</Datum><Datum>I</Datum><Datum>Z</Datum><Datum>T</Datum>
                            <Datum css={{ borderLeft: BOLD }}>L</Datum><Datum>G</Datum><Datum>T</Datum><Datum>C</Datum><Datum css={{ borderRight: BOLD }}>N</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>400</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>K</Datum><Datum>W</Datum><Datum>B</Datum><Datum>Q</Datum><Datum>E</Datum>
                            <Datum css={{ borderLeft: BOLD }}>V</Datum><Datum>O</Datum><Datum>H</Datum><Datum>G</Datum><Datum>P</Datum>
                            <Datum css={{ borderLeft: BOLD }}>J</Datum><Datum>H</Datum><Datum>R</Datum><Datum>P</Datum><Datum css={{ borderRight: BOLD }}>W</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>500</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>Y</Datum><Datum>Z</Datum><Datum>N</Datum><Datum>H</Datum><Datum>J</Datum>
                            <Datum css={{ borderLeft: BOLD }}>A</Datum><Datum>D</Datum><Datum>F</Datum><Datum>Y</Datum><Datum>L</Datum>
                            <Datum css={{ borderLeft: BOLD, borderBottom: BOLD }}>A</Datum><Datum css={{ borderBottom: BOLD }}>Y</Datum><Datum css={{ borderBottom: BOLD }}>N</Datum><Datum css={{ borderBottom: BOLD }}>E</Datum><Datum css={{ borderRight: BOLD, borderBottom: BOLD }}>Q</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderTop: BOLD, borderLeft: BOLD }}>Norik</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }}>W</Datum><Datum css={{ borderTop: BOLD }}>P</Datum><Datum css={{ borderTop: BOLD }}>I</Datum><Datum css={{ borderTop: BOLD }}>E</Datum><Datum css={{ borderTop: BOLD }}>U</Datum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }}>F</Datum><Datum css={{ borderTop: BOLD }}>O</Datum><Datum css={{ borderTop: BOLD }}>C</Datum><Datum css={{ borderTop: BOLD }}>W</Datum><Datum css={{ borderTop: BOLD, borderRight: BOLD }}>G</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Iruini</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>L</Datum><Datum>S</Datum><Datum>A</Datum><Datum>T</Datum><Datum>K</Datum>
                            <Datum css={{ borderLeft: BOLD }}>S</Datum><Datum>D</Datum><Datum>N</Datum><Datum>P</Datum><Datum css={{ borderRight: BOLD }}>H</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE, position: "relative" }}><RotatedText css={{ position: "absolute", left: "-1px", bottom: "0", "@lg": { height: "120px", left: "0", bottom: "-5px" } }}>Ally</RotatedText></Datum><LongDatum css={{ borderLeft: BOLD }}>Gaaki</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>Y</Datum><Datum>R</Datum><Datum>D</Datum><Datum>N</Datum><Datum>F</Datum>
                            <Datum css={{ borderLeft: BOLD }}>Q</Datum><Datum>J</Datum><Datum>T</Datum><Datum>B</Datum><Datum css={{ borderRight: BOLD }}>L</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Kualus</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>Z</Datum><Datum>J</Datum><Datum>H</Datum><Datum>C</Datum><Datum>G</Datum>
                            <Datum css={{ borderLeft: BOLD }}>K</Datum><Datum>E</Datum><Datum>R</Datum><Datum>U</Datum><Datum css={{ borderRight: BOLD }}>S</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Pouks</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>B</Datum><Datum>V</Datum><Datum>Q</Datum><Datum>O</Datum><Datum>M</Datum>
                            <Datum css={{ borderLeft: BOLD, borderBottom: BOLD }}>I</Datum><Datum css={{ borderBottom: BOLD }}>A</Datum><Datum css={{ borderBottom: BOLD }}>M</Datum><Datum css={{ borderBottom: BOLD }}>T</Datum><Datum css={{ borderBottom: BOLD, borderRight: BOLD }}>E</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderTop: BOLD, borderLeft: BOLD }}>Mata Nui</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }}>Y</Datum><Datum css={{ borderTop: BOLD }}>G</Datum><Datum css={{ borderTop: BOLD }}>H</Datum><Datum css={{ borderTop: BOLD }}>U</Datum><Datum css={{ borderTop: BOLD, borderRight: BOLD }}>E</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Karzahni</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>V</Datum><Datum>F</Datum><Datum>D</Datum><Datum>T</Datum><Datum css={{ borderRight: BOLD }}>J</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE, position: "relative" }}><RotatedText css={{ position: "absolute", left: "-1px", bottom: "-7px", "@lg": { height: "120px", left: "0", bottom: "-30px" } }}>Location</RotatedText></Datum><LongDatum css={{ borderLeft: BOLD }}>Xia</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>K</Datum><Datum>S</Datum><Datum>O</Datum><Datum>P</Datum><Datum css={{ borderRight: BOLD }}>A</Datum>
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Destral</LongDatum>
                            <Datum css={{ borderLeft: BOLD }}>M</Datum><Datum>W</Datum><Datum>I</Datum><Datum>C</Datum><Datum css={{ borderRight: BOLD }}>Q</Datum>
                        </tr>
                       <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: BOLD }} /><LongDatum css={{ borderLeft: BOLD, borderBottom: BOLD }}>Artakha</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderBottom: BOLD }}>B</Datum><Datum css={{ borderBottom: BOLD }}>N</Datum><Datum css={{ borderBottom: BOLD }}>L</Datum><Datum css={{ borderBottom: BOLD }}>R</Datum><Datum css={{ borderBottom: BOLD, borderRight: BOLD }}>Z</Datum>
                        </tr>
                    </tbody>
                </Table>
            </WrapperDiv>
            <WrapperDiv css={{ textAlign: "left", margin: "0 20px" }}>
                Clues:
                <ol style={{ paddingInlineStart: "16px" }}>
                    <li>The battle involving Kualus had a smaller swarm than the one involving Gali</li>
                    <li>The battle involving Gali did not occur on Xia</li>
                    <li>The battle involving Lewa was either against the swarm of 100, or alongside Norik</li>
                    <li>Lewa fought on Destral</li>
                    <li>The battle involving Onua was against a swarm 100 smaller than the one fought by Pouks</li>
                    <li>A swarm of 400 invaded Mata Nui</li>
                    <li>Between Kopaka and Gali, one was on Karzahni and the other fought a swarm of 300</li>
                    <li>The battle involving Gaaki was against a swarm 300 smaller than the one which attacked Destral</li>
                </ol>
            </WrapperDiv>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
