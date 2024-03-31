import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";
import { CSS } from "@stitches/react";
import Link from "../../../../components/Link";

const Table = styled("table", {
    margin: "0 auto",
    borderCollapse: "collapse",
    borderSpacing: "0px"
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
    marginBottom: "5px",
    maxWidth: "300px"
});

const Span = styled("span", {
    color: "$onBackground"
});

const Divider = styled("div", {
    marginTop: "30px",
    borderBottom: "1px solid $onBackground"
});

const LINK_0 = "https://crosshare.org/crosswords/hFgRufbAgYIcyEaDaBHD/sequel-0";
const BOARD_0 = [
    [ "1", "2", "3", "4", "5" ],
    [ "6", " ", " ", " ", " " ],
    [ "7", " ", " ", " ", " " ],
    [ "8", " ", " ", " ", " " ],
    [ "9", " ", " ", " ", " " ],
];
const PORTALS_0 = {
    "0,0": { borderTop: "4px solid orange" },
    "1,4": { borderRight: "4px solid orange" }
};
const CLUES_0 = [
    [
        "1. Creative thoughts",
        "6. GLaDOS' ultimate feelings towards Chell",
        "7. At the present time",
        "8. Related on the mother's side",
        "9. Ward off"
    ],
    [
        "2. Lorna of shortbread cookies",
        "3. Finish by",
        // eslint-disable-next-line quotes
        `4. "... _____ worse than death"`,
        "5. More sneaky"
    ]
];

const LINK_1 = "https://crosshare.org/crosswords/NrzeMuZVz5TpGcgmvsNr/sequel-1";
const BOARD_1 = [
    [ "1", "2", "█", "3", " " ],
    [ "4", " ", " ", " ", " " ],
    [ "5", " ", " ", " ", " " ],
    [ "6", " ", " ", " ", " " ],
    [ "7", " ", " ", " ", " " ],
];
const PORTALS_1 = {
    "0,4": { borderTop: "4px solid orange", borderRight: "4px solid orange" },
    "1,2": { borderTop: "4px solid royalblue" },
    "4,4": { borderBottom: "4px solid royalblue" }
};
const CLUES_1 = [
    [
        "1. Central air",
        "3. Atlas and P-body's testing initiative",
        "4. Stopped slouching",
        "5. Cliched",
        "6. Generic dog name",
        "7. Amazon Assistant"
    ],
    [
        "1. Stars (latin)",
        "2. Seasonal song",
        "3. Big name in nail care"
    ]
];

const LINK_2 = "https://crosshare.org/crosswords/LgxnJxn5xJVR0yjEC2GW/sequel-2";
const BOARD_2 = [
    [ "1", "█", " ", " ", "2" ],
    [ "3", "4", " ", " ", " " ],
    [ "5", " ", " ", " ", " " ],
    [ " ", "█", "6", " ", " " ],
    [ "7", " ", " ", " ", " " ],
];
const PORTALS_2 = {
    "0,2": { borderTop: "4px solid royalblue" },
    "0,3": { borderTop: "4px solid orange" },
    "1,4": { borderRight: "4px solid orange" },
    "4,3": { borderBottom: "4px solid royalblue" }
};
const CLUES_2 = [
    [
        "3. They do what they must because they can",
        "5. Cruise ship",
        "6. Fort Collins campus, for short",
        "7. Choose"
    ],
    [
        "1. Creator of Portal",
        "2. Pompous gait",
        "4. The ratio of a circle's circumference to it's diameter"
    ]
];

const LINK_3 = "https://crosshare.org/crosswords/I7reXThOFy6UJejWB24w/sequel-3";
const BOARD_3 = [
    [ " ", "1", "2", " ", "3" ],
    [ "█", "4", " ", "█", " " ],
    [ "5", " ", " ", "6", " " ],
    [ "7", " ", " ", " ", " " ],
    [ "8", " ", " ", "█", " " ],
];
const PORTALS_3 = {
    "0,0": { borderLeft: "4px solid orange" },
    "0,4": { borderRight: "4px solid royalblue" },
    "2,0": { borderTop: "4px solid royalblue" },
    "4,4": { borderBottom: "4px solid orange" }
};
const CLUES_3 = [
    [
        "4. Else",
        "5. Relieve of a weapon",
        "7. Arm muscle",
        "8. Command level (abbr.)"
    ],
    [
        "1. Greek column style",
        "2. Spinachy plant",
        // eslint-disable-next-line quotes
        `3. "[It] will never threaten to stab you and, in fact, cannot speak."`,
        "6. Regarding"
    ]
];

const LINK_4 = "https://crosshare.org/crosswords/UEtWQvqmaC6BLErMcSjl/sequel-4";
const BOARD_4 = [
    [ "█", "█", " ", " ", "1" ],
    [ "2", " ", "█", "█", " " ],
    [ "3", " ", "4", "5", " " ],
    [ "6", " ", " ", " ", " " ],
    [ "7", " ", " ", " ", " " ],
];
const PORTALS_4 = {
    "0,2": { borderLeft: "4px solid orange" },
    "0,4": { borderRight: "4px solid royalblue" },
    "1,0": { borderLeft: "4px solid royalblue" },
    "1,1": { borderTop: "4px solid lawngreen", borderRight: "4px solid lawngreen" },
    "3,4": { borderRight: "4px solid orange" }
};
const CLUES_4 = [
    [
        "3. Anxious feeling",
        "6. Aperture's first attempt at a dietetic pudding substitute, made frome a slightly less non-toxic form of fiberglass insulation",
        "7. Messy types"
    ],
    [
        "1. Racetrack shapes",
        "2. Rowboat needs",
        "4. Wall St. debut",
        "5. Place for a bath"
    ]
];

const MiniCrossword = ({ crossword, clues, portals, link }) => {
    return (
        <div style={{ marginTop: "30px" }}>
            <Table role="grid">
                <tbody>
                    {crossword.map((row, rowIndex) => {
                        return (
                            <tr key={ `row-${ rowIndex }` }>
                                {row.map((value, cellIndex) => (
                                    <Cell
                                        key={ `cell-${ rowIndex }-${ cellIndex }` }
                                        css={ value === "█" ? blockedStyle : ( portals[`${ rowIndex },${ cellIndex }`] || {} ) }
                                    >
                                        &nbsp;{value}
                                    </Cell>)
                                )}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <Bank>
                <Group>
                    <ListItem css={{ fontWeight: "bold" }}>ACROSS</ListItem>
                    { clues[0].map((clue, index) => <ListItem key={ `a-${ index }` }>{ clue }</ListItem>) }
                </Group>
                <Group>
                    <ListItem css={{ fontWeight: "bold" }}>DOWN</ListItem>
                    { clues[1].map((clue, index) => <ListItem key={ `d-${ index }` }>{ clue }</ListItem>) }
                </Group>
            </Bank>
            <Span>An easier-to-interact with version of this mini-crossword is available <Link href={ link }>here</Link>.</Span>
        </div>
    );
};

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2024:march-31">
            <MiniCrossword crossword={ BOARD_1 } clues={ CLUES_1 } portals={ PORTALS_1 } link={ LINK_1 } />
            <Divider />
            <MiniCrossword crossword={ BOARD_3 } clues={ CLUES_3 } portals={ PORTALS_3 } link={ LINK_3 } />
            <Divider />
            <MiniCrossword crossword={ BOARD_2 } clues={ CLUES_2 } portals={ PORTALS_2 } link={ LINK_2 } />
            <Divider />
            <MiniCrossword crossword={ BOARD_4 } clues={ CLUES_4 } portals={ PORTALS_4 } link={ LINK_4 } />
            <Divider />
            <MiniCrossword crossword={ BOARD_0 } clues={ CLUES_0 } portals={ PORTALS_0 } link={ LINK_0 } />
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
