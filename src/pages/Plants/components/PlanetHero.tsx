import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import planetImg from "@/assets/images/illustrations/planet.png";
import { PlantImage } from "@/components/common/PlantImage";
import { Starfield } from "@/pages/Plants/components/Starfield";
import type { Plant } from "@/types";
import { FLOAT, ORBIT_PULSE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getPlantImage } from "@/utils/plantAssets";

const PLANET_SIZE = 168;
const PLANT_SIZE = 108;
const ORBIT_RADIUS = 152;

interface PlanetHeroProps {
  plants: Plant[];
}

function getOrbitPosition(index: number, total: number) {
  const angleDeg = (index * 360) / total - 90;
  const angleRad = (angleDeg * Math.PI) / 180;

  return {
    x: Math.cos(angleRad) * ORBIT_RADIUS,
    y: Math.sin(angleRad) * ORBIT_RADIUS,
    delay: index * 0.15,
  };
}

export function PlanetHero({ plants }: PlanetHeroProps) {
  const navigate = useNavigate();

  const handlePlantTap = (plantId: string) => {
    window.setTimeout(() => {
      navigate(`/plants/${plantId}`);
    }, 200);
  };

  const sceneSize = (ORBIT_RADIUS + PLANT_SIZE / 2) * 2 + 16;

  return (
    <div
      className={cn("relative mx-auto w-full")}
      style={{ height: sceneSize, maxWidth: sceneSize }}
    >
      <Starfield className="z-0" />
      <motion.img
        src={planetImg}
        alt="나의 작은 행성"
        className="absolute top-1/2 left-1/2 z-10 object-contain"
        style={{
          width: PLANET_SIZE,
          height: PLANET_SIZE,
          marginLeft: -PLANET_SIZE / 2,
          marginTop: -PLANET_SIZE / 2,
        }}
        animate={{ y: [0, -FLOAT.offset, 0] }}
        transition={{
          duration: FLOAT.duration,
          repeat: Infinity,
          ease: "easeInOut",
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
            <motion.button
              type="button"
              className="flex items-center justify-center"
              style={{ width: PLANT_SIZE, height: PLANT_SIZE }}
              whileTap={{ scale: 1.05 }}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{
                scale: {
                  duration: ORBIT_PULSE.duration,
                  repeat: Infinity,
                  delay,
                  ease: "easeInOut",
                },
              }}
              onClick={() => handlePlantTap(plant.id)}
              aria-label={`${plant.nickname} 상세 보기`}
            >
              <PlantImage
                src={getPlantImage(plant.image)}
                alt={plant.nickname}
                size="sm"
                className="pointer-events-none h-[6.75rem] w-[6.75rem]"
              />
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}
