"use client";

import React, { useCallback } from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMarkMini } from "@/components/ui/BrandMark";
import { GridTiles } from "@/components/ui/GridTiles";
import { Cursor } from "@/components/ui/Cursor";
import {
  IconCheck,
  IconFlag,
  IconLock,
  IconPlus,
  IconSpinner,
  IconSpreadsheet,
} from "@/components/ui/Icons";

const SYSTEM_ITEMS = [
  {
    name: "Web portals",
    tag: "Investor, carrier, tax",
    desc: "Stored credentials, one-time codes from a shared inbox, a new layout every quarter. YourBrand handles all of it and keeps going.",
  },
  {
    name: "Encompass",
    tag: "Loan origination",
    desc: "Works through each loan file and ticks off conditions as the documents come in.",
  },
  {
    name: "NetSuite and SAP",
    tag: "ERP",
    desc: "Keys orders and posts invoices in the same forms your team fills in, field by field.",
  },
  {
    name: "Veeva and Adobe",
    tag: "Pharma",
    desc: "Sends contracts for e-signature and follows each one until it's signed.",
  },
  {
    name: "Excel and PDFs",
    tag: "Files",
    desc: "Reads invoices and statements, then matches the values into your spreadsheets.",
  },
] as const;

const PORTAL_LOANS = [
  {
    fullId: "2026-04809",
    shortId: "04809",
    lenderFull: "FLC lender portal",
    lenderShort: "FLC",
    borrower: "M. Alvarez",
    amount: "$412,000",
    status: "Approved",
    statusType: "ok" as const,
    hasLockIcon: false,
    logged: true,
    start: 800,
    dur: 2000,
  },
  {
    fullId: "2026-04812",
    shortId: "04812",
    lenderFull: "Kinz lender portal",
    lenderShort: "Kinz",
    borrower: "J. Okafor",
    amount: "$286,500",
    status: "Approved",
    statusType: "ok" as const,
    hasLockIcon: false,
    logged: true,
    start: 2800,
    dur: 2000,
  },
  {
    fullId: "2026-04817",
    shortId: "04817",
    lenderFull: "FLC lender portal",
    lenderShort: "FLC",
    borrower: "S. Lindqvist",
    amount: "$530,000",
    status: "Locked",
    statusType: "ok" as const,
    hasLockIcon: true,
    logged: true,
    start: 4800,
    dur: 2000,
  },
  {
    fullId: "2026-04820",
    shortId: "04820",
    lenderFull: "Kinz lender portal",
    lenderShort: "Kinz",
    borrower: "D. Brooks",
    amount: "$318,750",
    status: "Suspended",
    statusType: "flag" as const,
    hasLockIcon: false,
    logged: false,
    start: 6800,
    dur: 2000,
  },
  {
    fullId: "2026-04823",
    shortId: "04823",
    lenderFull: "FLC lender portal",
    lenderShort: "FLC",
    borrower: "R. Chen",
    amount: "$447,200",
    status: "Locked",
    statusType: "ok" as const,
    hasLockIcon: true,
    logged: true,
    start: 8800,
    dur: 1800,
  },
] as const;

const ENCOMPASS_CONDITIONS = [
  {
    name: "Verification of employment",
    doc: "voe-04817.pdf",
    delay: "700ms",
  },
  {
    name: "Appraisal received",
    doc: "appraisal-04817.pdf",
    delay: "1300ms",
  },
  {
    name: "Title commitment",
    doc: "title-commitment.pdf",
    delay: "1900ms",
  },
  {
    name: "Hazard insurance binder",
    doc: "binder-2026.pdf",
    delay: "2500ms",
  },
  {
    name: "W-2s, last two years",
    doc: "w2-2024.pdf, w2-2025.pdf",
    delay: "3100ms",
  },
  {
    name: "Bank statements, two months",
    doc: "statements-aug-sep.pdf",
    delay: "3700ms",
  },
] as const;

const ERP_FIELDS = [
  {
    label: "Customer",
    value: "Harlow Foods",
    ringDelay: "550ms",
    ringDur: "750ms",
    typeDelay: "650ms",
    typeDur: "600ms",
    steps: "steps(12, end)",
  },
  {
    label: "Customer PO",
    value: "PO-77310",
    ringDelay: "1600ms",
    ringDur: "500ms",
    typeDelay: "1700ms",
    typeDur: "350ms",
    steps: "steps(8, end)",
  },
  {
    label: "Item",
    value: "Stretch wrap, 18 in",
    ringDelay: "2450ms",
    ringDur: "800ms",
    typeDelay: "2550ms",
    typeDur: "650ms",
    steps: "steps(19, end)",
  },
  {
    label: "Quantity",
    value: "240",
    ringDelay: "3550ms",
    ringDur: "300ms",
    typeDelay: "3650ms",
    typeDur: "150ms",
    steps: "steps(3, end)",
  },
  {
    label: "Ship date",
    value: "Oct 14, 2026",
    ringDelay: "4150ms",
    ringDur: "650ms",
    typeDelay: "4250ms",
    typeDur: "450ms",
    steps: "steps(12, end)",
  },
] as const;

const ERP_RIPPLES = [
  { left: "200px", top: "117px", animationDelay: "550ms" },
  { left: "520px", top: "117px", animationDelay: "1600ms" },
  { left: "200px", top: "191px", animationDelay: "2450ms" },
  { left: "520px", top: "191px", animationDelay: "3550ms" },
  { left: "200px", top: "265px", animationDelay: "4150ms" },
] as const;

const APPS = [
  "SAP",
  "Oracle",
  "NetSuite",
  "Workday",
  "Coupa",
  "QuickBooks",
  "Zoho Books",
  "Salesforce",
  "ServiceNow",
  "Encompass",
  "Optimal Blue",
  "Applied Epic",
  "Veeva",
  "Adobe",
  "Gmail",
  "Outlook",
  "Excel",
  "OneDrive",
  "Slack",
  "Telegram",
] as const;

export function SystemsSection() {
  const { phases, paused, sysIndex, selectSys, registerScene, registerFit } =
    useDemoRuntime();

  const stageRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerScene("sys", el);
      registerFit("sys", el, 700);
    },
    [registerScene, registerFit]
  );

  const repeatedApps = [...APPS, ...APPS];

  return (
    <section className="sec" id="systems">
      <div className="wrap">
        <div className="intro">
          <p className="eyebrow">Systems</p>
          <h2 className="disp h2">
            <span className="ln">Works across the apps</span>
            <span className="ln2">you already run.</span>
          </h2>
          <p className="lead">
            No connectors to build. Your AI employee uses each system&apos;s own
            screens, the way your team does.
          </p>
        </div>

        <div className="sys-grid">
          <div className="acc">
            {SYSTEM_ITEMS.map((item, idx) => {
              const open = sysIndex === idx;
              return (
                <div key={item.name} className={`acc-item${open ? " open" : ""}`}>
                  <button
                    type="button"
                    className="acc-h"
                    aria-expanded={open}
                    data-sys={idx}
                    onClick={() => selectSys(idx)}
                  >
                    <span className="acc-n">{item.name}</span>
                    <span className="acc-tag">{item.tag}</span>
                    <IconPlus className="ic acc-x" />
                  </button>
                  <div className="acc-b">
                    <div className="acc-in">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            ref={stageRef}
            className="stage gridbg sys-stage"
            data-scene="sys"
            data-fit="sys"
            data-fit-w="700"
          >
            <GridTiles />
            <div
              className={`${phases.sys}${paused.sys ? " is-paused" : ""}`}
              data-root="sys"
            >
              <div className="pane" data-pane="sys" data-i="0" hidden={sysIndex !== 0}>
                <div
                  className="win"
                  style={{ width: 700 }}
                  data-zoom="sys"
                  role="img"
                  aria-label="YourBrand checks five loans in a lender portal one by one, logs each, and flags loan 04820 for a missing W-2"
                >
                  <div className="chrome">
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="url">
                      <IconLock className="ic ic-12" />
                      <span>portal.firstlender.com/loans</span>
                    </div>
                    <div className="abadge">
                      <i />
                      YourBrand
                    </div>
                  </div>
                  <div className="wb" style={{ height: 416 }}>
                    <div
                      className="fill k-loop"
                      style={{ animationDuration: "13500ms" }}
                    >
                      <div className="phead">
                        <span className="plogo">FL</span>
                        <span className="pname">First Lender Capital</span>
                        <span className="psub">Loans</span>
                        <span className="pacct">
                          Larkfield Lending<span className="av s24">LL</span>
                        </span>
                      </div>
                      <div className="pt">
                        <div className="pcard">
                          {PORTAL_LOANS.map((loan, idx) => {
                            const isLast = idx === PORTAL_LOANS.length - 1;
                            return (
                              <div
                                key={loan.fullId}
                                className={`pv ${isLast ? "k-in" : "k-win"}`}
                                style={
                                  isLast
                                    ? { animationDelay: `${loan.start}ms` }
                                    : {
                                        animationDelay: `${loan.start}ms`,
                                        animationDuration: "2000ms",
                                      }
                                }
                              >
                                <span className="pv-l">Loan</span>
                                <span className="pv-id">{loan.fullId}</span>
                                <span className="pv-f">
                                  <span>Lender</span>
                                  <b>{loan.lenderFull}</b>
                                </span>
                                <span className="pv-f">
                                  <span>Borrower</span>
                                  <b
                                    className="k-in"
                                    style={{
                                      animationDelay: `${loan.start + 400}ms`,
                                    }}
                                  >
                                    {loan.borrower}
                                  </b>
                                  <i
                                    className="skel k-out"
                                    style={{
                                      animationDelay: `${loan.start + 400}ms`,
                                    }}
                                  />
                                </span>
                                <span className="pv-f">
                                  <span>Amount</span>
                                  <b
                                    className="k-in"
                                    style={{
                                      animationDelay: `${loan.start + 500}ms`,
                                    }}
                                  >
                                    {loan.amount}
                                  </b>
                                  <i
                                    className="skel k-out"
                                    style={{
                                      animationDelay: `${loan.start + 500}ms`,
                                    }}
                                  />
                                </span>
                                <span className="pv-f">
                                  <span>Portal status</span>
                                  <span className="pv-st">
                                    <span
                                      className="pill k-win"
                                      style={{
                                        animationDelay: `${loan.start + 100}ms`,
                                        animationDuration: "1200ms",
                                      }}
                                    >
                                      <IconSpinner />
                                      Checking…
                                    </span>
                                    <span
                                      className={`pill ${
                                        loan.statusType === "ok"
                                          ? "pill-ok"
                                          : "pill-flag"
                                      } k-pop`}
                                      style={{
                                        animationDelay: `${loan.start + 1300}ms`,
                                      }}
                                    >
                                      {loan.status}
                                    </span>
                                  </span>
                                </span>
                                <span className="pv-f">
                                  <span>Logged</span>
                                  {loan.logged ? (
                                    <b
                                      className="yes k-pop"
                                      style={{
                                        animationDelay: `${loan.start + 1400}ms`,
                                      }}
                                    >
                                      Yes
                                    </b>
                                  ) : (
                                    <b
                                      className="no k-pop"
                                      style={{
                                        animationDelay: `${loan.start + 1400}ms`,
                                      }}
                                    >
                                      <i />
                                      No, W-2 missing
                                    </b>
                                  )}
                                </span>
                                <span
                                  className="pill pill-hi pv-by k-pop"
                                  style={{
                                    animationDelay: `${loan.start + 1400}ms`,
                                  }}
                                >
                                  <BrandMarkMini />
                                  Checked by YourBrand
                                </span>
                              </div>
                            );
                          })}
                        </div>
                        <div className="ptab">
                          <div className="tr th th32 sg">
                            <span>Loan</span>
                            <span>Lender</span>
                            <span>Portal status</span>
                            <span>Logged</span>
                          </div>
                          {PORTAL_LOANS.map((loan) => (
                            <div key={loan.shortId} className="tr sg rh48">
                              <span
                                className="hov k-win"
                                style={{
                                  animationDelay: `${loan.start}ms`,
                                  animationDuration: `${loan.dur}ms`,
                                }}
                              />
                              <span
                                className="sweep k-sweep"
                                style={{
                                  animationDelay: `${loan.start + 1300}ms`,
                                }}
                              />
                              <span>{loan.shortId}</span>
                              <span>{loan.lenderShort}</span>
                              <span className="cellst">
                                <span
                                  className="pill k-out"
                                  style={{
                                    animationDelay: `${loan.start + 100}ms`,
                                  }}
                                >
                                  Queued
                                </span>
                                <span
                                  className="pill pill-line k-win"
                                  style={{
                                    animationDelay: `${loan.start + 100}ms`,
                                    animationDuration: "600ms",
                                  }}
                                >
                                  Signing in
                                </span>
                                <span
                                  className="pill k-win"
                                  style={{
                                    animationDelay: `${loan.start + 700}ms`,
                                    animationDuration: "600ms",
                                  }}
                                >
                                  <IconSpinner />
                                  Checking…
                                </span>
                                <span
                                  className={`pill ${
                                    loan.statusType === "ok"
                                      ? "pill-ok"
                                      : "pill-flag"
                                  } k-pop`}
                                  style={{
                                    animationDelay: `${loan.start + 1300}ms`,
                                  }}
                                >
                                  {loan.hasLockIcon ? <IconLock /> : null}
                                  {loan.status}
                                </span>
                              </span>
                              <span className="cellst">
                                <span
                                  className="dim k-out"
                                  style={{
                                    animationDelay: `${loan.start + 1400}ms`,
                                  }}
                                >
                                  —
                                </span>
                                {loan.logged ? (
                                  <span
                                    className="yes k-pop"
                                    style={{
                                      animationDelay: `${loan.start + 1400}ms`,
                                    }}
                                  >
                                    <IconCheck />
                                    Yes
                                  </span>
                                ) : (
                                  <span
                                    className="no k-pop"
                                    style={{
                                      animationDelay: `${loan.start + 1400}ms`,
                                    }}
                                  >
                                    <i />
                                    No, W-2 missing
                                  </span>
                                )}
                              </span>
                            </div>
                          ))}
                          <div className="pcount">
                            <span
                              className="k-out"
                              style={{ animationDelay: "2200ms" }}
                            >
                              0 of 5 checked
                            </span>
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "2200ms",
                                animationDuration: "2000ms",
                              }}
                            >
                              1 of 5 checked
                            </span>
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "4200ms",
                                animationDuration: "2000ms",
                              }}
                            >
                              2 of 5 checked
                            </span>
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "6200ms",
                                animationDuration: "2000ms",
                              }}
                            >
                              3 of 5 checked
                            </span>
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "8200ms",
                                animationDuration: "2000ms",
                              }}
                            >
                              4 of 5 checked
                            </span>
                            <span
                              className="k-in"
                              style={{ animationDelay: "10200ms" }}
                            >
                              5 of 5 checked, 1 flagged for review
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="twrap twrap-r">
                        <span
                          className="toast k-win"
                          style={{
                            animationDelay: "8300ms",
                            animationDuration: "3200ms",
                          }}
                        >
                          <IconFlag />
                          Flagged for review
                          <span className="toast-sub">Sent to Maya</span>
                        </span>
                      </div>
                      <Cursor
                        className="cur-port"
                        initialTransform="translate(520px, 392px)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pane" data-pane="sys" data-i="1" hidden={sysIndex !== 1}>
                <div
                  className="win"
                  style={{ width: 700 }}
                  data-zoom="sys"
                  role="img"
                  aria-label="A loan file in a loan origination system: YourBrand ticks off six conditions one by one"
                >
                  <div className="chrome">
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="url">
                      <IconLock className="ic ic-12" />
                      <span>los.larkfieldlending.com/loans/2026-04817</span>
                    </div>
                    <div className="abadge">
                      <i />
                      YourBrand
                    </div>
                  </div>
                  <div className="wb" style={{ height: 416 }}>
                    <div
                      className="fill k-loop"
                      style={{ animationDuration: "8000ms" }}
                    >
                      <div className="ahead">
                        <b>Loan file 2026-04817</b>
                        <span className="gr">S. Lindqvist</span>
                        <span className="tabs-mini">
                          <span>Overview</span>
                          <span className="on">Conditions</span>
                          <span>Documents</span>
                        </span>
                      </div>
                      <div className="conds">
                        {ENCOMPASS_CONDITIONS.map((cond) => (
                          <div key={cond.name} className="cond iso">
                            <span
                              className="sweep k-sweep"
                              style={{ animationDelay: cond.delay }}
                            />
                            <span className="cbox">
                              <span
                                className="k-pop"
                                style={{ animationDelay: cond.delay }}
                              >
                                <IconCheck />
                              </span>
                            </span>
                            <span>{cond.name}</span>
                            <span className="cdoc">{cond.doc}</span>
                            <span className="cst">
                              <span
                                className="pill k-out"
                                style={{ animationDelay: cond.delay }}
                              >
                                Open
                              </span>
                              <span
                                className="pill pill-ok k-pop"
                                style={{ animationDelay: cond.delay }}
                              >
                                Met
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="cfoot">
                        <span
                          className="gr k-out"
                          style={{ animationDelay: "4300ms" }}
                        >
                          Checking conditions…
                        </span>
                        <span
                          className="k-in"
                          style={{ animationDelay: "4300ms" }}
                        >
                          6 of 6 conditions met
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pane" data-pane="sys" data-i="2" hidden={sysIndex !== 2}>
                <div
                  className="win"
                  style={{ width: 700 }}
                  data-zoom="sys"
                  role="img"
                  aria-label="A sales order form in an ERP filled in field by field, then saved as SO-10482"
                >
                  <div className="chrome">
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="url">
                      <IconLock className="ic ic-12" />
                      <span>erp.larkfield.com/sales-orders/new</span>
                    </div>
                    <div className="abadge">
                      <i />
                      YourBrand
                    </div>
                  </div>
                  <div className="wb" style={{ height: 416 }}>
                    <div
                      className="fill k-loop"
                      style={{ animationDuration: "9500ms" }}
                    >
                      <div className="ahead">
                        <b>New sales order</b>
                        <span className="gr">Larkfield Supply</span>
                        <span className="stkr">
                          <span
                            className="pill k-out"
                            style={{ animationDelay: "5600ms" }}
                          >
                            Draft
                          </span>
                          <span
                            className="pill pill-ok k-pop"
                            style={{ animationDelay: "5600ms" }}
                          >
                            <IconCheck />
                            Saved
                          </span>
                        </span>
                      </div>
                      <div className="form">
                        {ERP_FIELDS.map((field) => (
                          <div key={field.label} className="fld">
                            <span className="fl">{field.label}</span>
                            <span className="fi">
                              <span
                                className="ring k-win"
                                style={{
                                  animationDelay: field.ringDelay,
                                  animationDuration: field.ringDur,
                                }}
                              />
                              <span
                                className="tl k-type"
                                style={{
                                  animationDelay: field.typeDelay,
                                  animationDuration: field.typeDur,
                                  animationTimingFunction: field.steps,
                                }}
                              >
                                {field.value}
                              </span>
                            </span>
                          </div>
                        ))}
                        <div className="fld">
                          <span className="fl">Amount</span>
                          <span className="fi fi-ro">
                            <span
                              className="k-in"
                              style={{ animationDelay: "3850ms" }}
                            >
                              $3,120.00
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="ffoot">
                        <span className="gb">Cancel</span>
                        <span className="sv">
                          Save
                          <span
                            className="rip"
                            style={{
                              left: "48px",
                              top: "20px",
                              animationDelay: "5350ms",
                            }}
                          />
                        </span>
                      </div>
                      <div className="twrap">
                        <span
                          className="toast k-rise"
                          style={{ animationDelay: "5700ms" }}
                        >
                          <IconCheck className="ic ic-14" />
                          SO-10482 created
                        </span>
                      </div>
                      {ERP_RIPPLES.map((rip, idx) => (
                        <span key={idx} className="rip" style={rip} />
                      ))}
                      <Cursor
                        className="cur-erp"
                        initialTransform="translate(560px, 300px)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pane" data-pane="sys" data-i="3" hidden={sysIndex !== 3}>
                <div
                  className="win"
                  style={{ width: 700 }}
                  data-zoom="sys"
                  role="img"
                  aria-label="A consulting agreement sent for e-signature moves from sent to viewed to signed"
                >
                  <div className="chrome">
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="url">
                      <IconLock className="ic ic-12" />
                      <span>sign.mendelpharma.com/envelopes/7731</span>
                    </div>
                    <div className="abadge">
                      <i />
                      YourBrand
                    </div>
                  </div>
                  <div className="wb" style={{ height: 416 }}>
                    <div
                      className="fill k-loop"
                      style={{ animationDuration: "8000ms" }}
                    >
                      <div className="ahead">
                        <b>Consulting agreement</b>
                        <span className="gr">Envelope 7731</span>
                        <span className="stkr">
                          <span
                            className="pill pill-line k-win"
                            style={{
                              animationDelay: "600ms",
                              animationDuration: "1400ms",
                            }}
                          >
                            Sent
                          </span>
                          <span
                            className="pill pill-line k-win"
                            style={{
                              animationDelay: "2000ms",
                              animationDuration: "1600ms",
                            }}
                          >
                            Viewed
                          </span>
                          <span
                            className="pill pill-ok k-pop"
                            style={{ animationDelay: "3600ms" }}
                          >
                            <IconCheck />
                            Signed
                          </span>
                        </span>
                      </div>
                      <div className="es">
                        <div className="doc">
                          <span className="doc-t">Consulting agreement</span>
                          <span className="doc-s">
                            Mendel Pharma and Dr. Amir Haddad
                          </span>
                          <span className="skel" style={{ width: "100%" }} />
                          <span className="skel" style={{ width: "92%" }} />
                          <span className="skel" style={{ width: "96%" }} />
                          <span className="skel" style={{ width: "70%" }} />
                          <span
                            className="skel"
                            style={{ width: "100%", marginTop: "8px" }}
                          />
                          <span className="skel" style={{ width: "88%" }} />
                          <span className="skel" style={{ width: "94%" }} />
                          <span className="skel" style={{ width: "58%" }} />
                          <span className="sigline">
                            <svg
                              className="sig k-in"
                              style={{ animationDelay: "3500ms" }}
                              viewBox="0 0 140 40"
                              aria-hidden="true"
                            >
                              <path d="M4 30c8-14 14-22 18-20s-6 22-2 22 10-18 14-18-2 14 2 14 8-12 12-12 0 10 4 10 10-8 16-8 6 6 12 6 16-4 26-6" />
                            </svg>
                          </span>
                          <span className="sign-l">Dr. Amir Haddad</span>
                        </div>
                        <div className="tline">
                          <div className="tstep">
                            <span className="tconn">
                              <span
                                className="k-dy"
                                style={{ animationDelay: "2000ms" }}
                              />
                            </span>
                            <span className="tdot">
                              <span
                                className="k-pop"
                                style={{ animationDelay: "600ms" }}
                              >
                                <IconCheck />
                              </span>
                            </span>
                            <span className="tx">
                              <b>Sent for signature</b>
                              <span>To Dr. Amir Haddad</span>
                            </span>
                            <span
                              className="ttime k-in"
                              style={{ animationDelay: "600ms" }}
                            >
                              9:02 AM
                            </span>
                          </div>
                          <div className="tstep">
                            <span className="tconn">
                              <span
                                className="k-dy"
                                style={{ animationDelay: "3600ms" }}
                              />
                            </span>
                            <span className="tdot">
                              <span
                                className="k-pop"
                                style={{ animationDelay: "2000ms" }}
                              >
                                <IconCheck />
                              </span>
                            </span>
                            <span className="tx">
                              <b>Viewed</b>
                              <span>Opened by Dr. Amir Haddad</span>
                            </span>
                            <span
                              className="ttime k-in"
                              style={{ animationDelay: "2000ms" }}
                            >
                              9:41 AM
                            </span>
                          </div>
                          <div className="tstep">
                            <span className="tdot">
                              <span
                                className="k-pop"
                                style={{ animationDelay: "3600ms" }}
                              >
                                <IconCheck />
                              </span>
                            </span>
                            <span className="tx">
                              <b>Signed</b>
                              <span>Envelope completed</span>
                            </span>
                            <span
                              className="ttime k-in"
                              style={{ animationDelay: "3600ms" }}
                            >
                              10:15 AM
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pane" data-pane="sys" data-i="4" hidden={sysIndex !== 4}>
                <div
                  className="win"
                  style={{ width: 700 }}
                  data-zoom="sys"
                  role="img"
                  aria-label="A PDF invoice on the left and a spreadsheet on the right: YourBrand highlights each value on the invoice and fills the matching cell"
                >
                  <div className="chrome">
                    <div className="dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="url">
                      <IconLock className="ic ic-12" />
                      <span>files.larkfield.com/ap/invoice-4472.pdf</span>
                    </div>
                    <div className="abadge">
                      <i />
                      YourBrand
                    </div>
                  </div>
                  <div className="wb" style={{ height: 416 }}>
                    <div
                      className="fill k-loop"
                      style={{ animationDuration: "8500ms" }}
                    >
                      <div className="xs">
                        <div className="pdf">
                          <div className="pdf-h">
                            <b>Invoice</b>
                            <span>Page 1 of 1</span>
                          </div>
                          <div className="pdf-f">
                            <span>From</span>
                            <span className="mkr">
                              <i
                                className="k-in"
                                style={{ animationDelay: "1300ms" }}
                              />
                              Harbor Packaging Ltd.
                            </span>
                          </div>
                          <div className="pdf-f">
                            <span>Bill to</span>
                            <span>Larkfield Supply</span>
                          </div>
                          <div className="pdf-f">
                            <span>Invoice no.</span>
                            <span className="mkr">
                              <i
                                className="k-in"
                                style={{ animationDelay: "700ms" }}
                              />
                              4472
                            </span>
                          </div>
                          <div className="pdf-f">
                            <span>Date</span>
                            <span>Oct 3, 2026</span>
                          </div>
                          <div className="pdf-f">
                            <span>PO number</span>
                            <span className="mkr">
                              <i
                                className="k-in"
                                style={{ animationDelay: "2500ms" }}
                              />
                              PO-88214
                            </span>
                          </div>
                          <div className="pdf-lines">
                            <div className="pdf-li">
                              <span>Corrugated boxes, 24 in × 800</span>
                              <span>$9,600.00</span>
                            </div>
                            <div className="pdf-li">
                              <span>Pallet wrap × 120</span>
                              <span>$2,880.00</span>
                            </div>
                          </div>
                          <div className="pdf-tot">
                            <span>Total</span>
                            <span className="mkr">
                              <i
                                className="k-in"
                                style={{ animationDelay: "1900ms" }}
                              />
                              $12,480.00
                            </span>
                          </div>
                        </div>

                        <div className="sheet">
                          <div className="sh-bar">
                            <IconSpreadsheet className="ic ic-14" />
                            AP tracker.xlsx
                          </div>
                          <div className="sh-grid">
                            <span className="sh-c" />
                            <span className="sh-c">A</span>
                            <span className="sh-c">B</span>
                            <span className="sh-c">C</span>
                            <span className="sh-c">D</span>
                            <span className="sh-c">E</span>

                            <span className="sh-c">1</span>
                            <span className="sh-hd">Invoice</span>
                            <span className="sh-hd">Vendor</span>
                            <span className="sh-hd">Amount</span>
                            <span className="sh-hd">PO</span>
                            <span className="sh-hd">Match</span>

                            <span className="sh-c">2</span>
                            <span>4469</span>
                            <span>Coastal Freight</span>
                            <span>$58,400.00</span>
                            <span>PO-87102</span>
                            <span>
                              <span className="yes">
                                <IconCheck />
                              </span>
                            </span>

                            <span className="sh-c">3</span>
                            <span>4470</span>
                            <span>Meridian Labs</span>
                            <span>$61,250.00</span>
                            <span>PO-87188</span>
                            <span>
                              <span className="yes">
                                <IconCheck />
                              </span>
                            </span>

                            <span className="sh-c">4</span>
                            <span>
                              <i
                                className="sweep k-sweep"
                                style={{ animationDelay: "800ms" }}
                              />
                              <span
                                className="tl k-type"
                                style={{
                                  animationDelay: "800ms",
                                  animationDuration: "200ms",
                                  animationTimingFunction: "steps(4, end)",
                                }}
                              >
                                4472
                              </span>
                            </span>
                            <span>
                              <i
                                className="sweep k-sweep"
                                style={{ animationDelay: "1400ms" }}
                              />
                              <span
                                className="tl k-type"
                                style={{
                                  animationDelay: "1400ms",
                                  animationDuration: "450ms",
                                  animationTimingFunction: "steps(16, end)",
                                }}
                              >
                                Harbor Packaging
                              </span>
                            </span>
                            <span>
                              <i
                                className="sweep k-sweep"
                                style={{ animationDelay: "2000ms" }}
                              />
                              <span
                                className="tl k-type"
                                style={{
                                  animationDelay: "2000ms",
                                  animationDuration: "300ms",
                                  animationTimingFunction: "steps(10, end)",
                                }}
                              >
                                $12,480.00
                              </span>
                            </span>
                            <span>
                              <i
                                className="sweep k-sweep"
                                style={{ animationDelay: "2600ms" }}
                              />
                              <span
                                className="tl k-type"
                                style={{
                                  animationDelay: "2600ms",
                                  animationDuration: "250ms",
                                  animationTimingFunction: "steps(8, end)",
                                }}
                              >
                                PO-88214
                              </span>
                            </span>
                            <span>
                              <i
                                className="sweep k-sweep"
                                style={{ animationDelay: "3200ms" }}
                              />
                              <span
                                className="yes k-pop"
                                style={{ animationDelay: "3200ms" }}
                              >
                                <IconCheck />
                              </span>
                            </span>

                            {[5, 6, 7, 8, 9].map((rowNum) => (
                              <React.Fragment key={rowNum}>
                                <span className="sh-c">{rowNum}</span>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="apps mq">
          <div className="mq-track" style={{ animationDuration: "70s" }}>
            {repeatedApps.map((app, idx) => (
              <span key={idx} className="app">
                {app}
              </span>
            ))}
          </div>
        </div>
        <p className="apps-note">
          And whatever else your team uses on a computer.
        </p>
      </div>
    </section>
  );
}
