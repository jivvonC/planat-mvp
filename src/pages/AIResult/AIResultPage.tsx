import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScreenContent } from "@/components/common/ScreenContent";
import {
  DiagnosisSummary,
  ObservationsSection,
  PreventionTipSection,
  TodayCareSection,
  WhyHappenedSection,
} from "@/components/ai";
import { ScreenLayout } from "@/layouts/ScreenLayout";
import { useDiagnosisResult } from "@/pages/AIResult/hooks/useDiagnosisResult";
import { usePlantStore } from "@/store/plantStore";

export default function AIResultPage() {
  const { plantId, result, isReady, handleConfirm } = useDiagnosisResult();
  const plant = usePlantStore((state) =>
    state.plants.find((item) => item.id === plantId),
  );

  if (!plant) {
    return <Navigate to="/plants" replace />;
  }

  if (!isReady || !result) {
    return <Navigate to={`/plants/${plantId}/diagnosis`} replace />;
  }

  return (
    <ScreenLayout
      title="진단 결과"
      showBack
      className="bg-gradient-to-b from-[#425B62] to-[#32A9A9]"
    >
      <ScreenContent className="gap-5 pb-8">
        <DiagnosisSummary
          title={result.title}
          reassurance={result.reassurance}
        />

        {result.observations.length > 0 ? (
          <ObservationsSection observations={result.observations} />
        ) : null}

        <WhyHappenedSection paragraphs={result.whyHappened} />
        <TodayCareSection actions={result.todayCare} />
        <PreventionTipSection tip={result.preventionTip} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
          className="pt-2"
        >
          <Button fullWidth onClick={handleConfirm}>
            확인했어요
          </Button>
        </motion.div>
      </ScreenContent>
    </ScreenLayout>
  );
}
