import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti"; // Assuming you have this library installed

export const Summary = () => {
  // Trigger confetti when the component mounts
  useEffect(() => {
    // A slight delay makes it feel like it's reacting to the page load
    const timer = setTimeout(() => {
      triggerConfetti();
      triggerConfetti();
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const triggerConfetti = () => {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* --- Main Heading --- */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-800 tracking-tight mb-8 text-center">
        🎉 Grand Finale! 🎉
      </h1>

      <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl">
        Here are the two amazing presents you unlocked! Prepare for fun, sun,
        and 3D creation!
      </p>

      {/* --- Presents Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* --- Present 1: Holiday to Gran Canaria --- */}
        <Card className="shadow-2xl border-4 border-yellow-400 transform hover:scale-[1.02] transition duration-300">
          <CardHeader className="bg-yellow-50 p-6 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-yellow-700">
              ✈️ Holiday to Gran Canaria
            </CardTitle>
            <CardDescription className="text-lg text-yellow-600">
              Sun, sand, and great company!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              The Crew:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>**Amie**</li>
              <li>**Adam**</li>
              <li>**Eli**</li>
            </ul>
            <p className="mt-4 text-gray-600 italic">
              Get ready for some much-needed relaxation and adventure!
            </p>
          </CardContent>
        </Card>

        {/* --- Present 2: 3D Printer --- */}
        <Card className="shadow-2xl border-4 border-teal-400 transform hover:scale-[1.02] transition duration-300">
          <CardHeader className="bg-teal-50 p-6 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-teal-700">
              🖨️ Cutting-Edge 3D Printer
            </CardTitle>
            <CardDescription className="text-lg text-teal-600">
              Unleash your creative engineering side.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              What's Next:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Modeling your first creation.</li>
              <li>Learning new slicing software.</li>
              <li>Printing customized gifts!</li>
            </ul>
            <p className="mt-4 text-gray-600 italic">
              From design to reality, the possibilities are endless!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* --- Action Button --- */}
      <div className="mt-12">
        <Button
          onClick={triggerConfetti}
          className="px-10 py-6 text-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-lg transition duration-300"
        >
          Celebrate! 🎉
        </Button>
      </div>
    </div>
  );
};
