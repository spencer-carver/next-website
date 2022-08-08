export const enum PuzzleRounds {
    ALCHEMY = "Alchemy"
}

export interface PuzzleDetails {
    title: string;
    round?: PuzzleRounds;
    isMeta?: boolean;
    comingSoon?: boolean;
}

export const NEWEST_PUZZLE = "alchemy/four-elements";

export const PUZZLES: Record<string, PuzzleDetails> = {
    "tutorial": {
        title: "Tutorial"
    },
    "tetris": {
        title: "Tetris"
    },
    "travel-diary": {
        title: "Travel Diary"
    },
    "an-explosive-discovery": {
        title: "An Explosive Discovery"
    },
    "yakuza-zero": {
        title: "Yakuza 0"
    },
    "cheese-sampler": {
        title: "Cheese Sampler"
    },
    "x-marks-the-spot": {
        title: "X Marks the Spot"
    },
    "enigmarch-2022": {
        title: "#Enigmarch 2022"
    },
    "judge-calls-one": {
        title: "Judge Calls"
    },
    "alchemy/four-elements": {
        title: "Four Elements",
        round: PuzzleRounds.ALCHEMY
    },
    "alchemy/five-elements": {
        title: "Five Elements",
        round: PuzzleRounds.ALCHEMY
    },
    "alchemy/six-elements": {
        title: "Six Elements",
        round: PuzzleRounds.ALCHEMY,
        comingSoon: true
    },
    "alchemy/seven-elements": {
        title: "Seven Elements",
        round: PuzzleRounds.ALCHEMY,
        comingSoon: true
    },
    "alchemy/alchemy": {
        title: "Alchemy",
        round: PuzzleRounds.ALCHEMY,
        isMeta: true,
        comingSoon: true
    }
};
