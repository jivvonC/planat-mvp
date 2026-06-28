import { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import planetIllustration from "@/assets/images/illustrations/planet.png";
import { Button } from "@/components/ui/button";
import { OnboardingDelayedReveal } from "@/components/onboarding/OnboardingDelayedReveal";
import {
  FeatureIntroIllustration,
  OnboardingDescription,
  OnboardingDiagnosisPreview,
  OnboardingInput,
  OnboardingLayout,
  OnboardingLocationWeatherPreview,
  OnboardingNotificationPreview,
  OnboardingPlanetHero,
  OnboardingTitle,
  OnboardingWidgetAddPreview,
} from "@/components/onboarding";
import {
  ONBOARDING_STEP_COUNT,
  ONBOARDING_STEPS,
  type OnboardingStep,
  useOnboardingStore,
} from "@/store/onboardingStore";
import { useUIStore } from "@/store/uiStore";
import { useUserStore } from "@/store/userStore";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [stepIndex, setStepIndex] = useState(0);
  const [nameInput, setNameInput] = useState("");
  const [regionInput, setRegionInput] = useState("");
  const [exiting, setExiting] = useState(false);

  const userName = useOnboardingStore((state) => state.userName);
  const setUserName = useOnboardingStore((state) => state.setUserName);
  const setRegion = useOnboardingStore((state) => state.setRegion);
  const completeOnboarding = useOnboardingStore(
    (state) => state.completeOnboarding,
  );
  const updateUserName = useUserStore((state) => state.updateUserName);
  const showToast = useUIStore((state) => state.showToast);

  const currentStep = ONBOARDING_STEPS[stepIndex] ?? "welcome";
  const displayName = nameInput.trim() || userName;

  const goNext = useCallback(() => {
    setStepIndex((previous) =>
      Math.min(previous + 1, ONBOARDING_STEP_COUNT - 1),
    );
  }, []);

  const goBack = useCallback(() => {
    setStepIndex((previous) => Math.max(previous - 1, 0));
  }, []);

  const finishOnboarding = useCallback(
    (region?: string) => {
      const finalName = nameInput.trim() || userName;
      if (finalName) {
        setUserName(finalName);
        updateUserName(finalName);
      }

      if (region !== undefined) {
        setRegion(region);
      }

      setExiting(true);
      completeOnboarding();

      window.setTimeout(() => {
        showToast(`${finalName || "식물"}님, 이제 함께 식물을 돌봐볼까요? 🌿`);
        navigate("/plants", { replace: true });
      }, 550);
    },
    [
      completeOnboarding,
      nameInput,
      navigate,
      setRegion,
      setUserName,
      showToast,
      updateUserName,
      userName,
    ],
  );

  const handleNameNext = () => {
    const trimmed = nameInput.trim();
    if (!trimmed) {
      return;
    }

    setUserName(trimmed);
    goNext();
  };

  const handleLocationNext = () => {
    setRegion(regionInput.trim());
    goNext();
  };

  const handleLocationSkip = () => {
    setRegion("");
    goNext();
  };

  const renderStep = (step: OnboardingStep) => {
    switch (step) {
      case "welcome":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            illustration={
              <FeatureIntroIllustration
                src={planetIllustration}
                alt="Planat 행성"
                className="py-4"
              />
            }
            title={
              <div className="flex flex-col gap-0.5">
                <OnboardingTitle
                  lines={["안녕하세요.", "Planat에 오신 것을 환영해요."]}
                  className="leading-tight"
                />
              </div>
            }
            description={
              <div className="flex flex-col gap-0.5">
                <OnboardingDescription
                  lines={[
                    "내가 식물과 함께 보낸 시간은",
                    "세상에 단 하나뿐인 관계가 됩니다.",
                  ]}
                  className="leading-snug"
                />
              </div>
            }
            footer={
              <OnboardingDelayedReveal>
                <Button
                  fullWidth
                  size="lg"
                  onClick={goNext}
                  className="font-semibold text-[16px]"
                >
                  시작하기
                </Button>
              </OnboardingDelayedReveal>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );

      case "name":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            showBack
            onBack={goBack}
            title={
              <OnboardingTitle
                lines={["Planat이 부를 이름을 알려주세요."]}
                className="leading-tight"
              />
            }
            description={
              <OnboardingDescription
                lines={[
                  "Planat이 더 다정하게 함께할 수 있도록",
                  "이름을 알려주세요.",
                ]}
                className="leading-snug"
              />
            }
            footer={
              <>
                <OnboardingDelayedReveal>
                  <OnboardingInput
                    label=""
                    value={nameInput}
                    onChange={setNameInput}
                    placeholder="이름을 입력해주세요."
                  />
                </OnboardingDelayedReveal>
                <OnboardingDelayedReveal delayOffset={0.12}>
                  <Button
                    fullWidth
                    size="lg"
                    className="mt-4"
                    disabled={nameInput.trim().length < 1}
                    onClick={handleNameNext}
                  >
                    다음
                  </Button>
                </OnboardingDelayedReveal>
              </>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );

      case "philosophy":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            showBack
            onBack={goBack}
            illustration={<OnboardingPlanetHero />}
            textClassName="mt-6"
            title={
              <OnboardingTitle
                lines={["식물은 매일의", "작은 손길을 기다립니다."]}
                className="leading-tight"
              />
            }
            description={
              <OnboardingDescription
                lines={[
                  "Planat은 식물을 관리하는 앱을 넘어서,",
                  "매일 식물을 조금 더 오래 바라보고,",
                  "조금 더 잘 이해할 수 있도록 돕는 공간입니다.",
                ]}
                className="leading-tight"
              />
            }
            footer={
              <OnboardingDelayedReveal>
                <Button fullWidth size="lg" onClick={goNext}>
                  다음
                </Button>
              </OnboardingDelayedReveal>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );

      case "ai-diagnosis":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            showBack
            onBack={goBack}
            illustration={<OnboardingDiagnosisPreview />}
            title={
              <OnboardingTitle
                lines={[
                  "사진으로도,",
                  "함께 관찰하면서도",
                  "식물을 진단할 수 있어요.",
                ]}
                className="leading-tight"
              />
            }
            description={
              <OnboardingDescription
                lines={[
                  "사진을 찍으면 AI가 먼저 살펴보고,",
                  "함께 관찰하며 더 정확한 원인을 찾아갈 수도 있어요.",
                ]}
                className="leading-tight"
              />
            }
            footer={
              <OnboardingDelayedReveal>
                <Button fullWidth size="lg" onClick={goNext}>
                  다음
                </Button>
              </OnboardingDelayedReveal>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );

      case "weather-reminder":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            showBack
            onBack={goBack}
            illustration={<OnboardingNotificationPreview />}
            title={
              <OnboardingTitle
                lines={[
                  `${displayName}님이`,
                  "식물을 오래 건강하게 키울 수 있도록",
                ]}
                className="leading-tight"
              />
            }
            description={
              <OnboardingDescription
                lines={[
                  "물을 줄 시간, 오늘의 날씨,",
                  "그리고 작은 관리 팁까지",
                  "Planat이 함께 알려드릴게요.",
                ]}
                className="leading-tight"
              />
            }
            footer={
              <OnboardingDelayedReveal>
                <Button fullWidth size="lg" onClick={goNext}>
                  다음
                </Button>
              </OnboardingDelayedReveal>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );

      case "location":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            showBack
            onBack={goBack}
            illustration={
              <OnboardingLocationWeatherPreview region={regionInput} />
            }
            title={
              <OnboardingTitle
                lines={["매일 매일", "날씨를 알려드릴게요."]}
                className="leading-tight"
              />
            }
            description={
              <OnboardingDescription
                lines={[
                  "Planat이 날씨를 바탕으로",
                  "식물 관리 팁을 드릴 수 있도록",
                  "현재 살고 있는 지역을 알려주세요.",
                ]}
                className="leading-tight"
              />
            }
            footer={
              <>
                <OnboardingDelayedReveal>
                  <OnboardingInput
                    label=""
                    value={regionInput}
                    onChange={setRegionInput}
                    placeholder="서울특별시"
                  />
                </OnboardingDelayedReveal>
                <OnboardingDelayedReveal delayOffset={0.12}>
                  <Button
                    fullWidth
                    size="lg"
                    className="mt-4"
                    onClick={handleLocationNext}
                  >
                    다음
                  </Button>
                </OnboardingDelayedReveal>
                <OnboardingDelayedReveal delayOffset={0.24}>
                  <Button
                    fullWidth
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white"
                    onClick={handleLocationSkip}
                  >
                    나중에 설정하기
                  </Button>
                </OnboardingDelayedReveal>
              </>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );

      case "widget":
        return (
          <OnboardingLayout
            stepIndex={stepIndex + 1}
            totalSteps={ONBOARDING_STEP_COUNT}
            showBack
            onBack={goBack}
            illustration={<OnboardingWidgetAddPreview />}
            title={
              <OnboardingTitle
                lines={["위젯을 추가하고", "매일 작은 안부를 받아보세요."]}
                className="leading-tight"
              />
            }
            description={
              <OnboardingDescription
                lines={[
                  "홈 화면에서 오늘의 날씨,",
                  "식물의 상태, 오늘 해야 할 관리까지",
                  "한눈에 확인할 수 있어요.",
                ]}
                className="leading-tight"
              />
            }
            footer={
              <>
                <OnboardingDelayedReveal>
                  <Button
                    fullWidth
                    size="lg"
                    onClick={() => finishOnboarding(regionInput.trim())}
                  >
                    위젯 추가하기
                  </Button>
                </OnboardingDelayedReveal>
                <OnboardingDelayedReveal delayOffset={0.12}>
                  <Button
                    fullWidth
                    variant="ghost"
                    className="text-white hover:bg-white/10 hover:text-white"
                    onClick={() => finishOnboarding(regionInput.trim())}
                  >
                    나중에 하기
                  </Button>
                </OnboardingDelayedReveal>
              </>
            }
            animateFooter={false}
            exiting={exiting}
          />
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        {renderStep(currentStep)}
      </motion.div>
    </AnimatePresence>
  );
}
