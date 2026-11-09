import type { SVGProps } from "react";

export type IconName =
  | "steam"
  | "shield"
  | "paw"
  | "leaf"
  | "van"
  | "clock"
  | "sparkle"
  | "check"
  | "arrow"
  | "star"
  | "phone"
  | "mail"
  | "pin"
  | "calendar"
  | "heart"
  | "bolt"
  | "menu"
  | "close"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "quote"
  | "arrow-up"
  | "instagram"
  | "facebook"
  | "x"
  | "whatsapp";

const filled: IconName[] = ["star", "quote", "x", "facebook", "whatsapp"];

const paths: Record<IconName, React.ReactNode> = {
  whatsapp: (
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.25-.59-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.34Zm-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88Zm8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41Z" />
  ),
  steam: (
    <>
      <path d="M6 19h12" />
      <path d="M8.5 15.5c0-2 2.2-2.2 2.2-4 0-1.6-2.2-1.8-2.2-3.6" />
      <path d="M12.2 15.5c0-2 2.2-2.2 2.2-4 0-1.6-2.2-1.8-2.2-3.6" />
      <path d="M15.9 15.5c0-2 1.9-2.1 1.9-3.6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5 6.2v5.3c0 4 2.9 7.4 7 8.9 4.1-1.5 7-4.9 7-8.9V6.2L12 3.5Z" />
      <path d="m9.2 11.7 2 2 3.6-3.8" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="7" cy="9.5" rx="1.9" ry="2.4" />
      <ellipse cx="12" cy="7.6" rx="1.9" ry="2.5" />
      <ellipse cx="17" cy="9.5" rx="1.9" ry="2.4" />
      <path d="M12 12.4c2.8 0 5 2.3 5 4.7 0 1.4-1.2 2.3-2.6 2-1.4-.3-3.4-.3-4.8 0-1.4.3-2.6-.6-2.6-2 0-2.4 2.2-4.7 5-4.7Z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-7.5 5.5-13 15-13 0 8.5-4.6 14-11.5 14H5Z" />
      <path d="M8 16c2.5-3.6 5.4-6.2 9-8" />
    </>
  ),
  van: (
    <>
      <path d="M3 7.5h9.5V17H3z" />
      <path d="M12.5 10.5H17l4 3.2V17h-8.5" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.8V12l3 1.9" />
    </>
  ),
  sparkle: (
    <path d="M12 3.2c.6 4.4 2.4 6.2 6.8 6.8-4.4.6-6.2 2.4-6.8 6.8-.6-4.4-2.4-6.2-6.8-6.8 4.4-.6 6.2-2.4 6.8-6.8Z" />
  ),
  check: <path d="m5.5 12.5 4.2 4.2L18.8 7.5" />,
  arrow: (
    <>
      <path d="M6.5 17.5 17.5 6.5" />
      <path d="M8.8 6.5h8.7v8.7" />
    </>
  ),
  star: (
    <path d="M12 3.6l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.5 9.8l5.9-.9L12 3.6Z" />
  ),
  phone: (
    <path d="M6.2 3.8h2.9l1.5 3.7-1.9 1.4a11.4 11.4 0 0 0 5.4 5.4l1.4-1.9 3.7 1.5v2.9a2.4 2.4 0 0 1-2.6 2.4C10.2 18.5 5.5 13.8 4 7.4a2.4 2.4 0 0 1 2.2-3.6Z" />
  ),
  mail: (
    <>
      <rect x="3.2" y="5.6" width="17.6" height="12.8" rx="2.6" />
      <path d="m4.5 7.5 7.5 5.4 7.5-5.4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4.4 6-7.6 6-10.3A6 6 0 0 0 6 10.7C6 13.4 8 16.6 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.6" y="5.4" width="16.8" height="15" rx="2.6" />
      <path d="M8 3.2v4M16 3.2v4M3.6 10.2h16.8" />
    </>
  ),
  heart: (
    <path d="M12 20s-7.4-4.6-7.4-9.4A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.4 3c0 4.8-7.4 9.4-7.4 9.4Z" />
  ),
  bolt: <path d="M13.4 3 6.8 13.4h4.3L10.4 21l6.8-10.6h-4.4L13.4 3Z" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h10" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  "chevron-down": <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  "chevron-left": <path d="M14.5 6 8.5 12l6 6" />,
  "chevron-right": <path d="M9.5 6l6 6-6 6" />,
  quote: (
    <path d="M9.4 5.6c-3 1.3-4.9 3.9-4.9 7.4v5.4h5.9v-5.9H7.2c0-2 .8-3.4 2.6-4.3l-.4-2.6Zm9.5 0c-3 1.3-4.9 3.9-4.9 7.4v5.4h5.9v-5.9h-3.2c0-2 .8-3.4 2.6-4.3l-.4-2.6Z" />
  ),
  "arrow-up": (
    <>
      <path d="M12 19V5" />
      <path d="m5.5 11.5 6.5-6.5 6.5 6.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17" cy="7" r="1" />
    </>
  ),
  facebook: <path d="M13.6 21v-7.3h2.6l.4-3h-3V8.8c0-.9.3-1.5 1.6-1.5h1.5V4.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4v2.2H7.6v3h2.7V21h3.3Z" />,
  x: <path d="M17.6 3.5h3.1l-6.8 7.7 7.6 9.8h-6l-4.6-6-5.3 6H2.5l7.2-8.2L2.3 3.5h6.1l4.2 5.5 5-5.5Zm-1.1 15.8h1.7L7.3 5.2H5.5l11 14.1Z" />,
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  const isFilled = filled.includes(name);

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

export function Stars({
  rating = 5,
  size = 14,
  className = "",
}: {
  rating?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon
          key={index}
          name="star"
          size={size}
          className={index < Math.round(rating) ? "text-aqua-500" : "text-brand-200"}
        />
      ))}
    </span>
  );
}
