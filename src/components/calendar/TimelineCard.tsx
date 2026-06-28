import { motion } from "framer-motion";
import { PlantImage } from "@/components/common/PlantImage";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import type { RecentActivity } from "@/types";
import {
  ENTER_Y,
  fadeInUpTransition,
  listStaggerDelay,
} from "@/lib/motion";
import { getCareEventIcon } from "@/utils/careEvents";
import { formatTimelineDate } from "@/utils/calendar";
import { getPlantImage } from "@/utils/plantAssets";
import { resolveCarePhotoUrl } from "@/utils/plantPhotoAssets";

interface TimelineCardProps {
  activity: RecentActivity;
  plantName: string;
  plantImage: string;
  index: number;
}

export function TimelineCard({
  activity,
  plantName,
  plantImage,
  index,
}: TimelineCardProps) {
  const photoSrc = resolveCarePhotoUrl(activity.photoUrl);
  const isPhotoEntry = activity.type === "photo" && photoSrc;

  if (isPhotoEntry) {
    return (
      <motion.article
        initial={{ opacity: 0, y: ENTER_Y.default }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeInUpTransition({
          delay: listStaggerDelay(index),
        })}
        className="overflow-hidden rounded-[var(--radius-card)] bg-white/80 shadow-[var(--shadow-card)]"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <img src={photoSrc} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center gap-3 p-4">
          {activity.description ? (
            <Text
              variant="body"
              className="min-w-0 flex-1 truncate text-planat-text-primary"
            >
              &ldquo;{activity.description}&rdquo;
            </Text>
          ) : (
            <div className="min-w-0 flex-1" />
          )}
          <div className="shrink-0 text-right">
            <Text variant="helper" muted>
              {formatTimelineDate(activity.date)}
            </Text>
            <Text variant="caption" className="font-medium">
              {getCareEventIcon("photo")} {plantName}
            </Text>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: ENTER_Y.default }}
      animate={{ opacity: 1, y: 0 }}
      transition={fadeInUpTransition({
        delay: listStaggerDelay(index, 0.04),
      })}
    >
      <Card className="flex items-center gap-3 px-4 py-2 bg-white/80">
        <PlantImage
          src={getPlantImage(plantImage)}
          alt={plantName}
          size="sm"
          className="h-10 w-10 shrink-0 rounded-full"
        />
        <Text
          variant="body"
          className="min-w-0 flex-1 truncate text-planat-text-primary"
        >
          {activity.title}
        </Text>
        <div className="shrink-0 text-right">
          <Text variant="helper" muted>
            {formatTimelineDate(activity.date)}
          </Text>
          <Text variant="caption" className="font-medium">
            {getCareEventIcon(activity.type)} {plantName}
          </Text>
        </div>
      </Card>
    </motion.article>
  );
}
