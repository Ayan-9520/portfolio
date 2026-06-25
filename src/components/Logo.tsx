import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md";
};

const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const iconSize = size === "sm" ? "h-8 w-8 text-sm" : "h-9 w-9 text-base";

  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-heading font-bold text-primary-foreground shadow-md shadow-primary/25",
          iconSize
        )}
        aria-hidden
      >
        A
      </span>
      {showText && (
        <span className="font-heading text-lg font-semibold leading-none tracking-tight text-foreground sm:text-xl">
          Ayan
        </span>
      )}
    </span>
  );
};

export default Logo;
