import { useId } from "react";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  size?: number;
};

const LogoMark = ({ className, size = 36 }: LogoMarkProps) => {
  const gradientId = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <defs>
        <linearGradient id={gradientId} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(187, 72%, 38%)" />
          <stop offset="1" stopColor="hsl(195, 65%, 52%)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="36" height="36" rx="10" fill={`url(#${gradientId})`} />
      <path
        d="M20 10L28 30H24.2L22.4 25.4H17.6L15.8 30H12L20 10ZM18.6 22.2H21.4L20 18.2L18.6 22.2Z"
        fill="white"
      />
    </svg>
  );
};

export default LogoMark;
