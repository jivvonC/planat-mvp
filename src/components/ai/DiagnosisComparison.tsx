import { Text } from "@/components/common/Typography";
import {
  getDiagnosisExampleCaption,
  getDiagnosisExampleImage,
} from "@/utils/diagnosisAssets";

interface DiagnosisComparisonProps {
  plantImage: string;
  questionKey: string;
}

export function DiagnosisComparison({
  plantImage,
  questionKey,
}: DiagnosisComparisonProps) {
  const exampleImage = getDiagnosisExampleImage(plantImage, questionKey);

  if (!exampleImage) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1.5 rounded-[var(--radius-card)] bg-white/20 p-3">
        <Text
          variant="helper"
          className="text-center font-medium text-white/80 text-[12px]"
        >
          예시 사진
        </Text>
        <div className="mx-auto flex aspect-[4/3] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[var(--radius-input)] bg-white/30">
          <img
            src={exampleImage}
            alt={getDiagnosisExampleCaption(questionKey)}
            className="h-full w-full object-cover"
          />
        </div>
        <Text
          variant="helper"
          className="text-center font-medium text-white text-[12px] leading-tight"
        >
          {getDiagnosisExampleCaption(questionKey)}
        </Text>
      </div>

      <Text
        variant="helper"
        className="text-center font-medium text-white/75 text-[12px]"
      >
        예시를 참고하며 관찰해보세요.
      </Text>
    </div>
  );
}
