import React from "react";
import { BOOK_DEMO_URL } from "@/lib/constants";

const BADGES = [
  {
    name: "SOC 2",
    status: "Audited",
    detail: "Type I",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flex: "none", width: 20, height: 20 }}
      >
        <path d="M8 1.8 13 3.6v4.1c0 3-2.1 5.4-5 6.5-2.9-1.1-5-3.5-5-6.5V3.6z" />
      </svg>
    ),
  },
  {
    name: "ISO",
    status: "Certified",
    detail: "27001:2022",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flex: "none", width: 20, height: 20 }}
      >
        <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
        <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
      </svg>
    ),
  },
  {
    name: "HIPAA",
    status: "Aligned",
    detail: "BAA available",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flex: "none", width: 20, height: 20 }}
      >
        <rect x="3" y="1.8" width="10" height="12.4" rx="1.4" />
        <path d="M5.6 5.2h4.8M5.6 8h4.8M5.6 10.8h3" />
      </svg>
    ),
  },
  {
    name: "GDPR",
    status: "Compliant",
    detail: "DPA available",
    icon: (
      <svg
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        style={{ flex: "none", width: 20, height: 20 }}
      >
        <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
      </svg>
    ),
  },
] as const;

export function SecuritySection() {
  return (
    <section
      id="security"
      aria-labelledby="sec-h"
      style={{ background: "#F0EEE6", padding: "clamp(104px,11vw,160px) 0" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
        }}
      >
        <div
          className="reveal"
          style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: 14.5, fontWeight: 500, color: "#5E5D59" }}>
            Security
          </p>
          <h2
            id="sec-h"
            className="serif"
            style={{
              marginTop: 18,
              fontSize: "clamp(36px,4.3vw,58px)",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-.016em",
              textWrap: "balance",
            }}
          >
            <span style={{ display: "block" }}>Built for teams that</span>
            <span style={{ display: "block", color: "#7D7C75" }}>
              answer to auditors.
            </span>
          </h2>
          <p
            style={{
              maxWidth: 560,
              margin: "24px auto 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#4D4C48",
              textWrap: "pretty",
            }}
          >
            Credentials stay in an encrypted vault and never reach the AI model.
            Every run is logged and replayable.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
            <a
              className="tlink"
              href={BOOK_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to our security team
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flex: "none", width: 15, height: 15 }}
              >
                <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
              </svg>
            </a>
          </div>
        </div>

        <ul
          className="reveal"
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(230px,100%),1fr))",
            gap: 14,
          }}
        >
          {BADGES.map((badge) => (
            <li
              key={badge.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 22,
                padding: "26px 24px 24px",
                border: "1px solid rgba(31,30,29,.11)",
                borderRadius: 20,
                background: "#FFFFFF",
              }}
            >
              <span
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  border: "1px solid rgba(31,30,29,.14)",
                  color: "#141413",
                }}
              >
                {badge.icon}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span
                  className="serif"
                  style={{ fontSize: 28, lineHeight: 1.1, letterSpacing: "-.01em" }}
                >
                  {badge.name}
                </span>
                <span style={{ fontSize: 14.5, color: "#3D3D3A" }}>
                  <span style={{ fontWeight: 600 }}>{badge.status}</span>
                  <span style={{ color: "#87867F" }}> · </span>
                  {badge.detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
