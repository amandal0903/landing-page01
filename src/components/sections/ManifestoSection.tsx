"use client";

import React, { useCallback } from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { IconCheck, IconSpinner } from "@/components/ui/Icons";

const COMMANDS = [
  { text: "Post supplier invoices to SAP", delay: 0, b1: true },
  { text: "Lock loans at today's rate", delay: 3000, b1: false },
  { text: "Check tax portal notices every morning", delay: 6000, b1: false },
  { text: "Match POs to goods receipts", delay: 9000, b1: false },
  { text: "Chase anything missing before Friday", delay: 12000, b1: false },
] as const;

const CHIP_ROWS = [
  {
    duration: "84s",
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
    duration: "96s",
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
    duration: "90s",
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
  const { phases, paused, registerScene } = useDemoRuntime();

  const cmdRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerScene("cmd", el);
    },
    [registerScene]
  );

  return (
    <section className="sec">
      <div className="wrap">
        <p className="disp statement">
          Your team already knows the work. With Reflex, you describe it once
          and it runs every day.
        </p>
        <div className="mf2">
          <h2 className="disp h3">
            <span className="ln">Things teams ask Reflex to do</span>
            <span className="ln2">You type it, Reflex does it</span>
          </h2>
          <div
            ref={cmdRef}
            className={`cmd ${phases.cmd}${paused.cmd ? " is-paused" : ""}`}
            data-root="cmd"
            data-scene="cmd"
            role="img"
            aria-label="A command bar where one task after another is typed, run and marked done"
          >
            <span className="ai">R</span>
            <div className="cmd-tx">
              {COMMANDS.map((cmd, idx) => (
                <span
                  key={idx}
                  className={`tl k-ct${cmd.b1 ? " b1" : ""}`}
                  style={{ animationDelay: `${cmd.delay}ms` }}
                >
                  {cmd.text}
                </span>
              ))}
            </div>
            <div className="cmd-st">
              {COMMANDS.map((cmd, idx) => (
                <React.Fragment key={idx}>
                  <span
                    className="pill k-win"
                    style={{
                      animationDelay: `${cmd.delay + 1000}ms`,
                      animationDuration: "1000ms",
                    }}
                  >
                    <IconSpinner />
                    Running…
                  </span>
                  <span
                    className={`pill pill-ok k-win${cmd.b1 ? " b1" : ""}`}
                    style={{
                      animationDelay: `${cmd.delay + 2000}ms`,
                      animationDuration: "1000ms",
                    }}
                  >
                    <IconCheck />
                    Done
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="chips">
        {CHIP_ROWS.map((row, rIdx) => {
          const repeated = [...row.items, ...row.items, ...row.items];
          return (
            <div key={rIdx} className="mq">
              <div
                className={`mq-track x3${row.reverse ? " rev" : ""}`}
                style={{ animationDuration: row.duration }}
              >
                {repeated.map((label, idx) => (
                  <span key={idx} className="chip">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
