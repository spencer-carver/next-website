import React, { FunctionComponent, useEffect, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { CSS } from "@stitches/react";
import { styled } from "../../../../styles/stitches";
import { PuzzleRounds } from "../../../../constants/Puzzle";

const TITLE = "Six Elements";
const DESCRIPTION = "Multiple battles against the Bohrok are underway, but where is the leader of the Toa? Hopefully you can find the right time to ASCII him.";
const NAME = "alchemy:six-elements";

const WrapperDiv = styled("div", {
    position: "relative",
    color: "$onBackground",
    marginBottom: "20px"
});

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
});

const Datum = styled("td", {
    width: "16px",
    height: "16px",
    border: "1px solid $onBackground",
    "@lg": {
        width: "36px",
        height: "36px",
        fontSize: "24px"
    }
});

const LongDatum = styled("td", {
    width: "32px",
    height: "16px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: "5px",
    "@lg": {
        width: "140px",
        height: "42px",
        fontSize: "30px"
    }
});

const TallDatum = styled("td", {
    width: "16px",
    height: "32px",
    border: "1px solid $onBackground",
    fontWeight: "bold",
    textTransform: "",
    "@lg": {
        width: "42px",
        height: "126px",
        fontSize: "30px"
    }
});

const RotatedText = styled("span", {
    writingMode: "vertical-lr",
    transform: "rotate(180deg)",
    height: "126px",
    textAlign: "left"
});

const HIDE = "1px solid transparent";
const BOLD = "3px solid $onBackground";

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent title={ TITLE } description={ DESCRIPTION } name={ NAME } round={ PuzzleRounds.ALCHEMY }>
            <WrapperDiv>
                <Table>
                    <tbody>
                        <tr><Datum css={{ borderTop: HIDE, borderLeft: HIDE, borderBottom: HIDE }}>4</Datum><Datum /><Datum /><Datum /><Datum /><Datum css={{ borderTop: HIDE, borderRight: HIDE }} /></tr>
                        <tr><Datum css={{ border: HIDE }}>2</Datum><Datum css={{ borderBottom: HIDE }} /><Datum /><Datum /><Datum /><Datum /></tr>
                        <tr><Datum css={{ border: HIDE }}>3</Datum><Datum css={{ borderTop: HIDE }} /><Datum /><Datum /><Datum /><Datum /></tr>
                        <tr><Datum css={{ borderLeft: HIDE, borderBottom: HIDE }}>6</Datum><Datum /><Datum /><Datum /><Datum /><Datum /></tr>
                        <tr><Datum css={{ borderLeft: HIDE, borderBottom: HIDE }}>5</Datum><Datum /><Datum /><Datum /><Datum /><Datum /></tr>
                        <tr><Datum css={{ borderLeft: HIDE, borderBottom: HIDE }}>1</Datum><Datum /><Datum /><Datum /><Datum /><Datum css={{ borderRight: HIDE, borderBottom: HIDE }} /></tr>
                    </tbody>
                </Table>
            </WrapperDiv>
            <WrapperDiv>
                <Table>
                    <tbody>
                        <tr>
                            <Datum css={{ border: HIDE }} /><LongDatum css={{ borderLeft: HIDE, borderTop: HIDE, borderBottom: HIDE }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }}>Toa</Datum><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }}><span style={{ position: "absolute", top: "8px", marginLeft: "-45px" }}>Location</span></Datum><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }}><span style={{ position: "absolute", top: "8px", marginLeft: "-20px" }}>Ally</span></Datum><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: HIDE }} /><Datum css={{ borderLeft: HIDE, borderTop: BOLD, borderRight: BOLD }} />
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
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD, borderRight: BOLD }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>200</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum css={{ borderRight: BOLD }} />
                        </tr>
                        <tr>
                        <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>300</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum css={{ borderRight: BOLD }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>400</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum css={{ borderRight: BOLD }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>500</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum css={{ borderRight: BOLD }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderTop: BOLD, borderLeft: BOLD }}>Norik</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} />
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} />
                            <Datum css={{ border: HIDE, borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Iruini</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Gaaki</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Kualus</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Pouks</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderTop: BOLD, borderLeft: BOLD }}>Mata Nui</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} /><Datum css={{ borderTop: BOLD }} />
                            <Datum css={{ border: HIDE, borderLeft: BOLD, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} /><Datum css={{ border: HIDE, borderTop: BOLD }} />
                            <Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Karzahni</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                            <Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Xia</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                            <Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                        <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: HIDE }} /><LongDatum css={{ borderLeft: BOLD }}>Destral</LongDatum>
                            <Datum css={{ borderLeft: BOLD }} /><Datum /><Datum /><Datum /><Datum />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                            <Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                       <tr>
                            <Datum css={{ borderLeft: BOLD, borderBottom: BOLD }} /><LongDatum css={{ borderLeft: BOLD, borderBottom: BOLD }}>Artakha</LongDatum>
                            <Datum css={{ borderLeft: BOLD, borderBottom: BOLD }} /><Datum css={{ borderBottom: BOLD }} /><Datum css={{ borderBottom: BOLD }} /><Datum css={{ borderBottom: BOLD }} /><Datum css={{ borderBottom: BOLD }} />
                            <Datum css={{ border: HIDE, borderLeft: BOLD }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                            <Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} /><Datum css={{ border: HIDE }} />
                        </tr>
                    </tbody>
                </Table>
            </WrapperDiv>
            <WrapperDiv css={{ textAlign: "left" }}>
                Clues:
                <ol>
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
