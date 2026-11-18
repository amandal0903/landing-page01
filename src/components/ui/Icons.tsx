import React from "react";

interface IconProps {
  className?: string;
}

export function IconMail({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="9" rx="2" />
      <path d="M2.5 4.8 8 8.8l5.5-4" />
    </svg>
  );
}

export function IconLock({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
      <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
    </svg>
  );
}

export function IconChevronLeft({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M10 3.5 5.5 8l4.5 4.5" />
    </svg>
  );
}

export function IconSpreadsheet({ className = "ic ic-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3" y="2.5" width="10" height="11" rx="1.5" />
      <path d="M3 6.5h10M3 10h10M7 6.5v7" />
    </svg>
  );
}

export function IconFile({ className = "ic ic-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M9.5 2.5H5A1.5 1.5 0 0 0 3.5 4v8A1.5 1.5 0 0 0 5 13.5h6a1.5 1.5 0 0 0 1.5-1.5V5.5z" />
      <path d="M9.5 2.5v3h3" />
    </svg>
  );
}

export function IconCheck({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 8.4l3.1 3 5.9-6.6" />
    </svg>
  );
}

export function IconInbox({ className = "ic ic-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 9.5h3l1 1.8h3l1-1.8h3" />
      <path d="M4 3.5h8l1.5 6v3a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-3z" />
    </svg>
  );
}

export function IconStar({ className = "ic ic-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="m8 2.8 1.6 3.3 3.6.5-2.6 2.5.6 3.6L8 11l-3.2 1.7.6-3.6-2.6-2.5 3.6-.5z" />
    </svg>
  );
}

export function IconSend({ className = "ic ic-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M14 2 7 9M14 2 9.5 14l-2.5-5-5-2.5z" />
    </svg>
  );
}

export function IconPaperclip({ className = "ic ic-12" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M13 7.5 8.3 12.2a3 3 0 0 1-4.2-4.2L9 3.1a2 2 0 0 1 2.8 2.8l-4.6 4.6a1 1 0 0 1-1.4-1.4L10 4.9" />
    </svg>
  );
}

export function IconSpinner({ className = "ic spin" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6" />
    </svg>
  );
}

export function IconArrowUp({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 12.5v-9M4.5 7 8 3.5 11.5 7" />
    </svg>
  );
}

export function IconClock({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6" />
      <path d="M8 4.8V8l2.2 1.4" />
    </svg>
  );
}

export function IconHash({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6.2 2.5 5 13.5M11 2.5 9.8 13.5M2.8 6h11M2.2 10h11" />
    </svg>
  );
}

export function IconTextBubble({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 3.5h10A1.5 1.5 0 0 1 14.5 5v6a1.5 1.5 0 0 1-1.5 1.5H7.2L4 14.5v-2H3A1.5 1.5 0 0 1 1.5 11V5A1.5 1.5 0 0 1 3 3.5z" />
    </svg>
  );
}

export function IconWhatsApp({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2.2a5.8 5.8 0 0 0-5 8.8l-.8 2.8 2.9-.8A5.8 5.8 0 1 0 8 2.2z" />
    </svg>
  );
}

export function IconCode({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5" />
    </svg>
  );
}

export function IconEyes({ className = "ic ic-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <ellipse cx="5.2" cy="8" rx="2.8" ry="3.8" />
      <ellipse cx="10.8" cy="8" rx="2.8" ry="3.8" />
      <circle className="fc" cx="6" cy="8.8" r="1.2" />
      <circle className="fc" cx="11.6" cy="8.8" r="1.2" />
    </svg>
  );
}

export function IconDoubleTick({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 18 12" aria-hidden="true">
      <path d="M1.5 6.5 4.2 9.2 10 2.8M7.6 8.6l.6.6L14 2.8" />
    </svg>
  );
}

export function IconGrip({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <circle className="fc" cx="6" cy="4" r="1.1" />
      <circle className="fc" cx="10" cy="4" r="1.1" />
      <circle className="fc" cx="6" cy="8" r="1.1" />
      <circle className="fc" cx="10" cy="8" r="1.1" />
      <circle className="fc" cx="6" cy="12" r="1.1" />
      <circle className="fc" cx="10" cy="12" r="1.1" />
    </svg>
  );
}

export function IconArrowRight({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h10M9.5 4.5 13 8l-3.5 3.5" />
    </svg>
  );
}

export function IconPlus({ className = "ic" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function IconFlag({ className = "ic ic-14" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3.5 13.5V3M3.5 3.5h7.5l-1.6 2.8 1.6 2.7H3.5" />
    </svg>
  );
}
