"use client";

import React, { useCallback } from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { GridTiles } from "@/components/ui/GridTiles";
import { Cursor } from "@/components/ui/Cursor";
import { BrandLogo } from "@/components/ui/BrandLogo";
import {
  IconArrowUp,
  IconCheck,
  IconClock,
  IconMail,
  IconSpinner,
} from "@/components/ui/Icons";

const HOW_TABS = [
  {
    num: "1",
    title: "Teach Reflex",
    sub: "Show it how, once.",
  },
  {
    num: "2",
    title: "Watch it learn",
    sub: "It tries it, then saves the SOP.",
  },
  {
    num: "3",
    title: "Set a trigger",
    sub: "Set it once. It runs on its own.",
  },
] as const;

export function HowItWorksSection() {
  const { phases, paused, howIndex, howAuto, selectHow, registerScene, registerFit } =
    useDemoRuntime();

  const stageRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerScene("how", el);
      registerFit("how", el, 700);
    },
    [registerScene, registerFit]
  );

  return (
    <section className="sec" id="how">
      <div className="wrap">
        <div className="intro">
          <p className="eyebrow">How it works</p>
          <h2 className="disp h2">
            <span className="ln">Teach it. Watch it learn.</span>
            <span className="ln2">Trigger it.</span>
          </h2>
          <p className="lead">
            Show Reflex how once, watch it get it right, and start it from
            wherever your team works.
          </p>
        </div>
        <div
          className={`how-grid ${phases.how}${howAuto ? " auto" : ""}${
            paused.how ? " is-paused" : ""
          }`}
          data-root="how"
        >
          <div className="how-tabs">
            {HOW_TABS.map((tab, idx) => {
              const on = howIndex === idx;
              return (
                <button
                  key={tab.num}
                  type="button"
                  className={`how-tab${on ? " on" : ""}`}
                  aria-pressed={on}
                  data-how={idx}
                  onClick={() => selectHow(idx)}
                >
                  <span className="how-num">{tab.num}</span>
                  <span className="how-tx">
                    <span className="how-ti">{tab.title}</span>
                    <span className="how-su">{tab.sub}</span>
                  </span>
                  <span className="how-bar">
                    <span className="how-fill" />
                  </span>
                </button>
              );
            })}
          </div>
          <div
            ref={stageRef}
            className="stage gridbg how-stage"
            data-scene="how"
            data-fit="how"
            data-fit-w="700"
          >
            <GridTiles />

            <div className="pane" data-pane="how" data-i="0" hidden={howIndex !== 0}>
              <div
                className="win"
                style={{ width: 700 }}
                data-zoom="how"
                role="img"
                aria-label="A chat where someone teaches Reflex a technical SEO audit and it tries the steps on three pages"
              >
                <div className="chrome">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="ctitle">New AI employee</span>
                  <span />
                </div>
                <div className="wb" style={{ height: 396 }}>
                  <div className="fill k-loop" style={{ animationDuration: "8000ms" }}>
                    <div className="ahead">
                      <span className="ai">R</span>
                      <b>Reflex</b>
                      <span className="gr">New AI employee</span>
                      <span className="pill">Web</span>
                    </div>
                    <div className="chat">
                      <div className="sysline k-in" style={{ animationDelay: "150ms" }}>
                        <span>Reflex joined your team</span>
                        <span className="gr">agent@inbox.reflex.ai</span>
                      </div>
                      <div className="bub-me k-rise" style={{ animationDelay: "2950ms" }}>
                        Open each page. Check the title, meta description, canonical tag
                        and load time. Flag anything missing or slower than 3 seconds.
                      </div>
                      <div className="arow">
                        <span className="ai s24">R</span>
                        <div className="aslot">
                          <span
                            className="dots3 k-win"
                            style={{
                              animationDelay: "3150ms",
                              animationDuration: "750ms",
                            }}
                          >
                            <span />
                            <span />
                            <span />
                          </span>
                          <div
                            className="bub-ai k-rise"
                            style={{ animationDelay: "3900ms" }}
                          >
                            Got it. Let me try that on your pricing pages.
                          </div>
                        </div>
                      </div>
                      <div className="prog k-in" style={{ animationDelay: "4300ms" }}>
                        <span>Trying it on</span>
                        <span className="pill pill-line pp">
                          /pricing
                          <span
                            className="pchk k-pop"
                            style={{ animationDelay: "4600ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="pill pill-line pp">
                          /plans
                          <span
                            className="pchk k-pop"
                            style={{ animationDelay: "4900ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="pill pill-line pp">
                          /enterprise
                          <span
                            className="pchk k-pop"
                            style={{ animationDelay: "5200ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span
                          className="prog-r k-in"
                          style={{ animationDelay: "5500ms" }}
                        >
                          3 of 3 checked
                        </span>
                      </div>
                    </div>
                    <div className="tin">
                      <span className="tin-ph">Teach Reflex…</span>
                      <div
                        className="tin-typed k-out"
                        style={{ animationDelay: "2850ms" }}
                      >
                        <div
                          className="tin-typed-in k-in"
                          style={{
                            animationDelay: "350ms",
                            animationDuration: "60ms",
                          }}
                        >
                          <span
                            className="tl k-type"
                            style={{
                              animationDelay: "400ms",
                              animationDuration: "1500ms",
                              animationTimingFunction: "steps(79, end)",
                            }}
                          >
                            Open each page. Check the title, meta description, canonical
                            tag and load time.
                          </span>
                          <span
                            className="tl k-type"
                            style={{
                              animationDelay: "1900ms",
                              animationDuration: "850ms",
                              animationTimingFunction: "steps(47, end)",
                            }}
                          >
                            Flag anything missing or slower than 3 seconds.
                          </span>
                        </div>
                      </div>
                      <span className="tsend">
                        <IconArrowUp />
                        <span
                          className="rip"
                          style={{ left: "17px", top: "17px", animationDelay: "2800ms" }}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pane" data-pane="how" data-i="1" hidden={howIndex !== 1}>
              <div
                className="win"
                style={{ width: 700 }}
                data-zoom="how"
                role="img"
                aria-label="A five-step process canvas: Reflex runs each step, waits for Maya to approve the report, then saves the SOP"
              >
                <div className="chrome">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="ctitle">Process canvas</span>
                  <span />
                </div>
                <div className="wb" style={{ height: 396 }}>
                  <div className="fill k-loop" style={{ animationDuration: "8500ms" }}>
                    <div className="ahead">
                      <b>Technical SEO audit</b>
                      <span className="gr">Process canvas</span>
                      <span className="owners">
                        <span className="ai s20">R</span>
                        <span>Reflex</span>
                        <span className="av s20">MC</span>
                        <span>Maya Chen</span>
                      </span>
                    </div>
                    <div className="steps">
                      <div className="st iso">
                        <span
                          className="wash k-win"
                          style={{ animationDelay: "300ms", animationDuration: "650ms" }}
                        />
                        <span className="st-ic">
                          <span className="st-n k-out" style={{ animationDelay: "300ms" }}>
                            1
                          </span>
                          <span
                            className="st-run k-win"
                            style={{
                              animationDelay: "300ms",
                              animationDuration: "650ms",
                            }}
                          >
                            <IconSpinner />
                          </span>
                          <span
                            className="st-ok k-pop"
                            style={{ animationDelay: "950ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="st-main">
                          <b>Receive the request</b>
                          <span>An email with the subject “Run SEO audit”</span>
                        </span>
                        <span className="st-own">
                          <span className="ai s20">R</span>Reflex
                        </span>
                      </div>

                      <div className="st iso">
                        <span
                          className="wash k-win"
                          style={{ animationDelay: "950ms", animationDuration: "650ms" }}
                        />
                        <span className="st-ic">
                          <span className="st-n k-out" style={{ animationDelay: "950ms" }}>
                            2
                          </span>
                          <span
                            className="st-run k-win"
                            style={{
                              animationDelay: "950ms",
                              animationDuration: "650ms",
                            }}
                          >
                            <IconSpinner />
                          </span>
                          <span
                            className="st-ok k-pop"
                            style={{ animationDelay: "1600ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="st-main">
                          <b>Crawl the pages</b>
                          <span>Open every page in the browser</span>
                        </span>
                        <span className="st-own">
                          <span className="ai s20">R</span>Reflex
                        </span>
                      </div>

                      <div className="st iso">
                        <span
                          className="wash k-win"
                          style={{
                            animationDelay: "1600ms",
                            animationDuration: "650ms",
                          }}
                        />
                        <span className="st-ic">
                          <span
                            className="st-n k-out"
                            style={{ animationDelay: "1600ms" }}
                          >
                            3
                          </span>
                          <span
                            className="st-run k-win"
                            style={{
                              animationDelay: "1600ms",
                              animationDuration: "650ms",
                            }}
                          >
                            <IconSpinner />
                          </span>
                          <span
                            className="st-ok k-pop"
                            style={{ animationDelay: "2250ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="st-main">
                          <b>Check each page</b>
                          <span>Title, meta description, canonical tag, load time</span>
                        </span>
                        <span className="st-own">
                          <span className="ai s20">R</span>Reflex
                        </span>
                      </div>

                      <div className="st iso">
                        <span className="st-ic">
                          <span
                            className="st-n k-out"
                            style={{ animationDelay: "2250ms" }}
                          >
                            4
                          </span>
                          <span
                            className="st-wait k-win"
                            style={{
                              animationDelay: "2250ms",
                              animationDuration: "1200ms",
                            }}
                          >
                            <IconClock />
                          </span>
                          <span
                            className="st-ok k-pop"
                            style={{ animationDelay: "3450ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="st-main">
                          <b>
                            Approve the report
                            <span className="stk">
                              <span
                                className="pill pill-blue k-win"
                                style={{
                                  animationDelay: "2250ms",
                                  animationDuration: "1200ms",
                                }}
                              >
                                Waiting for Maya
                              </span>
                              <span
                                className="pill pill-ok k-pop"
                                style={{ animationDelay: "3450ms" }}
                              >
                                <IconCheck />
                                Approved
                              </span>
                            </span>
                          </b>
                          <span>Maya signs off before it goes out</span>
                        </span>
                        <span className="st-own">
                          <span className="av s20">MC</span>Maya Chen
                          <span
                            className="st-appr k-win"
                            style={{
                              animationDelay: "2250ms",
                              animationDuration: "1200ms",
                            }}
                          >
                            <span className="apb">Approve</span>
                          </span>
                        </span>
                      </div>

                      <div className="st iso">
                        <span
                          className="wash k-win"
                          style={{
                            animationDelay: "3550ms",
                            animationDuration: "700ms",
                          }}
                        />
                        <span className="st-ic">
                          <span
                            className="st-n k-out"
                            style={{ animationDelay: "3550ms" }}
                          >
                            5
                          </span>
                          <span
                            className="st-run k-win"
                            style={{
                              animationDelay: "3550ms",
                              animationDuration: "700ms",
                            }}
                          >
                            <IconSpinner />
                          </span>
                          <span
                            className="st-ok k-pop"
                            style={{ animationDelay: "4250ms" }}
                          >
                            <IconCheck />
                          </span>
                        </span>
                        <span className="st-main">
                          <b>Send the report</b>
                          <span>Reply with the fixes, one ticket per fix</span>
                        </span>
                        <span className="st-own">
                          <span className="ai s20">R</span>Reflex
                        </span>
                      </div>
                    </div>
                    <div className="twrap">
                      <span
                        className="toast k-rise"
                        style={{ animationDelay: "4500ms" }}
                      >
                        <IconCheck className="ic ic-14" />
                        SOP saved<span className="tv">v1</span>
                      </span>
                    </div>
                    <span
                      className="rip"
                      style={{ left: "536px", top: "260px", animationDelay: "3300ms" }}
                    />
                    <Cursor
                      className="cur-maya"
                      initialTransform="translate(612px, 346px)"
                      human={{ initials: "MC", name: "Maya Chen" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pane" data-pane="how" data-i="2" hidden={howIndex !== 2}>
              <div
                className="win"
                style={{ width: 700 }}
                data-zoom="how"
                role="img"
                aria-label="Three triggers switch on for the SEO audit: an email subject, a Slack mention and a Monday schedule, then the run starts"
              >
                <div className="chrome">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="ctitle">Triggers</span>
                  <span />
                </div>
                <div className="wb" style={{ height: 396 }}>
                  <div className="fill k-loop" style={{ animationDuration: "7500ms" }}>
                    <div className="ahead">
                      <b>Technical SEO audit</b>
                      <span className="gr">Triggers</span>
                      <span className="stkr">
                        <span
                          className="pill k-win"
                          style={{
                            animationDelay: "2300ms",
                            animationDuration: "1600ms",
                          }}
                        >
                          <IconClock />
                          Next run: Mon 8:00 AM
                        </span>
                        <span
                          className="pill pill-ink k-pop"
                          style={{ animationDelay: "3900ms" }}
                        >
                          <span className="pulse pw" />
                          Running now
                        </span>
                      </span>
                    </div>
                    <div className="trg">
                      <div className="tcard iso">
                        <span className="tic">
                          <IconMail />
                        </span>
                        <span className="tmain">
                          <b>Email</b>
                          <span>Subject contains “Run SEO audit”</span>
                        </span>
                        <span className="tsw">
                          <span className="tst">
                            <span
                              className="k-out"
                              style={{ animationDelay: "600ms" }}
                            >
                              Off
                            </span>
                            <span className="k-in" style={{ animationDelay: "600ms" }}>
                              On
                            </span>
                          </span>
                          <span className="tog">
                            <span
                              className="tog-on k-in"
                              style={{
                                animationDelay: "600ms",
                                animationDuration: "220ms",
                              }}
                            />
                            <span
                              className="knob k-knob"
                              style={{ animationDelay: "600ms" }}
                            />
                          </span>
                        </span>
                      </div>

                      <div className="tcard iso">
                        <span className="tic">
                          <BrandLogo domain="slack.com" size={18} />
                        </span>
                        <span className="tmain">
                          <b>Slack</b>
                          <span>Mention in #web-team</span>
                        </span>
                        <span className="tsw">
                          <span className="tst">
                            <span
                              className="k-out"
                              style={{ animationDelay: "1200ms" }}
                            >
                              Off
                            </span>
                            <span className="k-in" style={{ animationDelay: "1200ms" }}>
                              On
                            </span>
                          </span>
                          <span className="tog">
                            <span
                              className="tog-on k-in"
                              style={{
                                animationDelay: "1200ms",
                                animationDuration: "220ms",
                              }}
                            />
                            <span
                              className="knob k-knob"
                              style={{ animationDelay: "1200ms" }}
                            />
                          </span>
                        </span>
                      </div>

                      <div className="tcard iso">
                        <span
                          className="wash k-in"
                          style={{ animationDelay: "3900ms" }}
                        />
                        <span className="tic">
                          <IconClock />
                        </span>
                        <span className="tmain">
                          <b>Schedule</b>
                          <span>Every Monday, 8:00 AM</span>
                        </span>
                        <span className="tsw">
                          <span className="tst">
                            <span
                              className="k-out"
                              style={{ animationDelay: "1800ms" }}
                            >
                              Off
                            </span>
                            <span className="k-in" style={{ animationDelay: "1800ms" }}>
                              On
                            </span>
                          </span>
                          <span className="tog">
                            <span
                              className="tog-on k-in"
                              style={{
                                animationDelay: "1800ms",
                                animationDuration: "220ms",
                              }}
                            />
                            <span
                              className="knob k-knob"
                              style={{ animationDelay: "1800ms" }}
                            />
                          </span>
                        </span>
                        <span className="tbar">
                          <span
                            className="k-dx"
                            style={{
                              animationDelay: "3900ms",
                              animationDuration: "3000ms",
                            }}
                          />
                        </span>
                      </div>
                    </div>
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
