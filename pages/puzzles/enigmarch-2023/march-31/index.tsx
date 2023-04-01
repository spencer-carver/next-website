import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";
import Link from "../../../../components/Link";

const WarningDiv = styled("div", {
    margin: "10px 0",
    color: "$onError",
    backgroundColor: "$error",
    "@lg": {
        display: "none"
    }
});

const CROSSWORD = [
    [ "1", "2", "3", "", "4", "5", "█", "█", "6", "7", "8", "9", "", "", "█" ],
    [ "10", "", "", "█", "11", "", "12", "13", "", "", "", "", "█", "█", "14" ],
    [ "15", "", "", "16", "█", "17", "", "", "", "█", "18", "", "19", "20", "" ],
    [ "21", "", "", "", "█", "22", "", "", "", "", "", "", "", "", "" ],
    [ "23", "", "", "", "24", "", "", "█", "█", "█", "█", "█", "25", "", "" ],
    [ "", "█", "26", "", "", "", "", "", "", "█", "█", "█", "27", "", "█" ],
    [ "█", "28", "█", "29", "", "", "█", "█", "█", "█", "█", "█", "30", "", "31" ],
    [ "32", "", "33", "", "", "█", "█", "█", "█", "34", "35", "█", "36", "", "" ],
    [ "37", "", "", "", "█", "█", "█", "38", "39", "", "", "40", "", "█", "" ],
    [ "41", "", "", "█", "█", "█", "42", "", "", "", "", "", "", "43", "" ],
    [ "44", "", "", "█", "█", "█", "45", "", "", "█", "█", "█", "46", "", "" ],
    [ "47", "", "", "48", "49", "50", "", "", "", "█", "█", "█", "51", "", "" ],
    [ "", "█", "52", "", "", "", "", "", "█", "█", "█", "53", "", "", "" ],
    [ "54", "55", "", "█", "56", "", "█", "█", "█", "█", "57", "", "", "", "" ],
    [ "58", "", "", "█", "█", "█", "█", "█", "█", "59", "", "", "█", "", "█" ],
    [ "█", "60", "", "█", "█", "█", "61", "", "62", "", "", "", "63", "█", "64" ],
    [ "65", "", "", "█", "█", "█", "█", "█", "66", "", "", "", "", "67", "" ],
    [ "68", "", "", "69", "70", "", "71", "72", "", "", "█", "73", "", "", "" ],
    [ "74", "", "", "", "", "█", "75", "", "", "", "█", "76", "", "", "" ],
    [ "", "█", "█", "77", "", "78", "", "", "", "", "79", "█", "80", "", "" ],
    [ "█", "81", "", "", "", "", "", "█", "█", "82", "", "", "", "", "" ]
];

const EMPHASIS = [
    [0, 2], [0, 13], [1, 9], [2, 12], [3, 9], [4, 0], [7, 0], [7, 9], [9, 11], [11, 1], [12, 11], [13, 5],
    [15, 2], [15, 8], [15, 12], [17, 7], [18, 0], [18, 2], [18, 13], [19, 3], [19, 8]
]

const Table = styled("table", {
    margin: "0 0 0 -12px",
    borderCollapse: "collapse",
    borderSpacing: "0px",
    "@lg": {
        margin: "0 auto"
    }
});

const Cell = styled("td", {
    width: "22px",
    height: "22px",
    color: "$onBackground",
    border: "1px solid $onBackground",
    pointerEvents: "none",
    "@lg": {
        width: "40px",
        height: "40px",
        verticalAlign: "top",
        textAlign: "left"
    }
});

const blockedStyle: CSS = {
    backgroundColor: "$onBackground"
}

const emphasisStyle: CSS = {
    backgroundColor: "rgba(187,134,252,0.4)"
};

const Bank = styled("div", {
    display: "flex",
    flexDirection: "column",
    color: "$onBackground",
    justifyContent: "space-around",
    "@lg": {
        flexDirection: "row"
    }
});

const Group = styled("ul", {
    paddingInlineStart: "0"
});

const ListItem = styled("li", {
    listStyle: "none",
    textAlign: "left",
    marginBottom: "5px"
});

const Span = styled("span", {
    color: "$onBackground"
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-31">
            <WarningDiv>{ "\u00a1\u00a1\u00a1WARNING: This puzzle requires a device large enough to see the grid fully!!!" }</WarningDiv>
            <Table role="grid">
                <tbody>
                    { CROSSWORD.map((row, rowIndex) => {
                        return (
                            <tr key={ `row-${ rowIndex }` }>
                                { row.map((value, cellIndex) => (<Cell
                                    key={ `cell-${ rowIndex }-${ cellIndex }` }
                                    css={ value === "█"
                                        ? blockedStyle
                                        : (EMPHASIS.find((pair) => pair[0] === rowIndex && pair[1] === cellIndex) ? emphasisStyle : {}) }>
                                        &nbsp;{ value }
                                    </Cell>)
                                ) }
                            </tr>
                        );
                    }) }
                </tbody>
            </Table>
            <Bank>
                <Group>
                    <ListItem css={{ fontWeight: "bold" }}>ACROSS</ListItem>
                    <ListItem>10. Moody rock music</ListItem>
                    <ListItem>11. Deep blue opponent</ListItem>
                    <ListItem>15. Settles a bill</ListItem>
                    <ListItem>18. He&apos;s thinking he&apos;s back</ListItem>
                    <ListItem>21. A classic verdi opera</ListItem>
                    <ListItem>22. Blast-happy automaton</ListItem>
                    <ListItem>23. 1983 song about big cities</ListItem>
                    <ListItem>25. They&apos;ll soon be seniors (abbr.)</ListItem>
                    <ListItem>26. Backed down</ListItem>
                    <ListItem>27. TV famous talking horse</ListItem>
                    <ListItem>29. Musical act booking</ListItem>
                    <ListItem>30. Medevial Spanish hero</ListItem>
                    <ListItem>32. &quot;Did I do that?&quot;</ListItem>
                    <ListItem>34. Not off</ListItem>
                    <ListItem>36. C2HCl3</ListItem>
                    <ListItem>37. Local PC connections</ListItem>
                    <ListItem>41. Defunct airline</ListItem>
                    <ListItem>42. Concise style</ListItem>
                    <ListItem>44. Out of service (abbr.)</ListItem>
                    <ListItem>45. Featuring this puzzle&apos;s visual</ListItem>
                    <ListItem>46. Regret in a big way</ListItem>
                    <ListItem>47. Regional IDs</ListItem>
                    <ListItem>51. Alliterative basics</ListItem>
                    <ListItem>52. Italian port city</ListItem>
                    <ListItem>53. Maker of Dom Perignon</ListItem>
                    <ListItem>54. Take __, _ insist!</ListItem>
                    <ListItem>56. Potentially offensive emphasizing abbreviation</ListItem>
                    <ListItem>58. Prefix meaning &quot;hair&quot;</ListItem>
                    <ListItem>59. Juniper aeromatic</ListItem>
                    <ListItem>60. The reverse of 34 across</ListItem>
                    <ListItem>61. A basic choice</ListItem>
                    <ListItem>65. Common Soviet weapons</ListItem>
                    <ListItem>66. Attack with words</ListItem>
                    <ListItem>68. A quick-and-easy meal</ListItem>
                    <ListItem>73. Roman emperor and alleged fiddler</ListItem>
                    <ListItem>74. Some comments on Twitter</ListItem>
                    <ListItem>76. Not a dearth</ListItem>
                    <ListItem>80. Ideal tennis serve</ListItem>
                    <ListItem>81. Type of taxes</ListItem>
                </Group>
                <Group>
                    <ListItem css={{ fontWeight: "bold" }}>DOWN</ListItem>
                    <ListItem>2. Hopefully it&apos;s not spam</ListItem>
                    <ListItem>3. An Italian Greyhound or Papillon</ListItem>
                    <ListItem>4. 👌</ListItem>
                    <ListItem>5. Anchor&apos;s run</ListItem>
                    <ListItem>6. Tolled as a bell</ListItem>
                    <ListItem>7. Triage area</ListItem>
                    <ListItem>8. Politically discussed ideaology</ListItem>
                    <ListItem>9. Allege as fact</ListItem>
                    <ListItem>13. Romanian chicken</ListItem>
                    <ListItem>16. Uncivilized folk</ListItem>
                    <ListItem>19. Extreme fear</ListItem>
                    <ListItem>20. Skiing&apos;s alpine alternative</ListItem>
                    <ListItem>32. Cool, and then some</ListItem>
                    <ListItem>33. A premium place (according to the WSJ)</ListItem>
                    <ListItem>34. Approves informally</ListItem>
                    <ListItem>35. 22° 30&apos; clockwise from north</ListItem>
                    <ListItem>38. Vocative plural of &apos;kidney&apos;</ListItem>
                    <ListItem>39. Cupid counterpart</ListItem>
                    <ListItem>40. Not out</ListItem>
                    <ListItem>42. Informal shortening of an antagonistic manner</ListItem>
                    <ListItem>43. Definitely gonna</ListItem>
                    <ListItem>48. Non-defunct airline</ListItem>
                    <ListItem>49. Tax season pro</ListItem>
                    <ListItem>50. Unit of measuring pollution</ListItem>
                    <ListItem>53. Peyton or Eli</ListItem>
                    <ListItem>57. Strong and sinewy</ListItem>
                    <ListItem>59. Whiskered</ListItem>
                    <ListItem>62. Has a regionalized squat</ListItem>
                    <ListItem>63. Track&apos;s 400m</ListItem>
                    <ListItem>65. Disappearing sea in Asia</ListItem>
                    <ListItem>67. End to enmities</ListItem>
                    <ListItem>69. Sneeze trigger</ListItem>
                    <ListItem>70. Cold weather cryptid</ListItem>
                    <ListItem>71. Futbol game shouts</ListItem>
                    <ListItem>72. German ice</ListItem>
                    <ListItem>78. After do</ListItem>
                    <ListItem>79. UK princess</ListItem>
                </Group>
            </Bank>
            <Bank>
                <Group css={{ "@lg": { width: "100%" } }}>
                    <ListItem css={{ fontWeight: "bold" }}>BOTH</ListItem>
                    <ListItem>1A/64D. Reorganize, legally or as a criminal</ListItem>
                    <ListItem>6A/28D. Given for finding something lost, or perhaps holding something frequently lost</ListItem>
                    <ListItem>17A/14D. Become dazed, or perhaps the cause</ListItem>
                    <ListItem>38A/55D. Mend pots and scarves</ListItem>
                    <ListItem>57A/12D. A scarecrow of a witch has both!</ListItem>
                    <ListItem>75A/24D. A demon, or perhaps what they grant you</ListItem>
                    <ListItem>77A/31D. Strained puddings served up</ListItem>
                    <ListItem>82A/1D. May need a change or have some</ListItem>
                </Group>
            </Bank>
            <Span>An easier-to-interact with version of this puzzle is available <Link href="https://crosshare.org/crosswords/qCNwPyMr0HT4n5CLXcm4/reverse">here</Link>.</Span>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
