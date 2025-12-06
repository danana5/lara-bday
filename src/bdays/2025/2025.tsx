import { useState } from "react";
import HeroSection from "./HeroSection";
import CardMessage from "./CardMessage";
import WordlePuzzle from "./WordlePuzzle";
import GiftReveal1 from "./RevealOne";

export type Steps =
  | "HERO"
  | "MESSAGE"
  | "PUZZLE1"
  | "PUZZLE2"
  | "END"
  | "PRESENT1"
  | "PRESENT2";

export const TwentyTwentyFive = () => {
  const [step, setStep] = useState<Steps>("HERO");

  switch (step) {
    case "HERO":
      return <HeroSection setStep={setStep} />;
    case "MESSAGE":
      return <CardMessage setStep={setStep} />;
    case "PUZZLE1":
      return <WordlePuzzle setStep={setStep} />;
    case "PRESENT1":
      return <GiftReveal1 setStep={setStep} />;
    case "PUZZLE2":
  }
};
