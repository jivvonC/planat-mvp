import { motion } from "framer-motion";
import { Camera, ClipboardList } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Text } from "@/components/common/Typography";
import { ScreenContent } from "@/components/common/ScreenContent";
import { Card } from "@/components/ui/card";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import { usePlantStore } from "@/store/plantStore";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface ModeOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function ModeOption({ icon, title, description, onClick }: ModeOptionProps) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "flex cursor-pointer flex-col gap-2 border-0 bg-white/80 p-4 shadow-[var(--shadow-card)]",
        "transition-transform active:scale-[0.98]",
      )}
    >
      <div className="flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-planat-primary-light/20 text-planat-primary-dark">
          {icon}
        </span>
        <Text variant="cardTitle" as="h2" className="font-semibold text-[16px]">
          {title}
        </Text>
      </div>
      <Text variant="caption" muted className="leading-relaxed">
        {description}
      </Text>
    </Card>
  );
}

export default function DiagnosisModePage() {
  const navigate = useNavigate();
  const { id: plantId = "" } = useParams();
  const resetSession = useDiagnosisStore((state) => state.resetSession);
  const plant = usePlantStore((state) =>
    state.plants.find((item) => item.id === plantId),
  );

  useEffect(() => {
    resetSession();
  }, [resetSession]);

  if (!plant) {
    return <Navigate to="/plants" replace />;
  }

  return (
    <ScreenLayout
      title="AI 진단"
      showBack
      className="bg-gradient-to-b from-[#425B62] to-[#32A9A9]"
    >
      <ScreenContent className="flex flex-1 gap-5 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col gap-1 text-center"
        >
          <Text
            variant="caption"
            className="text-white font-semibold text-[18px]"
          >
            어떻게 진단을 시작할까요?
          </Text>
          <Text
            variant="helper"
            className="text-white/80 font-medium text-[12px]"
          >
            {plant.nickname}의 상태를 살펴볼 방법을 골라주세요.
          </Text>
        </motion.div>

        <div className="flex flex-col gap-3">
          <ModeOption
            icon={<Camera className="h-5 w-5" aria-hidden="true" />}
            title="사진으로 진단하기"
            description="식물 사진을 찍으면 AI가 잎과 흙 상태를 살펴보고 결과를 알려드려요."
            onClick={() => navigate(`/plants/${plantId}/diagnosis/photo`)}
          />
          <ModeOption
            icon={<ClipboardList className="h-5 w-5" aria-hidden="true" />}
            title="직접 관찰하며 진단하기"
            description="질문에 차근차근 답하면서 관찰한 내용을 바탕으로 결과를 확인해요."
            onClick={() => navigate(`/plants/${plantId}/diagnosis/manual`)}
          />
        </div>
      </ScreenContent>
    </ScreenLayout>
  );
}
