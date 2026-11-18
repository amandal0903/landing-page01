import React from "react";

export function BrandMark() {
  return (
    <svg className="mark" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6.5" fill="#1A1A18" />
      <rect
        x="5.5"
        y="7"
        width="8"
        height="2.6"
        rx="1.3"
        fill="#FFFFFF"
        opacity="0.55"
      />
      <rect className="mark-hi" x="5.5" y="12.2" width="13" height="5" rx="1.6" />
    </svg>
  );
}

export function BrandMarkMini() {
  return (
    <svg className="mark mk12" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6.5" fill="#1A1A18" />
      <rect className="mark-hi" x="5.5" y="12.2" width="13" height="5" rx="1.6" />
    </svg>
  );
}

export function BrandMarkCursor() {
  return (
    <svg className="mark mk14" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6.5" fill="#1A1A18" />
      <rect
        x="5.5"
        y="7"
        width="8"
        height="2.6"
        rx="1.3"
        fill="#FFFFFF"
        opacity="0.55"
      />
      <rect x="5.5" y="12.2" width="13" height="5" rx="1.6" fill="#FFFFFF" />
    </svg>
  );
}
