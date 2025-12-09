import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plane, Sun, Palmtree, Users, Heart } from "lucide-react";
import type { Steps } from "./2025";

interface GiftReveal1Props {
  setStep: (step: Steps) => void;
}

export default function GiftReveal1({ setStep }: GiftReveal1Props) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 300);
    const timer2 = setTimeout(() => setStage(2), 1200);
    const timer3 = setTimeout(() => setStage(3), 2400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('assets//IMG-20240224-WA0009.jpg')] bg-center bg-cover p-4 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-4xl w-full text-center z-10">
        {/* Stage 1: Title */}
        {stage >= 1 && (
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
              Your Second Present
            </h1>
          </div>
        )}

        {/* Stage 2: Main Card - Slow Reveal */}
        {stage >= 2 && (
          <div className="animate-card-reveal">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex justify-center gap-6 mb-8">
                <Plane className="w-16 h-16 md:w-20 md:h-20 text-blue-500" />
                <Sun className="w-16 h-16 md:w-20 md:h-20 text-yellow-500" />
                <Palmtree className="w-16 h-16 md:w-20 md:h-20 text-green-500" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                A Holiday to
              </h2>
              <h2 className="text-5xl md:text-7xl font-black mb-8 text-orange-500">
                GRAN CANARIA! 🌴
              </h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
                  <Users className="w-7 h-7 text-purple-500" />
                  <span className="font-semibold">
                    With Amie, Adam and Eli!
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
                  <Heart className="w-7 h-7 text-pink-500" />
                  <span>
                    Sun, sand, and the 5 best friends anyone could have
                  </span>
                </div>
              </div>

              <div className="text-2xl md:text-3xl text-gray-600 font-light">
                Get ready to support your nephew! ☀️
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Continue Button */}
        {stage >= 3 && (
          <div className="mt-8 animate-fade-in-up">
            <Button
              onClick={() => setStep("END")}
              size="lg"
              className="text-xl px-12 py-6 bg-white text-purple-600 hover:bg-purple-50 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              See All Your Presents! 🎁
            </Button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes card-reveal {
          0% {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0px);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.5;
            transform: scale(1.1);
          }
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .animate-fade-in { 
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-card-reveal { 
          animation: card-reveal 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in-up { 
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-pulse-slow { 
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
