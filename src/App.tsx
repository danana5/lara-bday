import { useState } from "react";
import { birthdayData } from "./bdays/data/bday";
import PasscodeScreen from "./general/PasscodeScreen";
import YearSelector from "./general/YearSelector";
import { TwentyTwentyFive } from "./bdays/2025/2025";

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const availableYears = Object.keys(birthdayData).map(Number);
  const currentData = selectedYear ? birthdayData[selectedYear] : null;

  if (!isUnlocked) {
    return <PasscodeScreen onUnlock={() => setIsUnlocked(true)} />;
  }

  if (!selectedYear) {
    return (
      <YearSelector years={availableYears} onSelectYear={setSelectedYear} />
    );
  }

  if (!currentData) return null;

  switch (selectedYear) {
    case 2025:
      return <TwentyTwentyFive />;
    default:
      return <TwentyTwentyFive />;
  }
}
