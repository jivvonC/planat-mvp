import { motion } from "framer-motion";
import { Text } from "@/components/common/Typography";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureIntroCardProps {
  icon: React.ReactNode;
  className?: string;
}

export function FeatureIntroCard({ icon, className }: FeatureIntroCardProps) {
  return (
    <Card
      className={cn(
        "flex h-44 w-44 items-center justify-center border-0 bg-white/25 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex h-24 w-24 items-center justify-center rounded-full bg-white/35 text-planat-primary-dark"
      >
        {icon}
      </motion.div>
    </Card>
  );
}

interface FeatureIntroIllustrationProps {
  src: string;
  alt: string;
  className?: string;
}

export function FeatureIntroIllustration({
  src,
  alt,
  className,
}: FeatureIntroIllustrationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={cn("flex justify-center", className)}
    >
      <img
        src={src}
        alt={alt}
        className="h-48 w-48 object-contain"
        draggable={false}
      />
    </motion.div>
  );
}

interface OnboardingInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label: string;
}

export function OnboardingInput({
  value,
  onChange,
  placeholder,
  label,
}: OnboardingInputProps) {
  return (
    <label className="flex w-full flex-col gap-2 text-left">
      <Text variant="caption" className="font-medium text-white/80">
        {label}
      </Text>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="min-h-12 w-full rounded-[var(--radius-input)] border border-white/20 bg-white/80 px-4 text-[length:var(--text-body)] text-planat-text-primary placeholder:text-planat-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-planat-primary-light"
      />
    </label>
  );
}
