import { Card } from "@/components/ui/card";
import { Text } from "@/components/common/Typography";
import type { CalendarRecord } from "@/types";
import { getCareEventIcon } from "@/utils/careEvents";
import { resolveCarePhotoUrl } from "@/utils/plantPhotoAssets";

interface CalendarRecordCardProps {
  record: CalendarRecord;
  timeLabel?: string;
}

export function CalendarRecordCard({
  record,
  timeLabel,
}: CalendarRecordCardProps) {
  const photoSrc = resolveCarePhotoUrl(record.photoUrl);

  return (
    <Card className="flex gap-3 p-3 bg-[#49C1C1]/28">
      <span className="text-lg" aria-hidden="true">
        {getCareEventIcon(record.type)}
      </span>
      <div className="min-w-0 flex-1">
        <Text variant="caption" className="font-medium text-white">
          {record.title}
        </Text>
        {record.description && record.type !== "photo" ? (
          <Text
            variant="helper"
            muted
            className="mt-0.5 line-clamp-2 text-white/80"
          >
            {record.description}
          </Text>
        ) : null}
        {record.type === "photo" && photoSrc ? (
          <div className="mt-2 overflow-hidden rounded-[var(--radius-input)]">
            <img src={photoSrc} alt="" className="h-24 w-full object-cover" />
            {record.description ? (
              <Text
                variant="helper"
                muted
                className="mt-1 text-white/80 font-medium"
              >
                {record.description}
              </Text>
            ) : null}
          </div>
        ) : null}
        {timeLabel ? (
          <Text variant="helper" muted className="mt-1">
            {timeLabel}
          </Text>
        ) : null}
      </div>
    </Card>
  );
}
