import React from "react";

export function BrandMark({
  size = 26,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      aria-hidden="true"
      style={style}
    >
      <rect width="26" height="26" rx="7" fill="#141413" />
      <path d="M8.6 7.3 18.5 12.7 13.9 13.9 11.8 18.5Z" fill="#FAF9F5" />
    </svg>
  );
}

export function BrandMarkInverted({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" style={style}>
      <rect width="26" height="26" rx="7" fill="#FAF9F5" />
      <path d="M8.6 7.3 18.5 12.7 13.9 13.9 11.8 18.5Z" fill="#141413" />
    </svg>
  );
}

export function BrandMarkAvatar({
  size = "2em",
  radius = ".48em",
}: {
  size?: string;
  radius?: string;
}) {
  return (
    <span
      style={{
        flex: "none",
        display: "grid",
        placeItems: "center",
        width: size,
        height: size,
        borderRadius: radius,
        background: "#141413",
      }}
    >
      <svg
        viewBox="0 0 26 26"
        aria-hidden="true"
        style={{ width: "72%", height: "72%" }}
      >
        <path d="M8.6 7.3 18.5 12.7 13.9 13.9 11.8 18.5Z" fill="#FAF9F5" />
      </svg>
    </span>
  );
}
