import { Card, CardContent } from "@/components/ui/card";
import type { Steps } from "./2025";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CardMessageProps {
  setStep: (step: Steps) => void;
}

export default function CardMessage({ setStep }: CardMessageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-purple-100 p-4">
      {/* Back button */}
      <Button
        onClick={() => setStep("HERO")}
        variant="outline"
        size="sm"
        className="absolute top-4 left-4 z-20"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardContent className="p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-4">Dear Love,</p>

            <div className="text-gray-800 leading-relaxed space-y-4 text-lg">
              yoyo message message
            </div>

            <p className="text-sm text-gray-500 mt-8">
              With all my love,
              <br />
              Dan
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-xl font-semibold text-purple-600">
              🎁 Ready for your presents? First you must solve some Puzzles! 🎁
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setStep("PUZZLE1")}
              className="flex justify-center"
              size={"lg"}
            >
              Take me to the first puzzle
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
