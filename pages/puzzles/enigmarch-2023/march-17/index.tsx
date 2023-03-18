import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const P = styled("p", {
    color: "$onBackground",
    display: "block",
    margin: "0",
    textAlign: "left"
});

const Shell = styled("div", {
    height: "50vh",
    overflowY: "scroll",
    overflowX: "hidden",
    position: "relative",
    border: "1px solid $onBackground",
    display: "flex",
    flexDirection: "column-reverse"
});

const History = styled("div", {
    textAlign: "left"
});

const Form = styled("form", {
    display: "flex",
    color: "$onBackground"
});

const UserSpan = styled("span", {
    color: "$secondary"
});
const PathSpan = styled("span", {
    color: "$primary"
});

const Input = styled("input", {
    position: "relative",
    display: "inline-block",
    bottom: "0",
    flexGrow: "1",
    color: "$onBackground",
    backgroundColor: "$background",
    border: "1px solid transparent",
    fontSize: "16px",
    "&:focus": {
        outline: "none"
    }
});

const STRUCTURE = {
    users: {
        guest: {
            shells: {
                terminology: {
                    "4.clue": "A single, complete 360 degree revolution of a mollusc (5)[5]"
                },
                facts: {
                    "2.clue": "The common name for eight species of predatory sea snails from the western atlantic (5 5)[5]",
                    "8.clue": "The scientific name for the rarest seashell in the world (7 8)[6]"
                }
            }
        },
        spencer: {
            "1.clue": "The file manager of the GNOME linux environment (8)[2]",
            shells: {
                facts: {
                    "5.clue": "The most common type of seashell that washes onto beaches (8)[7]",
                    "7.clue": "The most expensive seashell ever sold (5, 11)[10]"
                }
            },
            companies: {
                facts: {
                    "3.clue": "Recognizable logo for this 1907-founded London-based company (6)[1]",
                    "6.clue": "This document leak revealed ownership information of more than 214,000 companies (6 6)[7]"
                }
            }
        }
    }
};

function getCurrentLocation(currentDirectory: string) {
    const pathParts = currentDirectory.split("/");

    const directory = pathParts.reduce((folder, part) => part ? folder[part] : folder, STRUCTURE);

    return directory;
}

function getCurrentLocationContents(currentDirectory: string): [string, boolean][] {
    const directory = getCurrentLocation(currentDirectory);

    return Object.keys(directory).map((key) => [key, typeof directory[key] === "object"]);
}

function processCommand(
    command: string,
    currentDirectory: string,
    setCurrentDirectory: (newDirectory: string) => void
): string[] {
    const candidateCommand = command.trim().split(" ");

    if (candidateCommand[0] === "echo") {
        if (candidateCommand.length < 2) {
            return [];
        }

        if (candidateCommand[1] === "*") {
            return getCurrentLocationContents(currentDirectory).map((entry) => entry[0]);
        }

        if (candidateCommand[1] === "*/") {
            return getCurrentLocationContents(currentDirectory).filter(entry => entry[1]).map((entry) => entry[0]);
        }

        if (candidateCommand[1].startsWith("$(<")) {
            // input redirect, read file
            const filename = candidateCommand[1].slice(3, candidateCommand[1].length - 1);
            const directory = getCurrentLocation(currentDirectory);
            const contents = getCurrentLocationContents(currentDirectory);

            const file = contents.find(([name, isDir]) => !isDir && name === filename);

            if (!file) {
                return [`${ filename }: No such file or directory`];
            }

            return [directory[filename]];
        }

        if (candidateCommand[1].startsWith("$(")) {
            // invoke inner
            return [];
        }

        return [ command.slice(5) ];
    }

    if (candidateCommand[0] === "cd") {
        if (!candidateCommand[1]) {
            setCurrentDirectory(HOME_PATH);

            return [];
        }

        if (candidateCommand[1] === "/") {
            setCurrentDirectory("/");

            return [];
        }

        if (candidateCommand[1] === ".") {
            setCurrentDirectory(currentDirectory);

            return [];
        }

        if (candidateCommand[1].startsWith("..")) {
            const candidateParts = candidateCommand[1].split("/").filter(v => !!v);
            candidateParts.splice(0,1);
            const currentPathParts = currentDirectory.split("/").filter(v => !!v);

            if (currentPathParts.length === 0) {
                return [];
            }

            currentPathParts.pop();
            const newCurrent = currentPathParts.length === 0 ? "/" : `/${ currentPathParts.join("/") }/`;

            if (candidateParts.length === 0) {
                setCurrentDirectory(newCurrent);

                return [];
            }

            return processCommand(`cd ${ candidateParts.join("/") }/.`, newCurrent, setCurrentDirectory);
        }

        const candidateParts = candidateCommand[1].split("/");
        const directory = getCurrentLocationContents(currentDirectory);

        if (directory.find(([name, isDir]) => isDir && candidateParts[0] === name)) {
            const newCurrent = `${ currentDirectory.slice(0, currentDirectory.length - 1) }/${ candidateParts[0] }/`;
            candidateParts.splice(0,1);

            if (candidateParts.length === 0) {
                setCurrentDirectory(newCurrent);

                return [];
            }

            return processCommand(`cd ${ candidateParts.join("/") }/.`, newCurrent, setCurrentDirectory);
        }

        if (directory.find(([name, isDir]) => !isDir && candidateParts[0] === name)) {
            return [
                `cd: ${ candidateParts[0] }: Not a directory`
            ];
        }

        return [
            `cd: ${ candidateCommand[1] }: no such file or directory`,
            "cd: usage: cd [dir]"
        ];
    }

    return [
        `No command ${ candidateCommand[0] } found.`,
        `${ candidateCommand[0] }: command not found`
    ];
}

function displayPath(dir: string): string {
    if (dir === HOME_PATH) {
        return "~";
    }

    const path = dir.replace(HOME_PATH, "~/");

    return path.length === 1 ? path : path.slice(0, path.length - 1);
}

const HOME_PATH = "/users/guest/";

const PuzzleComponent: FunctionComponent = () => {
    const [currentCommand, setCurrentCommand] = useState("");
    const [currentDirectory, setCurrentDirectory] = useState(HOME_PATH);
    const [commands, setCommands] = useState<[string, string, string[]][]>([]);
    const [upPress, setUpPress] = useState(0);
    const inputRef = useRef(null);

    const onSubmit = useCallback((event) => {
        event.preventDefault();

        const response = processCommand(currentCommand, currentDirectory, setCurrentDirectory);

        setCommands([...commands, [currentCommand, currentDirectory, response]]);
        setCurrentCommand("");
    }, [currentCommand, commands, currentDirectory]);

    const onChange = useCallback(({ target: { value } }: { target: { value: string } }) => setCurrentCommand(value.toLowerCase()), []);

    const onKeyPress = useCallback((event) => {
        if (event.key === "ArrowUp") {
            const newUpPress = upPress + 1;

            if (newUpPress > commands.length) {
                return;
            }

            setCurrentCommand(commands[commands.length - newUpPress][0]);
            setUpPress(newUpPress);

            return;
        }

        if (event.key === "ArrowDown") {
            const newUpPress = upPress - 1;

            if (newUpPress < 0) {
                return;
            }

            if (newUpPress === 0) {
                setCurrentCommand("");
            } else {
                setCurrentCommand(commands[commands.length - newUpPress][0]);
            }

            setUpPress(newUpPress);

            return;
        }
    }, [commands, upPress]);

    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-17">
            <Shell onClick={ () => inputRef.current?.focus() }>
                <Form onSubmit={ onSubmit }>
                    <UserSpan>guest@shell</UserSpan>:
                    <PathSpan>{ displayPath(currentDirectory) }</PathSpan>$
                    <Input
                        ref={ inputRef }
                        type="text"
                        autoFocus={ true }
                        placeholder=""
                        onChange={ onChange }
                        onKeyDown={ onKeyPress }
                        value={ currentCommand }
                    />
                </Form>
                <History>
                    <P>running in restricted mode. Only available commands are &apos;cd&apos; and &apos;echo&apos;.</P>
                    { commands.map(([command, dir, responses], commandIndex) => {
                        return (
                            <div key={ commandIndex }>
                                { command && (
                                    <>
                                        <UserSpan>guest@shell</UserSpan>:
                                        <PathSpan>{ displayPath(dir) }</PathSpan>$&nbsp;
                                        { command }
                                    </>
                                )}
                                { responses.map((response, index) => <P key={ index }>{ response }</P>) }
                            </div>
                        );
                    }) }
                </History>
            </Shell>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
