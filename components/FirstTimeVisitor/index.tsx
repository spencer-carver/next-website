import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { styled } from "../../styles/stitches";
import Link from "../Link";
import Notification from "../Notification";
import useStorage from "../../utils/useStorage";

const Line = styled("p", {
    display: "block",
    margin: "0",
    "&:not(:last-of-type)": {
        marginBottom: "8px"
    }
});

interface VisitedProps {
    dismissed: boolean;
    time: number;
}

const FirstTimeVisitor: FunctionComponent<{ lastUpdate: number; }> = ({ lastUpdate }) => {
    const storage = useStorage("settings");
    const [isDismissed, setIsDismissed] = useState(true);
    const [firstTime, setFirstTime] = useState(false);

    useEffect(() => {
        try {
            const hasVisited = storage.getItem<VisitedProps>("visited");

            if (!hasVisited) {
                setFirstTime(true);
                setIsDismissed(false);

                storage.setItem<VisitedProps>("visited", { dismissed: false, time: (new Date()).getTime() });

                return;
            }

            const { dismissed, time } = hasVisited;

            const updatedDismissed = time > lastUpdate ? dismissed : false;

            storage.setItem<VisitedProps>("visited", { dismissed: updatedDismissed, time: (new Date()).getTime() });

            setIsDismissed(updatedDismissed);
        } catch(e) {
            // do nothing
        }
    }, [storage, lastUpdate]);

    const dismissComponent = useCallback(() => {
        try {
            storage.setItem<VisitedProps>("visited", { dismissed: true, time: (new Date()).getTime() });
        } catch (e) {
            // do nothing
        }

        setIsDismissed(true);
    }, [storage]);

    return (
        <Notification isDismissed={ isDismissed } onClose={ dismissComponent }>
            <Line>There&apos;s been an update since your last visit! Read below for more information.</Line>
            { firstTime && <Line>If this is your first time here, be sure to check out the <Link href="/about">About Me</Link> page. Welcome!</Line> }
        </Notification>
    );
};
 
export default FirstTimeVisitor;