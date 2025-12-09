import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Box, Sparkles, Zap, Layers, Rocket } from "lucide-react";
import type { Steps } from "./2025";

interface GiftReveal2Props {
  setStep: (step: Steps) => void;
}

export default function GiftReveal2({ setStep }: GiftReveal2Props) {
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
    <div className="min-h-screen flex items-center justify-center bg-[url('assets//IMG-20250410-WA0015.jpg')] bg-center bg-cover p-4 relative overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-4xl w-full text-center z-10">
        {/* Stage 1: Title */}
        {stage >= 1 && (
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
              Your First Present
            </h1>
          </div>
        )}

        {/* Stage 2: Main Card - Slow Reveal */}
        {stage >= 2 && (
          <div className="animate-card-reveal">
            <div className="bg-gradient-to-br from-white to-purple-50 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-purple-300/50 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="flex justify-center gap-6 mb-8">
                <Box className="w-16 h-16 md:w-20 md:h-20 text-purple-600" />
                <Layers className="w-16 h-16 md:w-20 md:h-20 text-blue-600" />
                <Rocket className="w-16 h-16 md:w-20 md:h-20 text-pink-600" />
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Your Very Own
              </h2>
              <h2 className="text-5xl md:text-8xl font-black mb-8 text-purple-600">
                3D PRINTER! 🖨️✨
              </h2>

              <div className="space-y-4 text-gray-700 mb-8">
                <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
                  <Zap className="w-7 h-7 text-yellow-500" />
                  <span className="font-semibold">
                    A Bambu Lab A1 mini 3D Printer!
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 text-xl md:text-2xl">
                  <Sparkles className="w-7 h-7 text-purple-500" />
                  <span>Time Turn your ideas into reality</span>
                </div>
              </div>

              <div className="text-2xl md:text-3xl text-gray-600 font-light">
                Start thinking about what we could do with for our house! 🚀
              </div>
            </div>
          </div>
        )}

        {/* Stage 3: Finish Button */}
        {stage >= 3 && (
          <div className="mt-8 animate-fade-in-up">
            <Button
              onClick={() => setStep("PUZZLE1")}
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              Go To Puzzle #2! 🎊
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
            opacity: 0.2;
            transform: scale(1);
          }
          50% { 
            opacity: 0.4;
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
