import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva(
  "inline-flex min-h-8 items-center justify-center gap-1.5 rounded-full border px-5 text-[length:var(--text-caption)] font-medium transition-[color,transform] active:scale-[0.97]",
  {
    variants: {
      tone: {
        dark: "",
        light: "",
      },
      selected: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        tone: "dark",
        selected: true,
        class:
          "border border-white bg-white/20 font-bold text-white",
      },
      {
        tone: "dark",
        selected: false,
        class: "border-transparent text-white/40 hover:bg-white/10",
      },
      {
        tone: "light",
        selected: true,
        class:
          "border border-planat-primary-light bg-planat-primary-light/15 font-bold text-planat-text-primary",
      },
      {
        tone: "light",
        selected: false,
        class:
          "border-transparent bg-planat-bg-neutral text-planat-text-primary hover:bg-planat-bg-neutral/80",
      },
    ],
    defaultVariants: {
      tone: "dark",
      selected: false,
    },
  },
);

export interface ChipProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof chipVariants> {
  emoji?: string;
}

export function Chip({
  className,
  tone,
  selected,
  emoji,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(chipVariants({ tone, selected }), className)}
      aria-pressed={selected ?? false}
      {...props}
    >
      {emoji ? <span aria-hidden="true">{emoji}</span> : null}
      {children}
    </button>
  );
}

export { chipVariants };
