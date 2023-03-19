export const enum PuzzleRounds {
    ALCHEMY = "alchemy",
    ENIGMARCH2023 = "enigmarch-2023"
}

export interface RoundDetails {
    id: PuzzleRounds;
    title: string;
    comingSoon?: boolean;
}

export const ROUNDS: Record<PuzzleRounds, RoundDetails> = {
    [PuzzleRounds.ALCHEMY]: {
        id: PuzzleRounds.ALCHEMY,
        title: "Alchemy"
    },
    [PuzzleRounds.ENIGMARCH2023]: {
        id: PuzzleRounds.ENIGMARCH2023,
        title: "#Enigmarch 2023",
        comingSoon: true
    }
};

export interface PuzzleDetails {
    title: string;
    description: string;
    round?: PuzzleRounds;
    isMeta?: boolean;
    comingSoon?: boolean;
    solutionAvailable?: boolean;
}

export const NEWEST_PUZZLE = "enigmarch-2023:march-18";

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
    "130-bpm": {
        title: "130 BPM",
        description: ""
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
    },
    "enigmarch-2023:march-1": {
        title: "March 1: KEY",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "A mystery cipher? you'll be running around unless you find a tutorial."
    },
    "enigmarch-2023:march-2": {
        title: "March 2: NEST",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "How do they assign the points in Wingspan anyway?"
    },
    "enigmarch-2023:march-3": {
        title: "March 3: WIND",
        round: PuzzleRounds.ENIGMARCH2023,
        description: ""
    },
    "enigmarch-2023:march-4": {
        title: "March 4: LIGHT",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The manor has more messages than the usual 'keep out'."
    },
    "enigmarch-2023:march-5": {
        title: "March 5: GEM",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Veins of gemstones are known to intersect."
    },
    "enigmarch-2023:march-6": {
        title: "March 6: MYTHICAL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The timeless tale of tournament victory."
    },
    "enigmarch-2023:march-7": {
        title: "March 7: ARROW",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Arrows point in more than one way."
    },
    "enigmarch-2023:march-8": {
        title: "March 8: CURSE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "If you can't curse on TV, you get creative."
    },
    "enigmarch-2023:march-9": {
        title: "March 9: GLITCH",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "If you see any problems with this sudoku, please send a letter to the editor."
    },
    "enigmarch-2023:march-10": {
        title: "March 10: HAZARD",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Pick your main, take a chance, and discover the meaning behind these odd dice."
    },
    "enigmarch-2023:march-11": {
        title: "March 11: BOLD",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The bold show you where to go. The boldest help you get there."
    },
    "enigmarch-2023:march-12": {
        title: "March 12: TOWER",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "It may not be balanced, but each layer is significant and supports the tower's core."
    },
    "enigmarch-2023:march-13": {
        title: "March 13: MATCH",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Every year I submit the same bracket with notable success."
    },
    "enigmarch-2023:march-14": {
        title: "March 14: SECOND",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "When is an Olympic record not an Olympic record?"
    },
    "enigmarch-2023:march-15": {
        title: "March 15: ROOM",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "How will you avoid getting lost in the darkness?"
    },
    "enigmarch-2023:march-16": {
        title: "March 16: MASK",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Each treat's identity may be hidden, but that won't stop a star baker."
    },
    "enigmarch-2023:march-17": {
        title: "March 17: SHELL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The shape of some shells can create a really neat echo."
    },
    "enigmarch-2023:march-18": {
        title: "March 18: ROYAL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Philosopher Ly Tin Wheedle posits it's the only thing faster than ordinary light."
    },
    "enigmarch-2023:march-19": {
        title: "March 19: SPACE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-20": {
        title: "March 20: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-21": {
        title: "March 21: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-22": {
        title: "March 22: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-23": {
        title: "March 23: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-24": {
        title: "March 24: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-25": {
        title: "March 25: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-26": {
        title: "March 26: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-27": {
        title: "March 27: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-28": {
        title: "March 28: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-29": {
        title: "March 29: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-30": {
        title: "March 30: ???",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        comingSoon: true
    },
    "enigmarch-2023:march-31": {
        title: "March 31: META",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "TBD",
        isMeta: true,
        comingSoon: true
    }
};
