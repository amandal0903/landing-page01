import React from "react";
import { BOOK_DEMO_URL } from "@/lib/constants";

const CTA_TILES = [
  { type: "plain" as const },
  { type: "pulse" as const, delay: "-2s" },
  { type: "plain" as const },
  { type: "pulse" as const, delay: "-6s" },
  { type: "accent" as const },
  { type: "pulse" as const, delay: "-4s" },
  { type: "plain" as const },
  { type: "pulse" as const, delay: "-8s" },
  { type: "plain" as const },
] as const;

export function FinalCtaSection() {
  return (
    <section
      id="demo"
      aria-labelledby="cta-h"
      style={{
        padding: "clamp(120px,13vw,188px) 0 clamp(96px,10vw,140px)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
        }}
      >
        <div className="reveal">
          <div
            aria-hidden="true"
            style={{
              display: "inline-grid",
              gridTemplateColumns: "repeat(3,22px)",
              gap: 6,
            }}
          >
            {CTA_TILES.map((t, idx) => (
              <span
                key={idx}
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 6,
                  background: t.type === "accent" ? "var(--accent)" : "#E8E6DC",
                  ...(t.type === "pulse"
                    ? {
                        animation: "cta 8s ease-in-out infinite",
                        animationDelay: t.delay,
                      }
                    : {}),
                }}
              />
            ))}
          </div>

          <h2
            id="cta-h"
            className="serif"
            style={{
              marginTop: 44,
              fontSize: "clamp(40px,5vw,68px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-.018em",
              textWrap: "balance",
            }}
          >
            <span style={{ display: "block" }}>Start with one workflow.</span>
            <span style={{ display: "block", color: "#82817A" }}>
              Scale across the enterprise.
            </span>
          </h2>
          <p
            style={{
              maxWidth: 520,
              margin: "26px auto 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#5E5D59",
              textWrap: "pretty",
            }}
          >
            See an AI employee run a process you choose, with an estimate of the
            time and cost it would save.
          </p>
          <div
            style={{
              marginTop: 38,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <a
              className="btn btn-dark"
              href={BOOK_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a demo
            </a>
            <a
              className="btn btn-line"
              href={BOOK_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a workflow assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
