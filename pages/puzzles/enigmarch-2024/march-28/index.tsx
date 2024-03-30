import React, { FunctionComponent, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const BUTTON = styled("button", {
    width: "30px",
    height: "30px",
    marginRight: "5px",
    "&:hover": {
        cursor: "pointer"
    }
});

const IFRAME = styled("iframe", {
    marginTop: "30px",
    width: "300px",
    height: "300px",
    "@md": {
        width: "500px",
        height: "500px",
    },
    "@lg": {
        width: "700px",
        height: "500px",
    }
});

const P = styled("p", {
    color: "$onBackground"
});

const LINKS = [
    "https://noclip.website/#sms/bianco3;ShareData=Aa{HO9m8pA8&WNi9R|HkWeB]&Q-(soUW$$]9QWo@WirO9UVGGH9Wzf+97u^w=a",
    "https://noclip.website/#sms/ricco2;ShareData=AV)30Uu{m88y4Ap8]9&:WYd9u5/6iOUqyKz9HL[AWlL]/T-W~rUCe{4Ua1I2V[",
    "https://noclip.website/#sms/mamma1;ShareData=AX85;UE0CnS,|$lUha_|=/cKEQ5XZ+Uk5288j[(4W3Lg09py^1S/1;3UUrbyWq",
    "https://noclip.website/#sms/pinnaParco1;ShareData=AVmh|UhgIc8|E!c9m|Q6Wkj&=Q~yokUV?/18^0?HWK)ArUiPu&T425-UdU^E=a",
    "https://noclip.website/#sms/sirena1;ShareData=AH,3P9zf(BS1+KK8t9dm+jt0c5~+TYUgQ2RTp~+KWW,BSToww4Tchzo94AXU=a",
    "https://noclip.website/#sms/mare1;ShareData=AT~/:Uh+B@T442kUT6DtV]^_:RL2NnUWqe29W(|^WSMwT9M0LsUQSFWUcj0RWP",
    "https://noclip.website/#sms/monte0;ShareData=AD=u(Uk1+O8S^JZT|qNyWmas^6HMD=Unke6Tw!bg+;~&w9d5rS8q6ekUbAa2+d",
    "https://noclip.website/#sms/dolpic_ex0;ShareData=AOvbbUni}I8RUI18:;=?=lLR&Q?e=bUp6VH8|f{DV[72&T,|{WT,uVKUjT:)+^"
];

const PuzzleComponent: FunctionComponent = () => {
    const [selectedCoin, setSelectedCoin] = useState(0);

    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-28">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to interact with the level viewer and a browser capable of viewing it!!!" }</WarningDiv>
            <div style={{ marginTop: "30px" }}>
                { LINKS.map((_linkSrc, index) => <BUTTON key={ index } onClick={ () => setSelectedCoin(index) }>{ index + 1 }</BUTTON>) }
            </div>
            <IFRAME src={ LINKS[selectedCoin] } />
            <P>If the embedded viewer does not work, you can try the stand-alone page <a href={ LINKS[selectedCoin] } target="_blank" rel="noreferrer">here</a>.</P>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
