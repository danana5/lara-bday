import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface PasscodeScreenProps {
  onUnlock: () => void;
}

export default function PasscodeScreen({ onUnlock }: PasscodeScreenProps) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");

  const CORRECT_PASSCODE = "dcu"; // Change this!

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (passcode.toLowerCase() === CORRECT_PASSCODE) {
      onUnlock();
    } else {
      setError("Incorrect passcode. Try again! 💝");
      setPasscode("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-3xl text-center">
            To unlock, answer this question: where was our first date?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Hmmm..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="text-center text-xl tracking-widest"
              autoFocus
            />
            <Button type="submit" className="w-full" size="lg">
              Unlock
            </Button>
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
