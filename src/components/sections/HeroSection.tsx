"use client";

import React, { useCallback } from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMarkMini } from "@/components/ui/BrandMark";
import { GridTiles } from "@/components/ui/GridTiles";
import { Cursor } from "@/components/ui/Cursor";
import {
  IconCheck,
  IconChevronLeft,
  IconFile,
  IconInbox,
  IconLock,
  IconMail,
  IconPaperclip,
  IconSend,
  IconSpinner,
  IconSpreadsheet,
  IconStar,
} from "@/components/ui/Icons";

const HERO_LOANS = [
  {
    id: "04809",
    borrower: "M. Alvarez",
    product: "30-yr fixed",
    rate: "6.125%",
    sweepDelay: "6500ms",
    outDelay: "6500ms",
    lockBtnOutDelay: "6580ms",
    popDelay: "6950ms",
  },
  {
    id: "04812",
    borrower: "J. Okafor",
    product: "15-yr fixed",
    rate: "5.500%",
    sweepDelay: "7300ms",
    outDelay: "7300ms",
    lockBtnOutDelay: "7380ms",
    popDelay: "7750ms",
  },
  {
    id: "04817",
    borrower: "S. Lindqvist",
    product: "30-yr FHA",
    rate: "5.990%",
    sweepDelay: "8100ms",
    outDelay: "8100ms",
    lockBtnOutDelay: "8180ms",
    popDelay: "8550ms",
  },
  {
    id: "04823",
    borrower: "R. Chen",
    product: "7/6 ARM",
    rate: "6.250%",
    sweepDelay: "8900ms",
    outDelay: "8900ms",
    lockBtnOutDelay: "8980ms",
    popDelay: "9350ms",
  },
] as const;

const OTP_DIGITS = [
  { digit: "4", delay: "5250ms" },
  { digit: "8", delay: "5340ms" },
  { digit: "2", delay: "5430ms" },
  { digit: "9", delay: "5520ms" },
  { digit: "1", delay: "5610ms" },
  { digit: "7", delay: "5700ms" },
] as const;

const HERO_RIPPLES = [
  { left: "340px", top: "84px", animationDelay: "2300ms" },
  { left: "292px", top: "292px", animationDelay: "4750ms" },
  { left: "528px", top: "162px", animationDelay: "6500ms" },
  { left: "528px", top: "214px", animationDelay: "7300ms" },
  { left: "528px", top: "266px", animationDelay: "8100ms" },
  { left: "528px", top: "318px", animationDelay: "8900ms" },
  { left: "519px", top: "320px", animationDelay: "12250ms" },
] as const;

export function HeroSection() {
  const { phases, paused, registerScene, registerFit } = useDemoRuntime();

  const stageRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerScene("hero", el);
      registerFit("hero", el, 584);
    },
    [registerScene, registerFit]
  );

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="disp h1">
            <span className="ln">Meet YourBrand.</span>
            <span className="ln2">An AI employee for every process.</span>
          </h1>
          <p className="hero-sub">
            Teach it your process once. It runs every time, in the systems you
            already use.
          </p>
          <div className="cta-row">
            <a className="btn btn-p" href="#book-a-demo">
              Book a demo
            </a>
            <a className="btn btn-s" href="#how">
              See how it works
            </a>
          </div>
        </div>
        <div
          ref={stageRef}
          className="stage gridbg"
          data-scene="hero"
          data-fit="hero"
          data-fit-w="584"
        >
          <GridTiles />
          <div
            className={`win ${phases.hero}${paused.hero ? " is-paused" : ""}`}
            data-root="hero"
            style={{ width: 584 }}
            data-zoom="hero"
            role="img"
            aria-label="YourBrand picks up an email asking for four rate locks, locks the loans in a lender portal and replies with the confirmations"
          >
            <div className="chrome">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <div className="url">
                <IconMail className="ic ic-12" />
                <span>mail.larkfieldlending.com</span>
                <span
                  className="url-alt k-win"
                  style={{
                    animationDelay: "3800ms",
                    animationDuration: "6000ms",
                  }}
                >
                  <IconLock className="ic ic-12" />
                  <span>portal.firstlender.com/locks</span>
                </span>
              </div>
              <div className="abadge k-in" style={{ animationDelay: "2400ms" }}>
                <i />
                YourBrand
              </div>
            </div>
            <div className="wb" style={{ height: 408 }}>
              <div className="fill k-loop" style={{ animationDuration: "15000ms" }}>
                <div className="layer">
                  <div className="thead">
                    <IconChevronLeft />
                    <span className="tsubj">Fwd: Rate locks for today</span>
                    <span className="pill">Inbox</span>
                    <span
                      className="pill pill-hi k-pop"
                      style={{ animationDelay: "2900ms" }}
                    >
                      <BrandMarkMini />
                      Picked up by YourBrand
                    </span>
                  </div>
                  <div className="msg">
                    <span className="av s32">DR</span>
                    <div className="mmain">
                      <div className="mmeta">
                        <b>Dana Ruiz</b>
                        <span>to ops@larkfieldlending.com</span>
                        <span className="when">8:14 AM</span>
                      </div>
                      <p className="mtext">
                        Please lock these four loans at today&apos;s pricing and
                        send me the confirmations.
                      </p>
                      <span className="fchip">
                        <span className="fic">
                          <IconSpreadsheet />
                        </span>
                        locks-oct-7.xlsx<span className="fsz">12 KB</span>
                      </span>
                    </div>
                  </div>
                  <div className="slot">
                    <div
                      className="comp k-win"
                      style={{
                        animationDelay: "9800ms",
                        animationDuration: "2600ms",
                      }}
                    >
                      <div className="comp-to">Reply to Dana Ruiz</div>
                      <div className="comp-text">
                        <span
                          className="tl k-type"
                          style={{
                            animationDelay: "10200ms",
                            animationDuration: "950ms",
                            animationTimingFunction: "steps(38, end)",
                          }}
                        >
                          All 4 loans locked at today&apos;s pricing.
                        </span>
                        <span
                          className="tl k-type"
                          style={{
                            animationDelay: "11200ms",
                            animationDuration: "600ms",
                            animationTimingFunction: "steps(23, end)",
                          }}
                        >
                          Confirmations attached.
                        </span>
                      </div>
                      <div className="comp-foot">
                        <span
                          className="fchip k-pop"
                          style={{ animationDelay: "11900ms" }}
                        >
                          <span className="fic">
                            <IconFile />
                          </span>
                          lock-confirmations.pdf
                        </span>
                        <span className="sendb">Send</span>
                      </div>
                    </div>
                    <div
                      className="msg k-rise"
                      style={{ animationDelay: "12400ms" }}
                    >
                      <span className="ai s32">Y</span>
                      <div className="mmain">
                        <div className="mmeta">
                          <b>YourBrand</b>
                          <span className="tag">AI</span>
                          <span>to Dana Ruiz</span>
                          <span className="when">8:17 AM</span>
                        </div>
                        <p className="mtext">
                          All 4 loans locked at today&apos;s pricing.
                          Confirmations attached.
                        </p>
                        <span className="fchip">
                          <span className="fic">
                            <IconFile />
                          </span>
                          lock-confirmations.pdf
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="twrap">
                    <span
                      className="toast k-rise"
                      style={{ animationDelay: "12650ms" }}
                    >
                      <IconCheck className="ic ic-14" />
                      Done in 3m 12s
                    </span>
                  </div>
                </div>

                <div
                  className="layer k-hold"
                  style={{ animationDuration: "2600ms" }}
                >
                  <div className="mail">
                    <div className="mside">
                      <span className="mitem on">
                        <IconInbox />
                        Inbox<span className="mcount">4</span>
                      </span>
                      <span className="mitem">
                        <IconStar />
                        Starred
                      </span>
                      <span className="mitem">
                        <IconSend />
                        Sent
                      </span>
                      <span className="mitem">
                        <IconFile className="ic ic-14" />
                        Drafts
                      </span>
                    </div>
                    <div className="mlist">
                      <div className="mhead">
                        <b>Inbox</b>
                        <span>Today</span>
                      </div>
                      <div className="mrows">
                        <div
                          className="mrow unread k-rise"
                          style={{ animationDelay: "650ms" }}
                        >
                          <span
                            className="hov k-win"
                            style={{
                              animationDelay: "1850ms",
                              animationDuration: "800ms",
                            }}
                          />
                          <span className="mdot" />
                          <div className="mtop">
                            <span className="mfrom">Dana Ruiz</span>
                            <span className="mtime">
                              <IconPaperclip />
                              8:14 AM
                            </span>
                          </div>
                          <div className="msubj">Fwd: Rate locks for today</div>
                          <div className="msnip">
                            Please lock these four loans at today&apos;s pricing
                            and send me…
                          </div>
                        </div>
                        <div
                          className="k-down"
                          style={{ animationDelay: "600ms" }}
                        >
                          <div className="mrow">
                            <div className="mtop">
                              <span className="mfrom">Priya Shah</span>
                              <span className="mtime">8:02 AM</span>
                            </div>
                            <div className="msubj">Q4 vendor review agenda</div>
                            <div className="msnip">
                              Moving the review to Thursday so finance can join.
                            </div>
                          </div>
                          <div className="mrow">
                            <div className="mtop">
                              <span className="mfrom">IT Service Desk</span>
                              <span className="mtime">Yesterday</span>
                            </div>
                            <div className="msubj">
                              Ticket IT-2290 resolved
                            </div>
                            <div className="msnip">
                              Your access to the AP shared drive is ready.
                            </div>
                          </div>
                          <div className="mrow">
                            <div className="mtop">
                              <span className="mfrom">Payroll</span>
                              <span className="mtime">Mon</span>
                            </div>
                            <div className="msubj">Timesheets due Friday</div>
                            <div className="msnip">
                              A reminder to submit hours for this period.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="layer k-win"
                  style={{
                    animationDelay: "3800ms",
                    animationDuration: "6000ms",
                  }}
                >
                  <div className="phead">
                    <span className="plogo">FL</span>
                    <span className="pname">First Lender Capital</span>
                    <span className="psub">Partner portal</span>
                    <span className="pacct">
                      Larkfield Lending<span className="av s24">LL</span>
                    </span>
                  </div>
                  <div
                    className="fill-b k-hold"
                    style={{ animationDuration: "6000ms" }}
                  >
                    <div className="si">
                      <div
                        className="si-in k-hold"
                        style={{ animationDuration: "5000ms" }}
                      >
                        <span className="si-t">Sign in</span>
                        <span className="si-l">Work email</span>
                        <span className="si-f">ops@larkfieldlending.com</span>
                        <span className="si-l">Password</span>
                        <span className="si-f">••••••••••••</span>
                        <span className="si-b">Sign in</span>
                      </div>
                      <div
                        className="si-in k-in"
                        style={{ animationDelay: "5000ms" }}
                      >
                        <span className="si-t">Enter your code</span>
                        <span className="pill pill-hi si-note">
                          <BrandMarkMini />
                          Read from shared inbox
                        </span>
                        <span className="otp">
                          {OTP_DIGITS.map((item) => (
                            <span key={item.digit}>
                              <b
                                className="k-pop"
                                style={{ animationDelay: item.delay }}
                              >
                                {item.digit}
                              </b>
                            </span>
                          ))}
                        </span>
                        <span
                          className="si-ok k-in"
                          style={{ animationDelay: "5880ms" }}
                        >
                          <IconCheck />
                          Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="fill-b k-in"
                    style={{ animationDelay: "6000ms" }}
                  >
                    <div className="ptitle">
                      <b>Rate locks for today</b>
                      <span>Oct 7</span>
                    </div>
                    <div className="tbl">
                      <div className="tr th hg">
                        <span>Loan</span>
                        <span>Borrower</span>
                        <span>Product</span>
                        <span>Rate</span>
                        <span>Status</span>
                        <span />
                      </div>
                      {HERO_LOANS.map((loan) => (
                        <div key={loan.id} className="tr hg rh52">
                          <span
                            className="sweep k-sweep"
                            style={{ animationDelay: loan.sweepDelay }}
                          />
                          <span>{loan.id}</span>
                          <span>{loan.borrower}</span>
                          <span>{loan.product}</span>
                          <span>{loan.rate}</span>
                          <span className="cellst">
                            <span
                              className="pill k-out"
                              style={{ animationDelay: loan.outDelay }}
                            >
                              Pending
                            </span>
                            <span
                              className="pill k-win"
                              style={{
                                animationDelay: loan.outDelay,
                                animationDuration: "450ms",
                              }}
                            >
                              <IconSpinner />
                              Locking
                            </span>
                            <span
                              className="pill pill-ok k-pop"
                              style={{ animationDelay: loan.popDelay }}
                            >
                              <IconLock />
                              Locked
                            </span>
                          </span>
                          <span className="cellst cella">
                            <span
                              className="lockb k-out"
                              style={{ animationDelay: loan.lockBtnOutDelay }}
                            >
                              Lock
                            </span>
                            <span
                              className="lockok k-pop"
                              style={{ animationDelay: loan.popDelay }}
                            >
                              <IconCheck />
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>
                    <span
                      className="pfoot k-in"
                      style={{ animationDelay: "9450ms" }}
                    >
                      <IconCheck />4 of 4 locked
                    </span>
                  </div>
                </div>

                {HERO_RIPPLES.map((rip, idx) => (
                  <span key={idx} className="rip" style={rip} />
                ))}
                <Cursor
                  className="cur-hero"
                  initialTransform="translate(546px, 284px)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
