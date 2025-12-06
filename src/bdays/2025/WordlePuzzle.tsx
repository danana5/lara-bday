import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import type { Steps } from "./2025";
import confetti from "canvas-confetti";

type WordlePuzzleProps = {
  setStep: (step: Steps) => void;
};

interface LetterResult {
  letter: string;
  status: "correct" | "present" | "absent" | "unknown";
}

export default function WordlePuzzle({ setStep }: WordlePuzzleProps) {
  const [guesses, setGuesses] = useState<LetterResult[][]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [solved, setSolved] = useState(false);
  const answer = "SUNNY";

  const MAX_GUESSES = 6;
  const WORD_LENGTH = answer.length;

  const checkGuess = (guess: string): LetterResult[] => {
    const result: LetterResult[] = [];
    const answerArray = answer.toUpperCase().split("");
    const guessArray = guess.toUpperCase().split("");

    // Check for correct positions (green)
    guessArray.forEach((letter, i) => {
      if (letter === answerArray[i]) {
        result.push({ letter, status: "correct" });
        answerArray[i] = ""; // Mark as used
      } else {
        result.push({ letter, status: "unknown" });
      }
    });

    // Check for wrong positions (yellow)
    result.forEach((item, i) => {
      if (item.status === "unknown") {
        const idx = answerArray.indexOf(item.letter);
        if (idx !== -1) {
          item.status = "present";
          answerArray[idx] = "";
        } else {
          item.status = "absent";
        }
      }
    });

    return result;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (currentGuess.length !== WORD_LENGTH) return;

    const result = checkGuess(currentGuess);
    setGuesses([...guesses, result]);

    if (currentGuess.toUpperCase() === answer.toUpperCase()) {
      setSolved(true);
      triggerConfetti();
    }

    setCurrentGuess("");
  };

  const getColorClass = (status: LetterResult["status"]): string => {
    switch (status) {
      case "correct":
        return "bg-green-500 text-white";
      case "present":
        return "bg-yellow-500 text-white";
      case "absent":
        return "bg-gray-400 text-white";
      default:
        return "bg-white border-2 border-gray-300";
    }
  };

  const triggerConfetti = () => {
    console.log("heres");
    const defaults = {
      // How long the effect lasts in seconds
      duration: 3 * 1000,
      // The number of pieces to launch
      particleCount: 150,
      // How wide the initial spray is (360 is full circle)
      spread: 360,
      // The direction the particles travel (90 is straight up)
      startVelocity: 55,
      scalar: 1.2,
    };

    // Launch from the left side of the screen (x: 0)
    confetti({
      ...defaults,
      origin: { x: 0, y: 0.8 }, // Start near the bottom left
    });

    // Launch from the right side of the screen (x: 1)
    confetti({
      ...defaults,
      origin: { x: 1, y: 0.8 }, // Start near the bottom right
    });
  };

  const reset = () => {
    setCurrentGuess("");
    setGuesses([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 p-4 relative">
      {/* Back button */}
      <Button
        onClick={() => setStep("MESSAGE")}
        variant="secondary"
        size="sm"
        className="absolute top-4 left-4 z-20"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">🎮 Puzzle #1: Wordle</CardTitle>
          <p className="text-center text-sm text-gray-600">
            Guess the {WORD_LENGTH}-letter word! The word is related to the
            present.
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 mb-6">
            {guesses.map((guess, guessIdx) => (
              <div key={guessIdx} className="flex gap-2 justify-center">
                {guess.map((item, i) => (
                  <div
                    key={i}
                    className={`w-14 h-14 flex items-center justify-center text-2xl font-bold rounded ${getColorClass(
                      item.status
                    )}`}
                  >
                    {item.letter}
                  </div>
                ))}
              </div>
            ))}

            {/* Empty rows */}
            {[...Array(MAX_GUESSES - guesses.length)].map((_, i) => (
              <div key={`empty-${i}`} className="flex gap-2 justify-center">
                {[...Array(WORD_LENGTH)].map((_, j) => (
                  <div
                    key={j}
                    className="w-14 h-14 border-2 border-gray-300 rounded"
                  />
                ))}
              </div>
            ))}
          </div>

          {!solved && guesses.length < MAX_GUESSES && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                maxLength={WORD_LENGTH}
                value={currentGuess}
                onChange={(e) => setCurrentGuess(e.target.value.toUpperCase())}
                placeholder={`Enter ${WORD_LENGTH} letters...`}
                className="text-center text-xl tracking-widest uppercase"
                autoFocus
              />
              <Button type="submit" className="w-full" size="lg">
                Submit Guess
              </Button>
            </form>
          )}

          {solved && (
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-green-600">🎉 Correct!</p>
              <Button onClick={() => setStep("PRESENT1")}>
                Reveal Present
              </Button>
            </div>
          )}

          {!solved && guesses.length >= MAX_GUESSES && (
            <div className="text-center">
              <p className="text-red-600 mb-2">Out of guesses!</p>
              <Button variant={"link"} onClick={reset}>
                Start Again?
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
