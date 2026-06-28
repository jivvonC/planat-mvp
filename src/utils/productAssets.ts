import heroImage from "@/assets/hero.png";
import hangingPlantersImage from "@/assets/images/products/plantpots/hangingplanters.jpg";
import plantBaseImage from "@/assets/images/products/plantpots/plantbase.jpg";
import terracottaPotImage from "@/assets/images/products/plantpots/teracota.jpg";
import nutrientsImage from "@/assets/images/products/nutrients/nutrients.png";
import plantLightImage from "@/assets/images/products/plantlight/plantlight.jpg";
import plantPoleImage from "@/assets/images/products/plantpole/plantpole.jpg";
import soilImage from "@/assets/images/products/soil/soil.jpg";
import wateringCanImage from "@/assets/images/products/wateringcan/wateringcan.jpg";
import lightSprayImage from "@/assets/images/products/wateringspray/lightspray.jpg";
import mistSprayImage from "@/assets/images/products/wateringspray/mistspray.png";

const PRODUCT_IMAGE_MAP: Record<string, string> = {
  "plantpots/teracota.jpg": terracottaPotImage,
  "plantpots/plantbase.jpg": plantBaseImage,
  "plantpots/hangingplanters.jpg": hangingPlantersImage,
  "nutrients/nutrients.png": nutrientsImage,
  "soil/soil.jpg": soilImage,
  "wateringcan/wateringcan.jpg": wateringCanImage,
  "plantlight/plantlight.jpg": plantLightImage,
  "wateringspray/mistspray.png": mistSprayImage,
  "plantpole/plantpole.jpg": plantPoleImage,
  "wateringspray/lightspray.jpg": lightSprayImage,
};

export function getProductImage(filename: string): string {
  return PRODUCT_IMAGE_MAP[filename] ?? heroImage;
}

export function formatProductPrice(price: number): string {
  return `₩${price.toLocaleString("ko-KR")}`;
}
