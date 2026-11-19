"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BOOK_DEMO_URL } from "@/lib/constants";
import { BrandMarkAvatar, BrandMarkInverted } from "@/components/ui/BrandMark";

const HERO_TILES = [
  { left: 48, top: 48, delay: "-1s", warm: false },
  { left: 192, top: 0, delay: "-6s", warm: false },
  { left: 384, top: 96, delay: "-3.5s", warm: false },
  { left: 576, top: 0, delay: "-8s", warm: false },
  { left: 528, top: 240, delay: "-2s", warm: true },
  { left: 0, top: 336, delay: "-5s", warm: false },
  { left: 240, top: 480, delay: "-7.5s", warm: false },
  { left: 624, top: 432, delay: "-4s", warm: false },
  { left: 96, top: 528, delay: "-9s", warm: false },
] as const;

const OLD_EMAILS = [
  {
    from: "Investor desk",
    time: "8:02 AM",
    subj: "Rate sheet · Oct 7",
    snip: "Updated pricing for all programs is attached.",
  },
  {
    from: "Kinz Lending",
    time: "7:15 AM",
    subj: "Condition cleared · 2026-04812",
    snip: "The appraisal condition has been cleared.",
  },
  {
    from: "Priya Shah",
    time: "Yesterday",
    subj: "Re: Pipeline review",
    snip: "Thanks all. Let's keep Thursday's slot.",
  },
  {
    from: "First Lender",
    time: "Yesterday",
    subj: "Your one-time code",
    snip: "Use this code to finish signing in.",
  },
] as const;

const OTP_DIGITS = ["4", "8", "2", "9", "1", "6"] as const;

const HERO_LOANS = [
  { id: "2026-04809", borrower: "K. Osei", program: "30-yr fixed", rate: "6.125%" },
  { id: "2026-04812", borrower: "M. Varga", program: "15-yr fixed", rate: "5.500%" },
  { id: "2026-04817", borrower: "J. Alvarez", program: "30-yr fixed", rate: "6.250%" },
  { id: "2026-04820", borrower: "R. Chen", program: "7/6 ARM", rate: "5.875%" },
] as const;

export function HeroSection() {
  const { registerLiveStage } = useDemoRuntime();

  return (
    <section
      aria-labelledby="hero-h"
      style={{ padding: "clamp(48px,6.5vw,100px) 0 clamp(72px,8vw,120px)" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(40px,4.5vw,64px)",
        }}
      >
        <div style={{ flex: "1 1 440px", maxWidth: 520 }}>
          <h1
            id="hero-h"
            className="serif"
            style={{
              fontSize: "clamp(42px,4.4vw,62px)",
              fontWeight: 400,
              lineHeight: 1.04,
              letterSpacing: "-.018em",
            }}
          >
            <span style={{ display: "block", whiteSpace: "nowrap" }}>
              Meet Reflex.
            </span>
            <span style={{ display: "block", color: "#82817A" }}>
              An AI employee for every process.
            </span>
          </h1>
          <p
            style={{
              marginTop: 28,
              maxWidth: 430,
              fontSize: 19,
              lineHeight: 1.55,
              color: "#5E5D59",
              textWrap: "pretty",
            }}
          >
            Teach it your process once. It runs every time, in the systems you
            already use.
          </p>
          <div
            style={{
              marginTop: 38,
              display: "flex",
              flexWrap: "wrap",
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
            <a className="btn btn-line" href="#how">
              See how it works
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" />
              </svg>
            </a>
          </div>
        </div>

        <div style={{ flex: "1.25 1 520px", minWidth: 0 }}>
          <div
            ref={registerLiveStage}
            className="stage live"
            role="img"
            aria-label="Product animation: an email asking to lock four loans arrives, Reflex signs in to the lender portal, locks each loan and replies with the confirmations."
            style={{
              padding: "clamp(14px,4.5%,36px) clamp(14px,4.5%,36px)",
            }}
          >
            {HERO_TILES.map((t, idx) => (
              <span
                key={idx}
                className={t.warm ? "tile warm" : "tile"}
                style={{
                  left: t.left,
                  top: t.top,
                  animationDelay: t.delay,
                }}
              />
            ))}

            <div
              className="win"
              aria-hidden="true"
              style={{
                width: "44em",
                height: "32em",
                fontSize: "min(12.5px,calc(100cqw / 44))",
              }}
            >
              <div className="abs h-loop" style={{ inset: 0 }}>
                {/* tab strip */}
                <div
                  className="abs"
                  style={{ left: 0, top: 0, right: 0, height: "2.6em", background: "#F0EEE6" }}
                >
                  <div
                    className="abs"
                    style={{ left: "1em", top: ".95em", display: "flex", gap: ".42em" }}
                  >
                    <span style={{ width: ".7em", height: ".7em", borderRadius: "50%", background: "#D6D3C8" }} />
                    <span style={{ width: ".7em", height: ".7em", borderRadius: "50%", background: "#D6D3C8" }} />
                    <span style={{ width: ".7em", height: ".7em", borderRadius: "50%", background: "#D6D3C8" }} />
                  </div>
                  <div
                    className="abs"
                    style={{ left: "4.6em", top: ".5em", width: "12.6em", height: "2.1em" }}
                  >
                    <div
                      className="abs h-tabAon"
                      style={{ inset: 0, background: "#FFFFFF", borderRadius: ".55em .55em 0 0" }}
                    />
                    <div
                      className="abs"
                      style={{
                        left: ".85em",
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: ".5em",
                        color: "#3D3D3A",
                      }}
                    >
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ width: ".95em", height: ".95em" }}
                      >
                        <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
                        <path d="m2.5 4.5 5.5 4 5.5-4" />
                      </svg>
                      <span style={{ fontSize: ".84em" }}>Inbox · Larkspur Mail</span>
                    </div>
                  </div>
                  <div
                    className="abs h-tabB"
                    style={{ left: "17.4em", top: ".5em", width: "12.6em", height: "2.1em" }}
                  >
                    <div
                      className="abs h-tabBon"
                      style={{ inset: 0, background: "#FFFFFF", borderRadius: ".55em .55em 0 0" }}
                    />
                    <div
                      className="abs"
                      style={{
                        left: ".85em",
                        top: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: ".5em",
                        color: "#3D3D3A",
                      }}
                    >
                      <span
                        style={{
                          display: "grid",
                          placeItems: "center",
                          width: ".95em",
                          height: ".95em",
                          borderRadius: ".22em",
                          background: "#2F5F8F",
                          color: "#FFFFFF",
                        }}
                      >
                        <span style={{ fontSize: ".6em", fontWeight: 700 }}>F</span>
                      </span>
                      <span style={{ fontSize: ".84em" }}>Rate locks · First Lender</span>
                    </div>
                  </div>
                </div>

                {/* toolbar */}
                <div
                  className="abs"
                  style={{
                    left: 0,
                    right: 0,
                    top: "2.6em",
                    height: "2.6em",
                    background: "#FFFFFF",
                    borderBottom: "1px solid rgba(31,30,29,.09)",
                  }}
                >
                  <div
                    className="abs"
                    style={{
                      left: "1em",
                      top: 0,
                      bottom: 0,
                      display: "flex",
                      alignItems: "center",
                      gap: ".55em",
                      color: "#9C9A92",
                    }}
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: ".95em", height: ".95em" }}
                    >
                      <path d="M10 3.5 5.5 8l4.5 4.5" />
                    </svg>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: ".95em", height: ".95em" }}
                    >
                      <path d="M6 3.5 10.5 8 6 12.5" />
                    </svg>
                  </div>
                  <div
                    className="abs"
                    style={{
                      left: "4.6em",
                      top: ".42em",
                      width: "25.4em",
                      height: "1.76em",
                      borderRadius: ".88em",
                      background: "#F5F4ED",
                    }}
                  >
                    <svg
                      className="abs"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="#87867F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ left: ".75em", top: ".45em", width: ".86em", height: ".86em" }}
                    >
                      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
                      <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
                    </svg>
                    <div
                      className="abs"
                      style={{ left: "2.05em", top: 0, right: ".8em", bottom: 0, overflow: "hidden" }}
                    >
                      <span className="abs h-u0" style={{ inset: 0, display: "flex", alignItems: "center" }}>
                        <span className="mono" style={{ fontSize: ".78em", color: "#5E5D59" }}>
                          mail.larkspurlending.com/inbox
                        </span>
                      </span>
                      <span className="abs h-u1" style={{ inset: 0, display: "flex", alignItems: "center" }}>
                        <span className="mono" style={{ fontSize: ".78em", color: "#5E5D59" }}>
                          mail.larkspurlending.com/inbox/rate-locks
                        </span>
                      </span>
                      <span className="abs h-u2" style={{ inset: 0, display: "flex", alignItems: "center" }}>
                        <span className="mono" style={{ fontSize: ".78em", color: "#5E5D59" }}>
                          portal.firstlender.com/sign-in
                        </span>
                      </span>
                      <span className="abs h-u3" style={{ inset: 0, display: "flex", alignItems: "center" }}>
                        <span className="mono" style={{ fontSize: ".78em", color: "#5E5D59" }}>
                          portal.firstlender.com/rate-locks/today
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="abs h-badge"
                    style={{
                      right: "1em",
                      top: ".42em",
                      height: "1.76em",
                      display: "flex",
                      alignItems: "center",
                      gap: ".45em",
                      padding: "0 .75em",
                      borderRadius: ".88em",
                      border: "1px solid rgba(31,30,29,.12)",
                      background: "#FFFFFF",
                    }}
                  >
                    <span
                      className="pulse"
                      style={{ width: ".48em", height: ".48em", borderRadius: "50%", background: "var(--accent)" }}
                    />
                    <span style={{ fontSize: ".8em", fontWeight: 500, color: "#3D3D3A" }}>
                      Reflex is working
                    </span>
                  </div>
                </div>

                {/* content */}
                <div
                  className="abs"
                  style={{ left: 0, top: "5.2em", width: "44em", height: "26.8em" }}
                >
                  {/* MAIL */}
                  <div className="abs h-mail" style={{ inset: 0 }}>
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "9em",
                        background: "#FAF9F5",
                        borderRight: "1px solid rgba(31,30,29,.08)",
                        padding: ".9em .55em",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          height: "2em",
                          padding: "0 .65em",
                          borderRadius: ".5em",
                          background: "#EDEBE3",
                        }}
                      >
                        <span style={{ fontSize: ".9em", fontWeight: 600 }}>Inbox</span>
                        <span
                          className="h-count"
                          style={{
                            display: "grid",
                            placeItems: "center",
                            minWidth: "1.4em",
                            height: "1.4em",
                            padding: "0 .35em",
                            borderRadius: ".7em",
                            background: "#141413",
                            color: "#FAF9F5",
                          }}
                        >
                          <span style={{ fontSize: ".72em", fontWeight: 600 }}>1</span>
                        </span>
                      </div>
                      {["Starred", "Sent", "Drafts"].map((label) => (
                        <div
                          key={label}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            height: "2em",
                            padding: "0 .65em",
                            color: "#5E5D59",
                          }}
                        >
                          <span style={{ fontSize: ".9em" }}>{label}</span>
                        </div>
                      ))}
                      <div style={{ marginTop: ".9em", padding: "0 .65em", color: "#6B6A64" }}>
                        <span style={{ fontSize: ".76em", fontWeight: 500 }}>Labels</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: ".5em",
                          height: "2em",
                          padding: "0 .65em",
                          color: "#5E5D59",
                        }}
                      >
                        <span style={{ width: ".5em", height: ".5em", borderRadius: ".15em", background: "#788C5D" }} />
                        <span style={{ fontSize: ".9em" }}>Rate locks</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: ".5em",
                          height: "2em",
                          padding: "0 .65em",
                          color: "#5E5D59",
                        }}
                      >
                        <span style={{ width: ".5em", height: ".5em", borderRadius: ".15em", background: "#6A9BCC" }} />
                        <span style={{ fontSize: ".9em" }}>Vendors</span>
                      </div>
                    </div>

                    {/* list */}
                    <div
                      className="abs h-list"
                      style={{ left: "9em", top: 0, width: "35em", bottom: 0, background: "#FFFFFF" }}
                    >
                      <div
                        className="abs"
                        style={{
                          left: 0,
                          right: 0,
                          top: 0,
                          height: "2.7em",
                          display: "flex",
                          alignItems: "center",
                          gap: ".55em",
                          padding: "0 1.25em",
                          borderBottom: "1px solid rgba(31,30,29,.08)",
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>Inbox</span>
                        <span style={{ fontSize: ".82em", color: "#6B6A64" }}>
                          Shared · ops@larkspurlending.com
                        </span>
                      </div>
                      <div
                        className="abs"
                        style={{ left: 0, right: 0, top: "2.7em", bottom: 0, overflow: "hidden" }}
                      >
                        <div
                          className="abs h-new"
                          style={{
                            left: 0,
                            right: 0,
                            top: 0,
                            height: "5em",
                            borderBottom: "1px solid rgba(31,30,29,.07)",
                          }}
                        >
                          <div className="abs h-hover" style={{ inset: 0, background: "#F5F4ED" }} />
                          <span
                            className="abs"
                            style={{
                              left: ".85em",
                              top: "1.08em",
                              width: ".46em",
                              height: ".46em",
                              borderRadius: "50%",
                              background: "var(--accent)",
                            }}
                          />
                          <div className="abs" style={{ left: "2.1em", right: "1.25em", top: ".7em" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                              <span style={{ fontWeight: 600 }}>Dana Ruiz</span>
                              <span style={{ fontSize: ".8em", fontWeight: 600, color: "#3D3D3A" }}>
                                9:41 AM
                              </span>
                            </div>
                            <div style={{ marginTop: ".12em", overflow: "hidden", textOverflow: "ellipsis" }}>
                              <span style={{ fontWeight: 600 }}>Fwd: Rate locks for today</span>
                              <span style={{ color: "#6B6A64" }}>
                                {" "}
                                — Please lock these four loans at today&apos;s pricing and send me the confirmations.
                              </span>
                            </div>
                            <div style={{ marginTop: ".45em", display: "flex" }}>
                              <span
                                className="chip"
                                style={{
                                  border: "1px solid rgba(31,30,29,.14)",
                                  color: "#3D3D3A",
                                  background: "#FFFFFF",
                                }}
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="#4D5E38"
                                  strokeWidth="1.5"
                                  style={{ width: "1em", height: "1em" }}
                                >
                                  <rect x="2.5" y="2.5" width="11" height="11" rx="2" />
                                  <path d="M2.5 6.5h11M2.5 10h11M7 6.5v7" />
                                </svg>
                                locks-oct-7.xlsx
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="abs h-old" style={{ left: 0, right: 0, top: "5em" }}>
                          {OLD_EMAILS.map((m) => (
                            <div
                              key={m.subj}
                              style={{
                                position: "relative",
                                height: "3.3em",
                                borderBottom: "1px solid rgba(31,30,29,.07)",
                                padding: ".62em 1.25em 0 2.1em",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                                <span style={{ color: "#3D3D3A" }}>{m.from}</span>
                                <span style={{ fontSize: ".8em", color: "#6B6A64" }}>{m.time}</span>
                              </div>
                              <div
                                style={{
                                  marginTop: ".1em",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  color: "#6B6A64",
                                }}
                              >
                                <span style={{ color: "#3D3D3A" }}>{m.subj}</span> — {m.snip}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* thread */}
                    <div
                      className="abs h-thread"
                      style={{ left: "9em", top: 0, width: "35em", bottom: 0, background: "#FFFFFF" }}
                    >
                      <div
                        className="abs"
                        style={{
                          left: 0,
                          right: 0,
                          top: 0,
                          height: "2.9em",
                          display: "flex",
                          alignItems: "center",
                          gap: ".7em",
                          padding: "0 1.25em",
                          borderBottom: "1px solid rgba(31,30,29,.08)",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="#5E5D59"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: ".95em", height: ".95em" }}
                        >
                          <path d="M13 8H3M7.5 3.5 3 8l4.5 4.5" />
                        </svg>
                        <span style={{ fontSize: "1.02em", fontWeight: 600 }}>
                          Fwd: Rate locks for today
                        </span>
                      </div>
                      <div
                        className="abs"
                        style={{ left: "1.25em", top: "3.45em", display: "flex", gap: ".45em" }}
                      >
                        <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                          Inbox
                        </span>
                        <span className="chip h-picked" style={{ background: "#141413", color: "#FAF9F5" }}>
                          <BrandMarkInverted style={{ width: "1em", height: "1em" }} />
                          Picked up by Reflex
                        </span>
                      </div>
                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          right: "1.25em",
                          top: "5.75em",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: ".8em",
                        }}
                      >
                        <span
                          style={{
                            flex: "none",
                            display: "grid",
                            placeItems: "center",
                            width: "2.2em",
                            height: "2.2em",
                            borderRadius: "50%",
                            background: "#E3DACC",
                            color: "#3D3D3A",
                          }}
                        >
                          <span style={{ fontSize: ".76em", fontWeight: 600 }}>DR</span>
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                            <span>
                              <span style={{ fontWeight: 600 }}>Dana Ruiz</span>
                              <span style={{ fontSize: ".84em", color: "#6B6A64" }}>
                                {"\u00A0"}dana@larkspurlending.com
                              </span>
                            </span>
                            <span style={{ fontSize: ".8em", color: "#6B6A64" }}>9:41 AM</span>
                          </div>
                          <div style={{ marginTop: ".1em", color: "#6B6A64" }}>
                            <span style={{ fontSize: ".82em" }}>to ops@larkspurlending.com</span>
                          </div>
                          <p className="wrap" style={{ marginTop: ".7em", maxWidth: "26em", lineHeight: 1.5 }}>
                            Please lock these four loans at today&apos;s pricing and send me the confirmations.
                          </p>
                          <div
                            style={{
                              marginTop: ".75em",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: ".65em",
                              height: "2.8em",
                              padding: "0 1em 0 .55em",
                              border: "1px solid rgba(31,30,29,.12)",
                              borderRadius: ".6em",
                            }}
                          >
                            <span
                              style={{
                                display: "grid",
                                placeItems: "center",
                                width: "1.8em",
                                height: "1.8em",
                                borderRadius: ".4em",
                                background: "#E8ECE1",
                                color: "#4D5E38",
                              }}
                            >
                              <span style={{ fontSize: ".56em", fontWeight: 700 }}>XLSX</span>
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.25 }}>
                              <span style={{ fontSize: ".88em", fontWeight: 600 }}>locks-oct-7.xlsx</span>
                              <span style={{ fontSize: ".76em", color: "#6B6A64" }}>4 loans · 18 KB</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* composer */}
                      <div
                        className="abs h-comp"
                        style={{
                          left: "1.25em",
                          top: "15.7em",
                          width: "32.5em",
                          height: "8.6em",
                          border: "1px solid rgba(31,30,29,.16)",
                          borderRadius: ".8em",
                          background: "#FFFFFF",
                          boxShadow: "0 8px 20px -14px rgba(20,20,19,.3)",
                        }}
                      >
                        <div
                          className="abs"
                          style={{ left: "1em", top: ".85em", display: "flex", alignItems: "center", gap: ".55em" }}
                        >
                          <BrandMarkAvatar size="1.6em" radius=".42em" />
                          <span style={{ fontSize: ".92em", fontWeight: 600 }}>Reflex</span>
                          <span style={{ fontSize: ".82em", color: "#6B6A64" }}>Reply to Dana Ruiz</span>
                        </div>
                        <div className="abs h-type" style={{ left: "1em", top: "3.05em" }}>
                          <span style={{ fontSize: ".95em" }}>
                            All 4 loans locked at today&apos;s pricing. Confirmations attached.
                          </span>
                        </div>
                        <div className="abs h-att" style={{ left: "1em", top: "4.95em" }}>
                          <span
                            className="chip"
                            style={{ border: "1px solid rgba(31,30,29,.14)", color: "#3D3D3A" }}
                          >
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="#9A4A2E"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                              style={{ width: "1em", height: "1em" }}
                            >
                              <path d="M4 1.8h5.5L12.5 5v9.2H4z" />
                              <path d="M9.5 1.8V5h3" />
                            </svg>
                            confirmations-oct-7.pdf
                          </span>
                        </div>
                        <div
                          className="abs h-send"
                          style={{
                            right: ".85em",
                            bottom: ".8em",
                            display: "flex",
                            alignItems: "center",
                            gap: ".4em",
                            height: "1.95em",
                            padding: "0 .95em",
                            borderRadius: ".98em",
                            background: "#141413",
                            color: "#FAF9F5",
                          }}
                        >
                          <span style={{ fontSize: ".85em", fontWeight: 600 }}>Send</span>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: ".85em", height: ".85em" }}
                          >
                            <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
                          </svg>
                        </div>
                      </div>

                      {/* sent */}
                      <div
                        className="abs h-sent"
                        style={{
                          left: "1.25em",
                          top: "15.7em",
                          width: "32.5em",
                          padding: ".85em 1em .95em",
                          borderRadius: ".8em",
                          background: "#FAF9F5",
                          border: "1px solid rgba(31,30,29,.08)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: ".55em" }}>
                            <BrandMarkAvatar size="1.6em" radius=".42em" />
                            <span style={{ fontSize: ".92em", fontWeight: 600 }}>Reflex</span>
                            <span style={{ fontSize: ".82em", color: "#6B6A64" }}>
                              to Dana Ruiz · 9:44 AM
                            </span>
                          </div>
                          <span style={{ display: "flex", alignItems: "center", gap: ".3em", color: "#4D5E38" }}>
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{ width: ".9em", height: ".9em" }}
                            >
                              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                            </svg>
                            <span style={{ fontSize: ".8em", fontWeight: 600 }}>Sent</span>
                          </span>
                        </div>
                        <p style={{ marginTop: ".6em" }}>
                          <span style={{ fontSize: ".95em" }}>
                            All 4 loans locked at today&apos;s pricing. Confirmations attached.
                          </span>
                        </p>
                        <div style={{ marginTop: ".6em", display: "flex" }}>
                          <span
                            className="chip"
                            style={{
                              border: "1px solid rgba(31,30,29,.14)",
                              color: "#3D3D3A",
                              background: "#FFFFFF",
                            }}
                          >
                            <svg
                              viewBox="0 0 16 16"
                              fill="none"
                              stroke="#9A4A2E"
                              strokeWidth="1.5"
                              strokeLinejoin="round"
                              style={{ width: "1em", height: "1em" }}
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

                  {/* PORTAL */}
                  <div className="abs h-portal" style={{ inset: 0, background: "#F5F4ED" }}>
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        right: 0,
                        top: 0,
                        height: "3em",
                        background: "#FFFFFF",
                        borderBottom: "1px solid rgba(31,30,29,.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 1.25em",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: ".6em" }}>
                        <span
                          style={{
                            display: "grid",
                            placeItems: "center",
                            width: "1.7em",
                            height: "1.7em",
                            borderRadius: ".4em",
                            background: "#2F5F8F",
                            color: "#FFFFFF",
                          }}
                        >
                          <span style={{ fontSize: ".66em", fontWeight: 700 }}>FL</span>
                        </span>
                        <span style={{ fontWeight: 600 }}>First Lender</span>
                        <span style={{ fontSize: ".82em", color: "#6B6A64" }}>Correspondent portal</span>
                      </div>
                      <span className="h-who" style={{ color: "#5E5D59" }}>
                        <span style={{ fontSize: ".82em" }}>ops@larkspurlending.com</span>
                      </span>
                    </div>

                    {/* sign in */}
                    <div
                      className="abs h-signin"
                      style={{
                        left: "11.5em",
                        top: "3.7em",
                        width: "21em",
                        background: "#FFFFFF",
                        border: "1px solid rgba(31,30,29,.1)",
                        borderRadius: ".9em",
                        padding: "1.2em 1.4em",
                      }}
                    >
                      <div style={{ fontSize: "1.08em", fontWeight: 600 }}>Sign in</div>
                      <div style={{ marginTop: ".8em", color: "#5E5D59" }}>
                        <span style={{ fontSize: ".78em", fontWeight: 500 }}>Email</span>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          marginTop: ".35em",
                          height: "2.3em",
                          border: "1px solid rgba(31,30,29,.18)",
                          borderRadius: ".5em",
                        }}
                      >
                        <div
                          className="abs h-email"
                          style={{ left: ".75em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}
                        >
                          <span style={{ fontSize: ".9em" }}>ops@larkspurlending.com</span>
                        </div>
                      </div>
                      <div style={{ marginTop: ".7em", color: "#5E5D59" }}>
                        <span style={{ fontSize: ".78em", fontWeight: 500 }}>Password</span>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          marginTop: ".35em",
                          height: "2.3em",
                          border: "1px solid rgba(31,30,29,.18)",
                          borderRadius: ".5em",
                        }}
                      >
                        <div
                          className="abs h-pwd"
                          style={{
                            left: ".75em",
                            top: 0,
                            bottom: 0,
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: ".12em",
                          }}
                        >
                          <span style={{ fontSize: ".9em" }}>••••••••••••</span>
                        </div>
                        <span
                          className="abs chip h-vault"
                          style={{ right: ".35em", top: ".28em", background: "#F0EEE6", color: "#3D3D3A" }}
                        >
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            style={{ width: ".95em", height: ".95em" }}
                          >
                            <circle cx="5.5" cy="10.5" r="2.5" />
                            <path d="M7.3 8.7 13 3M11 5l1.5 1.5" />
                          </svg>
                          From vault
                        </span>
                      </div>
                      <div
                        style={{
                          marginTop: ".7em",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          height: "1.47em",
                          color: "#5E5D59",
                        }}
                      >
                        <span style={{ fontSize: ".78em", fontWeight: 500 }}>One-time code</span>
                        <span className="chip h-otph" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ width: ".95em", height: ".95em" }}
                          >
                            <rect x="2" y="3.5" width="12" height="9" rx="1.5" />
                            <path d="m2.5 4.5 5.5 4 5.5-4" />
                          </svg>
                          From shared inbox
                        </span>
                      </div>
                      <div style={{ marginTop: ".35em", display: "flex", gap: ".42em" }}>
                        {OTP_DIGITS.map((digit, idx) => (
                          <div
                            key={idx}
                            style={{
                              position: "relative",
                              width: "2.55em",
                              height: "2.3em",
                              border: "1px solid rgba(31,30,29,.18)",
                              borderRadius: ".5em",
                            }}
                          >
                            <span
                              className={`abs h-d${idx}`}
                              style={{ inset: 0, display: "grid", placeItems: "center" }}
                            >
                              <span className="mono" style={{ fontSize: "1em", fontWeight: 600 }}>
                                {digit}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                      <div
                        className="h-sbtn"
                        style={{
                          marginTop: ".95em",
                          height: "2.3em",
                          borderRadius: ".5em",
                          background: "#2F5F8F",
                          color: "#FFFFFF",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <span style={{ fontSize: ".9em", fontWeight: 600 }}>Sign in</span>
                      </div>
                    </div>

                    {/* table */}
                    <div className="abs h-table" style={{ left: 0, right: 0, top: "3em", bottom: 0 }}>
                      <div className="abs" style={{ left: "1.25em", top: ".85em" }}>
                        <div style={{ fontSize: "1.1em", fontWeight: 600 }}>Rate locks</div>
                        <div style={{ color: "#6B6A64" }}>
                          <span style={{ fontSize: ".82em" }}>Today · pricing as of 9:30 AM</span>
                        </div>
                      </div>
                      <span
                        className="abs chip"
                        style={{
                          right: "1.25em",
                          top: "1.2em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.12)",
                          color: "#3D3D3A",
                        }}
                      >
                        4 loans
                      </span>
                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          right: "1.25em",
                          top: "4.2em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".8em",
                          overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "relative", height: "2.1em", background: "#FAF9F5", color: "#6B6A64" }}>
                          <div className="abs" style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Loan</span>
                          </div>
                          <div className="abs" style={{ left: "7.9em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Borrower</span>
                          </div>
                          <div className="abs" style={{ left: "14.2em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Program</span>
                          </div>
                          <div className="abs" style={{ left: "20.6em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Rate</span>
                          </div>
                          <div className="abs" style={{ left: "25.3em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Status</span>
                          </div>
                        </div>

                        {HERO_LOANS.map((loan, idx) => (
                          <div
                            key={loan.id}
                            style={{
                              position: "relative",
                              height: "2.85em",
                              borderTop: "1px solid rgba(31,30,29,.07)",
                            }}
                          >
                            <div className="abs" style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                              <span className="mono" style={{ fontSize: ".82em" }}>{loan.id}</span>
                            </div>
                            <div className="abs" style={{ left: "7.9em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                              <span style={{ fontSize: ".92em" }}>{loan.borrower}</span>
                            </div>
                            <div className="abs" style={{ left: "14.2em", top: 0, bottom: 0, display: "flex", alignItems: "center", color: "#5E5D59" }}>
                              <span style={{ fontSize: ".92em" }}>{loan.program}</span>
                            </div>
                            <div className="abs" style={{ left: "20.6em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                              <span className="mono" style={{ fontSize: ".82em" }}>{loan.rate}</span>
                            </div>
                            <div
                              className="abs"
                              style={{
                                left: "25.3em",
                                top: 0,
                                bottom: 0,
                                display: "grid",
                                alignItems: "center",
                                justifyItems: "start",
                              }}
                            >
                              <span
                                className={`chip h-p${idx}`}
                                style={{ gridArea: "1/1", background: "#F0EEE6", color: "#5E5D59" }}
                              >
                                Pending
                              </span>
                              <span
                                className={`h-l${idx}`}
                                style={{
                                  gridArea: "1/1",
                                  display: "inline-flex",
                                  alignItems: "center",
                                  gap: ".45em",
                                  color: "#5E5D59",
                                }}
                              >
                                <span className="spin" />
                                <span style={{ fontSize: ".84em" }}>Locking…</span>
                              </span>
                              <span
                                className={`chip h-k${idx}`}
                                style={{ gridArea: "1/1", background: "#EBEFE4", color: "#4D5E38" }}
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  style={{ width: "1em", height: "1em" }}
                                >
                                  <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                                </svg>
                                Locked
                              </span>
                            </div>
                            <div
                              className={`abs h-b${idx}`}
                              style={{
                                left: "36.1em",
                                top: ".55em",
                                width: "4.4em",
                                height: "1.75em",
                                display: "grid",
                                placeItems: "center",
                                border: "1px solid rgba(31,30,29,.2)",
                                borderRadius: ".5em",
                                background: "#FFFFFF",
                              }}
                            >
                              <span style={{ fontSize: ".8em", fontWeight: 600 }}>Lock</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div
                        className="abs h-foot"
                        style={{
                          left: "1.25em",
                          top: "18.6em",
                          display: "flex",
                          alignItems: "center",
                          gap: ".5em",
                          color: "#3D3D3A",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="#4D5E38"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ width: ".95em", height: ".95em" }}
                        >
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                        <span style={{ fontSize: ".85em" }}>
                          4 of 4 locked · Confirmations saved to each loan file
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* toast */}
                  <div
                    className="abs"
                    style={{ left: "50%", bottom: ".75em", transform: "translateX(-50%)" }}
                  >
                    <div
                      className="h-toast"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".6em",
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
                          style={{ width: ".8em", height: ".8em" }}
                        >
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                      </span>
                      <span style={{ fontSize: ".9em", fontWeight: 600 }}>Done in 3m 12s</span>
                      <span style={{ fontSize: ".84em", color: "#C2C0B6" }}>4 loans locked</span>
                    </div>
                  </div>

                  {/* agent cursor */}
                  <div className="abs h-cur" style={{ left: 0, top: 0, zIndex: 6 }}>
                    <span
                      className="abs h-rip"
                      style={{
                        left: "-.9em",
                        top: "-.9em",
                        width: "1.8em",
                        height: "1.8em",
                        borderRadius: "50%",
                        background: "var(--accent)",
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
                        style={{ fill: "var(--accent)" }}
                        stroke="#FFFFFF"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className="abs h-curb"
                      style={{
                        left: "1.2em",
                        top: "1.3em",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: ".35em",
                        height: "1.6em",
                        padding: "0 .6em 0 .38em",
                        borderRadius: ".8em",
                        background: "#141413",
                        color: "#FAF9F5",
                        boxShadow: "0 6px 14px -6px rgba(20,20,19,.45)",
                      }}
                    >
                      <BrandMarkInverted style={{ width: ".95em", height: ".95em" }} />
                      <span style={{ fontSize: ".78em", fontWeight: 600 }}>Reflex</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
