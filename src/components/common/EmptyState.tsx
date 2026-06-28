import type { ReactNode } from "react";
import { Text } from "@/components/common/Typography";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  illustration?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function EmptyState({
  illustration,
  title,
  description,
  action,
  className,
  titleClassName,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 px-4 py-8 text-center",
        className,
      )}
    >
      {illustration ? (
        <div className="flex items-center justify-center">{illustration}</div>
      ) : null}
      <div className="flex flex-col gap-2">
        <Text variant="cardTitle" as="h2" className={titleClassName}>
          {title}
        </Text>
        {description ? (
          <Text variant="caption" muted>
            {description}
          </Text>
        ) : null}
      </div>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}
