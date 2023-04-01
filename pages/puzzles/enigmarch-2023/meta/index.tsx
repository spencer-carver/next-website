import React, { FunctionComponent, useEffect, useState } from "react";
import Image from "../../../../components/Image";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import useStorage from "../../../../utils/useStorage";

const SRC = "/puzzles/enigmarch-2023/map.png";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const ImageWrapperDiv = styled("div", {
    position: "relative",
    width: "300px",
    height: "166px",
    margin: "0 auto",
    "@sm": {
        width: "360px",
        height: "199px",
        marginLeft: "-30px"
    },
    "@md": {
        width: "500px",
        height: "276px",
        marginLeft: "-100px"
    },
    "@lg": {
        width: "760px",
        height: "420px",
        marginLeft: "auto"
    },
    "@xl": {
        width: "1000px",
        height: "552px",
        marginLeft: "-100px"
    }
});

const Table = styled("table", {
    margin: "20px auto",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    "@lg": {
        marginLeft: "-12px"
    }
});

const Datum = styled("td", {
    fontSize: "8px",
    width: "10px",
    height: "10px",
    fontWeight: "bold",
    color: "$onBackground",
    "@lg": {
        fontSize: "16px",
        width: "30px",
        height: "30px",
    }
});


const REMAPPING = [
    3, 6, 8, 11, 25, 2,
    13, 24, 15, 16, 28, 9,
    14, 26, 23, 5, 31, 19,
    21, 17, 30, 29, 12, 10,
    27, 22, 20, 1, 4, 7,
    18
];

const OFFSETS = [
    13, 15, 8, 13, 14, 14,
    8, 15, 12, 0, 11, 12,
    11, 7, 9, 9, 11, 8,
    9, 12, 15, 15, 15, 15,
    12, 12, 11, 11, 13, 8,
    11
];

const PuzzleComponent: FunctionComponent = () => {
    const storage = useStorage("puzzle");
    const [roundAnswers, setRoundAnswers] = useState(Array(31));

    useEffect(() => {
        try {
            const solvedRoundAnswers = Array(31);

            for (let i = 0; i < 31; ++i) {
                solvedRoundAnswers[REMAPPING[i] - 1] = storage.getItem<string>(`enigmarch-2023:march-${ i + 1 }`);
            }

            setRoundAnswers(solvedRoundAnswers);
        } catch (e) {
            //do nothing
        }
    }, [storage]);

    return (
        <PuzzleWrapperComponent name="enigmarch-2023:meta">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to read the image clearly!!!" }</WarningDiv>
            <ImageWrapperDiv>
                <Image src={ SRC } alt="A map of the original flavors" layout="fill" />
            </ImageWrapperDiv>
            <Table>
                <tbody>
                    { roundAnswers.map((rowAnswer: string = "", rowIndex: number) => {
                        const letters = rowAnswer.split("");

                        return (
                            <tr key={ rowIndex }>
                                { (new Array(33)).fill(undefined).map((_, index) =>{
                                    if (index < OFFSETS[rowIndex] || index >= OFFSETS[rowIndex] + letters.length) {
                                        return <Datum key={ `row-${ rowIndex }:cell-${ index }` } css={ index === 17 ? { border: "1px solid $onBackground" } : {} } />;
                                    }

                                    return (
                                        <Datum key={ `row-${ rowIndex }:cell-${ index }` } css={ index === 17 ? { border: "1px solid $onBackground" } : {} }>
                                            { letters[index - OFFSETS[rowIndex]] }
                                        </Datum>
                                    );
                                }) }
                            </tr>
                        );
                    } ) }
                </tbody>
            </Table>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
