import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Camera, Loader2 } from "lucide-react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScreenContent } from "@/components/common/ScreenContent";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import { usePlantStore } from "@/store/plantStore";
import { inferDiagnosisAnswersFromPlant } from "@/utils/diagnosisPhoto";
import { getFlowQuestions } from "@/utils/diagnosisSession";
import { DEFAULT_DIAGNOSIS_FLOW_ID } from "@/types/Diagnosis";

type PhotoDiagnosisStep = "idle" | "preview" | "analyzing";

export default function PhotoDiagnosisPage() {
  const navigate = useNavigate();
  const { id: plantId = "" } = useParams();
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<PhotoDiagnosisStep>("idle");
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);

  const plant = usePlantStore((state) =>
    state.plants.find((item) => item.id === plantId),
  );
  const flows = useDiagnosisStore((state) => state.flows);
  const completePhotoSession = useDiagnosisStore(
    (state) => state.completePhotoSession,
  );

  useEffect(() => {
    return () => {
      if (photoPreviewUrl?.startsWith("blob:")) {
        URL.revokeObjectURL(photoPreviewUrl);
      }
    };
  }, [photoPreviewUrl]);

  const runAnalysis = useCallback(
    async (photoUrl: string) => {
      if (!plant) {
        return;
      }

      setStep("analyzing");

      const questions = getFlowQuestions(flows, DEFAULT_DIAGNOSIS_FLOW_ID);
      const answers = inferDiagnosisAnswersFromPlant(plant, questions);

      await new Promise((resolve) => window.setTimeout(resolve, 1400));

      completePhotoSession(plantId, photoUrl, answers);
      navigate(`/plants/${plantId}/diagnosis/result`, { replace: true });
    },
    [completePhotoSession, flows, navigate, plant, plantId],
  );

  const handlePhotoSelected = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) {
        return;
      }

      const photoUrl = URL.createObjectURL(file);
      setPhotoPreviewUrl(photoUrl);
      setStep("preview");
      event.target.value = "";
    },
    [],
  );

  const handleStartAnalysis = useCallback(() => {
    if (!photoPreviewUrl) {
      return;
    }

    void runAnalysis(photoPreviewUrl);
  }, [photoPreviewUrl, runAnalysis]);

  if (!plant) {
    return <Navigate to="/plants" replace />;
  }

  return (
    <ScreenLayout
      title="사진 진단"
      showBack
      className="bg-gradient-to-b from-[#425B62] to-[#32A9A9]"
    >
      <ScreenContent className="flex flex-1 gap-5 pb-8">
        <div className="flex flex-col gap-1 text-center">
          <Text
            variant="caption"
            className="text-white font-semibold text-[18px]"
          >
            {plant.nickname}의 사진을 찍어볼까요?
          </Text>
          <Text
            variant="helper"
            className="text-white/80 font-medium text-[12px]"
          >
            잎과 흙이 잘 보이도록 가까이에서 찍어주세요.
          </Text>
        </div>

        <Card className="flex flex-1 flex-col items-center justify-center gap-4 border-0 bg-white/20 p-4 shadow-[var(--shadow-card)]">
          {step === "analyzing" ? (
            <div className="flex flex-col items-center gap-3 py-10">
              <Loader2
                className="h-10 w-10 animate-spin text-white"
                aria-hidden="true"
              />
              <Text variant="body" className="text-center text-white font-medium">
                사진을 살펴보고 있어요...
              </Text>
            </div>
          ) : photoPreviewUrl ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex w-full flex-col gap-4"
            >
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-card)] bg-white/30">
                <img
                  src={photoPreviewUrl}
                  alt={`${plant.nickname} 진단 사진`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  fullWidth
                  onClick={() => photoInputRef.current?.click()}
                >
                  다시 찍기
                </Button>
                <Button fullWidth onClick={handleStartAnalysis}>
                  진단하기
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-4 py-8">
              <button
                type="button"
                onClick={() => photoInputRef.current?.click()}
                className="flex h-28 w-28 items-center justify-center rounded-full bg-white/30 text-white transition-transform active:scale-[0.97]"
                aria-label="식물 사진 촬영"
              >
                <Camera className="h-10 w-10" aria-hidden="true" />
              </button>
              <Text variant="caption" className="text-center text-white/80">
                버튼을 눌러 사진을 촬영하거나
                <br />
                앨범에서 선택할 수 있어요.
              </Text>
            </div>
          )}
        </Card>

        <input
          ref={photoInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handlePhotoSelected}
        />
      </ScreenContent>
    </ScreenLayout>
  );
}
