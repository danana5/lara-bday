import { type BirthdayData } from "../types";

export const birthdayData: BirthdayData = {
  2025: {
    name: "Love",
    message: `Another year with you, another year of joy, laughter, and endless love.

You make every day brighter just by being you. Your smile lights up my world, and your kindness inspires me every single day.

This year, I wanted to do something special to show you how much you mean to me. So I made you this little website to celebrate you!

I hope you love your gifts. You deserve the world and so much more. 💝`,

    puzzles: {
      wordle: {
        answer: "HEART", // The word to guess
        gift: "A romantic weekend getaway! ✈️",
      },
      sequence: {
        sequence: [2, 4, 8, 16, 32], // Powers of 2
        answer: 64,
        gift: "Dinner at your favorite restaurant! 🍽️",
      },
    },
  },

  // Add future years here
  2026: {
    name: "Love",
    message: "Your 2026 message goes here...",
    puzzles: {
      wordle: {
        answer: "SMILE",
        gift: "Gift for 2026...",
      },
      sequence: {
        sequence: [1, 3, 6, 10, 15],
        answer: 21,
        gift: "Another gift for 2026...",
      },
    },
  },

  // Add future years here
  2027: {
    name: "Love",
    message: "",
    puzzles: {
      wordle: {
        answer: "",
        gift: "",
      },
      sequence: {
        sequence: [1, 3, 6, 10, 15],
        answer: 21,
        gift: "",
      },
    },
  },
};
