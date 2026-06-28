import aloeVeraBrownEnds from "@/assets/images/ai/diagnosis/aloe-vera/aloe-verabrownends.png";
import aloeVeraTurnColor from "@/assets/images/ai/diagnosis/aloe-vera/aloe-veraturncolor.png";
import cactusTurnColor from "@/assets/images/ai/diagnosis/cactus/cactusturncolor.png";
import monsteraBrownEnds from "@/assets/images/ai/diagnosis/monstera/monsterabrownends.jpg";
import monsteraTurnColor from "@/assets/images/ai/diagnosis/monstera/monsteraturncolor.png";
import pileaBrownEnds from "@/assets/images/ai/diagnosis/pilea/pileabrownends.jpg";
import pileaTurnColor from "@/assets/images/ai/diagnosis/pilea/pileaturncolor.jpg";
import sansevieriaTurnColor from "@/assets/images/ai/diagnosis/sansevieria/sansevieriaturncolorpng.png";
import succulentTurnColor from "@/assets/images/ai/diagnosis/succulent/succulentturncolor.jpg";

const DIAGNOSIS_IMAGE_MAP: Record<string, Partial<Record<string, string>>> = {
  "aloe-vera": {
    "leaf-color-change": aloeVeraTurnColor,
    "tip-browning": aloeVeraBrownEnds,
  },
  cactus: {
    "leaf-color-change": cactusTurnColor,
  },
  monstera: {
    "leaf-color-change": monsteraTurnColor,
    "tip-browning": monsteraBrownEnds,
  },
  pilea: {
    "leaf-color-change": pileaTurnColor,
    "tip-browning": pileaBrownEnds,
  },
  sansevieria: {
    "leaf-color-change": sansevieriaTurnColor,
  },
  succulent: {
    "leaf-color-change": succulentTurnColor,
  },
};

const EXAMPLE_CAPTIONS: Partial<Record<string, string>> = {
  "leaf-color-change": "잎 색이 변한 예시",
  "tip-browning": "잎 끝이 갈변된 예시",
};

export function getPlantSlugFromImage(image: string): string {
  return image.replace(/\.(png|jpe?g)$/i, "");
}

export function getDiagnosisExampleImage(
  plantImage: string,
  questionKey: string,
): string | undefined {
  const slug = getPlantSlugFromImage(plantImage);
  return DIAGNOSIS_IMAGE_MAP[slug]?.[questionKey];
}

export function getDiagnosisExampleCaption(questionKey: string): string {
  return EXAMPLE_CAPTIONS[questionKey] ?? "관찰 예시";
}

export function hasDiagnosisExampleImage(
  plantImage: string,
  questionKey: string,
): boolean {
  return Boolean(getDiagnosisExampleImage(plantImage, questionKey));
}
