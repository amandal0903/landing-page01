"use client";

import React, { useCallback } from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { BrandMarkMini } from "@/components/ui/BrandMark";
import {
  IconCheck,
  IconChevronLeft,
  IconClock,
  IconCode,
  IconDoubleTick,
  IconEyes,
  IconFile,
  IconHash,
  IconMail,
  IconSpreadsheet,
  IconTextBubble,
  IconWhatsApp,
} from "@/components/ui/Icons";

const CHANNEL_TABS = [
  { label: "Email", icon: IconMail },
  { label: "Slack", icon: IconHash },
  { label: "Text", icon: IconTextBubble },
  { label: "WhatsApp", icon: IconWhatsApp },
  { label: "Schedule", icon: IconClock },
  { label: "API", icon: IconCode },
] as const;

const CHANNEL_COPY = [
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
    body: "Ask in a text and the answer comes back in the same conversation.",
  },
  {
    title: "Message it on WhatsApp.",
    body: "Send the request in a chat. The finished file comes back in the same chat.",
  },
  {
    title: "Put it on a schedule.",
    body: "Set it once. It runs on its own.",
  },
  {
    title: "Call it from your stack.",
    body: "Start any workflow with one API call; get results via webhook.",
  },
] as const;

export function ChannelsSection() {
  const { phases, paused, chIndex, selectCh, registerScene, registerFit } =
    useDemoRuntime();

  const stageRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerScene("ch", el);
      registerFit("ch", el, 600);
    },
    [registerScene, registerFit]
  );

  return (
    <section className="sec" id="channels">
      <div className="wrap">
        <div className="intro">
          <p className="eyebrow">Ask YourBrand</p>
          <h2 className="disp h2">
            <span className="ln">Ask for the work</span>
            <span className="ln2">where your team already talks.</span>
          </h2>
          <p className="lead">
            Email it. Slack it. Text it. Or put it on a schedule. YourBrand
            delivers the finished work to you, your boss, or whoever keeps
            asking ‘any update?’
          </p>
        </div>

        <div className="ch-tabs">
          {CHANNEL_TABS.map((tab, idx) => {
            const on = chIndex === idx;
            const Icon = tab.icon;
            return (
              <button
                key={tab.label}
                type="button"
                className={`ch-tab${on ? " on" : ""}`}
                aria-pressed={on}
                data-ch={idx}
                onClick={() => selectCh(idx)}
              >
                <Icon />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div
          ref={stageRef}
          className="stage ch-stage"
          data-scene="ch"
          data-fit="ch"
          data-fit-w="600"
        >
          <div
            className={`${phases.ch}${paused.ch ? " is-paused" : ""}`}
            data-root="ch"
          >
            <div className="pane" data-pane="ch" data-i="0" hidden={chIndex !== 0}>
              <div
                className="win chv"
                data-zoom="ch"
                role="img"
                aria-label="An email asking for rate locks is picked up by YourBrand, which replies in the same thread with the confirmations attached"
              >
                <div className="fill k-loop" style={{ animationDuration: "9000ms" }}>
                  <div className="thead">
                    <IconChevronLeft />
                    <span className="tsubj">Fwd: Rate locks for today</span>
                    <span className="pill">Inbox</span>
                    <span
                      className="pill pill-hi k-pop"
                      style={{ animationDelay: "1100ms" }}
                    >
                      <BrandMarkMini />
                      Picked up by YourBrand
                    </span>
                  </div>
                  <div className="msg k-rise" style={{ animationDelay: "300ms" }}>
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
                  <div className="slot slot-s">
                    <div
                      className="comp k-win"
                      style={{
                        animationDelay: "1700ms",
                        animationDuration: "2500ms",
                      }}
                    >
                      <div className="comp-to">Reply to Dana Ruiz</div>
                      <div className="comp-text">
                        <span
                          className="tl k-type"
                          style={{
                            animationDelay: "2000ms",
                            animationDuration: "950ms",
                            animationTimingFunction: "steps(38, end)",
                          }}
                        >
                          All 4 loans locked at today&apos;s pricing.
                        </span>
                        <span
                          className="tl k-type"
                          style={{
                            animationDelay: "3000ms",
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
                          style={{ animationDelay: "3650ms" }}
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
                      style={{ animationDelay: "4200ms" }}
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
                </div>
              </div>
            </div>

            <div className="pane" data-pane="ch" data-i="1" hidden={chIndex !== 1}>
              <div
                className="win chv"
                data-zoom="ch"
                role="img"
                aria-label="In a Slack-style channel, YourBrand is asked to post this week's supplier invoices to SAP, reacts, posts 42 and flags two for approval"
              >
                <div className="fill k-loop" style={{ animationDuration: "9500ms" }}>
                  <div className="slh">
                    <IconHash />
                    <b>finance-ops</b>
                    <span className="gr">8 members</span>
                  </div>
                  <div className="slb">
                    <div className="slm k-rise" style={{ animationDelay: "300ms" }}>
                      <span className="av s32">AR</span>
                      <div className="slmain">
                        <div className="mmeta">
                          <b>Ana Ruiz</b>
                          <span>9:12 AM</span>
                        </div>
                        <p>
                          <span className="mention">@YourBrand</span> post this
                          week&apos;s supplier invoices to SAP
                        </p>
                        <span
                          className="react k-pop"
                          style={{ animationDelay: "1000ms" }}
                        >
                          <IconEyes />1
                        </span>
                      </div>
                    </div>
                    <div className="slthread k-in" style={{ animationDelay: "1400ms" }}>
                      <span className="sltl">1 reply</span>
                      <div className="slm">
                        <span className="ai s32">Y</span>
                        <div className="slmain">
                          <div className="mmeta">
                            <b>YourBrand</b>
                            <span className="tag">AI</span>
                            <span>9:12 AM</span>
                          </div>
                          <p className="k-rise" style={{ animationDelay: "1600ms" }}>
                            On it.
                          </p>
                          <div className="slcount">
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "1900ms",
                                animationDuration: "500ms",
                              }}
                            >
                              Posting 8 of 42 invoices…
                            </span>
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "2400ms",
                                animationDuration: "500ms",
                              }}
                            >
                              Posting 21 of 42 invoices…
                            </span>
                            <span
                              className="k-win"
                              style={{
                                animationDelay: "2900ms",
                                animationDuration: "500ms",
                              }}
                            >
                              Posting 34 of 42 invoices…
                            </span>
                            <span className="k-in" style={{ animationDelay: "3400ms" }}>
                              42 invoices posted, 2 flagged for approval.
                            </span>
                          </div>
                          <div className="slflags">
                            <div
                              className="slflag k-rise"
                              style={{ animationDelay: "3800ms" }}
                            >
                              <b>INV-20931</b>
                              <span className="gr">Coastal Freight</span>
                              <span className="amt">$58,400</span>
                              <span className="mb mb-p">Approve</span>
                              <span className="mb">View</span>
                            </div>
                            <div
                              className="slflag k-rise"
                              style={{ animationDelay: "4000ms" }}
                            >
                              <b>INV-20947</b>
                              <span className="gr">Meridian Labs</span>
                              <span className="amt">$61,250</span>
                              <span className="mb mb-p">Approve</span>
                              <span className="mb">View</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pane" data-pane="ch" data-i="2" hidden={chIndex !== 2}>
              <div
                className="win chv chv-clear"
                data-zoom="ch"
                role="img"
                aria-label="A text message thread: someone asks about the Acme invoice and YourBrand replies that it is on hold and will be resent by Friday"
              >
                <div className="phone">
                  <div className="ph-head">
                    <IconChevronLeft />
                    <span className="ai">Y</span>
                    <span className="ph-name">
                      <b>YourBrand</b>
                      <span>AI employee</span>
                    </span>
                  </div>
                  <div
                    className="ph-body k-loop"
                    style={{ animationDuration: "7000ms" }}
                  >
                    <div className="bo k-rise" style={{ animationDelay: "400ms" }}>
                      Any update on the Acme invoice?
                    </div>
                    <span className="ph-meta k-in" style={{ animationDelay: "900ms" }}>
                      Delivered
                    </span>
                    <div className="ph-slot">
                      <span
                        className="dots3 k-win"
                        style={{
                          animationDelay: "1300ms",
                          animationDuration: "1000ms",
                        }}
                      >
                        <span />
                        <span />
                        <span />
                      </span>
                      <div className="bi k-rise" style={{ animationDelay: "2300ms" }}>
                        Told Acme it&apos;s on hold. They&apos;ll resend by Friday.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pane" data-pane="ch" data-i="3" hidden={chIndex !== 3}>
              <div
                className="win chv chv-clear"
                data-zoom="ch"
                role="img"
                aria-label="A WhatsApp-style chat: someone asks YourBrand to pull today's rate sheets and it replies with six portals checked and the sheet attached"
              >
                <div className="phone ph-wa">
                  <div className="ph-head">
                    <IconChevronLeft />
                    <span className="ai">Y</span>
                    <span className="ph-name">
                      <b>YourBrand</b>
                      <span>online</span>
                    </span>
                  </div>
                  <div
                    className="ph-body k-loop"
                    style={{ animationDuration: "7000ms" }}
                  >
                    <div className="wo k-rise" style={{ animationDelay: "400ms" }}>
                      Pull today&apos;s rate sheets please
                      <span className="wt">
                        8:41
                        <span className="ticks">
                          <IconDoubleTick />
                          <svg
                            className="ic read k-in"
                            style={{ animationDelay: "1000ms" }}
                            viewBox="0 0 18 12"
                            aria-hidden="true"
                          >
                            <path d="M1.5 6.5 4.2 9.2 10 2.8M7.6 8.6l.6.6L14 2.8" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="ph-slot">
                      <span
                        className="dots3 k-win"
                        style={{
                          animationDelay: "1200ms",
                          animationDuration: "1000ms",
                        }}
                      >
                        <span />
                        <span />
                        <span />
                      </span>
                      <div className="wi k-rise" style={{ animationDelay: "2200ms" }}>
                        Done. 6 investor portals checked, sheet attached.
                        <span className="wt">8:43</span>
                      </div>
                      <div
                        className="wfile k-rise"
                        style={{ animationDelay: "2600ms" }}
                      >
                        <span className="fic">
                          <IconSpreadsheet />
                        </span>
                        <span>
                          <b>rate-sheets-oct-7.xlsx</b>
                          <span>6 sheets</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pane" data-pane="ch" data-i="4" hidden={chIndex !== 4}>
              <div
                className="win chv"
                data-zoom="ch"
                role="img"
                aria-label="A list of scheduled runs: the tax portal notices run starts at 7:00 AM and finishes at 7:02 AM with three notices found"
              >
                <div className="fill k-loop" style={{ animationDuration: "8000ms" }}>
                  <div className="ahead">
                    <b>Scheduled runs</b>
                    <span className="gr">2 active</span>
                  </div>
                  <div className="sch">
                    <div className="srow iso">
                      <span
                        className="wash k-win"
                        style={{
                          animationDelay: "900ms",
                          animationDuration: "2800ms",
                        }}
                      />
                      <span className="tic">
                        <IconClock />
                      </span>
                      <span className="tmain">
                        <b>Tax portal notices</b>
                        <span>Every day 7:00 AM</span>
                      </span>
                      <span className="sright">
                        <span className="sst">
                          <span
                            className="pill k-out"
                            style={{ animationDelay: "900ms" }}
                          >
                            Next: today 7:00 AM
                          </span>
                          <span
                            className="pill pill-ink k-win"
                            style={{
                              animationDelay: "900ms",
                              animationDuration: "2800ms",
                            }}
                          >
                            <span className="pulse pw" />
                            Running now
                          </span>
                          <span
                            className="pill pill-ok k-pop"
                            style={{ animationDelay: "3700ms" }}
                          >
                            <IconCheck />
                            Done 7:02 AM
                          </span>
                        </span>
                        <span
                          className="snote k-in"
                          style={{ animationDelay: "3900ms" }}
                        >
                          3 notices found
                        </span>
                      </span>
                      <span className="sbar">
                        <span
                          className="k-dx"
                          style={{
                            animationDelay: "900ms",
                            animationDuration: "2800ms",
                          }}
                        />
                      </span>
                    </div>
                    <div className="srow">
                      <span className="tic">
                        <IconClock />
                      </span>
                      <span className="tmain">
                        <b>Technical SEO audit</b>
                        <span>Every Monday 8:00 AM</span>
                      </span>
                      <span className="sright">
                        <span className="pill">Next: Mon 8:00 AM</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pane" data-pane="ch" data-i="5" hidden={chIndex !== 5}>
              <div
                className="win chv term"
                data-zoom="ch"
                role="img"
                aria-label="A terminal: one API call starts the rate-locks workflow, the run is queued and a run.completed webhook arrives"
              >
                <div className="term-bar">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="ctitle">Terminal</span>
                  <span />
                </div>
                <div
                  className="term-body k-loop"
                  style={{ animationDuration: "8000ms" }}
                >
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "300ms",
                      animationDuration: "1300ms",
                      animationTimingFunction: "steps(51, end)",
                    }}
                  >
                    <span className="t-p">$</span> curl -X POST
                    https://api.yourbrand.ai/v1/runs \
                  </span>
                  <span
                    className="tl ind2 k-type"
                    style={{
                      animationDelay: "1650ms",
                      animationDuration: "1250ms",
                      animationTimingFunction: "steps(49, end)",
                    }}
                  >
                    -d &apos;<span>{"{"}</span>&quot;workflow&quot;:&quot;rate-locks&quot;,&quot;input&quot;:
                    <span>{"{"}</span>&quot;loans&quot;:4<span>{"}"}</span>
                    <span>{"}"}</span>&apos;
                  </span>
                  <span className="t-gap" />
                  <span className="tl k-in" style={{ animationDelay: "3200ms" }}>
                    <span>{"{"}</span>
                  </span>
                  <span
                    className="tl ind2 k-in"
                    style={{ animationDelay: "3300ms" }}
                  >
                    &quot;id&quot;: &quot;run_7Hq2xK&quot;,
                  </span>
                  <span
                    className="tl ind2 k-in"
                    style={{ animationDelay: "3400ms" }}
                  >
                    &quot;workflow&quot;: &quot;rate-locks&quot;,
                  </span>
                  <span
                    className="tl ind2 k-in"
                    style={{ animationDelay: "3500ms" }}
                  >
                    &quot;status&quot;: &quot;queued&quot;
                  </span>
                  <span className="tl k-in" style={{ animationDelay: "3600ms" }}>
                    <span>{"}"}</span>
                  </span>
                  <span className="t-gap" />
                  <span
                    className="tl t-ev k-rise"
                    style={{ animationDelay: "4700ms" }}
                  >
                    <i />
                    webhook received: run.completed
                    <span className="t-dim">8:21:07</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ch-copy">
          <div className="ch-copy-t">
            {CHANNEL_COPY.map((item, idx) => (
              <div
                key={item.title}
                className="pane"
                data-pane="ch"
                data-i={idx}
                hidden={chIndex !== idx}
              >
                <h3 className="disp h4">{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <a className="btn btn-p" href="#book-a-demo">
            Book a demo
          </a>
        </div>
      </div>
    </section>
  );
}
