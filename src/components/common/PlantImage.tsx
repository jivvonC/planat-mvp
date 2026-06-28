import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const plantImageVariants = cva("mx-auto object-contain object-center", {
  variants: {
    size: {
      sm: "h-12 w-12",
      md: "h-20 w-20",
      lg: "h-28 w-28",
      hero: "h-auto max-h-[35svh] w-auto max-w-[80%]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface PlantImageProps
  extends
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">,
    VariantProps<typeof plantImageVariants> {
  src: string;
  alt: string;
}

export function PlantImage({
  src,
  alt,
  size,
  className,
  ...props
}: PlantImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(plantImageVariants({ size }), className)}
      draggable={false}
      {...props}
    />
  );
}
