import { Card } from "@/components/ui/card";
import { Text } from "@/components/common/Typography";

interface QuestionCardProps {
  question: string;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="p-5 bg-[#49C1C1]/38">
      <Text
        variant="cardTitle"
        as="h2"
        className="text-center leading-snug font-semibold text-[18px] text-white"
      >
        {question}
      </Text>
    </Card>
  );
}
