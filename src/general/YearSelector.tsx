import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface YearSelectorProps {
  years: number[];
  onSelectYear: (year: number) => void;
}

export default function YearSelector({
  years,
  onSelectYear,
}: YearSelectorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-4xl text-center">
            Select The Year 🎂
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {years.map((year) => (
              <Button
                key={year}
                onClick={() => onSelectYear(year)}
                size="lg"
                className="h-20 text-2xl"
                variant="outline"
                disabled={year == 2025 ? false : true}
              >
                {year}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
