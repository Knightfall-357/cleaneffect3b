import { Icon } from "@/components/icons";
import { contact, whatsappLink } from "@/lib/content";
import { buttonStyles, type ButtonSize, type ButtonVariant } from "@/lib/ui";
import { cn } from "@/lib/cn";

type ArrowProps = { size?: number };

function Arrow({ size = 15 }: ArrowProps) {
  return (
    <Icon
      name="arrow"
      size={size}
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  );
}

type WhatsAppButtonProps = {
  message?: string;
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  showArrow?: boolean;
  tabIndex?: number;
};

export function WhatsAppButton({
  message,
  label = "WhatsApp us",
  size = "md",
  variant = "whatsapp",
  className,
  showArrow = true,
  tabIndex,
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      aria-label={`${label} — opens WhatsApp chat with CleanEffect`}
      className={buttonStyles({ variant, size, className })}
    >
      <Icon name="whatsapp" size={size === "lg" ? 18 : 16} />
      {label}
      {showArrow ? <Arrow size={size === "lg" ? 16 : 14} /> : null}
    </a>
  );
}

type CallButtonProps = {
  label?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  tabIndex?: number;
};

export function CallButton({
  label = "Call us",
  size = "md",
  variant = "secondary",
  className,
  tabIndex,
}: CallButtonProps) {
  return (
    <a
      href={contact.phoneHref}
      tabIndex={tabIndex}
      aria-label={`${label} on ${contact.phone}`}
      className={buttonStyles({ variant, size, className })}
    >
      <Icon name="phone" size={size === "lg" ? 17 : 15} className="text-aqua-500" />
      {label}
    </a>
  );
}

type ContactActionsProps = {
  message?: string;
  whatsappLabel?: string;
  callLabel?: string;
  size?: ButtonSize;
  /** Use "dark" when rendered on navy sections. */
  surface?: "light" | "dark";
  stack?: boolean;
  className?: string;
};

/** WhatsApp (primary) + phone call (secondary) pair used for every CTA. */
export function ContactActions({
  message,
  whatsappLabel = "WhatsApp us",
  callLabel = "Call now",
  size = "md",
  surface = "light",
  stack = false,
  className,
}: ContactActionsProps) {
  return (
    <div
      className={cn(
        "flex gap-2.5",
        stack ? "flex-col" : "flex-col sm:flex-row sm:items-center",
        className,
      )}
    >
      <WhatsAppButton message={message} label={whatsappLabel} size={size} />
      <CallButton
        label={callLabel}
        size={size}
        variant={surface === "dark" ? "light" : "secondary"}
      />
    </div>
  );
}
