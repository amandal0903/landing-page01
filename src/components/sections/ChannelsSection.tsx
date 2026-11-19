"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BOOK_DEMO_URL } from "@/lib/constants";
import { BrandMarkAvatar, BrandMarkInverted } from "@/components/ui/BrandMark";
import { BrandLogo } from "@/components/ui/BrandLogo";

const CH_TILES = [
  { left: 48, top: 48, delay: "-0.0s", warm: false },
  { left: 240, top: 0, delay: "-3.7s", warm: false },
  { left: 672, top: 48, delay: "-7.4s", warm: false },
  { left: 768, top: 240, delay: "-1.1s", warm: false },
  { left: 0, top: 288, delay: "-4.8s", warm: false },
  { left: 480, top: 336, delay: "-8.5s", warm: false },
  { left: 144, top: 192, delay: "-2.2s", warm: true },
  { left: 576, top: 144, delay: "-5.9s", warm: false },
] as const;

const CH_COPY = [
  {
    title: "Email the workspace inbox.",
    body: "Each workspace has its own address. A request sent there starts the matching workflow, and the confirmation is sent back to whoever asked.",
  },
  {
    title: "Mention it in any channel.",
    body: "Tag your AI employee in a thread; it does the work and replies in the same thread.",
  },
  {
    title: "Text it from your phone.",
    body: "Ask from your phone and the reply comes back in the same thread.",
  },
  {
    title: "Message it on WhatsApp.",
    body: "Message it like a colleague; files come back as attachments.",
  },
  {
    title: "Put it on a schedule.",
    body: "Set the time once and the work runs on its own, every time.",
  },
  {
    title: "Call it from your stack.",
    body: "Start any workflow with one API call; get results via webhook.",
  },
] as const;

export function ChannelsSection() {
  const { ch, pickCh, registerLiveStage } = useDemoRuntime();

  return (
    <section
      aria-labelledby="ch-h"
      style={{ padding: "0 0 clamp(112px,12vw,176px)" }}
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
          style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: 14.5, fontWeight: 500, color: "#5E5D59" }}>
            Ask Reflex
          </p>
          <h2
            id="ch-h"
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
            <span style={{ display: "block" }}>Ask for the work</span>
            <span style={{ display: "block", color: "#82817A" }}>
              where your team already talks.
            </span>
          </h2>
          <p
            style={{
              maxWidth: 620,
              margin: "24px auto 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#5E5D59",
              textWrap: "pretty",
            }}
          >
            Email it. Slack it. Text it. Or put it on a schedule. Reflex
            delivers the finished work to you, your boss, or whoever keeps
            asking ‘any update?’
          </p>
        </div>

        <div
          className="ch-grid reveal"
          role="tablist"
          aria-label="Channels"
          style={{
            maxWidth: 720,
            margin: "clamp(44px,5vw,60px) auto 0",
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 10,
          }}
        >
          {[
            {
              label: "Email",
              icon: (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", width: 18, height: 18 }}
                >
                  <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
                  <path d="m2.5 4.5 5.5 4 5.5-4" />
                </svg>
              ),
            },
            {
              label: "Slack",
              icon: <BrandLogo domain="slack.com" size={18} />,
            },
            {
              label: "Text",
              icon: (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", width: 18, height: 18 }}
                >
                  <path d="M3 3.5h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H7l-3 2.5V11.5H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1z" />
                </svg>
              ),
            },
            {
              label: "WhatsApp",
              icon: <BrandLogo domain="whatsapp.com" size={18} />,
            },
            {
              label: "Schedule",
              icon: (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", width: 18, height: 18 }}
                >
                  <circle cx="8" cy="8" r="5.8" />
                  <path d="M8 4.8V8l2.2 1.4" />
                </svg>
              ),
            },
            {
              label: "API",
              icon: (
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ flex: "none", width: 18, height: 18 }}
                >
                  <path d="M5.5 4.5 2 8l3.5 3.5M10.5 4.5 14 8l-3.5 3.5" />
                </svg>
              ),
            },
          ].map((tab, idx) => (
            <button
              key={tab.label}
              className="ch-tab"
              type="button"
              role="tab"
              aria-selected={ch === idx}
              aria-controls="ch-panel"
              onClick={() => pickCh(idx)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <div
          ref={registerLiveStage}
          id="ch-panel"
          className="stage live reveal"
          role="tabpanel"
          aria-label="Preview of the selected channel"
          style={{
            maxWidth: 860,
            margin: "24px auto 0",
            padding: "clamp(18px,5%,48px) clamp(14px,6%,64px)",
          }}
        >
          {CH_TILES.map((t, idx) => (
            <span
              key={idx}
              className={t.warm ? "tile warm" : "tile"}
              style={{ left: t.left, top: t.top, animationDelay: t.delay }}
            />
          ))}

          <div style={{ position: "relative" }}>
            {ch === 0 && (
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  width: "40em",
                  height: "22em",
                  margin: "0 auto",
                  fontSize: "min(12.5px,calc(100cqw / 40))",
                  color: "#141413",
                  lineHeight: 1.35,
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="e-loop"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#FFFFFF",
                    border: "1px solid rgba(31,30,29,.13)",
                    borderRadius: ".9em",
                    overflow: "hidden",
                    boxShadow:
                      "0 1px 1px rgba(20,20,19,.04),0 28px 56px -28px rgba(20,20,19,.25)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 1.25em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Fwd: Rate locks for today</span>
                    <span className="e-pick">
                      <span className="chip" style={{ background: "#141413", color: "#FAF9F5" }}>
                        <BrandMarkInverted style={{ flex: "none", width: "1em", height: "1em" }} />
                        Picked up by Reflex
                      </span>
                    </span>
                  </div>
                  <div
                    className="abs"
                    style={{ left: "1.25em", right: "1.25em", top: "4em", display: "flex", gap: ".8em" }}
                  >
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: "2.1em",
                        height: "2.1em",
                        borderRadius: "50%",
                        background: "#E3DACC",
                        color: "#3D3D3A",
                      }}
                    >
                      <span style={{ fontSize: ".5em", fontWeight: 600, lineHeight: 1 }}>DR</span>
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span>
                          <span style={{ fontWeight: 600 }}>Dana Ruiz</span>
                          <span style={{ fontSize: ".84em", color: "#6B6A64" }}>
                            {"\u00A0"}to ops@larkspurlending.com
                          </span>
                        </span>
                        <span style={{ fontSize: ".8em", color: "#6B6A64" }}>9:41 AM</span>
                      </div>
                      <p className="wrap" style={{ marginTop: ".45em", lineHeight: 1.45, whiteSpace: "normal" }}>
                        Please lock these four loans at today&apos;s pricing and send me the confirmations.
                      </p>
                      <div style={{ marginTop: ".6em", display: "flex" }}>
                        <span
                          className="chip"
                          style={{
                            background: "#FFFFFF",
                            color: "#3D3D3A",
                            border: "1px solid rgba(31,30,29,.14)",
                          }}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="#4D5E38"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1em", height: "1em" }}
                          >
                            <rect x="2.5" y="2.5" width="11" height="11" rx="2" />
                            <path d="M2.5 6.5h11M2.5 10h11M7 6.5v7" />
                          </svg>
                          locks-oct-7.xlsx
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="abs e-reply"
                    style={{
                      left: "1.25em",
                      right: "1.25em",
                      top: "12.2em",
                      padding: ".9em 1em",
                      borderRadius: ".8em",
                      background: "#FAF9F5",
                      border: "1px solid rgba(31,30,29,.08)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: ".55em" }}>
                        <BrandMarkAvatar size="1.6em" radius=".48em" />
                        <span style={{ fontSize: ".92em", fontWeight: 600 }}>Reflex</span>
                        <span style={{ fontSize: ".82em", color: "#6B6A64" }}>Reply all</span>
                      </div>
                      <span style={{ display: "grid", justifyItems: "end" }}>
                        <span
                          className="e-sending"
                          style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: ".4em", color: "#5E5D59" }}
                        >
                          <span className="spin" />
                          <span style={{ fontSize: ".8em" }}>Sending</span>
                        </span>
                        <span
                          className="e-sent"
                          style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: ".3em", color: "#4D5E38" }}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: ".9em", height: ".9em" }}
                          >
                            <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                          </svg>
                          <span style={{ fontSize: ".8em", fontWeight: 600 }}>Sent</span>
                        </span>
                      </span>
                    </div>
                    <div className="e-type" style={{ marginTop: ".65em", width: "max-content" }}>
                      <span style={{ fontSize: ".95em" }}>
                        All 4 loans locked at today&apos;s pricing. Confirmations attached.
                      </span>
                    </div>
                    <div className="e-att" style={{ marginTop: ".6em", display: "flex" }}>
                      <span
                        className="chip"
                        style={{
                          background: "#FFFFFF",
                          color: "#3D3D3A",
                          border: "1px solid rgba(31,30,29,.14)",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="#9A4A2E"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flex: "none", width: "1em", height: "1em" }}
                        >
                          <path d="M4 1.8h5.5L12.5 5v9.2H4z" />
                          <path d="M9.5 1.8V5h3" />
                        </svg>
                        confirmations-oct-7.pdf
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {ch === 1 && (
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  width: "40em",
                  height: "22em",
                  margin: "0 auto",
                  fontSize: "min(12.5px,calc(100cqw / 40))",
                  color: "#141413",
                  lineHeight: 1.35,
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="s-loop"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#FFFFFF",
                    border: "1px solid rgba(31,30,29,.13)",
                    borderRadius: ".9em",
                    overflow: "hidden",
                    boxShadow:
                      "0 1px 1px rgba(20,20,19,.04),0 28px 56px -28px rgba(20,20,19,.25)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3em",
                      display: "flex",
                      alignItems: "center",
                      gap: ".5em",
                      padding: "0 1.25em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                    }}
                  >
                    <BrandLogo domain="slack.com" size={16} />
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#3D3D3A"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "none", width: "1em", height: "1em" }}
                    >
                      <path d="M6.2 2.5 5 13.5M11 2.5 9.8 13.5M2.8 6h11M2.2 10h11" />
                    </svg>
                    <span style={{ fontWeight: 600 }}>finance-ops</span>
                    <span style={{ fontSize: ".8em", color: "#6B6A64" }}>12 members</span>
                  </div>

                  <div
                    className="abs"
                    style={{ left: "1.25em", right: "1.25em", top: "3.9em", display: "flex", gap: ".75em" }}
                  >
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: "2.1em",
                        height: "2.1em",
                        borderRadius: "50%",
                        background: "#E3DACC",
                        color: "#3D3D3A",
                      }}
                    >
                      <span style={{ fontSize: ".5em", fontWeight: 600, lineHeight: 1 }}>AR</span>
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div>
                        <span style={{ fontWeight: 600 }}>Ana Ruiz</span>
                        <span style={{ fontSize: ".8em", color: "#6B6A64" }}>{"\u00A0"}9:02 AM</span>
                      </div>
                      <div style={{ marginTop: ".2em" }}>
                        <span
                          style={{
                            padding: "0 .2em",
                            borderRadius: ".25em",
                            background: "#F7E9E3",
                            color: "#9A4A2E",
                            fontWeight: 500,
                          }}
                        >
                          @Reflex
                        </span>{" "}
                        post this week&apos;s supplier invoices to SAP
                      </div>
                      <div
                        className="s-eyes"
                        style={{
                          marginTop: ".45em",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: ".35em",
                          height: "1.6em",
                          padding: "0 .55em",
                          borderRadius: ".8em",
                          border: "1px solid rgba(31,30,29,.14)",
                          background: "#FAF9F5",
                          color: "#3D3D3A",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flex: "none", width: "1.05em", height: "1.05em" }}
                        >
                          <circle cx="5.4" cy="8" r="2.6" />
                          <circle cx="10.6" cy="8" r="2.6" />
                          <circle cx="6" cy="8.3" r=".7" fill="currentColor" />
                          <circle cx="11.2" cy="8.3" r=".7" fill="currentColor" />
                        </svg>
                        <span style={{ fontSize: ".78em", fontWeight: 600 }}>1</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="abs s-reply"
                    style={{
                      left: "3.6em",
                      right: "1.25em",
                      top: "9.4em",
                      paddingLeft: "1em",
                      borderLeft: "2px solid #E8E6DC",
                    }}
                  >
                    <div style={{ fontSize: ".8em", color: "#6B6A64", marginBottom: ".5em" }}>
                      <span>1 reply</span>
                    </div>
                    <div style={{ display: "flex", gap: ".7em" }}>
                      <BrandMarkAvatar size="1.9em" radius=".48em" />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: ".4em" }}>
                          <span style={{ fontWeight: 600 }}>Reflex</span>
                          <span
                            className="chip"
                            style={{ background: "#F0EEE6", color: "#3D3D3A", height: "1.45em", padding: "0 .45em" }}
                          >
                            AI
                          </span>
                          <span style={{ fontSize: ".8em", color: "#6B6A64" }}>9:02 AM</span>
                        </div>
                        <div style={{ display: "grid", marginTop: ".2em" }}>
                          <span className="s-a" style={{ gridArea: "1/1" }}>
                            On it. Posting to SAP: <span className="s-cnt" style={{ fontWeight: 600 }} /> of 42 invoices
                          </span>
                          <span className="s-b" style={{ gridArea: "1/1" }}>
                            On it. 42 invoices posted, 2 flagged for approval.
                          </span>
                        </div>
                        <div style={{ marginTop: ".6em", display: "flex", flexDirection: "column", gap: ".4em" }}>
                          {[
                            { cls: "s-f0", id: "INV-4471", desc: "Acme Supply · $58,200" },
                            { cls: "s-f1", id: "INV-4490", desc: "Halden Freight · $61,750" },
                          ].map((flag) => (
                            <div
                              key={flag.id}
                              className={flag.cls}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                height: "2.5em",
                                padding: "0 .4em 0 .8em",
                                border: "1px solid rgba(31,30,29,.12)",
                                borderRadius: ".55em",
                                background: "#FFFFFF",
                              }}
                            >
                              <span style={{ display: "flex", alignItems: "center", gap: ".5em" }}>
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="#9A4A2E"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  style={{ flex: "none", width: ".95em", height: ".95em" }}
                                >
                                  <path d="M3.5 14V2.5M3.5 3h8.2l-1.6 2.8 1.6 2.8H3.5" />
                                </svg>
                                <span className="mono" style={{ fontSize: ".8em" }}>{flag.id}</span>
                                <span style={{ fontSize: ".86em", color: "#3D3D3A" }}>{flag.desc}</span>
                              </span>
                              <span style={{ display: "flex", gap: ".35em" }}>
                                <span
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    height: "1.8em",
                                    padding: "0 .75em",
                                    borderRadius: ".45em",
                                    background: "#141413",
                                    color: "#FAF9F5",
                                  }}
                                >
                                  <span style={{ fontSize: ".78em", fontWeight: 600 }}>Approve</span>
                                </span>
                                <span
                                  style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    height: "1.8em",
                                    padding: "0 .75em",
                                    borderRadius: ".45em",
                                    border: "1px solid rgba(31,30,29,.18)",
                                  }}
                                >
                                  <span style={{ fontSize: ".78em", fontWeight: 600 }}>View</span>
                                </span>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {ch === 2 && (
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  width: "40em",
                  height: "22em",
                  margin: "0 auto",
                  fontSize: "min(12.5px,calc(100cqw / 40))",
                  color: "#141413",
                  lineHeight: 1.35,
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="x-loop"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    width: "17.5em",
                    height: "22em",
                    marginLeft: "-8.75em",
                    background: "#FFFFFF",
                    border: "1px solid rgba(31,30,29,.14)",
                    borderRadius: "2.2em",
                    overflow: "hidden",
                    boxShadow: "0 28px 56px -28px rgba(20,20,19,.3)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "4.4em",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      gap: ".5em",
                      paddingBottom: ".7em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                      background: "#FAF9F5",
                    }}
                  >
                    <BrandMarkAvatar size="1.7em" radius=".48em" />
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                      <span style={{ fontSize: ".9em", fontWeight: 600 }}>Reflex</span>
                      <span style={{ fontSize: ".72em", color: "#6B6A64" }}>
                        Text · +1 (555) 010-0199
                      </span>
                    </span>
                  </div>
                  <div
                    className="abs x-q"
                    style={{
                      right: "1em",
                      top: "5.6em",
                      maxWidth: "12em",
                      padding: ".6em .85em",
                      borderRadius: "1em 1em .3em 1em",
                      background: "#141413",
                      color: "#FAF9F5",
                    }}
                  >
                    <span className="wrap" style={{ fontSize: ".9em", whiteSpace: "normal" }}>
                      Any update on the Acme invoice?
                    </span>
                  </div>
                  <div className="abs x-read" style={{ right: "1.1em", top: "9.3em", color: "#6B6A64" }}>
                    <span style={{ fontSize: ".7em" }}>Read 9:42 AM</span>
                  </div>
                  <div
                    className="abs x-dots"
                    style={{
                      left: "1em",
                      top: "11.1em",
                      display: "flex",
                      gap: ".3em",
                      padding: ".8em .9em",
                      borderRadius: "1em 1em 1em .3em",
                      background: "#F0EEE6",
                    }}
                  >
                    <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: "0s" }} />
                    <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: ".15s" }} />
                    <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: ".3s" }} />
                  </div>
                  <div
                    className="abs x-a"
                    style={{
                      left: "1em",
                      top: "11.1em",
                      maxWidth: "12.5em",
                      padding: ".6em .85em",
                      borderRadius: "1em 1em 1em .3em",
                      background: "#F0EEE6",
                    }}
                  >
                    <span className="wrap" style={{ fontSize: ".9em", whiteSpace: "normal", display: "block" }}>
                      Told Acme it&apos;s on hold. They&apos;ll resend by Friday.
                    </span>
                  </div>
                  <div
                    className="abs"
                    style={{
                      left: "1em",
                      right: "1em",
                      bottom: "1em",
                      height: "2.4em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 .35em 0 .9em",
                      border: "1px solid rgba(31,30,29,.14)",
                      borderRadius: "1.2em",
                    }}
                  >
                    <span style={{ fontSize: ".82em", color: "#87867F" }}>Text message</span>
                    <span
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "1.75em",
                        height: "1.75em",
                        borderRadius: "50%",
                        background: "#141413",
                        color: "#FAF9F5",
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flex: "none", width: ".85em", height: ".85em" }}
                      >
                        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {ch === 3 && (
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  width: "40em",
                  height: "22em",
                  margin: "0 auto",
                  fontSize: "min(12.5px,calc(100cqw / 40))",
                  color: "#141413",
                  lineHeight: 1.35,
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="q-loop"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: 0,
                    width: "17.5em",
                    height: "22em",
                    marginLeft: "-8.75em",
                    background: "#FFFFFF",
                    border: "1px solid rgba(31,30,29,.14)",
                    borderRadius: "2.2em",
                    overflow: "hidden",
                    boxShadow: "0 28px 56px -28px rgba(20,20,19,.3)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "4.4em",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      gap: ".5em",
                      paddingBottom: ".7em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                      background: "#FAF9F5",
                    }}
                  >
                    <BrandMarkAvatar size="1.7em" radius=".48em" />
                    <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
                      <span style={{ fontSize: ".9em", fontWeight: 600 }}>Reflex</span>
                      <span style={{ fontSize: ".72em", color: "#6B6A64" }}>online</span>
                    </span>
                  </div>
                  <div
                    className="abs q-q"
                    style={{
                      right: "1em",
                      top: "5.6em",
                      maxWidth: "12.5em",
                      padding: ".6em .85em .45em",
                      borderRadius: "1em 1em .3em 1em",
                      background: "#E7ECDD",
                    }}
                  >
                    <span className="wrap" style={{ fontSize: ".9em", whiteSpace: "normal", display: "block" }}>
                      Pull today&apos;s rate sheets please
                    </span>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: ".25em",
                        marginTop: ".15em",
                        color: "#6B6A64",
                      }}
                    >
                      <span style={{ fontSize: ".66em" }}>9:15</span>
                      <span style={{ display: "grid" }}>
                        <span className="q-t1" style={{ gridArea: "1/1", color: "#87867F" }}>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1.1em", height: "1.1em" }}
                          >
                            <path d="M1.8 8.6 4.4 11.2 9.6 4.8M7.4 10.6l.6.6 5.2-6.4" />
                          </svg>
                        </span>
                        <span className="q-t2" style={{ gridArea: "1/1", color: "#3F6E9E" }}>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1.1em", height: "1.1em" }}
                          >
                            <path d="M1.8 8.6 4.4 11.2 9.6 4.8M7.4 10.6l.6.6 5.2-6.4" />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                  <div
                    className="abs q-dots"
                    style={{
                      left: "1em",
                      top: "10.3em",
                      display: "flex",
                      gap: ".3em",
                      padding: ".8em .9em",
                      borderRadius: "1em 1em 1em .3em",
                      background: "#F0EEE6",
                    }}
                  >
                    <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: "0s" }} />
                    <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: ".15s" }} />
                    <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: ".3s" }} />
                  </div>
                  <div
                    className="abs q-a"
                    style={{
                      left: "1em",
                      top: "10.3em",
                      maxWidth: "13.5em",
                      padding: ".6em .85em",
                      borderRadius: "1em 1em 1em .3em",
                      background: "#F5F4ED",
                      border: "1px solid rgba(31,30,29,.08)",
                    }}
                  >
                    <span className="wrap" style={{ fontSize: ".9em", whiteSpace: "normal", display: "block" }}>
                      Done. 6 investor portals checked, sheet attached.
                    </span>
                    <div
                      className="q-file"
                      style={{
                        marginTop: ".55em",
                        display: "flex",
                        alignItems: "center",
                        gap: ".55em",
                        padding: ".5em .6em",
                        borderRadius: ".6em",
                        background: "#FFFFFF",
                        border: "1px solid rgba(31,30,29,.1)",
                      }}
                    >
                      <span
                        style={{
                          display: "grid",
                          placeItems: "center",
                          width: "1.9em",
                          height: "1.9em",
                          borderRadius: ".4em",
                          background: "#E8ECE1",
                          color: "#4D5E38",
                        }}
                      >
                        <span style={{ fontSize: ".52em", fontWeight: 700 }}>XLSX</span>
                      </span>
                      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                        <span style={{ fontSize: ".8em", fontWeight: 600 }}>rate-sheets-nov-19.xlsx</span>
                        <span style={{ fontSize: ".7em", color: "#6B6A64" }}>6 portals · 42 KB</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="abs"
                    style={{
                      left: "1em",
                      right: "1em",
                      bottom: "1em",
                      height: "2.4em",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 .9em",
                      border: "1px solid rgba(31,30,29,.14)",
                      borderRadius: "1.2em",
                    }}
                  >
                    <span style={{ fontSize: ".82em", color: "#87867F" }}>Message</span>
                  </div>
                </div>
              </div>
            )}

            {ch === 4 && (
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  width: "40em",
                  height: "22em",
                  margin: "0 auto",
                  fontSize: "min(12.5px,calc(100cqw / 40))",
                  color: "#141413",
                  lineHeight: 1.35,
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="r-loop"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#FFFFFF",
                    border: "1px solid rgba(31,30,29,.13)",
                    borderRadius: ".9em",
                    overflow: "hidden",
                    boxShadow:
                      "0 1px 1px rgba(20,20,19,.04),0 28px 56px -28px rgba(20,20,19,.25)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 1.25em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Schedules</span>
                    <span style={{ fontSize: ".8em", color: "#6B6A64" }}>
                      Times shown in your time zone
                    </span>
                  </div>
                  <div
                    className="abs"
                    style={{
                      left: "1.25em",
                      right: "1.25em",
                      top: "4.1em",
                      border: "1px solid rgba(31,30,29,.11)",
                      borderRadius: ".85em",
                      overflow: "hidden",
                    }}
                  >
                    <div style={{ position: "relative", height: "5.2em" }}>
                      <div
                        className="abs"
                        style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center", gap: ".85em" }}
                      >
                        <span
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: "2.2em",
                            height: "2.2em",
                            borderRadius: ".55em",
                            background: "#F0EEE6",
                          }}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="#3D3D3A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1.1em", height: "1.1em" }}
                          >
                            <circle cx="8" cy="8" r="5.8" />
                            <path d="M8 4.8V8l2.2 1.4" />
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                          <span style={{ fontWeight: 600 }}>Tax portal notices</span>
                          <span style={{ fontSize: ".84em", color: "#6B6A64" }}>
                            Every day · 7:00 AM
                          </span>
                        </span>
                      </div>
                      <div
                        className="abs"
                        style={{
                          right: "1em",
                          top: 0,
                          bottom: 0,
                          display: "grid",
                          alignItems: "center",
                          justifyItems: "end",
                        }}
                      >
                        <span className="r-next" style={{ gridArea: "1/1" }}>
                          <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                            Next: 7:00 AM
                          </span>
                        </span>
                        <span className="r-run" style={{ gridArea: "1/1" }}>
                          <span className="chip" style={{ background: "#141413", color: "#FAF9F5" }}>
                            <span
                              className="pulse"
                              style={{
                                width: ".45em",
                                height: ".45em",
                                borderRadius: "50%",
                                background: "var(--accent)",
                              }}
                            />
                            Running now
                          </span>
                        </span>
                        <span className="r-done" style={{ gridArea: "1/1" }}>
                          <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ flex: "none", width: ".95em", height: ".95em" }}
                            >
                              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                            </svg>
                            Done 7:02 AM · 3 notices found
                          </span>
                        </span>
                      </div>
                      <div
                        className="abs r-bar"
                        style={{
                          left: "1em",
                          right: "1em",
                          bottom: ".55em",
                          height: ".22em",
                          borderRadius: ".11em",
                          background: "#EFEDE6",
                          overflow: "hidden",
                        }}
                      >
                        <span
                          className="r-fill"
                          style={{
                            display: "block",
                            height: "100%",
                            background: "var(--accent)",
                            transformOrigin: "left center",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        height: "5.2em",
                        borderTop: "1px solid rgba(31,30,29,.09)",
                      }}
                    >
                      <div
                        className="abs"
                        style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center", gap: ".85em" }}
                      >
                        <span
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: "2.2em",
                            height: "2.2em",
                            borderRadius: ".55em",
                            background: "#F0EEE6",
                          }}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="#3D3D3A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1.1em", height: "1.1em" }}
                          >
                            <circle cx="7" cy="7" r="4.5" />
                            <path d="m10.4 10.4 3.1 3.1" />
                          </svg>
                        </span>
                        <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                          <span style={{ fontWeight: 600 }}>Technical SEO audit</span>
                          <span style={{ fontSize: ".84em", color: "#6B6A64" }}>
                            Every Monday · 8:00 AM
                          </span>
                        </span>
                      </div>
                      <div
                        className="abs"
                        style={{ right: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}
                      >
                        <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                          Next: Mon 8:00 AM
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="abs"
                    style={{
                      left: "1.25em",
                      top: "15.6em",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: ".45em",
                      height: "2.3em",
                      padding: "0 .9em",
                      borderRadius: ".6em",
                      border: "1px dashed rgba(31,30,29,.25)",
                      color: "#3D3D3A",
                    }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flex: "none", width: ".95em", height: ".95em" }}
                    >
                      <path d="M8 3v10M3 8h10" />
                    </svg>
                    <span style={{ fontSize: ".86em", fontWeight: 500 }}>New schedule</span>
                  </div>
                </div>
              </div>
            )}

            {ch === 5 && (
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  width: "40em",
                  height: "22em",
                  margin: "0 auto",
                  fontSize: "min(12.5px,calc(100cqw / 40))",
                  color: "#141413",
                  lineHeight: 1.35,
                  textAlign: "left",
                  pointerEvents: "none",
                }}
              >
                <div
                  className="a-loop mono"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#1A1918",
                    border: "1px solid #30302E",
                    borderRadius: ".9em",
                    overflow: "hidden",
                    color: "#F0EEE6",
                    boxShadow: "0 28px 56px -28px rgba(20,20,19,.45)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "2.6em",
                      display: "flex",
                      alignItems: "center",
                      gap: ".42em",
                      padding: "0 1em",
                      borderBottom: "1px solid #30302E",
                    }}
                  >
                    <span style={{ width: ".7em", height: ".7em", borderRadius: "50%", background: "#3D3D3A" }} />
                    <span style={{ width: ".7em", height: ".7em", borderRadius: "50%", background: "#3D3D3A" }} />
                    <span style={{ width: ".7em", height: ".7em", borderRadius: "50%", background: "#3D3D3A" }} />
                    <span style={{ marginLeft: ".6em", color: "#9C9A92" }}>
                      <span style={{ fontSize: ".78em" }}>terminal</span>
                    </span>
                  </div>
                  <div className="abs" style={{ left: "1.3em", right: "1.3em", top: "3.6em" }}>
                    <div className="a-l0" style={{ height: "1.65em", width: "max-content" }}>
                      <span style={{ fontSize: ".86em" }}>
                        <span style={{ color: "#87867F" }}>$</span> curl -X POST https://api.reflex.ai/v1/runs \
                      </span>
                    </div>
                    <div className="a-l1" style={{ height: "1.65em", width: "max-content" }}>
                      <span style={{ fontSize: ".86em" }}>
                        {"\u00A0\u00A0"}-H &quot;Authorization: Bearer $RFX_KEY&quot; \
                      </span>
                    </div>
                    <div className="a-l2" style={{ height: "1.65em", width: "max-content" }}>
                      <span style={{ fontSize: ".86em" }}>
                        {"\u00A0\u00A0"}-d &apos;{"{"}&quot;workflow&quot;:&quot;rate-locks&quot;,&quot;input&quot;:{"{"}&quot;loans&quot;:4
                        <span>{"}"}</span>
                        <span>{"}"}</span>&apos;
                      </span>
                    </div>
                    <div style={{ height: ".7em" }} />
                    <div className="a-r0" style={{ height: "1.5em", color: "#C2C0B6" }}>
                      <span style={{ fontSize: ".86em" }}>{"{"}</span>
                    </div>
                    <div className="a-r1" style={{ height: "1.5em", color: "#C2C0B6" }}>
                      <span style={{ fontSize: ".86em" }}>{"\u00A0\u00A0"}&quot;id&quot;: &quot;run_7Hq2xN&quot;,</span>
                    </div>
                    <div className="a-r2" style={{ height: "1.5em", color: "#C2C0B6" }}>
                      <span style={{ fontSize: ".86em" }}>{"\u00A0\u00A0"}&quot;workflow&quot;: &quot;rate-locks&quot;,</span>
                    </div>
                    <div className="a-r3" style={{ height: "1.5em", color: "#C2C0B6" }}>
                      <span style={{ fontSize: ".86em" }}>{"\u00A0\u00A0"}&quot;status&quot;: &quot;running&quot;</span>
                    </div>
                    <div className="a-r4" style={{ height: "1.5em", color: "#C2C0B6" }}>
                      <span style={{ fontSize: ".86em" }}>{"}"}</span>
                    </div>
                    <div
                      className="a-ev"
                      style={{
                        marginTop: ".9em",
                        display: "flex",
                        alignItems: "center",
                        gap: ".55em",
                        color: "#BCD1A8",
                      }}
                    >
                      <span style={{ width: ".5em", height: ".5em", borderRadius: "50%", background: "#9DB57A" }} />
                      <span style={{ fontSize: ".86em" }}>
                        webhook received: run.completed · 3m 12s
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: 24,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px 40px",
            padding: "clamp(26px,3.4vw,40px) clamp(24px,3.6vw,44px)",
            border: "1px solid rgba(31,30,29,.12)",
            borderRadius: 24,
            background: "#FFFFFF",
          }}
        >
          <div style={{ flex: "1 1 420px", maxWidth: 680 }}>
            <h3
              className="serif"
              style={{
                fontSize: "clamp(26px,2.4vw,32px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-.01em",
              }}
            >
              {CH_COPY[ch].title}
            </h3>
            <p
              style={{
                marginTop: 10,
                fontSize: 17,
                lineHeight: 1.6,
                color: "#5E5D59",
                textWrap: "pretty",
              }}
            >
              {CH_COPY[ch].body}
            </p>
          </div>
          <a
            className="btn btn-dark"
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
