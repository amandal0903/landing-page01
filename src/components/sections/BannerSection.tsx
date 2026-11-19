import React from "react";

export function BannerSection() {
  return (
    <a
      href="#how"
      style={{
        display: "block",
        background: "#F0EEE6",
        borderBottom: "1px solid rgba(31,30,29,.07)",
        color: "#3D3D3A",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "10px clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px 12px",
          fontSize: 13.5,
          lineHeight: 1.45,
          textAlign: "center",
        }}
      >
        <span>
          <span style={{ fontWeight: 600, color: "#141413" }}>
            99.2% on WebVoyager
          </span>
          <span className="bn-more">
            <span
              style={{ color: "#87867F", padding: "0 8px" }}
              aria-hidden="true"
            >
              ·
            </span>
            State-of-the-art browser and computer-use agents
          </span>
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
        </svg>
      </div>
    </a>
  );
}
