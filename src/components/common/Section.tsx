import { cn } from "@/lib/utils";
import { Text } from "@/components/common/Typography";
import { LAYOUT_CLASSES } from "@/utils/constants";

interface SectionProps {
  title?: string;
  titleClassName?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Section({
  title,
  titleClassName,
  children,
  className,
}: SectionProps) {
  return (
    <section className={cn(LAYOUT_CLASSES.sectionStack, className)}>
      {title ? (
        <Text variant="sectionTitle" as="h2" className={titleClassName}>
          {title}
        </Text>
      ) : null}
      {children}
    </section>
  );
}
