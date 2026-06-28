import aloeVera from "@/assets/icons/plants/aloe-vera.png";
import baobab from "@/assets/icons/plants/baobab.png";
import cactus from "@/assets/icons/plants/cactus.png";
import heartChain from "@/assets/icons/plants/heart-chain.png";
import monstera from "@/assets/icons/plants/monstera.png";
import pilea from "@/assets/icons/plants/pilea.png";
import sansevieria from "@/assets/icons/plants/sansevieria.png";
import succulent from "@/assets/icons/plants/succulent.png";

const PLANT_IMAGE_MAP: Record<string, string> = {
  "monstera.png": monstera,
  "baobab.png": baobab,
  "cactus.png": cactus,
  "sansevieria.png": sansevieria,
  "pilea.png": pilea,
  "aloe-vera.png": aloeVera,
  "heart-chain.png": heartChain,
  "succulent.png": succulent,
};

export function getPlantImage(filename: string): string {
  return PLANT_IMAGE_MAP[filename] ?? monstera;
}
