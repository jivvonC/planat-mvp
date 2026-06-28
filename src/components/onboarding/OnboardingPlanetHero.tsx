import { motion } from "framer-motion";
import planetImg from "@/assets/images/illustrations/planet.png";
import { PlantImage } from "@/components/common/PlantImage";
import { plants } from "@/data/mockData";
import { Starfield } from "@/pages/Plants/components/Starfield";
import { getPlantImage } from "@/utils/plantAssets";

const PLANET_SIZE = 168;
const PLANT_SIZE = 108;
const ORBIT_RADIUS = 152;

function getOrbitPosition(index: number, total: number) {
  const angleDeg = (index * 360) / total - 90;
  const angleRad = (angleDeg * Math.PI) / 180;

  return {
    x: Math.cos(angleRad) * ORBIT_RADIUS,
    y: Math.sin(angleRad) * ORBIT_RADIUS,
    delay: 0.6 + index * 0.15,
  };
}

export function OnboardingPlanetHero() {
  const sceneSize = (ORBIT_RADIUS + PLANT_SIZE / 2) * 2 + 16;

  return (
    <div
      className="relative mx-auto w-full"
      style={{ height: sceneSize, maxWidth: sceneSize }}
    >
      <Starfield className="z-0" />
      <motion.img
        src={planetImg}
        alt="Planat 행성"
        className="absolute top-1/2 left-1/2 z-10 object-contain"
        style={{
          width: PLANET_SIZE,
          height: PLANET_SIZE,
          marginLeft: -PLANET_SIZE / 2,
          marginTop: -PLANET_SIZE / 2,
        }}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.55, ease: "easeOut" },
          scale: { duration: 0.55, ease: "easeOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.55 },
        }}
      />

      {plants.map((plant, index) => {
        const { x, y, delay } = getOrbitPosition(index, plants.length);

        return (
          <div
            key={plant.id}
            className="absolute top-1/2 left-1/2 z-10"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <motion.div
              className="flex items-center justify-center"
              style={{ width: PLANT_SIZE, height: PLANT_SIZE }}
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: delay + 0.5,
                  ease: "easeInOut",
                }}
              >
                <PlantImage
                  src={getPlantImage(plant.image)}
                  alt={plant.nickname}
                  size="sm"
                  className="pointer-events-none h-27 w-27"
                />
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
