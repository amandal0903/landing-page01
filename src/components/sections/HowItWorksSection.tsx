"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMarkAvatar } from "@/components/ui/BrandMark";
import { BrandLogo } from "@/components/ui/BrandLogo";

const HIW_TABS = [
  {
    num: "01",
    title: "Teach Reflex",
    sub: "Show it how, once.",
  },
  {
    num: "02",
    title: "Watch it learn",
    sub: "It tries it, then saves the SOP.",
  },
  {
    num: "03",
    title: "Set a trigger",
    sub: "Set it once. It runs on its own.",
  },
] as const;

const HIW_TILES = [
  { left: 48, top: 48, delay: "-0.0s", warm: false },
  { left: 192, top: 0, delay: "-3.7s", warm: false },
  { left: 432, top: 48, delay: "-7.4s", warm: false },
  { left: 576, top: 144, delay: "-1.1s", warm: false },
  { left: 0, top: 288, delay: "-4.8s", warm: false },
  { left: 624, top: 288, delay: "-8.5s", warm: true },
  { left: 528, top: 384, delay: "-2.2s", warm: false },
  { left: 144, top: 336, delay: "-5.9s", warm: false },
  { left: 336, top: 0, delay: "-9.6s", warm: false },
] as const;

const PROCESS_STEPS = [
  {
    n: "1",
    title: "Receive the request",
    desc: 'An email with the subject "Run SEO audit"',
    ownerType: "ai" as const,
  },
  {
    n: "2",
    title: "Crawl the pages",
    desc: "Open every page in the browser",
    ownerType: "ai" as const,
  },
  {
    n: "3",
    title: "Check each page",
    desc: "Title, meta description, canonical tag, load time",
    ownerType: "ai" as const,
  },
  {
    n: "4",
    title: "Approve the report",
    desc: "Maya signs off before it goes out",
    ownerType: "human" as const,
  },
  {
    n: "5",
    title: "Send the report",
    desc: "Reply with the fixes, one ticket per fix",
    ownerType: "ai" as const,
  },
] as const;

export function HowItWorksSection() {
  const { hiw, hiwAuto, hiwRun, pickHiw, registerLiveStage } = useDemoRuntime();

  return (
    <section
      id="how"
      aria-labelledby="how-h"
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
            How it works
          </p>
          <h2
            id="how-h"
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
            <span style={{ display: "block" }}>Teach it. Watch it learn.</span>
            <span style={{ display: "block", color: "#82817A" }}>
              Trigger it.
            </span>
          </h2>
          <p
            style={{
              maxWidth: 560,
              margin: "24px auto 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#5E5D59",
              textWrap: "pretty",
            }}
          >
            Show Reflex how once, watch it get it right, and start it from
            wherever your team works.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          <div
            role="tablist"
            aria-label="How it works"
            aria-orientation="vertical"
            style={{
              flex: "1 1 300px",
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 6,
            }}
          >
            {HIW_TABS.map((tab, idx) => {
              const selected = hiw === idx;
              return (
                <button
                  key={tab.num}
                  className="hiw-tab"
                  type="button"
                  role="tab"
                  id={`hiw-t${idx}`}
                  aria-controls="hiw-panel"
                  aria-selected={selected}
                  onClick={() => pickHiw(idx)}
                >
                  <span
                    className="t-num mono"
                    style={{ display: "block", fontSize: 12.5, fontWeight: 500 }}
                  >
                    {tab.num}
                  </span>
                  <span
                    className="t-title serif"
                    style={{
                      display: "block",
                      marginTop: 10,
                      fontSize: 25,
                      lineHeight: 1.2,
                      letterSpacing: "-.01em",
                    }}
                  >
                    {tab.title}
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: 6,
                      fontSize: 15.5,
                      lineHeight: 1.45,
                      color: "#5E5D59",
                    }}
                  >
                    {tab.sub}
                  </span>
                  {selected && hiwAuto ? (
                    <span className="prog" aria-hidden="true">
                      <span key={hiwRun} />
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>

          <div
            ref={registerLiveStage}
            id="hiw-panel"
            className="stage live"
            role="tabpanel"
            aria-label="Product demo for the selected step"
            style={{
              flex: "2 1 560px",
              minWidth: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "clamp(14px,4.5%,40px)",
            }}
          >
            {HIW_TILES.map((t, idx) => (
              <span
                key={idx}
                className={t.warm ? "tile warm" : "tile"}
                style={{ left: t.left, top: t.top, animationDelay: t.delay }}
              />
            ))}

            <div style={{ position: "relative", width: "100%" }}>
              {hiw === 0 && (
                <div
                  key={`hiw0-${hiwRun}`}
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3.4em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 1.25em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                      background: "#FFFFFF",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: ".7em" }}>
                      <BrandMarkAvatar size="2em" radius=".48em" />
                      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                        <span style={{ fontWeight: 600 }}>Reflex</span>
                        <span style={{ fontSize: ".8em", color: "#6B6A64" }}>
                          New AI employee · Web
                        </span>
                      </div>
                    </div>
                    <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                      <span
                        className="pulse"
                        style={{
                          width: ".45em",
                          height: ".45em",
                          borderRadius: "50%",
                          background: "var(--accent)",
                        }}
                      />
                      Learning
                    </span>
                  </div>

                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: "4.25em",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      className="chip"
                      style={{ background: "#F5F4ED", color: "#5E5D59", fontWeight: 400 }}
                    >
                      Reflex joined your team · agent@inbox.reflex.ai
                    </span>
                  </div>

                  <div
                    className="abs t-user"
                    style={{
                      right: "1.25em",
                      top: "6.7em",
                      display: "flex",
                      alignItems: "flex-end",
                      gap: ".6em",
                    }}
                  >
                    <div
                      style={{
                        padding: ".8em 1em",
                        borderRadius: "1em 1em .3em 1em",
                        background: "#141413",
                        color: "#FAF9F5",
                      }}
                    >
                      <div style={{ fontSize: ".95em", lineHeight: 1.45 }}>
                        <span className="t-l0" style={{ display: "block", width: "max-content" }}>
                          Open each page. Check the title, meta description,
                        </span>
                        <span className="t-l1" style={{ display: "block", width: "max-content" }}>
                          canonical tag and load time. Flag anything missing
                        </span>
                        <span className="t-l2" style={{ display: "block", width: "max-content" }}>
                          or slower than 3 seconds.
                        </span>
                      </div>
                    </div>
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: "1.9em",
                        height: "1.9em",
                        borderRadius: "50%",
                        background: "#E3DACC",
                        color: "#3D3D3A",
                      }}
                    >
                      <span style={{ fontSize: ".5em", fontWeight: 600, lineHeight: 1 }}>
                        MC
                      </span>
                    </span>
                  </div>

                  <div
                    className="abs t-dots"
                    style={{
                      left: "1.25em",
                      top: "13.4em",
                      display: "flex",
                      alignItems: "flex-end",
                      gap: ".6em",
                    }}
                  >
                    <BrandMarkAvatar size="1.9em" radius=".48em" />
                    <div
                      style={{
                        display: "flex",
                        gap: ".3em",
                        padding: ".85em 1em",
                        borderRadius: "1em 1em 1em .3em",
                        border: "1px solid rgba(31,30,29,.12)",
                        background: "#FFFFFF",
                      }}
                    >
                      <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92" }} />
                      <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: ".15s" }} />
                      <span className="t-dot" style={{ width: ".42em", height: ".42em", borderRadius: "50%", background: "#9C9A92", animationDelay: ".3s" }} />
                    </div>
                  </div>

                  <div
                    className="abs t-reply"
                    style={{
                      left: "1.25em",
                      top: "13.4em",
                      display: "flex",
                      alignItems: "flex-end",
                      gap: ".6em",
                    }}
                  >
                    <BrandMarkAvatar size="1.9em" radius=".48em" />
                    <div
                      style={{
                        padding: ".75em 1em",
                        borderRadius: "1em 1em 1em .3em",
                        border: "1px solid rgba(31,30,29,.12)",
                        background: "#FFFFFF",
                      }}
                    >
                      <span style={{ fontSize: ".95em" }}>
                        Got it. Let me try that on your pricing pages.
                      </span>
                    </div>
                  </div>

                  <div
                    className="abs t-prog"
                    style={{
                      left: "3.75em",
                      top: "17.1em",
                      display: "flex",
                      flexDirection: "column",
                      gap: ".6em",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: ".55em", color: "#3D3D3A" }}>
                      <span style={{ display: "grid", width: "1em", height: "1em" }}>
                        <span className="spin t-spin" style={{ gridArea: "1/1" }} />
                        <span className="t-ok" style={{ gridArea: "1/1", color: "#4D5E38" }}>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1em", height: "1em" }}
                          >
                            <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                          </svg>
                        </span>
                      </span>
                      <span style={{ fontSize: ".88em" }}>
                        Trying it on /pricing, /plans, /enterprise…
                      </span>
                      <span style={{ display: "grid" }}>
                        <span className="t-c0" style={{ gridArea: "1/1" }}>
                          <span style={{ fontSize: ".82em", color: "#6B6A64" }}>1 of 3 checked</span>
                        </span>
                        <span className="t-c1" style={{ gridArea: "1/1" }}>
                          <span style={{ fontSize: ".82em", color: "#6B6A64" }}>2 of 3 checked</span>
                        </span>
                        <span className="t-c2" style={{ gridArea: "1/1" }}>
                          <span style={{ fontSize: ".82em", fontWeight: 600, color: "#4D5E38" }}>
                            3 of 3 checked
                          </span>
                        </span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: ".45em" }}>
                      {["/pricing", "/plans", "/enterprise"].map((path, idx) => (
                        <span key={path} className={`t-pg${idx}`}>
                          <span
                            className="chip"
                            style={{
                              background: "#FFFFFF",
                              color: "#3D3D3A",
                              border: "1px solid rgba(31,30,29,.12)",
                            }}
                          >
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="#4D5E38"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ flex: "none", width: ".95em", height: ".95em" }}
                            >
                              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                            </svg>
                            {path}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="abs"
                    style={{
                      left: "1.25em",
                      right: "1.25em",
                      top: "25.3em",
                      height: "3.4em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 .5em 0 1.1em",
                      border: "1px solid rgba(31,30,29,.15)",
                      borderRadius: ".9em",
                      background: "#FFFFFF",
                    }}
                  >
                    <span style={{ color: "#87867F", fontSize: ".95em" }}>
                      Teach Reflex…
                    </span>
                    <span
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: "2.3em",
                        height: "2.3em",
                        borderRadius: ".6em",
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
                        style={{ flex: "none", width: "1em", height: "1em" }}
                      >
                        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              )}

              {hiw === 1 && (
                <div
                  key={`hiw1-${hiwRun}`}
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3.4em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 1.25em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                      background: "#FFFFFF",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: ".5em" }}>
                      <span style={{ fontWeight: 600 }}>Process canvas</span>
                      <span style={{ fontSize: ".85em", color: "#6B6A64" }}>
                        Technical SEO audit
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: ".5em" }}>
                      <span style={{ display: "flex" }}>
                        <BrandMarkAvatar size="1.55em" radius=".48em" />
                        <span
                          style={{
                            marginLeft: "-.35em",
                            borderRadius: "50%",
                            boxShadow: "0 0 0 .14em #FFFFFF",
                            display: "flex",
                          }}
                        >
                          <span
                            style={{
                              flex: "none",
                              display: "grid",
                              placeItems: "center",
                              width: "1.55em",
                              height: "1.55em",
                              borderRadius: "50%",
                              background: "#E3DACC",
                              color: "#3D3D3A",
                            }}
                          >
                            <span style={{ fontSize: ".5em", fontWeight: 600, lineHeight: 1 }}>
                              MC
                            </span>
                          </span>
                        </span>
                      </span>
                      <span style={{ fontSize: ".8em", color: "#6B6A64" }}>
                        Reflex, Maya Chen
                      </span>
                    </div>
                  </div>

                  <div
                    className="abs"
                    style={{
                      left: "1.25em",
                      right: "1.25em",
                      top: "4.3em",
                      border: "1px solid rgba(31,30,29,.11)",
                      borderRadius: ".85em",
                      overflow: "hidden",
                      background: "#FFFFFF",
                    }}
                  >
                    {PROCESS_STEPS.map((step, idx) => (
                      <div
                        key={step.n}
                        style={{
                          position: "relative",
                          height: "3.75em",
                          borderTop: idx === 0 ? "0" : "1px solid rgba(31,30,29,.09)",
                        }}
                      >
                        <div className={`abs w-on${idx}`} style={{ inset: 0, background: "#FAF9F5" }} />
                        <div
                          className="abs"
                          style={{ left: ".9em", top: 0, bottom: 0, display: "grid", alignItems: "center" }}
                        >
                          <span
                            className={`w-n${idx}`}
                            style={{
                              gridArea: "1/1",
                              display: "grid",
                              placeItems: "center",
                              width: "1.8em",
                              height: "1.8em",
                              borderRadius: "50%",
                              background: "#F0EEE6",
                              color: "#5E5D59",
                            }}
                          >
                            <span style={{ fontSize: ".8em", fontWeight: 600 }}>{step.n}</span>
                          </span>
                          <span
                            className={`w-s${idx}`}
                            style={{
                              gridArea: "1/1",
                              display: "grid",
                              placeItems: "center",
                              width: "1.8em",
                              height: "1.8em",
                              borderRadius: "50%",
                              border: "1px solid rgba(31,30,29,.14)",
                              background: "#FFFFFF",
                            }}
                          >
                            <span className="spin" />
                          </span>
                          <span
                            className={`w-d${idx}`}
                            style={{
                              gridArea: "1/1",
                              display: "grid",
                              placeItems: "center",
                              width: "1.8em",
                              height: "1.8em",
                              borderRadius: "50%",
                              background: "#788C5D",
                              color: "#FFFFFF",
                            }}
                          >
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ flex: "none", width: "1em", height: "1em" }}
                            >
                              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                            </svg>
                          </span>
                        </div>
                        <div
                          className="abs"
                          style={{
                            left: "3.6em",
                            top: 0,
                            bottom: 0,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            lineHeight: 1.3,
                          }}
                        >
                          <span style={{ fontSize: ".95em", fontWeight: 600 }}>{step.title}</span>
                          <span style={{ fontSize: ".8em", color: "#6B6A64" }}>{step.desc}</span>
                        </div>
                        <div
                          className="abs"
                          style={{
                            left: "24.6em",
                            top: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            gap: ".45em",
                            color: "#3D3D3A",
                          }}
                        >
                          {step.ownerType === "ai" ? (
                            <>
                              <BrandMarkAvatar size="1.45em" radius=".48em" />
                              <span style={{ fontSize: ".84em" }}>Reflex</span>
                            </>
                          ) : (
                            <>
                              <span
                                style={{
                                  flex: "none",
                                  display: "grid",
                                  placeItems: "center",
                                  width: "1.45em",
                                  height: "1.45em",
                                  borderRadius: "50%",
                                  background: "#E3DACC",
                                  color: "#3D3D3A",
                                }}
                              >
                                <span style={{ fontSize: ".5em", fontWeight: 600, lineHeight: 1 }}>
                                  MC
                                </span>
                              </span>
                              <span style={{ fontSize: ".84em" }}>Maya Chen</span>
                            </>
                          )}
                        </div>
                        {idx === 3 && (
                          <div
                            className="abs"
                            style={{
                              right: ".9em",
                              top: 0,
                              bottom: 0,
                              display: "grid",
                              alignItems: "center",
                              justifyItems: "end",
                            }}
                          >
                            <div
                              className="w-wait"
                              style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: ".45em" }}
                            >
                              <span className="chip" style={{ background: "#F7E9E3", color: "#9A4A2E" }}>
                                Waiting for Maya
                              </span>
                              <span
                                className="w-appr"
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  height: "1.9em",
                                  padding: "0 .9em",
                                  borderRadius: ".5em",
                                  background: "#141413",
                                  color: "#FAF9F5",
                                }}
                              >
                                <span style={{ fontSize: ".82em", fontWeight: 600 }}>Approve</span>
                              </span>
                            </div>
                            <div className="w-ok" style={{ gridArea: "1/1" }}>
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
                                Approved by Maya
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div
                    className="abs"
                    style={{ left: "50%", top: "25.4em", transform: "translateX(-50%)" }}
                  >
                    <div
                      className="w-toast"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".55em",
                        height: "2.3em",
                        padding: "0 1.05em 0 .65em",
                        borderRadius: "1.15em",
                        background: "#141413",
                        color: "#FAF9F5",
                        boxShadow: "0 12px 26px -14px rgba(20,20,19,.55)",
                      }}
                    >
                      <span
                        style={{
                          display: "grid",
                          placeItems: "center",
                          width: "1.3em",
                          height: "1.3em",
                          borderRadius: "50%",
                          background: "#788C5D",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flex: "none", width: ".8em", height: ".8em" }}
                        >
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                      </span>
                      <span style={{ fontSize: ".9em", fontWeight: 600 }}>SOP saved · v1</span>
                      <span style={{ fontSize: ".84em", color: "#C2C0B6" }}>5 steps</span>
                    </div>
                  </div>

                  <div className="abs w-cur" style={{ left: 0, top: 0, zIndex: 6 }}>
                    <span
                      className="abs w-rip"
                      style={{
                        left: "-.9em",
                        top: "-.9em",
                        width: "1.8em",
                        height: "1.8em",
                        borderRadius: "50%",
                        background: "#3F6E9E",
                      }}
                    />
                    <svg
                      viewBox="0 0 20 20"
                      style={{
                        position: "absolute",
                        left: "-.14em",
                        top: "-.1em",
                        width: "1.5em",
                        height: "1.5em",
                        overflow: "visible",
                      }}
                    >
                      <path
                        d="M2.2 1.8 17 9.6 10.4 11.4 7.4 17.8Z"
                        fill="#3F6E9E"
                        stroke="#FFFFFF"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className="abs"
                      style={{
                        left: "1.2em",
                        top: "1.3em",
                        display: "inline-flex",
                        alignItems: "center",
                        height: "1.6em",
                        padding: "0 .6em",
                        borderRadius: ".8em",
                        background: "#3F6E9E",
                        color: "#FFFFFF",
                        boxShadow: "0 6px 14px -6px rgba(20,20,19,.4)",
                      }}
                    >
                      <span style={{ fontSize: ".78em", fontWeight: 600 }}>Maya</span>
                    </span>
                  </div>
                </div>
              )}

              {hiw === 2 && (
                <div
                  key={`hiw2-${hiwRun}`}
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: 0,
                      right: 0,
                      top: 0,
                      height: "3.4em",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 1.25em",
                      borderBottom: "1px solid rgba(31,30,29,.09)",
                      background: "#FFFFFF",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: ".5em" }}>
                      <span style={{ fontWeight: 600 }}>Triggers</span>
                      <span style={{ fontSize: ".85em", color: "#6B6A64" }}>
                        Technical SEO audit
                      </span>
                    </div>
                    <div style={{ display: "grid", justifyItems: "end" }}>
                      <span className="g-next" style={{ gridArea: "1/1" }}>
                        <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: ".95em", height: ".95em" }}
                          >
                            <circle cx="8" cy="8" r="5.8" />
                            <path d="M8 4.8V8l2.2 1.4" />
                          </svg>
                          Next run: Mon 8:00 AM
                        </span>
                      </span>
                      <span className="g-run" style={{ gridArea: "1/1" }}>
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
                    </div>
                  </div>

                  <div
                    className="abs"
                    style={{
                      left: "1.25em",
                      right: "1.25em",
                      top: "4.3em",
                      border: "1px solid rgba(31,30,29,.11)",
                      borderRadius: ".85em",
                      overflow: "hidden",
                      background: "#FFFFFF",
                    }}
                  >
                    {[
                      {
                        title: "Email",
                        sub: 'Subject contains "Run SEO audit"',
                        icon: (
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1.15em", height: "1.15em" }}
                          >
                            <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
                            <path d="m2.5 4.5 5.5 4 5.5-4" />
                          </svg>
                        ),
                      },
                      {
                        title: "Slack",
                        sub: "Mention in #web-team",
                        icon: <BrandLogo domain="slack.com" size={18} />,
                      },
                      {
                        title: "Schedule",
                        sub: "Every Monday, 8:00 AM",
                        icon: (
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: "1.15em", height: "1.15em" }}
                          >
                            <circle cx="8" cy="8" r="5.8" />
                            <path d="M8 4.8V8l2.2 1.4" />
                          </svg>
                        ),
                      },
                    ].map((trg, idx) => (
                      <div
                        key={trg.title}
                        style={{
                          position: "relative",
                          height: "4.6em",
                          borderTop: idx === 0 ? "0" : "1px solid rgba(31,30,29,.09)",
                        }}
                      >
                        <div
                          className="abs"
                          style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center", gap: ".9em" }}
                        >
                          <span
                            style={{
                              display: "grid",
                              placeItems: "center",
                              width: "2.3em",
                              height: "2.3em",
                              borderRadius: ".6em",
                              background: "#F0EEE6",
                              color: "#3D3D3A",
                            }}
                          >
                            {trg.icon}
                          </span>
                          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                            <span style={{ fontWeight: 600 }}>{trg.title}</span>
                            <span style={{ fontSize: ".84em", color: "#6B6A64" }}>{trg.sub}</span>
                          </span>
                        </div>
                        <div
                          className="abs"
                          style={{ right: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center", gap: ".7em" }}
                        >
                          <span style={{ display: "grid", justifyItems: "end", color: "#6B6A64" }}>
                            <span className={`g-off${idx}`} style={{ gridArea: "1/1" }}>
                              <span style={{ fontSize: ".82em" }}>Off</span>
                            </span>
                            <span className={`g-onl${idx}`} style={{ gridArea: "1/1", color: "#141413" }}>
                              <span style={{ fontSize: ".82em", fontWeight: 600 }}>On</span>
                            </span>
                          </span>
                          <span
                            style={{
                              position: "relative",
                              width: "2.75em",
                              height: "1.55em",
                              borderRadius: ".78em",
                              background: "#E2DFD5",
                            }}
                          >
                            <span
                              className={`abs g-tr${idx}`}
                              style={{ inset: 0, borderRadius: ".78em", background: "#141413" }}
                            />
                            <span
                              className={`abs g-kn${idx}`}
                              style={{
                                left: ".2em",
                                top: ".2em",
                                width: "1.15em",
                                height: "1.15em",
                                borderRadius: "50%",
                                background: "#FFFFFF",
                                boxShadow: "0 1px 3px rgba(20,20,19,.3)",
                              }}
                            />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="abs"
                    style={{
                      left: "1.25em",
                      right: "1.25em",
                      top: "19.2em",
                      border: "1px solid rgba(31,30,29,.11)",
                      borderRadius: ".85em",
                      overflow: "hidden",
                      background: "#FFFFFF",
                    }}
                  >
                    <div
                      style={{
                        height: "2.2em",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 1em",
                        background: "#FAF9F5",
                        color: "#6B6A64",
                      }}
                    >
                      <span style={{ fontSize: ".78em", fontWeight: 500 }}>Recent runs</span>
                    </div>
                    <div style={{ position: "relative", height: "2.6em", borderTop: "1px solid rgba(31,30,29,.09)" }}>
                      <div
                        className="abs g-new"
                        style={{
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 1em",
                          background: "#FFFFFF",
                        }}
                      >
                        <span style={{ fontSize: ".86em" }}>Mon, 8:00 AM · Schedule</span>
                        <span style={{ display: "flex", alignItems: "center", gap: ".45em", color: "#3D3D3A" }}>
                          <span className="spin" />
                          <span style={{ fontSize: ".82em", fontWeight: 500 }}>Running</span>
                        </span>
                      </div>
                      <div
                        className="abs g-old"
                        style={{
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0 1em",
                          background: "#FFFFFF",
                        }}
                      >
                        <span style={{ fontSize: ".86em" }}>Thu, 2:14 PM · Email from Maya Chen</span>
                        <span style={{ color: "#4D5E38" }}>
                          <span style={{ fontSize: ".82em", fontWeight: 500 }}>Done · 3 issues</span>
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        height: "2.6em",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 1em",
                        borderTop: "1px solid rgba(31,30,29,.09)",
                      }}
                    >
                      <span className="g-shift" style={{ display: "grid" }}>
                        <span className="g-a" style={{ gridArea: "1/1", fontSize: ".86em" }}>
                          Thu, 2:14 PM · Email from Maya Chen
                        </span>
                        <span className="g-b" style={{ gridArea: "1/1", fontSize: ".86em" }}>
                          Mon, 8:00 AM · Schedule
                        </span>
                      </span>
                      <span style={{ display: "grid", justifyItems: "end", color: "#4D5E38" }}>
                        <span className="g-a" style={{ gridArea: "1/1" }}>
                          <span style={{ fontSize: ".82em", fontWeight: 500 }}>Done · 3 issues</span>
                        </span>
                        <span className="g-b" style={{ gridArea: "1/1" }}>
                          <span style={{ fontSize: ".82em", fontWeight: 500 }}>Done · 2 issues</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
