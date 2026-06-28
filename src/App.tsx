import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "@/layouts/AppLayout";
import { MainTabLayout } from "@/layouts/MainTabLayout";
import { OnboardingRoute, RequireOnboarding } from "@/layouts/OnboardingGate";
import DiagnosisModePage from "@/pages/AIDiagnosis/DiagnosisModePage";
import AIDiagnosisPage from "@/pages/AIDiagnosis/AIDiagnosisPage";
import PhotoDiagnosisPage from "@/pages/AIDiagnosis/PhotoDiagnosisPage";
import AIResultPage from "@/pages/AIResult/AIResultPage";
import CalendarPage from "@/pages/Calendar/CalendarPage";
import NotificationPage from "@/pages/Notification/NotificationPage";
import OnboardingPage from "@/pages/Onboarding/OnboardingPage";
import PlantDetailPage from "@/pages/PlantDetail/PlantDetailPage";
import PlantsPage from "@/pages/Plants/PlantsPage";
import ProductDetailPage from "@/pages/ProductDetail/ProductDetailPage";
import StorePage from "@/pages/Store/StorePage";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<OnboardingRoute />}>
          <Route path="onboarding" element={<OnboardingPage />} />
        </Route>

        <Route element={<RequireOnboarding />}>
          <Route element={<MainTabLayout />}>
            <Route index element={<Navigate to="/plants" replace />} />
            <Route path="plants" element={<PlantsPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="store" element={<StorePage />} />
          </Route>
          <Route path="plants/:id" element={<PlantDetailPage />} />
          <Route path="plants/:id/diagnosis" element={<DiagnosisModePage />} />
          <Route
            path="plants/:id/diagnosis/manual"
            element={<AIDiagnosisPage />}
          />
          <Route
            path="plants/:id/diagnosis/photo"
            element={<PhotoDiagnosisPage />}
          />
          <Route path="plants/:id/diagnosis/result" element={<AIResultPage />} />
          <Route path="store/:productId" element={<ProductDetailPage />} />
          <Route path="notifications" element={<NotificationPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
