import aloeVera1 from "@/assets/images/plants/aloe-vera/aloe-vera1.jpeg";
import aloeVera2 from "@/assets/images/plants/aloe-vera/aloe-vera2.jpeg";
import baobab1 from "@/assets/images/plants/baobab/baobab1.jpeg";
import baobab2 from "@/assets/images/plants/baobab/baobab2.jpeg";
import cactus1 from "@/assets/images/plants/cactus/cactus1.jpeg";
import cactus2 from "@/assets/images/plants/cactus/cactus2.jpeg";
import heartChain1 from "@/assets/images/plants/heart-chain/heart-chain1.jpeg";
import heartChain2 from "@/assets/images/plants/heart-chain/heart-chain2.jpeg";
import monstera1 from "@/assets/images/plants/monstera/monstera1.png";
import monstera2 from "@/assets/images/plants/monstera/monstera2.jpg";
import pilea1 from "@/assets/images/plants/pilea/pilea1.jpeg";
import pilea2 from "@/assets/images/plants/pilea/pilea2.jpeg";
import sansevieria1 from "@/assets/images/plants/sansevieria/sansevieria1.jpeg";
import sansevieria2 from "@/assets/images/plants/sansevieria/sansevieria2.jpeg";
import succulent1 from "@/assets/images/plants/succulent/succulent1.jpeg";
import succulent2 from "@/assets/images/plants/succulent/succulent2.jpeg";

const CARE_PHOTO_MAP: Record<string, string> = {
  "aloe-vera/aloe-vera1.jpeg": aloeVera1,
  "aloe-vera/aloe-vera2.jpeg": aloeVera2,
  "baobab/baobab1.jpeg": baobab1,
  "baobab/baobab2.jpeg": baobab2,
  "cactus/cactus1.jpeg": cactus1,
  "cactus/cactus2.jpeg": cactus2,
  "heart-chain/heart-chain1.jpeg": heartChain1,
  "heart-chain/heart-chain2.jpeg": heartChain2,
  "monstera/monstera1.png": monstera1,
  "monstera/monstera2.jpg": monstera2,
  "pilea/pilea1.jpeg": pilea1,
  "pilea/pilea2.jpeg": pilea2,
  "sansevieria/sansevieria1.jpeg": sansevieria1,
  "sansevieria/sansevieria2.jpeg": sansevieria2,
  "succulent/succulent1.jpeg": succulent1,
  "succulent/succulent2.jpeg": succulent2,
};

export function resolveCarePhotoUrl(photoUrl?: string): string | undefined {
  if (!photoUrl) {
    return undefined;
  }

  if (photoUrl.startsWith("blob:") || photoUrl.startsWith("http")) {
    return photoUrl;
  }

  return CARE_PHOTO_MAP[photoUrl];
}

export function getPlantPhotoFolder(plantImage: string): string {
  return plantImage.replace(/\.(png|jpe?g)$/i, "");
}
