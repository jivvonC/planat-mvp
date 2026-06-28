import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("border-0 border-t border-white/20", {
  variants: {
    spacing: {
      none: "",
      md: "mt-4",
      lg: "mt-6",
    },
  },
  defaultVariants: {
    spacing: "none",
  },
});

export interface DividerProps
  extends
    React.HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {}

export function Divider({ className, spacing, ...props }: DividerProps) {
  return (
    <hr className={cn(dividerVariants({ spacing }), className)} {...props} />
  );
}
