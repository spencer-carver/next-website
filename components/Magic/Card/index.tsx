import { useCallback, useEffect, useState } from "react";
import Image from "../../Image";
import { styled } from "../../../styles/stitches";
import fetchFromCache from "../../../utils/cache";

const styles: Record<string, string> = {};

const CARD_TTL = 604800000; // 1 week

interface CardComponentProps {
    name: string;
    image?: string;
    id: string;
    type?: "constructed" | "commander" | "oathbreaker" | "sideboard" | "featured";
    index: number;
    setLoaded?: (boolean) => void;
}

interface RelatedCard {
    id: string;
    name: string;
    component: string;
    type_line: string;
}

interface Faces {
    name: string;
    mana_cost: string;
    type_line: string;
    oracle_text: string;
    flavor_text?: string;
    image_uris?: {
        normal: string;
    };
}

interface CardInfo {
    id: string;
    name: string;
    mana_cost: string;
    type_line: string;
    oracle_text: string;
    flavor_text?: string;
    image_uris?: {
        normal: string;
    };
    card_faces?: Faces[];
    all_parts?: RelatedCard[];
    backFace?: Faces;
}

const FetchAndRenderCard: React.FunctionComponent<CardComponentProps> = ({ name, id }) => {
    const [ imageUrl, setImageUrl ] = useState(null as unknown as string);

    useEffect(() => {
        fetchFromCache(`https://api.scryfall.com/cards/${ id }`, CARD_TTL)
            .then((data: JSON) => {
                const cardInfo = data as unknown as CardInfo;
                setImageUrl(cardInfo.image_uris ? cardInfo.image_uris.normal : null as unknown as string);
            });
    });

    if (!imageUrl) {
        return null;
    }

    return <img className={ styles.tooltipCard } src={ imageUrl } alt={ name } />;
};

function fillInMissingData(data: CardInfo): CardInfo {
    // Dark Depths doesn't link to the Marit Lage token
    if (data.id === "92409c3a-fb1a-4205-9fe1-0f5affc7b21d") {
        return {
            ...data,
            all_parts: [{
                id: "7b993828-e139-4cb6-a329-487accc1c515",
                name: "Marit Lage",
                component: "token",
                type_line: "Token Legendary Creature — Avatar"
            }]
        };
    }

    // Forbidden Orchard (CHK) doesn't link to the MPR spirit token
    if (data.id === "88d78261-c8c9-4e0e-b157-f70ed46c3a25") {
        return {
            ...data,
            all_parts: [{
                id: "46b60d95-b9bc-40f8-b986-bfa8e3eb74f3",
                name: "Spirit",
                component: "token",
                type_line: "Token Creature - Spirit"
            }]
        };
    }

    if (data.card_faces) {
        const castable = data.card_faces.filter(({ mana_cost: manaCost }) => manaCost);
        let frontFace;
        let backFace;

        if (castable.length === 0) {
            // it's a land (e.g. Westvale Abbey)

            frontFace = data.card_faces[0];
            backFace = data.card_faces[1];
        } else {
            frontFace = castable[0];
            backFace = castable.length > 1
                ? castable[1] :
                data.card_faces.filter(({ mana_cost: manaCost }) => !manaCost)[0];
        }

        return {
            ...data,
            name: frontFace.name,
            mana_cost: frontFace.mana_cost,
            type_line: frontFace.type_line,
            oracle_text: frontFace.oracle_text,
            flavor_text: frontFace.flavor_text,
            backFace
        };
    }

    return data;
}

function filterAllParts({ id: cardId, all_parts: allParts }: CardInfo): RelatedCard[] {
    if (!allParts) {
        return [];
    }

    
    return allParts.filter(({ name, id, component, type_line }: RelatedCard) => {
        if (cardId === id) {
            return false;
        }

        
        if (type_line.indexOf("Emblem") !== -1) {
            return true;
        }

        // Acererak has multiple dungeons, but we only want to show the main combo one
        if (cardId === "dd52d0bd-3abd-401c-9f56-ee911613da3b" && id === "59b11ff8-f118-4978-87dd-509dc0c8c932") {
            return true;
        }

        return component === "token" || name === "The Monarch";
    });
}

const Tooltip: React.FunctionComponent<CardInfo> = ({ name, mana_cost, type_line, oracle_text, flavor_text, backFace }) => {
    return (
        <div>
            <div className={ styles.tooltip }>
                <p>{ name } <span className={ styles.manaCost }>{ mana_cost }</span></p>
                <p>{ type_line }</p>
                <p className={ styles.oracleText }>{ oracle_text }</p>
                { flavor_text && <p className={ styles.flavorText }>{ flavor_text }</p> }
            </div>
            { backFace && !backFace.image_uris && <Tooltip id={ backFace.name } { ...backFace } /> }
        </div>
    );
};

const CardContainerDiv = styled("div", {
    position: "relative",
    height: "44px",
    width: "100px",
    overflowY: "visible",
    textAlign: "center",
    "& img": {
        position: "relative",
        margin: "0 auto",
        borderRadius: "6px",
        zIndex: "1",
        "&:hover": {
            zIndex: "2",
            "&::after": {
                opacity: "1",
            },
        },
    },
    "@sm": {
        width: "110px",
        "& img": {
            borderRadius: "6px"
        }
    },
    "@md": {
        width: "125px"
    },
    "@lg": {
        width: "155px",
        "& img": {
            borderRadius: "8px"
        }
    },
    "@xxl": {
        width: "250px",
        "& img": {
            borderRadius: "13px"
        }
    }
});

const CardComponent: React.FunctionComponent<CardComponentProps> = ({ name, image, setLoaded }) => {
    const cardLoaded = useCallback(() => setLoaded(true), []);

    return (
        <CardContainerDiv>
            <Image src={ image?.replace("large", "normal") } alt={ name } width="250px" height="349px" onLoad={ cardLoaded } />
        </CardContainerDiv>
    );
};

/*
const TooltipComponent = () => {
    const fetchTooltip = useCallback((): void => {
        fetchFromCache(`https://api.scryfall.com/cards/${ id }`, CARD_TTL)
            .then((data: JSON) => {
                const cardInfo = data as unknown as CardInfo;
                setTooltip(fillInMissingData(cardInfo));
            });
    }, [ id ]);

    return (
        <div className={`${styles.tooltipContainer} ${styles[side]}`} onMouseOver={ fetchTooltip } onFocus={ fetchTooltip }>
            <div className={styles.frontFace}>
                <div className={styles.cardSpacer} />
                <Tooltip {...tooltip} />
                {tooltip.all_parts && filterAllParts(tooltip).map((card) => <FetchAndRenderCard key={card.id} index={0} {...card} />)}
            </div>
            {tooltip.backFace && tooltip.backFace.image_uris && (
                <div key={tooltip.backFace.name} className={styles.backFace}>
                    <div>
                        <img className={styles.tooltipCard} src={tooltip.backFace.image_uris.normal} alt={tooltip.backFace.name} />
                    </div>
                    <Tooltip id={tooltip.backFace.name} {...tooltip.backFace} />
                    {tooltip.all_parts && filterAllParts(tooltip).map((_, i) => <div key={i} className={styles.cardSpacer} />)}
                </div>
            )}
        </div>
    );
};
*/

export default CardComponent;
