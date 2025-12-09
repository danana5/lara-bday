import { Card, CardContent } from "@/components/ui/card";
import type { Steps } from "./2025";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CardMessageProps {
  setStep: (step: Steps) => void;
}

export default function CardMessage({ setStep }: CardMessageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('assets/IMG-20250501-WA0192.jpg')] bg-center bg-cover p-4">
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
      <Card className="w-full max-w-3xl shadow-2xl mx-auto ml-80">
        <CardContent className="p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-500 mb-4">Dear Lara,</p>

            <div className="text-gray-800 leading-relaxed space-y-4 text-lg">
              well, this year for your birthday i thought i'd put in half as
              much effort as you do for my birthday. Starting off with the card.
              You know i have a thing with cards so i spend some time
              brainstorming how i could do a card in a cool way. basically i had
              this idea that i could create an online portal where i could add
              your birthday cards to for each year and we could have them
              documented so we could go back to them over time. i basically
              thought, you're good at crafts so i was like what am i good at?
              coding.
              <br />
              so yeah here is your online birthday card for your 25th bday. what
              a year it has been my gawd. from australia to wexford to belfast
              to swords. you've done more travelling this year than some people
              do in their entire lives. i'm so thankful you're home now and am
              so excited for the future with you.
              <br />
              now at this stage you're probably wondering where or what your
              presents are. so yeah had a long hard think about what to do for
              the presents and i basically decided that instead of doing many
              small presents, why not do two big presents? and then I was like
              how can I reveal them to her? this is where the fun begins... i
              know you love puzzle games so i decided i'd build out some puzzles
              for you to solve in order to reveal the presents.
              <br />i love you so much lara! Hope you enjoy your presents!
            </div>

            <p className="text-sm text-gray-500 mt-8">
              With all my love,
              <br />
              Dan
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-center text-xl font-semibold ">
              🎁 Ready for your presents? 🎁
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setStep("PUZZLE2")}
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
