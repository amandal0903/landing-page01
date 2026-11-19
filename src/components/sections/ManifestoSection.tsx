"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMark } from "@/components/ui/BrandMark";

const CHIP_ROWS = [
  {
    duration: "74s",
    reverse: false,
    items: [
      "Run an SEO audit every Monday",
      "Post supplier invoices to SAP",
      "Lock loans at today's rate",
      "Send doctor contracts for signature",
      "Flag invoices over $50k for approval",
    ],
  },
  {
    duration: "82s",
    reverse: true,
    items: [
      "Pull rate sheets from investor portals",
      "Key orders into NetSuite",
      "Check tax portal notices every morning",
      "Match POs to goods receipts",
      "Reply to vendors with payment dates",
    ],
  },
  {
    duration: "78s",
    reverse: false,
    items: [
      "Open a ticket for every broken page",
      "Update claims in the carrier portal",
      "Look up fines on state portals",
      "Read invoices in seven languages",
      "Chase anything missing before Friday",
    ],
  },
] as const;

export function ManifestoSection() {
  const { registerLiveStage } = useDemoRuntime();

  return (
    <section
      aria-labelledby="mf-h"
      style={{ padding: "0 0 clamp(104px,12vw,176px)", textAlign: "center" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
        }}
      >
        <p
          className="serif reveal"
          style={{
            maxWidth: 940,
            margin: "0 auto",
            fontSize: "clamp(30px,3.6vw,50px)",
            fontWeight: 400,
            lineHeight: 1.17,
            letterSpacing: "-.014em",
            textWrap: "balance",
          }}
        >
          Your team already knows the work.{" "}
          <span style={{ color: "#82817A" }}>
            With Reflex, you describe it once and it runs every day.
          </span>
        </p>
        <h2
          id="mf-h"
          className="serif reveal"
          style={{
            marginTop: "clamp(88px,10vw,136px)",
            fontSize: "clamp(28px,2.9vw,40px)",
            fontWeight: 400,
            lineHeight: 1.14,
            letterSpacing: "-.012em",
            textWrap: "balance",
          }}
        >
          <span style={{ display: "block" }}>
            Things teams ask Reflex to do
          </span>
          <span style={{ display: "block", color: "#82817A" }}>
            You type it, Reflex does it
          </span>
        </h2>

        <div
          ref={registerLiveStage}
          className="live reveal"
          style={{ maxWidth: 660, margin: "44px auto 0" }}
        >
          <div
            role="img"
            aria-label="A command bar: a task is typed, runs and completes, then the next task begins."
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: 14,
              height: 68,
              padding: "0 11px 0 18px",
              borderRadius: 18,
              background: "#FFFFFF",
              border: "1px solid rgba(31,30,29,.12)",
              boxShadow:
                "0 1px 2px rgba(20,20,19,.04),0 22px 44px -28px rgba(20,20,19,.25)",
              textAlign: "left",
            }}
          >
            <BrandMark size={28} style={{ flex: "none" }} />
            <div
              aria-hidden="true"
              style={{
                position: "relative",
                flex: 1,
                minWidth: 0,
                height: 26,
                overflow: "hidden",
                fontSize: 17,
                lineHeight: "26px",
              }}
            >
              <span
                className="abs c-ph"
                style={{ left: 0, top: 0, color: "#87867F", whiteSpace: "nowrap" }}
              >
                Ask Reflex to do something…
              </span>
              <span
                className="abs c-t0"
                style={{ left: 0, top: 0, whiteSpace: "nowrap" }}
              >
                Post supplier invoices to SAP
              </span>
              <span
                className="abs c-t1"
                style={{ left: 0, top: 0, whiteSpace: "nowrap" }}
              >
                Lock loans at today&apos;s rate
              </span>
              <span
                className="abs c-t2"
                style={{ left: 0, top: 0, whiteSpace: "nowrap" }}
              >
                Check tax portal notices every morning
              </span>
              <span
                className="abs c-t3"
                style={{ left: 0, top: 0, whiteSpace: "nowrap" }}
              >
                Chase anything missing before Friday
              </span>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "relative", flex: "none", width: 132, height: 46 }}
            >
              <span
                className="abs c-idle"
                style={{
                  right: 0,
                  top: 0,
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: "#141413",
                  color: "#FAF9F5",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
                </svg>
              </span>
              <span
                className="abs c-run"
                style={{
                  right: 0,
                  top: 0,
                  height: 46,
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "0 15px",
                  borderRadius: 13,
                  background: "#F0EEE6",
                  color: "#3D3D3A",
                  fontSize: 14.5,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                <span className="spin" style={{ fontSize: 16 }} />
                Running…
              </span>
              <span
                className="abs c-done"
                style={{
                  right: 0,
                  top: 0,
                  height: 46,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "0 15px",
                  borderRadius: 13,
                  background: "#EBEFE4",
                  color: "#4D5E38",
                  fontSize: 14.5,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                </svg>
                Done
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="reveal"
        style={{
          marginTop: 52,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {CHIP_ROWS.map((row, rIdx) => (
          <div key={rIdx} className="mq">
            <div
              className={`mq-track${row.reverse ? " rev" : ""}`}
              style={{ "--mqd": row.duration } as React.CSSProperties}
            >
              <ul style={{ display: "flex", gap: 14, paddingRight: 14 }}>
                {row.items.map((label) => (
                  <li key={label} className="task-chip">
                    {label}
                  </li>
                ))}
              </ul>
              <ul
                aria-hidden="true"
                style={{ display: "flex", gap: 14, paddingRight: 14 }}
              >
                {row.items.map((label) => (
                  <li key={label} className="task-chip">
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
