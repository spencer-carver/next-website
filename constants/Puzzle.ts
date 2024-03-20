export const enum PuzzleRounds {
    ALCHEMY = "alchemy",
    ENIGMARCH2023 = "enigmarch-2023",
    ENIGMARCH2024 = "enigmarch-2024"
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
        title: "#Enigmarch 2023"
    },
    [PuzzleRounds.ENIGMARCH2024]: {
        id: PuzzleRounds.ENIGMARCH2024,
        title: "#Enigmarch 2024"
    }
};

export interface PuzzleDetails {
    title: string;
    description: string;
    round?: PuzzleRounds;
    isMeta?: boolean;
    timeLimit?: number; // in seconds
    comingSoon?: boolean;
    solutionAvailable?: boolean;
}

export const NEWEST_PUZZLE = "speed-climbing";

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
    "speed-climbing": {
        title: "Speed Climbing",
        description: "The competitors face the wall and begin racing, their movements a blur as they climb to the top.",
        timeLimit: 600,
        solutionAvailable: true
    },
    "travel-diary": {
        title: "Travel Diary",
        description: "As if public transit wasn't confusing enough already!",
        solutionAvailable: true
    },
    "an-explosive-discovery": {
        title: "An Explosive Discovery",
        description: "Find everything, but tread carefully!",
        solutionAvailable: true
    },
    "yakuza-zero": {
        title: "Yakuza 0",
        description: "Is this really a game about the Japanese Mafia? Maybe we should google it...",
        solutionAvailable: true
    },
    "cheese-sampler": {
        title: "Cheese Sampler",
        description: "My themed parody group is wrappping up it's first (and only) tour at our biggest venue ever!",
        solutionAvailable: true
    },
    "130-bpm": {
        title: "130 BPM",
        description: "",
        solutionAvailable: true
    },
    "x-marks-the-spot": {
        title: "❌ Marks the Spot",
        description: "On the open seas, you often seek the route most travelled.",
        solutionAvailable: true
    },
    "enigmarch-2022": {
        title: "#Enigmarch 2022",
        description: "A puzzle a day keeps the boredom at bay.",
        solutionAvailable: true
    },
    "judge-calls-one": {
        title: "Judge Calls",
        description: "Can you decrypt what the players are talking about?",
        solutionAvailable: true
    },
    "alchemy:four-elements": {
        title: "Four Nations",
        round: PuzzleRounds.ALCHEMY,
        description: "Without the fire scroll, how will we decipher the answer?",
        solutionAvailable: true
    },
    "alchemy:five-elements": {
        title: "Five Rings",
        round: PuzzleRounds.ALCHEMY,
        description: "Wheeler has been robbed! Help the planeteers search for suspects and find the missing ring!",
        solutionAvailable: true
    },
    "alchemy:six-elements": {
        title: "Six Heroes",
        round: PuzzleRounds.ALCHEMY,
        description: "Multiple battles against the Bohrok are underway, but where is the leader of the Toa? Hopefully you can find the right time to ASCII him.",
        solutionAvailable: true
    },
    "alchemy:seven-elements": {
        title: "Seven Attributes",
        round: PuzzleRounds.ALCHEMY,
        description: "What is Amnael's Endgame? He may hold all the cards, but I'm sure you can draw something!",
        solutionAvailable: true
    },
    "alchemy:alchemy": {
        title: "Alchemy",
        round: PuzzleRounds.ALCHEMY,
        description: "Find your inner fire.",
        isMeta: true,
        solutionAvailable: true
    },
    "enigmarch-2023:march-1": {
        title: "March 1: KEY",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "A mystery cipher? you'll be running around unless you find a tutorial.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-2": {
        title: "March 2: NEST",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "How do they assign the points in Wingspan anyway?",
        solutionAvailable: true
    },
    "enigmarch-2023:march-3": {
        title: "March 3: WIND",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "",
        solutionAvailable: true
    },
    "enigmarch-2023:march-4": {
        title: "March 4: LIGHT",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The manor has more messages than the usual 'keep out'.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-5": {
        title: "March 5: GEM",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Veins of gemstones are known to intersect.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-6": {
        title: "March 6: MYTHICAL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The timeless tale of tournament victory.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-7": {
        title: "March 7: ARROW",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Arrows point in more than one way.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-8": {
        title: "March 8: CURSE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "If you can't curse on TV, you get creative.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-9": {
        title: "March 9: GLITCH",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "If you see any problems with this sudoku, please send a letter to the editor.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-10": {
        title: "March 10: HAZARD",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Pick your main, take a chance, and discover the meaning behind these odd dice.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-11": {
        title: "March 11: BOLD",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The bold show you where to go. The boldest help you get there.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-12": {
        title: "March 12: TOWER",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "It may not be balanced, but each layer is significant and supports the tower's core.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-13": {
        title: "March 13: MATCH",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Every year I submit the same bracket with notable success.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-14": {
        title: "March 14: SECOND",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "When is an Olympic record not an Olympic record?",
        solutionAvailable: true
    },
    "enigmarch-2023:march-15": {
        title: "March 15: ROOM",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "How will you avoid getting lost in the darkness?",
        solutionAvailable: true
    },
    "enigmarch-2023:march-16": {
        title: "March 16: MASK",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Each treat's identity may be hidden, but that won't stop a star baker.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-17": {
        title: "March 17: SHELL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The shape of some shells can create a really neat echo.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-18": {
        title: "March 18: ROYAL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Philosopher Ly Tin Wheedle posits it's the only thing faster than ordinary light.",
        solutionAvailable: true
    },
    "enigmarch-2023:march-19": {
        title: "March 19: SPACE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "A major reason these stars are visible is because of what isn't there."
    },
    "enigmarch-2023:march-20": {
        title: "March 20: FISH",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "These fish may have found their schools, but can they find their families?"
    },
    "enigmarch-2023:march-21": {
        title: "March 21: HALVE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Cut, look inside, and if it feels natural, repeat."
    },
    "enigmarch-2023:march-22": {
        title: "March 22: VISION",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "All European entries are now in!"
    },
    "enigmarch-2023:march-23": {
        title: "March 23: DICE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "All possibilities are equally likely, so if you don't see something..."
    },
    "enigmarch-2023:march-24": {
        title: "March 24: CRYPT",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Three tombs, connected by more than just purpose."
    },
    "enigmarch-2023:march-25": {
        title: "March 25: KNOT",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "The first thing you wonder is, why?"
    },
    "enigmarch-2023:march-26": {
        title: "March 26: GROW",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "While this may be AI generated, Magic: the Gathering has very talented artists!"
    },
    "enigmarch-2023:march-27": {
        title: "March 27: FIRE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "What three words can help describe these fiery locations?"
    },
    "enigmarch-2023:march-28": {
        title: "March 28: DIAGONAL",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Your opponent may be on the attack, but if you sound out everything you'll get there!"
    },
    "enigmarch-2023:march-29": {
        title: "March 29: QUOTE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "Memorable moments and the characters that delivered them. Or close enough anyway."
    },
    "enigmarch-2023:march-30": {
        title: "March 30: PUSH",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "If you push different things together who knows what will come out!"
    },
    "enigmarch-2023:march-31": {
        title: "March 31: REVERSE",
        round: PuzzleRounds.ENIGMARCH2023,
        description: ""
    },
    "enigmarch-2023:meta": {
        title: "March: META",
        round: PuzzleRounds.ENIGMARCH2023,
        description: "All the flavors have been mixed up! Can you recover the originals and decipher the message?",
        isMeta: true
    },
    "enigmarch-2024:march-1": {
        title: "March 1: DOOR",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "The screendoor zombies aren't too smart, but they can take a beating!",
        solutionAvailable: true
    },
    "enigmarch-2024:march-2": {
        title: "March 2: FALSE",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Normally you would make it true, but not today.",
        solutionAvailable: true
    },
    "enigmarch-2024:march-3": {
        title: "March 3: MUSICAL",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Do these notes even match the song? What could they mean?"
    },
    "enigmarch-2024:march-4": {
        title: "March 4: SHIFT",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "You'll need Alan's Angel Lamp if you want to illuminate this puzzle."
    },
    "enigmarch-2024:march-5": {
        title: "March 5: SIGN",
        round: PuzzleRounds.ENIGMARCH2024,
        description: ""
    },
    "enigmarch-2024:march-6": {
        title: "March 6: ROUND",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "How difficult can it be to be a monkey in a ball?"
    },
    "enigmarch-2024:march-7": {
        title: "March 7: WATCH",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Your Personal Information Processor can do more than tell the time.",
        timeLimit: 300
    },
    "enigmarch-2024:march-8": {
        title: "March 8: ROCK",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Let the food guide you from smallest to largest!"
    },
    "enigmarch-2024:march-9": {
        title: "March 9: THREAD",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Help Tim rebuild the ladder."
    },
    "enigmarch-2024:march-10": {
        title: "March 10: ZERO",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "MissingNo may be the most famous, but there's a family of other glitches in the original 151!"
    },
    "enigmarch-2024:march-11": {
        title: "March 11: BRIDGE",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "This doesn't look like a Hashi puzzle. There's certainly no islands here, and what can the bridges even tell us?"
    },
    "enigmarch-2024:march-12": {
        title: "March 12: SHIELD",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "What is HE protecting?"
    },
    "enigmarch-2024:march-13": {
        title: "March 13: WAVE",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "What sort of acrostic fish did Dave catch?"
    },
    "enigmarch-2024:march-14": {
        title: "March 14: SPIRIT",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Help Link and Zelda rebuild the spirit tracks and defeat Malladus!"
    },
    "enigmarch-2024:march-15": {
        title: "March 15: 3D",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Alligator Memorial Park looks a little odd today, what are all the family members doing?"
    },
    "enigmarch-2024:march-16": {
        title: "March 16: HAND",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "What three Jokers help make this hand?"
    },
    "enigmarch-2024:march-17": {
        title: "March 17: ANCIENT",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Help Lara avoid the traps and claim the treasure before the tomb collapses!",
        timeLimit: 720
    },
    "enigmarch-2024:march-18": {
        title: "March 18: CLUB",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Find a special putter and take a walkabout the course."
    },
    "enigmarch-2024:march-19": {
        title: "March 19: ODD",
        round: PuzzleRounds.ENIGMARCH2024,
        description: "Are these Call of Duty facts true about an odd entry in the main series?"
    },
    "enigmarch-2024:march-20": {
        title: "March 20: NEIGHBOR",
        round: PuzzleRounds.ENIGMARCH2024,
        description: ""
    },
    "enigmarch-2024:march-21": {
        title: "March 21: ???",
        round: PuzzleRounds.ENIGMARCH2024,
        description: ""
    },
    "enigmarch-2024:meta": {
        title: "March: META",
        description: "Each day's answer helps reveal a piece of the final puzzle!",
        round: PuzzleRounds.ENIGMARCH2024,
        isMeta: true
    },
};
