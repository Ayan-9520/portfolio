import { cn } from "@/lib/utils";
import LogoMark from "@/components/icons/LogoMark";

type LogoProps = {
  className?: string;
  showText?: boolean;
  iconSize?: number;
};

const Logo = ({ className, showText = true, iconSize = 36 }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-2 select-none", className)}>
    <LogoMark size={iconSize} />
    {showText && (
      <span className="font-heading text-lg font-bold leading-none tracking-tight sm:text-xl">
        <span className="gradient-text">Ayan</span>
      </span>
    )}
  </span>
);

export default Logo;
