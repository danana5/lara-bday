import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Sparkles } from "lucide-react";
import type { Steps } from "./2025";

type ConnectionsPuzzleProps = {
  setStep: (step: Steps) => void;
};

interface FoundCategory {
  name: string;
  words: string[];
  color: string;
}

const categories = [
  {
    name: "3D Printing Materials",
    words: ["PLA", "RESIN", "ABS", "NYLON"],
    color: "yellow",
    difficulty: 1,
  },
  {
    name: "Creative Hobbies You Are Good At",
    words: ["CRAFTING", "PAINTING", "SEWING", "DESIGN"],
    color: "green",
    difficulty: 2,
  },
  {
    name: "Home Organization",
    words: ["STORAGE", "SHELVES", "HOOKS", "BOXES"],
    color: "blue",
    difficulty: 3,
  },
  {
    name: "Things You Can 3D Print",
    words: ["VASE", "HOLDER", "STAND", "TOOL"],
    color: "purple",
    difficulty: 4,
  },
];

export default function ConnectionsPuzzle({ setStep }: ConnectionsPuzzleProps) {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [foundCategories, setFoundCategories] = useState<FoundCategory[]>([]);
  const [remainingWords, setRemainingWords] = useState<string[]>(() => {
    // Shuffle all words together
    const allWords = categories.flatMap((cat) => cat.words);
    return allWords.sort(() => Math.random() - 0.5);
  });
  const [mistakes, setMistakes] = useState(0);
  const [message, setMessage] = useState("");
  const [solved, setSolved] = useState(false);

  const MAX_MISTAKES = 4;

  const toggleWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else if (selectedWords.length < 4) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const deselectAll = () => {
    setSelectedWords([]);
  };

  const shuffle = () => {
    setRemainingWords([...remainingWords].sort(() => Math.random() - 0.5));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedWords.length !== 4) {
      setMessage("Select exactly 4 words!");
      setTimeout(() => setMessage(""), 2000);
      return;
    }

    // Check if selected words match any category
    const matchedCategory = categories.find((cat) => {
      const categoryWords = cat.words.sort().join(",");
      const selected = selectedWords.sort().join(",");
      return categoryWords === selected;
    });

    if (matchedCategory) {
      // Correct!
      const newFoundCategories = [
        ...foundCategories,
        {
          name: matchedCategory.name,
          words: matchedCategory.words,
          color: matchedCategory.color,
        },
      ];
      setFoundCategories(newFoundCategories);
      setRemainingWords(
        remainingWords.filter((w) => !selectedWords.includes(w))
      );
      setSelectedWords([]);
      setMessage("🎉 Correct!");
      setTimeout(() => setMessage(""), 2000);

      // Check if all categories found
      if (newFoundCategories.length === categories.length) {
        setSolved(true);
      }
    } else {
      // Check if one away
      const oneAway = categories.some((cat) => {
        const matchCount = selectedWords.filter((w) =>
          cat.words.includes(w)
        ).length;
        return matchCount === 3;
      });

      setMistakes(mistakes + 1);
      if (oneAway) {
        setMessage("One away...");
      } else {
        setMessage("Not quite! Try again.");
      }
      setTimeout(() => setMessage(""), 2000);

      if (mistakes + 1 >= MAX_MISTAKES) {
        setMessage("Out of guesses! Here are the answers:");
        // Reveal all categories
        const allCategories = categories.map((cat) => ({
          name: cat.name,
          words: cat.words,
          color: cat.color,
        }));
        setFoundCategories(allCategories);
        setRemainingWords([]);
      }
    }
  };

  const getCategoryColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      yellow: "bg-yellow-400",
      green: "bg-green-400",
      blue: "bg-blue-400",
      purple: "bg-purple-400",
    };
    return colorMap[color] || "bg-gray-400";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4 relative">
      {/* Back button */}
      <Button
        onClick={() => setStep("PRESENT1")}
        variant="secondary"
        size="sm"
        className="absolute top-4 left-4 z-20"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>

      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center">
            🧩 Puzzle #2: Connections
          </CardTitle>
          <p className="text-center text-sm text-gray-600">
            Find groups of four related words
          </p>
          <div className="flex justify-center gap-2 mt-2">
            {[...Array(MAX_MISTAKES)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < mistakes ? "bg-red-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          {/* Found Categories */}
          <div className="space-y-2 mb-4">
            {foundCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`${getCategoryColorClass(cat.color)} p-4 rounded-lg`}
              >
                <div className="font-bold text-gray-800 mb-1 uppercase text-sm">
                  {cat.name}
                </div>
                <div className="text-gray-800 text-sm">
                  {cat.words.join(", ")}
                </div>
              </div>
            ))}
          </div>

          {!solved && remainingWords.length > 0 && (
            <>
              {/* Word Grid */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {remainingWords.map((word, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleWord(word)}
                    className={`p-4 rounded-lg font-semibold text-sm transition-all ${
                      selectedWords.includes(word)
                        ? "bg-gray-700 text-white scale-95"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                    }`}
                  >
                    {word}
                  </button>
                ))}
              </div>

              {/* Message */}
              {message && (
                <Alert className="mb-4">
                  <AlertDescription className="text-center">
                    {message}
                  </AlertDescription>
                </Alert>
              )}

              {/* Controls */}
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={shuffle}
                  variant="outline"
                  disabled={mistakes >= MAX_MISTAKES}
                >
                  Shuffle
                </Button>
                <Button
                  onClick={deselectAll}
                  variant="outline"
                  disabled={
                    selectedWords.length === 0 || mistakes >= MAX_MISTAKES
                  }
                >
                  Deselect All
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={
                    selectedWords.length !== 4 || mistakes >= MAX_MISTAKES
                  }
                  size="lg"
                >
                  Submit
                </Button>
              </div>
            </>
          )}

          {solved && (
            <div className="text-center space-y-4 mt-4">
              <div className="flex justify-center">
                <Sparkles className="w-16 h-16 text-yellow-500" />
              </div>
              <p className="text-2xl font-bold text-green-600">
                🎉 Amazing! All Categories Found!
              </p>
              <div className="text-center space-y-4">
                <p className="text-2xl font-bold text-green-600">🎉 Correct!</p>
                <Button onClick={() => setStep("PRESENT2")}>
                  Reveal Present
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
