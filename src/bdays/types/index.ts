export interface BirthdayYear {
  name: string;
  message: string;
  puzzles: {
    wordle: {
      answer: string;
      gift: string;
    };
    sequence: {
      sequence: number[];
      answer: number;
      gift: string;
    };
  };
}

export interface BirthdayData {
  [year: number]: BirthdayYear;
}
