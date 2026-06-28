import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextVariant =
  | "display"
  | "pageTitle"
  | "sectionTitle"
  | "cardTitle"
  | "body"
  | "caption"
  | "helper";

type TextWeight = "regular" | "medium" | "semibold" | "bold";

const variantClasses: Record<TextVariant, string> = {
  display: "text-[length:var(--text-display)] leading-[1.4] font-semibold",
  pageTitle: "text-[length:var(--text-page-title)] leading-[1.4] font-semibold",
  sectionTitle:
    "text-[length:var(--text-section-title)] leading-[1.45] font-medium",
  cardTitle: "text-[length:var(--text-card-title)] leading-[1.45] font-medium",
  body: "text-[length:var(--text-body)] leading-[1.5] font-normal",
  caption: "text-[length:var(--text-caption)] leading-[1.5] font-normal",
  helper: "text-[length:var(--text-helper)] leading-[1.5] font-normal",
};

const weightClasses: Record<TextWeight, string> = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  muted?: boolean;
  as?: "p" | "span" | "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: ReactNode;
}

export function Text({
  variant = "body",
  weight,
  muted = false,
  as: Component = "p",
  className,
  children,
}: TextProps) {
  return (
    <Component
      className={cn(
        variantClasses[variant],
        weight && weightClasses[weight],
        muted ? "text-planat-text-secondary" : "text-planat-text-primary",
        className,
      )}
    >
      {children}
    </Component>
  );
}
