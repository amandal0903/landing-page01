"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMarkInverted } from "@/components/ui/BrandMark";
import { BrandLogo } from "@/components/ui/BrandLogo";

const SYSTEM_ITEMS = [
  {
    name: "Web portals",
    tag: "Investor, carrier, tax",
    desc: "Stored credentials, one-time codes from a shared inbox, a new layout every quarter. Reflex handles all of it and keeps going.",
  },
  {
    name: "Encompass",
    tag: "Loan origination",
    desc: "It works the loan file the way your processors do: conditions checked, cleared and noted.",
  },
  {
    name: "NetSuite and SAP",
    tag: "ERP",
    desc: "Orders keyed in field by field, saved, and the order number sent back to whoever asked.",
  },
  {
    name: "Veeva and Adobe",
    tag: "Pharma",
    desc: "Contracts sent for e-signature and followed until they come back signed.",
  },
  {
    name: "Excel and PDFs",
    tag: "Files",
    desc: "Invoices read from PDFs and matched line by line into the spreadsheet.",
  },
] as const;

const SYS_TILES = [
  { left: 48, top: 0, delay: "-0.0s", warm: false },
  { left: 240, top: 48, delay: "-3.7s", warm: false },
  { left: 480, top: 0, delay: "-7.4s", warm: false },
  { left: 624, top: 192, delay: "-1.1s", warm: false },
  { left: 0, top: 240, delay: "-4.8s", warm: true },
  { left: 336, top: 384, delay: "-8.5s", warm: false },
  { left: 576, top: 384, delay: "-2.2s", warm: false },
  { left: 144, top: 336, delay: "-5.9s", warm: false },
] as const;

const PORTAL_LOANS = [
  {
    fullId: "2026-04809",
    shortId: "04809",
    lenderFull: "FLC lender portal",
    lenderShort: "FLC",
    borrower: "K. Osei",
    amount: "$412,000",
    rate: "6.125%",
    status: "Approved",
    statusKind: "approved" as const,
    logged: true,
  },
  {
    fullId: "2026-04812",
    shortId: "04812",
    lenderFull: "Kinz lender portal",
    lenderShort: "Kinz",
    borrower: "M. Varga",
    amount: "$298,500",
    rate: "5.500%",
    status: "Approved",
    statusKind: "approved" as const,
    logged: true,
  },
  {
    fullId: "2026-04817",
    shortId: "04817",
    lenderFull: "FLC lender portal",
    lenderShort: "FLC",
    borrower: "J. Alvarez",
    amount: "$536,000",
    rate: "6.250%",
    status: "Locked",
    statusKind: "locked" as const,
    logged: true,
  },
  {
    fullId: "2026-04820",
    shortId: "04820",
    lenderFull: "Kinz lender portal",
    lenderShort: "Kinz",
    borrower: "R. Chen",
    amount: "$367,250",
    rate: "5.875%",
    status: "Suspended",
    statusKind: "suspended" as const,
    logged: false,
  },
  {
    fullId: "2026-04823",
    shortId: "04823",
    lenderFull: "FLC lender portal",
    lenderShort: "FLC",
    borrower: "T. Brooks",
    amount: "$451,800",
    rate: "6.000%",
    status: "Locked",
    statusKind: "locked" as const,
    logged: true,
  },
] as const;

const ENCOMPASS_CONDITIONS = [
  "Verification of employment",
  "Appraisal received and reviewed",
  "Title commitment",
  "2024–2025 W-2s",
  "Hazard insurance binder",
] as const;

const ERP_FIELDS = [
  { label: "Customer", value: "Brightline Clinics", left: "1.1em", top: "1.1em" },
  { label: "PO number", value: "PO-88213", left: "22.15em", top: "1.1em" },
  { label: "Item", value: "Nitrile gloves, case of 1,000", left: "1.1em", top: "5.4em" },
  { label: "Quantity", value: "40", left: "22.15em", top: "5.4em" },
  { label: "Unit price", value: "$64.00", left: "1.1em", top: "9.7em" },
  { label: "Ship date", value: "Nov 24, 2026", left: "22.15em", top: "9.7em" },
] as const;

const INVOICE_FIELDS = [
  { label: "Invoice no.", value: "4471" },
  { label: "Vendor", value: "Acme Supply" },
  { label: "Date", value: "Nov 12, 2026" },
  { label: "PO", value: "PO-7710" },
  { label: "Total", value: "$58,200.00" },
] as const;

const APPS = [
  { name: "SAP", domain: "sap.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "NetSuite", domain: "netsuite.com" },
  { name: "Workday", domain: "workday.com" },
  { name: "Coupa", domain: "coupa.com" },
  { name: "QuickBooks", domain: "quickbooks.intuit.com" },
  { name: "Zoho Books", domain: "zoho.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "ServiceNow", domain: "servicenow.com" },
  { name: "Encompass", domain: "icemortgagetechnology.com" },
  { name: "Optimal Blue", domain: "optimalblue.com" },
  { name: "Applied Epic", domain: "appliedsystems.com" },
  { name: "Veeva", domain: "veeva.com" },
  { name: "Adobe", domain: "adobe.com" },
  { name: "Gmail", domain: "gmail.com" },
  { name: "Outlook", domain: "outlook.com" },
  { name: "Excel", domain: "microsoft.com" },
  { name: "OneDrive", domain: "onedrive.com" },
  { name: "Slack", domain: "slack.com" },
  { name: "Telegram", domain: "telegram.org" },
] as const;

function BrowserChrome({
  tabBadgeBg,
  tabBadgeText,
  tabTitle,
  url,
}: {
  tabBadgeBg: string;
  tabBadgeText: string;
  tabTitle: string;
  url: string;
}) {
  return (
    <>
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
          style={{
            left: "4.6em",
            top: ".5em",
            width: "15em",
            height: "2.1em",
            background: "#FFFFFF",
            borderRadius: ".55em .55em 0 0",
            display: "flex",
            alignItems: "center",
            gap: ".5em",
            padding: "0 .85em",
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
              background: tabBadgeBg,
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: ".6em", fontWeight: 700 }}>{tabBadgeText}</span>
          </span>
          <span style={{ fontSize: ".84em" }}>{tabTitle}</span>
        </div>
      </div>

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
            style={{ flex: "none", width: ".95em", height: ".95em" }}
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
            style={{ flex: "none", width: ".95em", height: ".95em" }}
          >
            <path d="M6 3.5 10.5 8 6 12.5" />
          </svg>
        </div>
        <div
          className="abs"
          style={{
            left: "4.6em",
            top: ".42em",
            width: "27em",
            height: "1.76em",
            borderRadius: ".88em",
            background: "#F5F4ED",
            display: "flex",
            alignItems: "center",
            gap: ".55em",
            padding: "0 .8em",
          }}
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="#87867F"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flex: "none", width: ".86em", height: ".86em" }}
          >
            <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
            <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
          </svg>
          <span className="mono" style={{ fontSize: ".78em", color: "#5E5D59" }}>
            {url}
          </span>
        </div>
        <div
          className="abs"
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
          }}
        >
          <span
            className="pulse"
            style={{
              width: ".48em",
              height: ".48em",
              borderRadius: "50%",
              background: "var(--accent)",
            }}
          />
          <span style={{ fontSize: ".8em", fontWeight: 500, color: "#3D3D3A" }}>
            Reflex
          </span>
        </div>
      </div>
    </>
  );
}

export function SystemsSection() {
  const { sys, pickSys, registerLiveStage } = useDemoRuntime();

  return (
    <section
      id="systems"
      aria-labelledby="sys-h"
      style={{ padding: "clamp(112px,12vw,176px) 0" }}
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
            Systems
          </p>
          <h2
            id="sys-h"
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
            <span style={{ display: "block" }}>Works across the apps</span>
            <span style={{ display: "block", color: "#82817A" }}>
              you already run.
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
            No connectors to build. Your AI employee uses each system&apos;s own
            screens, the way your team does.
          </p>
        </div>

        <div
          className="reveal"
          style={{
            marginTop: "clamp(48px,6vw,72px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(28px,4vw,56px)",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flex: "1 1 320px",
              maxWidth: 420,
              borderBottom: "1px solid rgba(31,30,29,.12)",
            }}
          >
            {SYSTEM_ITEMS.map((item, idx) => {
              const expanded = sys === idx;
              return (
                <div
                  key={item.name}
                  style={{ borderTop: "1px solid rgba(31,30,29,.12)" }}
                >
                  <button
                    className="acc-btn sys-btn"
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`sys-b${idx}`}
                    onClick={() => pickSys(idx)}
                    style={{ minHeight: 72, padding: "18px 2px" }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span className="sys-mark" aria-hidden="true" />
                      <span
                        className="s-name serif"
                        style={{ fontSize: 23, lineHeight: 1.2, letterSpacing: "-.008em" }}
                      >
                        {item.name}
                      </span>
                    </span>
                    <span style={{ fontSize: 13.5, color: "#6B6A64", textAlign: "right" }}>
                      {item.tag}
                    </span>
                  </button>
                  <div
                    className="acc-body"
                    id={`sys-b${idx}`}
                    aria-hidden={!expanded}
                  >
                    <div>
                      <p
                        style={{
                          padding: "0 2px 22px 20px",
                          fontSize: 16,
                          lineHeight: 1.6,
                          color: "#5E5D59",
                          textWrap: "pretty",
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            ref={registerLiveStage}
            className="stage live"
            role="img"
            aria-label="Product animation of Reflex working inside the selected system"
            style={{
              flex: "2 1 560px",
              minWidth: 0,
              padding: "clamp(14px,4.5%,40px)",
            }}
          >
            {SYS_TILES.map((t, idx) => (
              <span
                key={idx}
                className={t.warm ? "tile warm" : "tile"}
                style={{ left: t.left, top: t.top, animationDelay: t.delay }}
              />
            ))}

            <div style={{ position: "relative" }}>
              {sys === 0 && (
                <div
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div className="abs p-loop" style={{ inset: 0 }}>
                    <BrowserChrome
                      tabBadgeBg="#2F5F8F"
                      tabBadgeText="F"
                      tabTitle="Rate locks · First Lender"
                      url="portal.firstlender.com/loans/rate-locks"
                    />
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        top: "5.2em",
                        width: "46em",
                        height: "24.8em",
                        background: "#F5F4ED",
                      }}
                    >
                      {/* Left detail card */}
                      <div
                        className="abs"
                        style={{
                          left: "1.1em",
                          top: "1.1em",
                          width: "14.4em",
                          height: "17.7em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".8em",
                        }}
                      >
                        {PORTAL_LOANS.map((loan, idx) => (
                          <div
                            key={loan.fullId}
                            className={`abs p-c${idx}`}
                            style={{ inset: "1em 1em" }}
                          >
                            <div>
                              <span className="mono" style={{ fontSize: ".95em", fontWeight: 600 }}>
                                Loan {loan.fullId}
                              </span>
                            </div>
                            <div style={{ marginTop: ".15em", color: "#6B6A64" }}>
                              <span style={{ fontSize: ".8em" }}>{loan.lenderFull}</span>
                            </div>
                            <div style={{ marginTop: ".8em", display: "flex" }}>
                              {loan.statusKind === "approved" && (
                                <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
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
                                  Approved
                                </span>
                              )}
                              {loan.statusKind === "locked" && (
                                <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
                                  <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ flex: "none", width: ".9em", height: ".9em" }}
                                  >
                                    <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
                                    <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
                                  </svg>
                                  Locked
                                </span>
                              )}
                              {loan.statusKind === "suspended" && (
                                <span className="chip" style={{ background: "#F7E9E3", color: "#9A4A2E" }}>
                                  <span
                                    style={{
                                      width: ".45em",
                                      height: ".45em",
                                      borderRadius: "50%",
                                      background: "#B4532F",
                                    }}
                                  />
                                  Suspended
                                </span>
                              )}
                            </div>

                            <div style={{ position: "relative", marginTop: ".9em", height: "6.3em" }}>
                              <div className={`abs p-k${idx}`} style={{ inset: 0 }}>
                                {[
                                  { label: "Borrower", w: "4.0em" },
                                  { label: "Loan amount", w: "5.3em" },
                                  { label: "Locked rate", w: "4.1em" },
                                ].map((sk) => (
                                  <div
                                    key={sk.label}
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      height: "2.1em",
                                      borderTop: "1px solid rgba(31,30,29,.09)",
                                    }}
                                  >
                                    <span style={{ fontSize: ".8em", color: "#6B6A64" }}>{sk.label}</span>
                                    <span className="skel" style={{ width: sk.w }} />
                                  </div>
                                ))}
                              </div>
                              <div className={`abs p-v${idx}`} style={{ inset: 0 }}>
                                {[
                                  { label: "Borrower", val: loan.borrower },
                                  { label: "Loan amount", val: loan.amount },
                                  { label: "Locked rate", val: loan.rate },
                                ].map((row) => (
                                  <div
                                    key={row.label}
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      height: "2.1em",
                                      borderTop: "1px solid rgba(31,30,29,.09)",
                                    }}
                                  >
                                    <span style={{ fontSize: ".8em", color: "#6B6A64" }}>{row.label}</span>
                                    <span style={{ fontSize: ".86em", fontWeight: 500 }}>{row.val}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                height: "2.1em",
                                borderTop: "1px solid rgba(31,30,29,.09)",
                                borderBottom: "1px solid rgba(31,30,29,.09)",
                              }}
                            >
                              <span style={{ fontSize: ".8em", color: "#6B6A64" }}>Logged</span>
                              <span className={`p-v${idx}`}>
                                {loan.logged ? (
                                  <span style={{ display: "flex", alignItems: "center", gap: ".35em", color: "#4D5E38" }}>
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
                                    <span style={{ fontSize: ".86em" }}>Yes</span>
                                  </span>
                                ) : (
                                  <span style={{ display: "flex", alignItems: "center", gap: ".35em", color: "#9A4A2E" }}>
                                    <span
                                      style={{
                                        width: ".45em",
                                        height: ".45em",
                                        borderRadius: "50%",
                                        background: "#B4532F",
                                      }}
                                    />
                                    <span style={{ fontSize: ".86em" }}>No, W-2 missing</span>
                                  </span>
                                )}
                              </span>
                            </div>

                            <div className={`p-v${idx}`} style={{ marginTop: ".9em", display: "flex" }}>
                              <span className="chip" style={{ background: "#F5F4ED", color: "#3D3D3A" }}>
                                <svg
                                  viewBox="0 0 26 26"
                                  aria-hidden="true"
                                  style={{ flex: "none", width: ".95em", height: ".95em" }}
                                >
                                  <rect width="26" height="26" rx="7" fill="#141413" />
                                  <path d="M8.6 7.3 18.5 12.7 13.9 13.9 11.8 18.5Z" fill="#FAF9F5" />
                                </svg>
                                Checked by Reflex
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Right table */}
                      <div
                        className="abs"
                        style={{
                          left: "16.4em",
                          top: "1.1em",
                          right: "1.1em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".8em",
                          overflow: "hidden",
                        }}
                      >
                        <div style={{ position: "relative", height: "2em", background: "#FAF9F5", color: "#6B6A64" }}>
                          <div className="abs" style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Loan</span>
                          </div>
                          <div className="abs" style={{ left: "6.4em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Lender</span>
                          </div>
                          <div className="abs" style={{ left: "11em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Portal status</span>
                          </div>
                          <div className="abs" style={{ left: "19.6em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                            <span style={{ fontSize: ".76em", fontWeight: 500 }}>Logged</span>
                          </div>
                        </div>

                        {PORTAL_LOANS.map((loan, idx) => (
                          <div
                            key={loan.shortId}
                            style={{
                              position: "relative",
                              height: "2.75em",
                              borderTop: "1px solid rgba(31,30,29,.09)",
                            }}
                          >
                            <div className={`abs p-hl${idx}`} style={{ inset: 0, background: "#FAF4F1" }} />
                            <div className="abs" style={{ left: "1em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                              <span className="mono" style={{ fontSize: ".82em" }}>{loan.shortId}</span>
                            </div>
                            <div className="abs" style={{ left: "6.4em", top: 0, bottom: 0, display: "flex", alignItems: "center", color: "#3D3D3A" }}>
                              <span style={{ fontSize: ".9em" }}>{loan.lenderShort}</span>
                            </div>
                            <div className="abs" style={{ left: "11em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                              <span style={{ display: "grid", alignItems: "center", justifyItems: "start" }}>
                                <span className={`p-s0${idx}`} style={{ gridArea: "1/1" }}>
                                  <span style={{ color: "#B0AEA5" }}>—</span>
                                </span>
                                <span className={`p-s1${idx}`} style={{ gridArea: "1/1" }}>
                                  <span style={{ display: "flex", alignItems: "center", gap: ".4em", color: "#5E5D59" }}>
                                    <span className="spin" />
                                    <span style={{ fontSize: ".84em" }}>Signing in</span>
                                  </span>
                                </span>
                                <span className={`p-s2${idx}`} style={{ gridArea: "1/1" }}>
                                  <span style={{ display: "flex", alignItems: "center", gap: ".4em", color: "#5E5D59" }}>
                                    <span className="spin" />
                                    <span style={{ fontSize: ".84em" }}>Checking…</span>
                                  </span>
                                </span>
                                <span className={`p-s3${idx}`} style={{ gridArea: "1/1" }}>
                                  {loan.statusKind === "approved" && (
                                    <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
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
                                      Approved
                                    </span>
                                  )}
                                  {loan.statusKind === "locked" && (
                                    <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
                                      <svg
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ flex: "none", width: ".9em", height: ".9em" }}
                                      >
                                        <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" />
                                        <path d="M5.5 7V5.2a2.5 2.5 0 0 1 5 0V7" />
                                      </svg>
                                      Locked
                                    </span>
                                  )}
                                  {loan.statusKind === "suspended" && (
                                    <span className="chip" style={{ background: "#F7E9E3", color: "#9A4A2E" }}>
                                      <span
                                        style={{
                                          width: ".45em",
                                          height: ".45em",
                                          borderRadius: "50%",
                                          background: "#B4532F",
                                        }}
                                      />
                                      Suspended
                                    </span>
                                  )}
                                </span>
                              </span>
                            </div>
                            <div className="abs" style={{ left: "19.6em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}>
                              <span style={{ display: "grid", alignItems: "center", justifyItems: "start" }}>
                                <span className={`p-g0${idx}`} style={{ gridArea: "1/1" }}>
                                  <span style={{ color: "#B0AEA5" }}>—</span>
                                </span>
                                <span className={`p-g1${idx}`} style={{ gridArea: "1/1" }}>
                                  {loan.logged ? (
                                    <span style={{ display: "flex", alignItems: "center", gap: ".35em", color: "#4D5E38" }}>
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
                                      <span style={{ fontSize: ".86em" }}>Yes</span>
                                    </span>
                                  ) : (
                                    <span style={{ display: "flex", alignItems: "center", gap: ".35em", color: "#9A4A2E" }}>
                                      <span
                                        style={{
                                          width: ".45em",
                                          height: ".45em",
                                          borderRadius: "50%",
                                          background: "#B4532F",
                                        }}
                                      />
                                      <span style={{ fontSize: ".86em" }}>No, W-2 missing</span>
                                    </span>
                                  )}
                                </span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="abs" style={{ left: "16.4em", top: "18.9em", display: "flex" }}>
                        <span style={{ display: "grid", alignItems: "center", justifyItems: "start" }}>
                          {[
                            "0 of 5 checked",
                            "1 of 5 checked",
                            "2 of 5 checked",
                            "3 of 5 checked",
                            "4 of 5 checked",
                          ].map((label, idx) => (
                            <span key={label} className={`p-n${idx}`} style={{ gridArea: "1/1" }}>
                              <span style={{ fontSize: ".84em", color: "#3D3D3A" }}>{label}</span>
                            </span>
                          ))}
                          <span className="p-n5" style={{ gridArea: "1/1" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: ".45em", color: "#3D3D3A" }}>
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
                              <span style={{ fontSize: ".84em" }}>
                                5 of 5 checked, 1 flagged for review
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>

                      <div className="abs p-flag" style={{ left: "16.4em", top: "20.9em" }}>
                        <span className="chip" style={{ background: "#F7E9E3", color: "#9A4A2E" }}>
                          <svg
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ flex: "none", width: ".95em", height: ".95em" }}
                          >
                            <path d="M3.5 14V2.5M3.5 3h8.2l-1.6 2.8 1.6 2.8H3.5" />
                          </svg>
                          Flagged for review → sent to Maya
                        </span>
                      </div>

                      <div className="abs p-cur" style={{ left: 0, top: 0, zIndex: 6 }}>
                        <span
                          className="abs p-rip"
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
                          className="abs"
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
                          <BrandMarkInverted style={{ flex: "none", width: ".95em", height: ".95em" }} />
                          <span style={{ fontSize: ".78em", fontWeight: 600 }}>Reflex</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {sys === 1 && (
                <div
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div className="abs n-loop" style={{ inset: 0 }}>
                    <BrowserChrome
                      tabBadgeBg="#5E5D59"
                      tabBadgeText="L"
                      tabTitle="Loan file · Larkspur LOS"
                      url="los.larkspurlending.com/loans/2026-04817/conditions"
                    />
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        top: "5.2em",
                        width: "46em",
                        height: "24.8em",
                        background: "#F5F4ED",
                      }}
                    >
                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          top: "1em",
                          right: "1.25em",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                        }}
                      >
                        <div>
                          <div style={{ fontSize: "1.08em", fontWeight: 600 }}>
                            Loan file 2026-04817
                          </div>
                          <div style={{ color: "#6B6A64" }}>
                            <span style={{ fontSize: ".82em" }}>
                              J. Alvarez · 30-yr fixed · Conditions
                            </span>
                          </div>
                        </div>
                        <span
                          className="chip"
                          style={{
                            background: "#FFFFFF",
                            color: "#3D3D3A",
                            border: "1px solid rgba(31,30,29,.12)",
                          }}
                        >
                          <svg
                            viewBox="0 0 26 26"
                            aria-hidden="true"
                            style={{ flex: "none", width: ".95em", height: ".95em" }}
                          >
                            <rect width="26" height="26" rx="7" fill="#141413" />
                            <path d="M8.6 7.3 18.5 12.7 13.9 13.9 11.8 18.5Z" fill="#FAF9F5" />
                          </svg>
                          Working the file
                        </span>
                      </div>

                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          right: "1.25em",
                          top: "4.4em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".8em",
                          overflow: "hidden",
                        }}
                      >
                        {ENCOMPASS_CONDITIONS.map((cond, idx) => (
                          <div
                            key={cond}
                            style={{
                              position: "relative",
                              height: "2.9em",
                              borderTop: idx === 0 ? "0" : "1px solid rgba(31,30,29,.09)",
                              display: "flex",
                              alignItems: "center",
                              gap: ".8em",
                              padding: "0 1em",
                            }}
                          >
                            <span style={{ display: "grid", width: "1.3em", height: "1.3em" }}>
                              <span
                                style={{
                                  gridArea: "1/1",
                                  borderRadius: ".35em",
                                  border: "1.5px solid rgba(31,30,29,.3)",
                                }}
                              />
                              <span
                                className={`n-x${idx}`}
                                style={{
                                  gridArea: "1/1",
                                  display: "grid",
                                  placeItems: "center",
                                  borderRadius: ".35em",
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
                                  style={{ flex: "none", width: ".85em", height: ".85em" }}
                                >
                                  <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                                </svg>
                              </span>
                            </span>
                            <span style={{ flex: 1, fontSize: ".92em" }}>{cond}</span>
                            <span style={{ display: "grid", alignItems: "center", justifyItems: "start" }}>
                              <span className={`n-o${idx}`} style={{ gridArea: "1/1" }}>
                                <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                                  Open
                                </span>
                              </span>
                              <span className={`n-c${idx}`} style={{ gridArea: "1/1" }}>
                                <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
                                  Cleared
                                </span>
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>

                      <div
                        className="abs n-done"
                        style={{
                          left: "1.25em",
                          top: "20.2em",
                          display: "flex",
                          alignItems: "center",
                          gap: ".45em",
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
                          style={{ flex: "none", width: ".95em", height: ".95em" }}
                        >
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                        <span style={{ fontSize: ".86em" }}>
                          5 of 5 conditions cleared · Note logged to the file
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {sys === 2 && (
                <div
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div className="abs er-loop" style={{ inset: 0 }}>
                    <BrowserChrome
                      tabBadgeBg="#788C5D"
                      tabBadgeText="E"
                      tabTitle="Sales orders · ERP"
                      url="erp.haldensupply.com/sales-orders/new"
                    />
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        top: "5.2em",
                        width: "46em",
                        height: "24.8em",
                        background: "#F5F4ED",
                      }}
                    >
                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          top: "1em",
                          right: "1.25em",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ fontSize: "1.08em", fontWeight: 600 }}>New sales order</div>
                        <span style={{ display: "grid", alignItems: "center", justifyItems: "start" }}>
                          <span className="er-draft" style={{ gridArea: "1/1" }}>
                            <span className="chip" style={{ background: "#F0EEE6", color: "#3D3D3A" }}>
                              Draft
                            </span>
                          </span>
                          <span className="er-num" style={{ gridArea: "1/1" }}>
                            <span className="chip" style={{ background: "#EBEFE4", color: "#4D5E38" }}>
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
                              SO-10482
                            </span>
                          </span>
                        </span>
                      </div>

                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          right: "1.25em",
                          top: "3.9em",
                          height: "17.2em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".8em",
                        }}
                      >
                        {ERP_FIELDS.map((field, idx) => (
                          <div
                            key={field.label}
                            className="abs"
                            style={{ left: field.left, top: field.top, width: "19.9em" }}
                          >
                            <div style={{ color: "#5E5D59" }}>
                              <span style={{ fontSize: ".78em", fontWeight: 500 }}>{field.label}</span>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                marginTop: ".35em",
                                height: "2.3em",
                                border: "1px solid rgba(31,30,29,.18)",
                                borderRadius: ".5em",
                                background: "#FFFFFF",
                              }}
                            >
                              <div
                                className={`abs er-fo${idx}`}
                                style={{ inset: -1, borderRadius: ".5em", border: "2px solid var(--accent)" }}
                              />
                              <div
                                className={`abs er-v${idx}`}
                                style={{ left: ".75em", top: 0, bottom: 0, display: "flex", alignItems: "center" }}
                              >
                                <span style={{ fontSize: ".9em" }}>{field.value}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div
                          className="abs er-save"
                          style={{
                            right: "1.1em",
                            bottom: "1.1em",
                            display: "inline-flex",
                            alignItems: "center",
                            height: "2.3em",
                            padding: "0 1.2em",
                            borderRadius: ".5em",
                            background: "#141413",
                            color: "#FAF9F5",
                          }}
                        >
                          <span style={{ fontSize: ".88em", fontWeight: 600 }}>Save order</span>
                        </div>
                      </div>

                      <div className="abs" style={{ left: "50%", top: "21.8em", transform: "translateX(-50%)" }}>
                        <div
                          className="er-toast"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".55em",
                            height: "2.2em",
                            padding: "0 1em 0 .6em",
                            borderRadius: "1.1em",
                            background: "#141413",
                            color: "#FAF9F5",
                          }}
                        >
                          <span
                            style={{
                              display: "grid",
                              placeItems: "center",
                              width: "1.25em",
                              height: "1.25em",
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
                              style={{ flex: "none", width: ".75em", height: ".75em" }}
                            >
                              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                            </svg>
                          </span>
                          <span style={{ fontSize: ".88em", fontWeight: 600 }}>SO-10482 created</span>
                          <span style={{ fontSize: ".82em", color: "#C2C0B6" }}>
                            sent to the requester
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {sys === 3 && (
                <div
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div className="abs g2-loop" style={{ inset: 0 }}>
                    <BrowserChrome
                      tabBadgeBg="#6B4D9E"
                      tabBadgeText="V"
                      tabTitle="Agreements · e-signature"
                      url="sign.verdantbio.com/agreements/CA-2291"
                    />
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        top: "5.2em",
                        width: "46em",
                        height: "24.8em",
                        background: "#F5F4ED",
                      }}
                    >
                      <div className="abs" style={{ left: "1.25em", top: "1em" }}>
                        <div style={{ fontSize: "1.08em", fontWeight: 600 }}>Consulting agreement</div>
                        <div style={{ color: "#6B6A64" }}>
                          <span style={{ fontSize: ".82em" }}>
                            Dr. Amara Osei · Medical advisory · CA-2291
                          </span>
                        </div>
                      </div>

                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          top: "4.2em",
                          width: "23em",
                          height: "19.4em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".5em",
                          padding: "1.4em 1.6em",
                          boxShadow: "0 10px 24px -18px rgba(20,20,19,.25)",
                        }}
                      >
                        <div style={{ fontSize: ".86em", fontWeight: 600 }}>Consulting Agreement</div>
                        {["92%", "100%", "86%", "97%", "74%", "100%", "90%", "60%"].map((w, idx) => (
                          <span
                            key={idx}
                            style={{
                              display: "block",
                              height: ".42em",
                              marginTop: ".55em",
                              borderRadius: ".21em",
                              background: "#EFEDE6",
                              width: w,
                            }}
                          />
                        ))}
                        <div style={{ position: "absolute", left: "1.6em", right: "1.6em", bottom: "1.5em" }}>
                          <svg
                            viewBox="0 0 160 40"
                            style={{ width: "9em", height: "2.25em", overflow: "visible" }}
                            aria-hidden="true"
                          >
                            <path
                              className="g2-sig"
                              d="M4 28c10-14 18-22 24-18s-8 22 0 20 14-24 22-22-4 20 4 18 10-14 18-14 0 14 8 12 14-10 22-10 6 8 14 6 10-6 18-6"
                              fill="none"
                              stroke="#141413"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              pathLength={1}
                              style={{ strokeDasharray: 1, strokeDashoffset: 0 }}
                            />
                          </svg>
                          <div style={{ height: 1, background: "rgba(31,30,29,.3)" }} />
                          <div style={{ marginTop: ".3em", color: "#6B6A64" }}>
                            <span style={{ fontSize: ".72em" }}>Dr. Amara Osei</span>
                          </div>
                        </div>
                      </div>

                      <div className="abs" style={{ left: "26.4em", top: "4.6em" }}>
                        {[
                          { title: "Sent", when: "Nov 18 · 4:10 PM", conn: true },
                          { title: "Viewed", when: "Nov 19 · 9:02 AM", conn: true },
                          { title: "Signed", when: "Nov 19 · 9:14 AM", conn: false },
                        ].map((ev, idx) => (
                          <div
                            key={ev.title}
                            style={{ position: "relative", display: "flex", gap: ".8em", height: "3.6em" }}
                          >
                            <span style={{ position: "relative", display: "grid", width: "1.5em", height: "1.5em" }}>
                              <span
                                style={{
                                  gridArea: "1/1",
                                  borderRadius: "50%",
                                  border: "1.5px solid rgba(31,30,29,.25)",
                                  background: "#FFFFFF",
                                }}
                              />
                              <span
                                className={`g2-s${idx}`}
                                style={{
                                  gridArea: "1/1",
                                  display: "grid",
                                  placeItems: "center",
                                  borderRadius: "50%",
                                  background: "#141413",
                                  color: "#FAF9F5",
                                }}
                              >
                                <svg
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  style={{ flex: "none", width: ".8em", height: ".8em" }}
                                >
                                  <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                                </svg>
                              </span>
                            </span>
                            <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.3 }}>
                              <span style={{ fontWeight: 600, fontSize: ".95em" }}>{ev.title}</span>
                              <span className={`g2-w${idx}`} style={{ fontSize: ".8em", color: "#6B6A64" }}>
                                {ev.when}
                              </span>
                            </span>
                            {ev.conn && (
                              <span
                                className="abs"
                                style={{
                                  left: ".72em",
                                  top: "1.7em",
                                  width: 1,
                                  height: "1.8em",
                                  background: "rgba(31,30,29,.18)",
                                }}
                              />
                            )}
                          </div>
                        ))}
                      </div>

                      <div
                        className="abs g2-toast"
                        style={{
                          left: "26.4em",
                          top: "16.4em",
                          width: "18.4em",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: ".55em",
                          padding: ".8em .9em",
                          borderRadius: ".7em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                        }}
                      >
                        <svg
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="#4D5E38"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ flex: "none", width: "1em", height: "1em" }}
                        >
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                        <span className="wrap" style={{ fontSize: ".84em", lineHeight: 1.4, whiteSpace: "normal" }}>
                          Signed copy filed to the contract record and sent to the requester.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {sys === 4 && (
                <div
                  className="win"
                  aria-hidden="true"
                  style={{
                    width: "46em",
                    height: "30em",
                    fontSize: "min(12.5px,calc(100cqw / 46))",
                  }}
                >
                  <div className="abs xl-loop" style={{ inset: 0 }}>
                    <BrowserChrome
                      tabBadgeBg="#4D5E38"
                      tabBadgeText="X"
                      tabTitle="AP matching · Sheets"
                      url="files.larkspurlending.com/ap/november.xlsx"
                    />
                    <div
                      className="abs"
                      style={{
                        left: 0,
                        top: "5.2em",
                        width: "46em",
                        height: "24.8em",
                        background: "#F5F4ED",
                      }}
                    >
                      <div
                        className="abs"
                        style={{
                          left: "1.25em",
                          top: "1em",
                          width: "15.6em",
                          height: "22.8em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".5em",
                          padding: "1.1em 1.2em",
                          boxShadow: "0 10px 24px -18px rgba(20,20,19,.25)",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontWeight: 700, fontSize: ".95em" }}>INVOICE</span>
                          <span
                            style={{
                              display: "grid",
                              placeItems: "center",
                              height: "1.4em",
                              padding: "0 .4em",
                              borderRadius: ".3em",
                              background: "#F7E9E3",
                              color: "#9A4A2E",
                            }}
                          >
                            <span style={{ fontSize: ".62em", fontWeight: 700 }}>PDF</span>
                          </span>
                        </div>
                        <div style={{ marginTop: ".2em", color: "#6B6A64" }}>
                          <span style={{ fontSize: ".74em" }}>
                            Acme Supply Co. · Remit to accounts receivable
                          </span>
                        </div>
                        <div style={{ marginTop: ".9em" }}>
                          {INVOICE_FIELDS.map((f, idx) => (
                            <div
                              key={f.label}
                              style={{
                                position: "relative",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                height: "1.9em",
                              }}
                            >
                              <span
                                className={`abs xl-h${idx}`}
                                style={{
                                  left: "-.4em",
                                  right: "-.4em",
                                  top: ".1em",
                                  bottom: ".1em",
                                  borderRadius: ".35em",
                                  border: "1.5px solid var(--accent)",
                                  background: "rgba(217,119,87,.06)",
                                }}
                              />
                              <span style={{ fontSize: ".76em", color: "#6B6A64" }}>{f.label}</span>
                              <span style={{ fontSize: ".8em", fontWeight: 600 }}>{f.value}</span>
                            </div>
                          ))}
                        </div>
                        <div style={{ marginTop: ".9em" }}>
                          {["100%", "84%", "92%", "70%"].map((w, idx) => (
                            <span
                              key={idx}
                              style={{
                                display: "block",
                                height: ".42em",
                                marginTop: ".55em",
                                borderRadius: ".21em",
                                background: "#EFEDE6",
                                width: w,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div
                        className="abs"
                        style={{
                          left: "17.9em",
                          top: "1em",
                          right: "1.25em",
                          background: "#FFFFFF",
                          border: "1px solid rgba(31,30,29,.1)",
                          borderRadius: ".8em",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: ".5em",
                            height: "2.3em",
                            padding: "0 .9em",
                            borderBottom: "1px solid rgba(31,30,29,.09)",
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
                          <span style={{ fontSize: ".86em", fontWeight: 600 }}>
                            AP matching · November.xlsx
                          </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", height: "2em", background: "#FAF9F5", overflow: "hidden" }}>
                          {[
                            { label: "Invoice", w: "3.6em" },
                            { label: "Vendor", w: "6.8em" },
                            { label: "Date", w: "3.8em" },
                            { label: "PO", w: "4.4em" },
                            { label: "Amount", w: "5.4em" },
                            { label: "Match", w: "2.6em" },
                          ].map((col) => (
                            <span
                              key={col.label}
                              style={{
                                flex: "none",
                                width: col.w,
                                padding: "0 .5em",
                                borderRight: "1px solid rgba(31,30,29,.09)",
                              }}
                            >
                              <span style={{ fontSize: ".74em", fontWeight: 600, color: "#5E5D59" }}>
                                {col.label}
                              </span>
                            </span>
                          ))}
                        </div>
                        <div style={{ overflow: "hidden" }}>
                          {[
                            { inv: "4468", ven: "Halden Freight", dt: "Nov 10", po: "PO-7702", amt: "$12,480.00" },
                            { inv: "4469", ven: "Brightline", dt: "Nov 11", po: "PO-7705", amt: "$3,915.50" },
                          ].map((row) => (
                            <div
                              key={row.inv}
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                height: "2.2em",
                                borderTop: "1px solid rgba(31,30,29,.09)",
                              }}
                            >
                              {[
                                { val: row.inv, w: "3.6em" },
                                { val: row.ven, w: "6.8em" },
                                { val: row.dt, w: "3.8em" },
                                { val: row.po, w: "4.4em" },
                                { val: row.amt, w: "5.4em" },
                              ].map((cell, cIdx) => (
                                <span
                                  key={cIdx}
                                  style={{
                                    flex: "none",
                                    width: cell.w,
                                    padding: "0 .5em",
                                    borderRight: "1px solid rgba(31,30,29,.09)",
                                    overflow: "hidden",
                                  }}
                                >
                                  <span style={{ display: "flex" }}>
                                    <span style={{ fontSize: ".78em" }}>{cell.val}</span>
                                  </span>
                                </span>
                              ))}
                              <span
                                style={{
                                  flex: "none",
                                  width: "2.6em",
                                  padding: "0 .5em",
                                  borderRight: "1px solid rgba(31,30,29,.09)",
                                  overflow: "hidden",
                                }}
                              >
                                <span style={{ display: "flex" }}>
                                  <span style={{ color: "#4D5E38", display: "flex" }}>
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{ flex: "none", width: ".95em", height: ".95em" }}
                                    >
                                      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </div>
                          ))}

                          <div style={{ position: "relative" }}>
                            <span className="abs xl-row" style={{ inset: 0, background: "#FAF4F1" }} />
                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                height: "2.2em",
                                borderTop: "1px solid rgba(31,30,29,.09)",
                              }}
                            >
                              {[
                                { val: "4471", w: "3.6em", cls: "xl-c0" },
                                { val: "Acme Supply", w: "6.8em", cls: "xl-c1" },
                                { val: "Nov 12", w: "3.8em", cls: "xl-c2" },
                                { val: "PO-7710", w: "4.4em", cls: "xl-c3" },
                                { val: "$58,200.00", w: "5.4em", cls: "xl-c4" },
                              ].map((cell) => (
                                <span
                                  key={cell.cls}
                                  style={{
                                    flex: "none",
                                    width: cell.w,
                                    padding: "0 .5em",
                                    borderRight: "1px solid rgba(31,30,29,.09)",
                                    overflow: "hidden",
                                  }}
                                >
                                  <span className={cell.cls} style={{ display: "flex" }}>
                                    <span style={{ fontSize: ".78em" }}>{cell.val}</span>
                                  </span>
                                </span>
                              ))}
                              <span
                                style={{
                                  flex: "none",
                                  width: "2.6em",
                                  padding: "0 .5em",
                                  borderRight: "1px solid rgba(31,30,29,.09)",
                                  overflow: "hidden",
                                }}
                              >
                                <span className="xl-c5" style={{ display: "flex" }}>
                                  <span style={{ color: "#4D5E38", display: "flex" }}>
                                    <svg
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.9"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      style={{ flex: "none", width: ".95em", height: ".95em" }}
                                    >
                                      <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                                    </svg>
                                  </span>
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="abs xl-done"
                        style={{
                          left: "17.9em",
                          top: "12.8em",
                          display: "flex",
                          alignItems: "center",
                          gap: ".45em",
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
                          style={{ flex: "none", width: ".95em", height: ".95em" }}
                        >
                          <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                        </svg>
                        <span style={{ fontSize: ".84em" }}>
                          Matched to PO-7710 and goods receipt GR-2281
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: "clamp(56px,6vw,80px)" }}>
          <div className="mq">
            <div
              className="mq-track"
              style={{ "--mqd": "70s" } as React.CSSProperties}
            >
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 36,
                  paddingRight: 36,
                }}
              >
                {APPS.map((app) => (
                  <li
                    key={app.name}
                    className="serif"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 36,
                      fontSize: 20,
                      color: "#3D3D3A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                      <BrandLogo domain={app.domain} size={18} />
                      {app.name}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#B0AEA5",
                      }}
                    />
                  </li>
                ))}
              </ul>
              <ul
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 36,
                  paddingRight: 36,
                }}
              >
                {APPS.map((app) => (
                  <li
                    key={app.name}
                    className="serif"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 36,
                      fontSize: 20,
                      color: "#3D3D3A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
                      <BrandLogo domain={app.domain} size={18} />
                      {app.name}
                    </span>
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#B0AEA5",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p
            style={{
              marginTop: 22,
              textAlign: "center",
              fontSize: 15.5,
              color: "#5E5D59",
            }}
          >
            And whatever else your team uses on a computer.
          </p>
        </div>
      </div>
    </section>
  );
}
