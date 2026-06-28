import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-button)] px-2.5 py-1 text-[length:var(--text-helper)] font-medium leading-none",
  {
    variants: {
      variant: {
        default: "bg-planat-bg-neutral text-planat-text-primary",
        mission: "bg-planat-yellow/30 text-planat-text-primary",
        water: "bg-planat-orange/20 text-planat-text-primary",
        healthy: "bg-planat-green/25 text-planat-text-primary",
        ai: "bg-planat-primary-light/20 text-planat-primary-dark",
        neutral: "bg-white/60 text-planat-text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };
