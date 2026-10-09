"use client";

import type { ComponentProps } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

type HugeIconProps = {
  icon: ComponentProps<typeof HugeiconsIcon>["icon"];
  className?: string;
  size?: number;
};

export function HugeIcon({ icon, className, size = 24 }: HugeIconProps) {
  return (
    <HugeiconsIcon
      icon={icon}
      className={className}
      size={size}
      strokeWidth={1.5}
      color="currentColor"
      aria-hidden="true"
    />
  );
}
