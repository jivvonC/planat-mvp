import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDiagnosisStore } from "@/store/diagnosisStore";
import { useUIStore } from "@/store/uiStore";
import { resolveDiagnosisResult } from "@/utils/diagnosisResolver";

export function useDiagnosisResult() {
  const navigate = useNavigate();
  const { id: plantId = "" } = useParams();

  const session = useDiagnosisStore((state) => state.session);
  const resultsConfig = useDiagnosisStore((state) => state.resultsConfig);
  const confirmDiagnosis = useDiagnosisStore((state) => state.confirmDiagnosis);
  const showToast = useUIStore((state) => state.showToast);

  const result = useMemo(() => {
    if (!session || session.status !== "completed") {
      return null;
    }
    return resolveDiagnosisResult(session, resultsConfig);
  }, [session, resultsConfig]);

  const handleConfirm = () => {
    if (!result) {
      return;
    }

    confirmDiagnosis(result);
    showToast("식물의 상태를 함께 확인했어요.");
    navigate(`/plants/${plantId}`, { replace: true });
  };

  const isReady = Boolean(session?.status === "completed" && result);

  return {
    plantId,
    session,
    result,
    isReady,
    handleConfirm,
  };
}
