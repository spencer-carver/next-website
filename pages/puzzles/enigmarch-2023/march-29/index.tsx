import React, { FunctionComponent } from "react";
import { PuzzleWrapperComponent } from "../../../../components/Puzzle/common";
import { styled } from "../../../../styles/stitches";

const ListItem = styled("li", {
    color: "$onBackground",
    fontSize: "14px",
    marginBottom: "10px",
    "@lg": {
        fontSize: "20px"
    }
});

const PuzzleComponent: FunctionComponent = () => {
    return (
        <PuzzleWrapperComponent name="enigmarch-2023:march-29">
            <ul style={{ listStyle: "none", paddingInlineStart: "0" }}>
                <ListItem>&quot;Play it, Sam. Play &apos;As Time Goes By.&apos;&quot; - Keir Dullea</ListItem>
                <ListItem>&quot;You talkin&apos; to me?&quot; - Marlon Brando</ListItem>
                <ListItem>&quot;Frankly, my dear,I don&apos;t give a damn.&quot; - James Cagney</ListItem>
                <ListItem>&quot;Here&apos;s Johnny!&quot; - Michael Douglas</ListItem>
                <ListItem>&quot;Go ahead, make my day.&quot; - Heather O&apos;Rourke</ListItem>
                <ListItem>&quot;The stuff that dreams are made of.&quot; - Ingrid Bergman</ListItem>
                <ListItem>&quot;Houston, we have a problem.&quot; - Estelle Reiner</ListItem>
                <ListItem>&quot;I&apos;m the king of the world!&quot; - Tom Hanks</ListItem>
                <ListItem>&quot;After all, tomorrow is another day!&quot; - Clint Eastwood</ListItem>
                <ListItem>&quot;I&apos;m gonna make him an offer he can&apos;t refuse.&quot; - Groucho Marx</ListItem>
                <ListItem>&quot;Nobody puts baby in a corner.&quot; - Oliver Hardy</ListItem>
                <ListItem>&quot;Elementary, my dear Watson.&quot; - Andy Serkis</ListItem>
                <ListItem>&quot;A martini. Shaken, not stirred.&quot; - Robert De Niro</ListItem>
            </ul>
        </PuzzleWrapperComponent>
    );
};

export default PuzzleComponent;
