import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

type SequencePuzzleProps = {
  sequence: number[];
  answer: number;
  gift: string;
  onSolve: () => void;
};

export default function SequencePuzzle({
  sequence,
  answer,
  gift,
  onSolve,
}: SequencePuzzleProps) {
  const [userAnswer, setUserAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [solved, setSolved] = useState(false);
  const [hint, setHint] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userAnswer.trim() === answer.toString()) {
      setSolved(true);
      onSolve();
    } else {
      setAttempts(attempts + 1);
      if (attempts === 2) {
        setHint("💡 Hint: Look at the pattern carefully!");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            🧩 Puzzle #2: Number Sequence
          </CardTitle>
          <p className="text-center text-sm text-gray-600">
            What comes next in this sequence?
          </p>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <div className="flex justify-center items-center gap-3 text-3xl font-bold mb-2">
              {sequence.map((num, idx) => (
                <span key={idx} className="text-purple-600">
                  {num}
                </span>
              ))}
              <span className="text-gray-400">→</span>
              <span className="text-orange-500">?</span>
            </div>
          </div>

          {!solved ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="number"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter the next number..."
                className="text-center text-xl"
                autoFocus
              />
              <Button type="submit" className="w-full" size="lg">
                Submit Answer
              </Button>

              {hint && (
                <Alert>
                  <AlertDescription>{hint}</AlertDescription>
                </Alert>
              )}

              {attempts > 0 && !solved && (
                <p className="text-center text-sm text-red-500">
                  Try again! ({attempts}{" "}
                  {attempts === 1 ? "attempt" : "attempts"})
                </p>
              )}
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-green-600">🎉 Correct!</p>
              <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
                <p className="text-sm text-gray-600 mb-2">Your Gift:</p>
                <p className="text-xl font-semibold text-purple-700">{gift}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
