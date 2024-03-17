import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import Notification from "../../../../components/Notification";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground",
    margin: "0",
    display: "block",
    marginBottom: "5px",
    paddingLeft: "5px",
    textAlign: "left"
});

const Game = styled("div", {
    height: "50vh",
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative",
    border: "1px solid $onBackground",
    display: "flex",
    flexDirection: "column-reverse"
});

const History = styled("div", {

});

const Input = styled("input", {
    position: "relative",
    bottom: "0",
    width: "100%"
});

const InventorySpan = styled("span", {
    position: "absolute",
    bottom: "1px",
    right: "0px",
    backgroundColor: "$primary",
    color: "$onPrimary",
    width: "100px",
    "@lg": {
        bottom: "25px",
        right: "5px",
        borderRadius: "25px"
    }
});

const POSITIONS = [
    "NW",
    "N",
    "NE",
    "W",
    "C",
    "E",
    "SW",
    "S",
    "SE"
];

const DIRECTIONS = {
    "NW": -4,
    "N": -3,
    "NE": -2,
    "W": -1,
    "E": 1,
    "SW": 2,
    "S": 3,
    "SE": 4
};

const STEP_TRANSITION_MESSAGES = [
    ["You hear a small clink."],
    ["A small popping sound eminates from near your feet."],
    ["You hear a grinding sound on opposite sides of the room."],
    ["You hear the sound of something shifting in all corners of the room."],
    ["The east lever has partially reset itself."],
    ["You hear buzzing fill the room and a thump in front of you."],
    ["You once again hear the clinking of a key, but the ceiling starts to collapse!"]
];

const MOVING_OBJECTS = {
    "mysterious button": [1,2,5,4,8,4,3,6,0,1],
    "west lever": [3,1,6,6],
    "east lever": [5,8,5,8]
};

function getNextPosition(position: number, directionToMove: string) {
    return position + DIRECTIONS[directionToMove];
}

function advanceGameState(
    usedItem: FlagState,
    locationKey: string,
    state: Record<string, FlagState>[],
    setState: (newState: Record<string, FlagState>[]) => void,
    victoryFlags: Record<string, boolean>[],
    setVictoryFlags: (newVictoryFlags: Record<string, boolean>[]) => void,
    currentStep: number,
    setCurrentStep: (nextStep: number) => void
): string[] {
    const newVictoryFlags = victoryFlags.map((stepFlags, index) => {
        if (currentStep === index) {
            return {
                ...stepFlags,
                [usedItem.name]: usedItem.used === usedItem.uses,
                ...(stepFlags[locationKey] === false && usedItem.name !== locationKey ? { [locationKey]: true } : {})
            };
        }

        return stepFlags;
    });

    if (Object.keys(newVictoryFlags[currentStep]).find((key) => newVictoryFlags[currentStep][key] === false)) {
        setVictoryFlags(newVictoryFlags);

        const itemMovement = MOVING_OBJECTS[usedItem.name];

        if (!itemMovement) {
            setState(state);

            return [];
        }

        const nextPosition = itemMovement[usedItem.used];

        const nextState = state.map((room) => {
            return Object.keys(room).reduce((newRoom, roomKey) => {
                if (roomKey === usedItem.name) {
                    return newRoom;
                }
    
                return {
                    ...newRoom,
                    [roomKey]: room[roomKey]
                }
            }, {});
        });

        const done = usedItem.uses === usedItem.used;

        nextState[nextPosition][usedItem.name] = {
            ...usedItem,
            interactable: !done
        };

        setState(nextState);

        return [`The ${ usedItem.name } ${ done ? "is ready" : "has moved" }!`];
    }

    // all flags for this step have been set
    const nextStep = currentStep + 1;

    if (nextStep === victoryFlags.length) {
        // win

        setCurrentStep(nextStep);

        return [
            "As the door unlocks, some light filters in and you can see a second door with a letter-lock.",
            "Alongside it reads the following message:",
            "In order to escape you must trace your steps in the most efficent manner."
        ];
    }

    // move to next step
    const nextStepKeys = Object.keys(victoryFlags[nextStep]);
    const nextState = state.map((room) => {
        return Object.keys(room).reduce((newRoom, roomKey) => {
            if (nextStep === 5 && roomKey === "east lever") {
                newRoom[roomKey] = {
                    ...room[roomKey],
                    used: 1,
                    interactable: true
                };
            } else if (nextStepKeys.includes(roomKey)) {
                newRoom[roomKey] = {
                    ...room[roomKey],
                    unlocked: true
                };
            } else if (roomKey !== usedItem.name) {
                newRoom[roomKey] = room[roomKey];
            }

            return newRoom;
        }, {});
    });

    setState(nextState);
    setCurrentStep(nextStep);
    setVictoryFlags(newVictoryFlags);

    return STEP_TRANSITION_MESSAGES[currentStep];
}

function replacementItem(item: FlagState, interactKey: string): FlagState | null {
    if (item.name === "jar" && interactKey === "dripping water") {
        return {
            name: "filled jar",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "heavy",
            unlocked: true,
            uses: 1,
            used: 0,
            usedTerm: "seal"
        };
    }

    if (item.name === "filled jar" && interactKey === "lid") {
        return {
            name: "sealed jar",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "airtight",
            unlocked: true,
            uses: 1,
            used: 0,
            usedTerm: "place"
        };
    }

    if (item.name === "orb (3/4)" && interactKey.includes("conduit")) {
        return {
            name: "charged orb",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "crackling with energy",
            unlocked: true,
            uses: item.uses + 1,
            used: item.uses,
            usedTerm: "insert"
        };
    }

    if (item.name === "charged orb") {
        return null;
    }

    if (item.name.includes("orb") && interactKey.includes("conduit")) {
        return {
            name: `orb (${ item.uses }/4)`,
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "gaining power",
            unlocked: true,
            uses: item.uses + 1,
            used: item.uses,
            usedTerm: "charge"
        };
    }

    return null;
}

function parseCommand(
    command: string,
    position: number,
    setPosition: (newPosition: number) => void,
    inventory: FlagState | null,
    setInventory: (newInventory: FlagState | null) => void,
    state: Record<string, FlagState>[],
    setState: (newState: Record<string, FlagState>[]) => void,
    victoryFlags: Record<string, boolean>[],
    setVictoryFlags: (newVictoryFlags: Record<string, boolean>[]) => void,
    currentStep: number,
    setCurrentStep: (nextStep: number) => void
): string[] {
    const trimmedCommand = command.trim();

    if (trimmedCommand === "HELP") {
        return [
            "type 'FEEL' to discover what is at your location",
            "type 'MOVE <DIRECTION>' to move that direction.",
            "type 'TAKE <ITEM>' to pick up an item. Not specifying an item name will grab the first eligible item",
            "type 'USE' to use your held item, put it down, or interact with the environment (if allowed)"
        ];
    }

    if (trimmedCommand === "FEEL") {
        return Object.keys(state[position]).map(((flag) => {
            const {
                flagPrefix,
                valuePrefix,
                unlocked,
                value,
                used,
                usedMessages
            } = state[position][flag] || {};

            if (!value || !unlocked) {
                return;
            }

            if (used) {
                return usedMessages[used - 1] || "";
            }

            return `${ flagPrefix } ${ flag }. ${ valuePrefix } ${ value }.`;
        })).filter(v => !!v);
    }

    const validDirections = ["NW", "N", "NE", "W", "E", "SW", "S", "SE"];

    const allowedDirections = validDirections.filter((direction) => {
        return direction.split("").reduce((_, directionPart) => !POSITIONS[position].includes(directionPart), true);
    });

    if (trimmedCommand === "MOVE") {
        return [ "Which way? The directions are 'N', 'S', 'W', 'E', 'NW', 'NE', 'SW', and 'SE'."];
    }

    if (trimmedCommand.startsWith("MOVE")) {
        const directionToMove = trimmedCommand.slice(5);

        if (!validDirections.includes(directionToMove)) {
            return ["Not a valid direction. The directions are 'N', 'S', 'W', 'E', 'NW', 'NE', 'SW', and 'SE'."];
        }

        if (!allowedDirections.includes(directionToMove)) {
            return ["You run into a wall."];
        }

        const nextPosition = getNextPosition(position, directionToMove);

        if (nextPosition < 0 || nextPosition > 8) {
            return ["You run into a wall."];
        }

        if (currentStep === 7 && (nextPosition === 1 || nextPosition === 4)) {
            return ["You can not go there due to the collapsed ceiling."];
        }

        setPosition(nextPosition);

        return [
            `You move ${ directionToMove }`,
            ...parseCommand("FEEL", nextPosition, setPosition, inventory, setInventory, state, setState, victoryFlags, setVictoryFlags, currentStep, setCurrentStep)
        ];
    }

    if (trimmedCommand.startsWith("TAKE")) {
        if (inventory !== null) {
            return ["You are already holding an item."];
        }

        const itemToTake = trimmedCommand.slice(5).toLowerCase()
            || Object.keys(state[position]).find((item) => {
                return !state[position][item].immovable
                    && state[position][item].unlocked
            });

        if (!itemToTake) {
            return ["There is no item to take."];
        }

        if (!state[position][itemToTake] || !state[position][itemToTake].unlocked) {
            return [`There is no ${ itemToTake } here.`];
        }

        if (state[position][itemToTake].immovable) {
            return ["You cannot take that."];
        }

        setInventory(state[position][itemToTake]);

        const newState = state.map((room, index) => {
            if (index === position) {
                return Object.keys(room).reduce((modifiedRoom, item) => {
                    if (item === itemToTake) {
                        return modifiedRoom;
                    }

                    return {
                        ...modifiedRoom,
                        [item]: room[item]
                    };
                }, {});
            }

            return room;
        });

        setState(newState);

        return [`You pick up the ${ itemToTake }`];
    }

    if (trimmedCommand === "USE") {
        // use a fixed object
        const interactKey = Object.keys(state[position]).find((itemKey) => {
            return state[position][itemKey].interactable
                && state[position][itemKey].unlocked;
        });

        if (interactKey === "west lever" && (!state[8]["east lever"] || (state[8]["east lever"].used !== state[8]["east lever"].uses))) {
            return ["The lever is stuck"];
        }

        if (interactKey) {
            // interact with an object
            const newState = state.map((room, index) => {
                if (index === position) {
                    return {
                        ...room,
                        [interactKey]: {
                            ...room[interactKey],
                            used: room[interactKey].used + 1
                        }
                    };
                }
    
                return room;
            });


            const itemToUse = state[position][interactKey];
            itemToUse.used += 1;
            const usedTerm = state[position][interactKey].usedTerm || "use";

            setInventory(replacementItem(itemToUse, interactKey));
    
            return [
                `You ${ usedTerm } the ${ itemToUse.name }.`,
                ...advanceGameState(itemToUse, interactKey, newState, setState, victoryFlags, setVictoryFlags, currentStep, setCurrentStep)
            ];
        }

        if (inventory === null) {
            return ["You are not holding an item."];
        }

        const itemToUse = inventory;
        const usedTerm = inventory.usedTerm || "use";

        // use an object
        const recepticleKey = Object.keys(state[position]).find((itemKey) => state[position][itemKey].accepts?.includes(itemToUse.name));

        if (recepticleKey) {
            itemToUse.used += 1;

            const newState = state.map((room, index) => {
                if (index === position) {
                    if (recepticleKey === "lid" && room[recepticleKey]) {
                        return Object.keys(room).reduce((newRoom, roomKey) => {
                            if (roomKey === "lid") {
                                return newRoom;
                            }

                            return {
                                ...newRoom,
                                [roomKey]: room[roomKey]
                            };
                        }, {});
                    }

                    return {
                        ...room,
                        [recepticleKey]: {
                            ...room[recepticleKey],
                            used: room[recepticleKey].used + 1
                        },
                        ...(itemToUse.uses === itemToUse.used ? {} : { [itemToUse.name]: itemToUse })
                    };
                }
    
                return room;
            });

            setInventory(replacementItem(itemToUse, recepticleKey));
    
            return [
                `You ${ usedTerm } the ${ itemToUse.name }.`,
                ...advanceGameState(itemToUse, recepticleKey, newState, setState, victoryFlags, setVictoryFlags, currentStep, setCurrentStep)
            ];
        }

        // put it down

        const newState = state.map((room, index) => {
            if (index === position) {
                return {
                    ...room,
                    [itemToUse.name]: inventory
                };
            }

            return room;
        });

        setInventory(null);
        setState(newState);

        return [`You put down the ${ itemToUse.name }`];
    }

    return [
        "Unknown Command. Type 'HELP' for options"
    ];
}

interface FlagState {
    name: string;
    flagPrefix: string;
    valuePrefix: string;
    value: string;
    unlocked: boolean;
    uses: number;
    used: number;
    immovable?: boolean;
    interactable?: boolean;
    accepts?: string[];
    usedMessages?: string[];
    usedTerm?: string;
}

const DEFAULT_STATE: Record<string, FlagState>[] = [
    {
        "round torch": {
            name: "round torch",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "unlit",
            unlocked: true,
            uses: 1,
            used: 0,
            usedTerm: "place"
        },
        "jar": {
            name: "jar",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "empty",
            unlocked: false,
            uses: 1,
            used: 0,
            usedTerm: "fill"
        },
        "conduit (A)": {
            name: "conduit (A)",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "buzzing",
            unlocked: false,
            uses: 1,
            used: 0,
            usedMessages: [
                "The conduit has been used."
            ],
            accepts: [
                "orb"
            ],
            immovable: true
        },
        "door key": {
            name: "door key",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "hope inspiring",
            unlocked: false,
            uses: 1,
            used: 0,
            usedTerm: "insert and turn"
        },
    },
    {
        "square torch": {
            name: "square torch",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "unlit",
            unlocked: true,
            uses: 1,
            used: 0,
            usedTerm: "place"
        },
        "round sconce": {
            name: "round sconce",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "empty",
            unlocked: true,
            uses: 2,
            used: 0,
            usedMessages: [
                "The round sconce holds a round torch. It has a small triangular keyhole.",
                "The round sconce holds a round torch. It has a turned key in a keyhole."
            ],
            immovable: true,
            accepts: [
                "round torch",
                "triangular key"
            ]
        },
        "mysterious button": {
            name: "mysterious button",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "unactivated",
            unlocked: false,
            uses: 10,
            used: 0,
            usedMessages: [
                "The mysterious button is now here.",
                "The mysterious button is now here.",
                "The mysterious button is now here.",
                "The mysterious button is now here.",
                "The mysterious button is now here. It somehow seems halfway satisifed.",
                "The mysterious button is now here.",
                "The mysterious button is now here.",
                "The mysterious button is now here.",
                "The mysterious button is now here.",
                "The mysterious button is now here."
            ],
            immovable: true,
            interactable: true,
            usedTerm: "press"
        }
    },
    {
        "exit": {
            name: "exit",
            flagPrefix: "There is an",
            valuePrefix: "It is",
            value: "locked",
            unlocked: true,
            uses: 1,
            used: 0,
            immovable: true,
            accepts: [
                "door key"
            ]
        },
        "lid": {
            name: "lid",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "round",
            unlocked: false,
            uses: 1,
            used: 0,
            usedMessages: [
                "The lid has been used."
            ],
            accepts: [
                "filled jar"
            ]
        },
        "orb": {
            name: "orb",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "uncharged",
            unlocked: false,
            uses: 1,
            used: 0,
            usedTerm: "charge"
        }
    },
    {
        "west lever": {
            name: "west lever",
            flagPrefix: "The ",
            valuePrefix: "It is",
            value: "unactivated",
            unlocked: false,
            uses: 3,
            used: 0,
            usedMessages: [
                "The west lever has been partially primed.",
                "The west lever has been fully primed.",
                "The west lever has been activated."
            ],
            immovable: true,
            interactable: true,
            usedTerm: "push"
        },
        "conduit (B)": {
            name: "conduit (B)",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "buzzing",
            unlocked: false,
            uses: 1,
            used: 0,
            usedMessages: [
                "The conduit has been used."
            ],
            accepts: [
                "orb (1/4)"
            ],
            immovable: true
        },
    },
    {
        "dripping water": {
            name: "dripping water",
            flagPrefix: "There is",
            valuePrefix: "It is",
            value: "wet",
            unlocked: true,
            uses: 2,
            used: 0,
            usedMessages: [
                "There is dripping water. It is wet.",
                "There is dripping water. It is wet."
            ],
            accepts: [
                "jar"
            ],
            immovable: true
        },
    },
    {
        "east lever": {
            name: "east lever",
            flagPrefix: "The ",
            valuePrefix: "It is",
            value: "unactivated",
            unlocked: false,
            uses: 3,
            used: 0,
            usedMessages: [
                "The east lever has been partially primed.",
                "The east lever has been fully primed.",
                "The east lever has been activated."
            ],
            immovable: true,
            interactable: true,
            usedTerm: "push"
        },
        "conduit (C)": {
            name: "conduit (C)",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "buzzing",
            unlocked: false,
            uses: 1,
            used: 0,
            usedMessages: [
                "The conduit has been used."
            ],
            accepts: [
                "orb (2/4)"
            ],
            immovable: true
        },
    },
    {
        "conduit (E)": {
            name: "conduit (E)",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "buzzing",
            unlocked: false,
            uses: 1,
            used: 0,
            usedMessages: [
                "The conduit has been used."
            ],
            accepts: [
                "charged orb"
            ],
            immovable: true
        },
    },
    {
        "square sconce": {
            name: "square sconce",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "empty",
            unlocked: true,
            uses: 1,
            used: 0,
            usedMessages: [
                "The square sconce holds a square torch."
            ],
            accepts: [
                "square torch"
            ],
            immovable: true
        },
        "triangular key": {
            name: "triangular key",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "pointy",
            unlocked: false,
            uses: 1,
            used: 0,
            usedTerm: "insert and turn"
        },
    },
    {
        "shelf": {
            name: "shelf",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "empty",
            unlocked: true,
            uses: 1,
            used: 0,
            usedMessages: [
                "The shelf holds a sealed jar."
            ],
            accepts: [
                "sealed jar"
            ],
            immovable: true
        },
        "conduit (D)": {
            name: "conduit (D)",
            flagPrefix: "There is a",
            valuePrefix: "It is",
            value: "buzzing",
            unlocked: false,
            uses: 1,
            used: 0,
            usedMessages: [
                "The conduit has been used."
            ],
            accepts: [
                "orb (3/4)"
            ],
            immovable: true
        },
    }
];

const STARTING_FLAGS: Record<string, boolean>[] = [{
    "square torch": false,
    "round torch": false
},{
    "triangular key": false
},{
    "mysterious button": false
},{
    "west lever": false,
    "east lever": false
},{
    "jar": false,
    "lid": false,
    "sealed jar": false
},{
    "east lever": false
},{
    "orb": false,
    "conduit (A)": false,
    "conduit (B)": false,
    "conduit (C)": false,
    "conduit (D)": false,
    "conduit (E)": false,
    "charged orb": false
},{
    "door key": false,
    "exit": false
}];

const PuzzleComponent: FunctionComponent = () => {
    const [position, setPosition] = useState(2); // start in NE corner
    const [currentCommand, setCurrentCommand] = useState("");
    const [currentStep, setCurrentStep] = useState(0);
    const [state, setState] = useState(DEFAULT_STATE);
    const [victoryFlags, setVictoryFlags] = useState(STARTING_FLAGS);
    const [inventory, setInventory] = useState(null);
    const [commands, setCommands] = useState<[string, string[]][]>([[
        "",
        ["The door to the escape room closes behind you, leaving you in complete darkness."]
    ]]);
    const inputRef = useRef(null);

    const onSubmit = useCallback((event) => {
        event.preventDefault();

        const response = parseCommand(
            currentCommand,
            position, setPosition,
            inventory, setInventory,
            state, setState,
            victoryFlags, setVictoryFlags,
            currentStep, setCurrentStep
        );

        setCommands([...commands, [currentCommand, response]]);
        setCurrentCommand("");
    }, [currentCommand, commands, position, inventory, state, victoryFlags, currentStep]);

    const onChange = useCallback(({ target: { value } }: { target: { value: string } }) => setCurrentCommand(value.toUpperCase()), []);

    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-15">
            <Notification css={{ marginBottom: "10px" }}>
                <P>Erattum (3/18/23): Fixed a bug on stage 4 where steps could be finished in the wrong order, causing a soft-lock.</P>
            </Notification>
            <Game onClick={ () => inputRef.current?.focus() }>
                <form onSubmit={ onSubmit }>
                    <Input
                        ref={ inputRef }
                        type="text"
                        autoFocus={ true }
                        placeholder="Enter a command or 'HELP'"
                        onChange={ onChange }
                        value={ currentCommand }
                        disabled={ currentStep === 8 }
                    />
                    { inventory && <InventorySpan>{ inventory.name }</InventorySpan> }
                </form>
                <History>
                    { commands.map(([command, responses]) => {
                        return (
                            <>
                                <P css={{ color: "$secondary" }}>{ command }</P>
                                { responses.map((response, index) => <P key={ index }>{ ">>" } { response }</P>) }
                            </>
                        );
                    }) }
                </History>
            </Game>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
