export const enum PuzzleRounds {
    ALCHEMY = "Alchemy"
}

export interface PuzzleDetails {
    title: string;
    description: string;
    round?: PuzzleRounds;
    isMeta?: boolean;
    comingSoon?: boolean;
    solutionAvailable?: boolean;
}

export const NEWEST_PUZZLE = "alchemy:seven-elements";

export const PUZZLES: Record<string, PuzzleDetails> = {
    "tutorial": {
        title: "Tutorial",
        description: "If you follow the instructions and rearrange your thoughts, you'll get this in no time!",
        solutionAvailable: true
    },
    "tetris": {
        title: "Tetris",
        description: "You don't see the appeal?",
        solutionAvailable: true
    },
    "travel-diary": {
        title: "Travel Diary",
        description: "As if public transit wasn't confusing enough already!",
        solutionAvailable: true
    },
    "an-explosive-discovery": {
        title: "An Explosive Discovery",
        description: "Find everything, but tread carefully!"
    },
    "yakuza-zero": {
        title: "Yakuza 0",
        description: "Is this really a game about the Japanese Mafia? Maybe we should google it..."
    },
    "cheese-sampler": {
        title: "Cheese Sampler",
        description: "My themed parody group is wrappping up it's first (and only) tour at our biggest venue ever!"
    },
    "x-marks-the-spot": {
        title: "❌ Marks the Spot",
        description: "On the open seas, you often seek the route most travelled."
    },
    "enigmarch-2022": {
        title: "#Enigmarch 2022",
        description: "A puzzle a day keeps the boredom at bay."
    },
    "judge-calls-one": {
        title: "Judge Calls",
        description: "Can you decrypt what the players are talking about?",
        solutionAvailable: true
    },
    "alchemy:four-elements": {
        title: "Four Nations",
        round: PuzzleRounds.ALCHEMY,
        description: "Without the fire scroll, how will we decipher the answer?"
    },
    "alchemy:five-elements": {
        title: "Five Rings",
        round: PuzzleRounds.ALCHEMY,
        description: "Wheeler has been robbed! Help the planeteers search for suspects and find the missing ring!"
    },
    "alchemy:six-elements": {
        title: "Six Heroes",
        round: PuzzleRounds.ALCHEMY,
        description: "Multiple battles against the Bohrok are underway, but where is the leader of the Toa? Hopefully you can find the right time to ASCII him."
    },
    "alchemy:seven-elements": {
        title: "Seven Attributes",
        round: PuzzleRounds.ALCHEMY,
        description: "What is Amnael's Endgame? He may hold all the cards, but I'm sure you can draw something!"
    },
    "alchemy:alchemy": {
        title: "Alchemy",
        round: PuzzleRounds.ALCHEMY,
        description: "Find your inner fire.",
        isMeta: true
    }
};
