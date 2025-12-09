import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti"; // Assuming you have this library installed

// Define the confetti function outside the component to avoid re-creation on render
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

export const Summary = () => {
  // Trigger confetti when the component mounts
  useEffect(() => {
    // A slight delay makes it feel like it's reacting to the page load
    const timer = setTimeout(() => {
      // Running it twice like this creates a slightly bigger initial burst
      triggerConfetti();
      triggerConfetti();
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="min-h-screen bg-[url('assets//IMG-20240224-WA0005.jpg')] bg-center bg-cover flex flex-col items-center justify-center p-4">
      {/* --- Section 1: Major Presents (Grid) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
        {/* --- Present 1: Holiday to Gran Canaria --- */}
        <Card className="shadow-2xl border-4 border-yellow-400 transform hover:scale-[1.02] transition duration-300">
          <CardHeader className="bg-yellow-50 p-6 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-yellow-700">
              ✈️ Holiday to Gran Canaria
            </CardTitle>
            <CardDescription className="text-lg text-yellow-600">
              Staying in a newly renovated hotel!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              The Crew:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Amie</li>
              <li>Adam</li>
              <li>Eli</li>
            </ul>
            <p className="mt-4 text-gray-600 italic">
              We're going in March so probably best to start booking it off
              work!
            </p>
          </CardContent>
        </Card>

        {/* --- Present 2: 3D Printer --- */}
        <Card className="shadow-2xl border-4 border-teal-400 transform hover:scale-[1.02] transition duration-300">
          <CardHeader className="bg-teal-50 p-6 rounded-t-lg">
            <CardTitle className="text-3xl font-bold text-teal-700">
              🖨️ 3D Printer
            </CardTitle>
            <CardDescription className="text-lg text-teal-600">
              Unleash your creative ideas for home hacks and shit
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              What's Next:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Modeling your first creation</li>
              <li>Learning the software</li>
              <li>Printing customized items</li>
            </ul>
            <p className="mt-4 text-gray-600 italic">
              From idea to reality i actually can't wait to see what you create!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* --- Section 2: Minor Presents --- */}
      <h2 className="text-4xl font-bold text-white mb-8 text-center border-b-2 border-purple-300 pb-2">
        ✨ A Few More Treats! ✨
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* --- Minor Present 1: Dinner Date --- */}
        <Card className="shadow-md border border-red-300 hover:shadow-lg transition duration-200">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-semibold text-red-600">
              🍽️ San Sab Dinner Date
            </CardTitle>
            <CardDescription className="text-sm text-red-500">
              On the Tab of Dan OFC
            </CardDescription>
          </CardHeader>
        </Card>

        {/* --- Minor Present 2: Concert Tickets --- */}
        <Card className="shadow-md border border-pink-300 hover:shadow-lg transition duration-200">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-semibold text-pink-600">
              🍽️ One Home Cooked 3-Course Meal with Wine
            </CardTitle>
            <CardDescription className="text-sm text-pink-500">
              Let's have a romantic night in one day where i make you starter
              main and dessert!
            </CardDescription>
          </CardHeader>
        </Card>

        {/* --- Minor Present 3: Personalised Gift --- */}
        <Card className="shadow-md border border-blue-300 hover:shadow-lg transition duration-200">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-semibold text-blue-600">
              🎁 A day out shopping for xmas gifts
            </CardTitle>
            <CardDescription className="text-sm text-blue-500">
              Yeah this is an absolute rebound present hahaha
            </CardDescription>
          </CardHeader>
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
