import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[var(--radius-button)] px-4 text-[length:var(--text-body)] font-medium transition-[color,transform] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-planat-primary-light text-white hover:bg-planat-primary-dark active:bg-planat-primary-dark",
        secondary:
          "bg-planat-bg-neutral text-planat-text-primary hover:bg-white/80 active:bg-white",
        ghost:
          "bg-transparent text-planat-text-primary hover:bg-white/20 active:bg-white/30",
        text: "bg-transparent px-2 text-planat-primary-dark underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-10 px-4 text-[length:var(--text-caption)]",
        lg: "h-12 px-6 text-[length:var(--text-card-title)]",
        icon: "h-11 w-11",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, fullWidth, className }))}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
}

export { buttonVariants };
