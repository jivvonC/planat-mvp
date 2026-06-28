import { Text } from "@/components/common/Typography";

interface ObservationGuideProps {
  text: string;
}

export function ObservationGuide({ text }: ObservationGuideProps) {
  return (
    <Text
      variant="caption"
      muted
      className="px-1 text-center leading-relaxed whitespace-pre-line text-white/80 font-medium text-[14px]"
    >
      {text}
    </Text>
  );
}
