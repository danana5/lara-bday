import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import type { Steps } from "./2025";

type HeroSectionProps = {
  setStep: (step: Steps) => void;
};

export default function HeroSection({ setStep }: HeroSectionProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative bg-[url('assets//IMG-20250418-WA0060.jpg')] bg-center bg-cover">
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-4xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      <div className="z-10 text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold animate-fade-in">
          Happy 25th Birthday!
        </h1>
        <p className="text-3xl md:text-5xl font-light animate-fade-in-delay">
          Lara
        </p>

        <Button
          onClick={() => setStep("MESSAGE")}
          size="lg"
          variant="secondary"
          className="mt-12 animate-bounce"
        >
          Read Your Card <ChevronDown className="ml-2" />
        </Button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(100vh) rotate(0deg); }
          50% { transform: translateY(-20vh) rotate(180deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float linear infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s backwards; }
        .animate-fade-in-delay-2 { animation: fade-in 1s ease-out 0.6s backwards; }
      `}</style>
    </div>
  );
}
