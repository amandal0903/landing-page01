"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMarkAvatar } from "@/components/ui/BrandMark";

export function OrgChartSection() {
  const { registerLiveStage } = useDemoRuntime();

  return (
    <section
      id="org"
      aria-labelledby="org-h"
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
          style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: 14.5, fontWeight: 500, color: "#5E5D59" }}>
            Org chart
          </p>
          <h2
            id="org-h"
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
            <span style={{ display: "block" }}>
              Hire AI employees for every team.
            </span>
            <span style={{ display: "block", color: "#82817A" }}>
              They work across your org.
            </span>
          </h2>
          <p
            style={{
              maxWidth: 600,
              margin: "24px auto 0",
              fontSize: 18,
              lineHeight: 1.6,
              color: "#5E5D59",
              textWrap: "pretty",
            }}
          >
            Every manager can have AI employees of their own. Delegate a step to
            a person or an AI employee, and they can pass work to another
            team&apos;s.
          </p>
        </div>

        <div
          ref={registerLiveStage}
          className="reveal live"
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            background: "#FFFFFF",
            border: "1px solid rgba(31,30,29,.1)",
            borderRadius: 28,
            padding: "clamp(20px,4.5vw,56px)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "min(300px,100%)" }}>
              <div
                style={{
                  position: "relative",
                  border: "1px solid rgba(31,30,29,.11)",
                  borderRadius: 14,
                  background: "#FAF9F5",
                  height: 68,
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "0 16px",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    display: "grid",
                    placeItems: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#E3DACC",
                    color: "#3D3D3A",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1 }}>
                    PS
                  </span>
                </span>
                <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                  <div style={{ fontSize: 15, fontWeight: 600 }}>Priya Shah</div>
                  <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                    COO · Workspace admin
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              width: 1,
              height: 28,
              margin: "0 auto",
              background: "rgba(31,30,29,.16)",
            }}
          />

          <div style={{ position: "relative" }}>
            <div
              className="org-rail"
              aria-hidden="true"
              style={{
                position: "absolute",
                top: 0,
                left: "calc((100% - 56px) / 6)",
                right: "calc((100% - 56px) / 6)",
                height: 1,
                background: "rgba(31,30,29,.16)",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(260px,100%),1fr))",
                gap: 28,
              }}
            >
              {/* Column 1: Finance */}
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 28,
                      padding: "0 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(31,30,29,.13)",
                      background: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#3D3D3A",
                    }}
                  >
                    Finance
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 20,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 68,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 16px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#E3DACC",
                      color: "#3D3D3A",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1 }}>
                      AR
                    </span>
                  </span>
                  <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>Ana Ruiz</div>
                    <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                      AP Manager
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 88,
                    padding: "13px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "#141413",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15.1,
                          fontWeight: 600,
                          color: "#FAF9F5",
                          lineHeight: 1,
                        }}
                      >
                        I
                      </span>
                    </span>
                    <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: 15, fontWeight: 600 }}>Iris</span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            height: 20,
                            padding: "0 7px",
                            borderRadius: 6,
                            background: "#141413",
                            color: "#FAF9F5",
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: ".02em",
                          }}
                        >
                          AI
                        </span>
                      </div>
                      <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                        Invoices
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      color: "#3D3D3A",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#788C5D",
                        flex: "none",
                      }}
                    />
                    <span>42 invoices posted today</span>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 88,
                    padding: "13px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "#141413",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15.1,
                          fontWeight: 600,
                          color: "#FAF9F5",
                          lineHeight: 1,
                        }}
                      >
                        J
                      </span>
                    </span>
                    <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: 15, fontWeight: 600 }}>Juno</span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            height: 20,
                            padding: "0 7px",
                            borderRadius: 6,
                            background: "#141413",
                            color: "#FAF9F5",
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: ".02em",
                          }}
                        >
                          AI
                        </span>
                      </div>
                      <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                        Vendor replies
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      color: "#3D3D3A",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                    }}
                  >
                    <span className="spin" style={{ fontSize: 12 }} />
                    <span>Answering 6 vendors</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Web */}
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 28,
                      padding: "0 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(31,30,29,.13)",
                      background: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#3D3D3A",
                    }}
                  >
                    Web
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 20,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 68,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 16px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#E3DACC",
                      color: "#3D3D3A",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1 }}>
                      MC
                    </span>
                  </span>
                  <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>Maya Chen</div>
                    <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                      SEO Lead
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 112,
                    padding: "14px 16px",
                    zIndex: 3,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "#E3DACC",
                        color: "#3D3D3A",
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1 }}>
                        DP
                      </span>
                    </span>
                    <div style={{ lineHeight: 1.3 }}>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>Dev Patel</div>
                      <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                        SEO Analyst
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 16,
                      right: 12,
                      top: 62,
                      height: 32,
                      display: "grid",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="o-hand"
                      style={{
                        gridArea: "1/1",
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        fontSize: 13,
                        color: "#3D3D3A",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#788C5D",
                          flex: "none",
                        }}
                      />
                      <span>Handed ‘Check each page’ to Reflex</span>
                    </span>
                    <span
                      className="o-chipw"
                      aria-hidden="true"
                      style={{ gridArea: "1/1", justifySelf: "start" }}
                    >
                      <span
                        className="o-chip"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          height: 30,
                          padding: "0 12px 0 8px",
                          borderRadius: 15,
                          border: "1px solid rgba(31,30,29,.16)",
                          background: "#FFFFFF",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#141413",
                          boxShadow: "0 1px 2px rgba(20,20,19,.06)",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="#87867F"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          style={{ flex: "none", width: 15, height: 15 }}
                        >
                          <circle cx="6" cy="4.5" r=".9" fill="currentColor" stroke="none" />
                          <circle cx="10" cy="4.5" r=".9" fill="currentColor" stroke="none" />
                          <circle cx="6" cy="8" r=".9" fill="currentColor" stroke="none" />
                          <circle cx="10" cy="8" r=".9" fill="currentColor" stroke="none" />
                          <circle cx="6" cy="11.5" r=".9" fill="currentColor" stroke="none" />
                          <circle cx="10" cy="11.5" r=".9" fill="currentColor" stroke="none" />
                        </svg>
                        Check each page
                      </span>
                    </span>
                  </div>
                </div>
                <div style={{ position: "relative", height: 24 }}>
                  <div
                    style={{
                      width: 1,
                      height: 24,
                      margin: "0 auto",
                      background: "rgba(31,30,29,.16)",
                    }}
                  />
                  <div
                    className="o-line"
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      width: 2,
                      height: 24,
                      marginLeft: -1,
                      background: "var(--accent)",
                      transformOrigin: "top center",
                    }}
                  />
                </div>
                <div
                  className="o-yb"
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 88,
                    padding: "13px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <BrandMarkAvatar size="36px" radius="10px" />
                    <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: 15, fontWeight: 600 }}>Reflex</span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            height: 20,
                            padding: "0 7px",
                            borderRadius: 6,
                            background: "#141413",
                            color: "#FAF9F5",
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: ".02em",
                          }}
                        >
                          AI
                        </span>
                      </div>
                      <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                        SEO checks
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 13, color: "#3D3D3A" }}>
                    <span style={{ display: "grid" }}>
                      <span
                        className="o-y0"
                        style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: 7 }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#C2C0B6",
                            flex: "none",
                          }}
                        />
                        <span style={{ color: "#6B6A64" }}>Waiting for work</span>
                      </span>
                      <span
                        className="o-y1"
                        style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: 7 }}
                      >
                        <span className="spin" style={{ fontSize: 12 }} />
                        <span>
                          Checking page{" "}
                          <span className="o-cnt" style={{ fontWeight: 600 }} /> of 14
                        </span>
                      </span>
                      <span
                        className="o-y2"
                        style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: 7 }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#788C5D",
                            flex: "none",
                          }}
                        />
                        <span>Checked 14 pages, found 3 issues</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div
                  className="abs o-ring"
                  aria-hidden="true"
                  style={{
                    left: -4,
                    right: -4,
                    top: 296,
                    height: 96,
                    borderRadius: 17,
                    border: "2px solid var(--accent)",
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: 0, top: 0, fontSize: 16 }}
                >
                  <div className="abs o-cur" style={{ left: 0, top: 0, zIndex: 6 }}>
                    <span
                      className="abs o-rip"
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
                      aria-hidden="true"
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
                      <span style={{ fontSize: ".78em", fontWeight: 600 }}>Dev</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 3: Engineering */}
              <div style={{ position: "relative" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      height: 28,
                      padding: "0 12px",
                      borderRadius: 14,
                      border: "1px solid rgba(31,30,29,.13)",
                      background: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "#3D3D3A",
                    }}
                  >
                    Engineering
                  </span>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 20,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 68,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "0 16px",
                  }}
                >
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#E3DACC",
                      color: "#3D3D3A",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1 }}>
                      LP
                    </span>
                  </span>
                  <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                    <div style={{ fontSize: 15, fontWeight: 600 }}>Lena Park</div>
                    <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                      Engineering Manager
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 24,
                    margin: "0 auto",
                    background: "rgba(31,30,29,.16)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    border: "1px solid rgba(31,30,29,.11)",
                    borderRadius: 14,
                    background: "#FAF9F5",
                    height: 88,
                    padding: "13px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        flex: "none",
                        display: "grid",
                        placeItems: "center",
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "#141413",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 15.1,
                          fontWeight: 600,
                          color: "#FAF9F5",
                          lineHeight: 1,
                        }}
                      >
                        A
                      </span>
                    </span>
                    <div style={{ minWidth: 0, lineHeight: 1.3 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: 15, fontWeight: 600 }}>Atlas</span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            height: 20,
                            padding: "0 7px",
                            borderRadius: 6,
                            background: "#141413",
                            color: "#FAF9F5",
                            fontSize: 11,
                            fontWeight: 600,
                            letterSpacing: ".02em",
                          }}
                        >
                          AI
                        </span>
                      </div>
                      <div style={{ fontSize: 13.5, color: "#5E5D59" }}>
                        Tickets
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: 8, fontSize: 13, color: "#3D3D3A" }}>
                    <span style={{ display: "grid" }}>
                      <span
                        className="o-at0"
                        style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: 7 }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#C2C0B6",
                            flex: "none",
                          }}
                        />
                        <span style={{ color: "#6B6A64" }}>Waiting for work</span>
                      </span>
                      <span
                        className="o-at1"
                        style={{ gridArea: "1/1", display: "flex", alignItems: "center", gap: 7 }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#788C5D",
                            flex: "none",
                          }}
                        />
                        <span>Opened 3 tickets</span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: "clamp(40px,5vw,56px)",
              paddingTop: "clamp(28px,3.5vw,40px)",
              borderTop: "1px solid rgba(31,30,29,.09)",
            }}
          >
            <p style={{ fontSize: 14.5, fontWeight: 500, color: "#5E5D59" }}>
              Between AI employees
            </p>
            <div
              style={{
                marginTop: 16,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(min(340px,100%),1fr))",
                gap: 14,
              }}
            >
              <div
                className="o-m0"
                style={{
                  padding: "16px 18px",
                  border: "1px solid rgba(31,30,29,.1)",
                  borderRadius: 16,
                  background: "#FAF9F5",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#3D3D3A" }}>
                  <BrandMarkAvatar size="24px" radius="7px" />
                  <span style={{ fontWeight: 600 }}>Reflex</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#87867F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none", width: 14, height: 14 }}
                  >
                    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 7,
                      background: "#141413",
                    }}
                  >
                    <span style={{ fontSize: 10.1, fontWeight: 600, color: "#FAF9F5", lineHeight: 1 }}>
                      A
                    </span>
                  </span>
                  <span style={{ fontWeight: 600 }}>Atlas</span>
                </div>
                <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.5, color: "#141413" }}>
                  Open a ticket per fix for the 3 issues on /pricing.
                </p>
              </div>

              <div
                className="o-m1"
                style={{
                  padding: "16px 18px",
                  border: "1px solid rgba(31,30,29,.1)",
                  borderRadius: 16,
                  background: "#FAF9F5",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#3D3D3A" }}>
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 7,
                      background: "#141413",
                    }}
                  >
                    <span style={{ fontSize: 10.1, fontWeight: 600, color: "#FAF9F5", lineHeight: 1 }}>
                      A
                    </span>
                  </span>
                  <span style={{ fontWeight: 600 }}>Atlas</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#87867F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none", width: 14, height: 14 }}
                  >
                    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                  <BrandMarkAvatar size="24px" radius="7px" />
                  <span style={{ fontWeight: 600 }}>Reflex</span>
                </div>
                <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.5, color: "#141413" }}>
                  Opened ENG-212, ENG-213 and ENG-214.
                </p>
                <div style={{ marginTop: 10, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {["ENG-212", "ENG-213", "ENG-214"].map((tk, idx) => (
                    <span key={tk} className={`o-tk${idx}`}>
                      <span
                        className="chip mono"
                        style={{
                          background: "#FFFFFF",
                          color: "#3D3D3A",
                          border: "1px solid rgba(31,30,29,.14)",
                          fontSize: 12,
                          height: 26,
                        }}
                      >
                        {tk}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="o-m2"
                style={{
                  padding: "16px 18px",
                  border: "1px solid rgba(31,30,29,.1)",
                  borderRadius: 16,
                  background: "#FAF9F5",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#3D3D3A" }}>
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 7,
                      background: "#141413",
                    }}
                  >
                    <span style={{ fontSize: 10.1, fontWeight: 600, color: "#FAF9F5", lineHeight: 1 }}>
                      I
                    </span>
                  </span>
                  <span style={{ fontWeight: 600 }}>Iris</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#87867F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none", width: 14, height: 14 }}
                  >
                    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 7,
                      background: "#141413",
                    }}
                  >
                    <span style={{ fontSize: 10.1, fontWeight: 600, color: "#FAF9F5", lineHeight: 1 }}>
                      J
                    </span>
                  </span>
                  <span style={{ fontWeight: 600 }}>Juno</span>
                </div>
                <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.5, color: "#141413" }}>
                  Invoice 4471 from Acme is on hold. Let them know why.
                </p>
              </div>

              <div
                className="o-m3"
                style={{
                  padding: "16px 18px",
                  border: "1px solid rgba(31,30,29,.1)",
                  borderRadius: 16,
                  background: "#FAF9F5",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "#3D3D3A" }}>
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 7,
                      background: "#141413",
                    }}
                  >
                    <span style={{ fontSize: 10.1, fontWeight: 600, color: "#FAF9F5", lineHeight: 1 }}>
                      J
                    </span>
                  </span>
                  <span style={{ fontWeight: 600 }}>Juno</span>
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#87867F"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ flex: "none", width: 14, height: 14 }}
                  >
                    <path d="M3 8h10M8.5 3.5 13 8l-4.5 4.5" />
                  </svg>
                  <span
                    style={{
                      flex: "none",
                      display: "grid",
                      placeItems: "center",
                      width: 24,
                      height: 24,
                      borderRadius: 7,
                      background: "#141413",
                    }}
                  >
                    <span style={{ fontSize: 10.1, fontWeight: 600, color: "#FAF9F5", lineHeight: 1 }}>
                      I
                    </span>
                  </span>
                  <span style={{ fontWeight: 600 }}>Iris</span>
                </div>
                <p style={{ marginTop: 10, fontSize: 15.5, lineHeight: 1.5, color: "#141413" }}>
                  Told Acme. They&apos;ll resend it by Friday.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p
          className="reveal"
          style={{
            maxWidth: 560,
            margin: "28px auto 0",
            textAlign: "center",
            fontSize: 15,
            lineHeight: 1.6,
            color: "#5E5D59",
          }}
        >
          Delegating shares that step and nothing else. Each AI employee works
          under its manager&apos;s name.
        </p>
      </div>
    </section>
  );
}
