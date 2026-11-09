import { cn } from "@/lib/cn";

export { cn };

export type ButtonVariant = "primary" | "secondary" | "dark" | "light" | "ghost" | "whatsapp";
export type ButtonSize = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary:
    "shine bg-gradient-to-r from-brand-700 via-brand-600 to-brand-500 text-white shadow-[0_18px_44px_-20px_rgba(31,78,208,0.95)] hover:-translate-y-0.5 hover:shadow-[0_26px_54px_-18px_rgba(31,78,208,0.8)] active:translate-y-0",
  secondary:
    "border border-brand-200/80 bg-white/80 text-brand-900 shadow-[0_10px_28px_-20px_rgba(11,26,68,0.5)] backdrop-blur hover:-translate-y-0.5 hover:border-brand-300 hover:bg-white",
  dark: "shine bg-brand-950 text-white shadow-[0_18px_44px_-22px_rgba(11,26,68,0.9)] hover:-translate-y-0.5 hover:bg-brand-900",
  light:
    "shine bg-white text-brand-900 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 hover:bg-aqua-50",
  whatsapp:
    "shine bg-gradient-to-r from-[#1faa59] via-[#22c15e] to-[#25d366] text-white shadow-[0_18px_44px_-20px_rgba(34,193,94,0.95)] hover:-translate-y-0.5 hover:shadow-[0_26px_54px_-18px_rgba(34,193,94,0.8)] active:translate-y-0",
  ghost:
    "text-brand-800 hover:text-brand-950 hover:bg-brand-50/70 focus-visible:ring-offset-0",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-6.5 py-3.5 text-[15px] sm:px-7 sm:py-4",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
