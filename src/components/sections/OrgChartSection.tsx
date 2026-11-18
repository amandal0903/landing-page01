"use client";

import React, { useCallback } from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { Cursor } from "@/components/ui/Cursor";
import {
  IconArrowRight,
  IconCheck,
  IconGrip,
  IconSpinner,
} from "@/components/ui/Icons";

export function OrgChartSection() {
  const { phases, paused, registerScene } = useDemoRuntime();

  const orgRef = useCallback(
    (el: HTMLDivElement | null) => {
      registerScene("org", el);
    },
    [registerScene]
  );

  return (
    <section className="sec" id="org">
      <div className="wrap">
        <div className="intro">
          <p className="eyebrow">Org chart</p>
          <h2 className="disp h2">
            <span className="ln">Hire AI employees for every team.</span>
            <span className="ln2">They work across your org.</span>
          </h2>
          <p className="lead">
            Every manager can have AI employees of their own. Delegate a step to
            a person or an AI employee, and they can pass work to another
            team&apos;s.
          </p>
        </div>

        <div
          ref={orgRef}
          className={`org ${phases.org}${paused.org ? " is-paused" : ""}`}
          data-root="org"
          data-scene="org"
          role="img"
          aria-label="An org chart of people and AI employees across finance, web and engineering. Dev hands the Check each page step to YourBrand, which checks 14 pages and asks Atlas to open three tickets"
        >
          <div className="org-top">
            <div className="oc oc-top">
              <div className="oc-r1">
                <span className="av s32">PS</span>
                <span className="oc-nm">
                  <b>Priya Shah</b>
                  <span>COO</span>
                </span>
                <span className="pill pill-line">Workspace admin</span>
              </div>
            </div>
          </div>

          <div className="org-links" aria-hidden="true">
            <span className="ol-trunk" />
            <span className="ol-bar" />
          </div>

          <div className="org-cols">
            <div className="ocol">
              <span className="ol-stub" />
              <div className="oc oc-m">
                <div className="oc-r1">
                  <span className="av s32">AR</span>
                  <span className="oc-nm">
                    <b>Ana Ruiz</b>
                    <span>AP Manager</span>
                  </span>
                </div>
              </div>
              <span className="olink" />
              <div className="oc">
                <div className="oc-r1">
                  <span className="ai s32">I</span>
                  <span className="oc-nm">
                    <b>
                      Iris<span className="tag">AI</span>
                    </b>
                    <span>Invoices</span>
                  </span>
                </div>
                <div className="oc-r2">
                  <span className="oc-st">
                    <IconCheck />
                    42 invoices posted today
                  </span>
                </div>
              </div>
              <span className="olink" />
              <div className="oc">
                <div className="oc-r1">
                  <span className="ai s32">J</span>
                  <span className="oc-nm">
                    <b>
                      Juno<span className="tag">AI</span>
                    </b>
                    <span>Vendor replies</span>
                  </span>
                </div>
                <div className="oc-r2">
                  <span className="oc-st">
                    <span className="pulse" />
                    Answering 6 vendors
                  </span>
                </div>
              </div>
            </div>

            <div className="ocol">
              <span className="ol-stub" />
              <div className="oc oc-m">
                <div className="oc-r1">
                  <span className="av s32">MC</span>
                  <span className="oc-nm">
                    <b>Maya Chen</b>
                    <span>SEO Lead</span>
                  </span>
                </div>
              </div>
              <span className="olink" />
              <div className="oc">
                <div className="oc-r1">
                  <span className="av s32">DP</span>
                  <span className="oc-nm">
                    <b>Dev Patel</b>
                    <span>SEO Analyst</span>
                  </span>
                </div>
                <div className="oc-r2">
                  <span
                    className="stepchip k-out"
                    style={{ animationDelay: "1350ms" }}
                  >
                    <IconGrip />
                    Check each page
                  </span>
                  <span
                    className="ghostslot k-win"
                    style={{
                      animationDelay: "1350ms",
                      animationDuration: "1250ms",
                    }}
                  />
                  <span
                    className="oc-st k-in"
                    style={{ animationDelay: "2600ms" }}
                  >
                    Handed ‘Check each page’ to YourBrand
                  </span>
                </div>
              </div>
              <span className="olink olink-d">
                <span className="k-dy" style={{ animationDelay: "2500ms" }} />
              </span>
              <div className="oc">
                <span
                  className="wash k-win"
                  style={{
                    animationDelay: "3000ms",
                    animationDuration: "1900ms",
                  }}
                />
                <div className="oc-r1">
                  <span className="ai s32">Y</span>
                  <span className="oc-nm">
                    <b>
                      YourBrand<span className="tag">AI</span>
                    </b>
                    <span>SEO checks</span>
                  </span>
                </div>
                <div className="oc-r2">
                  <span
                    className="stepchip k-win"
                    style={{
                      animationDelay: "2500ms",
                      animationDuration: "600ms",
                    }}
                  >
                    <IconGrip />
                    Check each page
                  </span>
                  <span
                    className="oc-st k-win"
                    style={{
                      animationDelay: "3100ms",
                      animationDuration: "600ms",
                    }}
                  >
                    <IconSpinner />
                    Checking pages…
                  </span>
                  <span
                    className="oc-st k-win"
                    style={{
                      animationDelay: "3700ms",
                      animationDuration: "600ms",
                    }}
                  >
                    <IconSpinner />
                    Checked 9 pages
                  </span>
                  <span
                    className="oc-st k-win"
                    style={{
                      animationDelay: "4300ms",
                      animationDuration: "500ms",
                    }}
                  >
                    <IconSpinner />
                    Checked 12 pages
                  </span>
                  <span
                    className="oc-st k-in"
                    style={{ animationDelay: "4800ms" }}
                  >
                    <IconCheck />
                    Checked 14 pages, found 3 issues
                  </span>
                </div>
              </div>
              <span className="stepchip ghost">
                <IconGrip />
                Check each page
              </span>
              <span
                className="rip"
                style={{ left: "123px", top: "185px", animationDelay: "1300ms" }}
              />
              <span
                className="rip"
                style={{ left: "123px", top: "301px", animationDelay: "2450ms" }}
              />
              <Cursor
                className="cur-dev"
                initialTransform="translate(216px, 330px)"
                human={{ initials: "DP", name: "Dev Patel" }}
              />
            </div>

            <div className="ocol">
              <span className="ol-stub" />
              <div className="oc oc-m">
                <div className="oc-r1">
                  <span className="av s32">LP</span>
                  <span className="oc-nm">
                    <b>Lena Park</b>
                    <span>Engineering Manager</span>
                  </span>
                </div>
              </div>
              <span className="olink" />
              <div className="oc">
                <div className="oc-r1">
                  <span className="ai s32">A</span>
                  <span className="oc-nm">
                    <b>
                      Atlas<span className="tag">AI</span>
                    </b>
                    <span>Tickets</span>
                  </span>
                </div>
                <div className="oc-r2">
                  <span
                    className="oc-st k-in"
                    style={{ animationDelay: "7900ms" }}
                  >
                    <IconCheck />
                    Opened 3 tickets
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="hand">
            <p className="hand-h">Between AI employees</p>
            <div
              className="hand-grid k-loop"
              style={{ animationDuration: "15000ms" }}
            >
              <div className="hc k-rise" style={{ animationDelay: "5200ms" }}>
                <div className="hc-h">
                  <span className="ai s20">Y</span>
                  <b>YourBrand</b>
                  <IconArrowRight />
                  <span className="ai s20">A</span>
                  <b>Atlas</b>
                </div>
                <p className="hc-t">
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "5500ms",
                      animationDuration: "650ms",
                      animationTimingFunction: "steps(25, end)",
                    }}
                  >
                    Open a ticket per fix for
                  </span>
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "6150ms",
                      animationDuration: "650ms",
                      animationTimingFunction: "steps(25, end)",
                    }}
                  >
                    the 3 issues on /pricing.
                  </span>
                </p>
              </div>

              <div className="hc k-rise" style={{ animationDelay: "7100ms" }}>
                <div className="hc-h">
                  <span className="ai s20">A</span>
                  <b>Atlas</b>
                  <IconArrowRight />
                  <span className="ai s20">Y</span>
                  <b>YourBrand</b>
                </div>
                <p className="hc-t">
                  Opened{" "}
                  <span className="tk k-pop" style={{ animationDelay: "7400ms" }}>
                    ENG-212
                  </span>
                  ,{" "}
                  <span className="tk k-pop" style={{ animationDelay: "7600ms" }}>
                    ENG-213
                  </span>{" "}
                  and{" "}
                  <span className="tk k-pop" style={{ animationDelay: "7800ms" }}>
                    ENG-214
                  </span>
                  .
                </p>
              </div>

              <div className="hc k-rise" style={{ animationDelay: "9000ms" }}>
                <div className="hc-h">
                  <span className="ai s20">I</span>
                  <b>Iris</b>
                  <IconArrowRight />
                  <span className="ai s20">J</span>
                  <b>Juno</b>
                </div>
                <p className="hc-t">
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "9300ms",
                      animationDuration: "700ms",
                      animationTimingFunction: "steps(28, end)",
                    }}
                  >
                    Invoice 4471 from Acme is on
                  </span>
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "10000ms",
                      animationDuration: "600ms",
                      animationTimingFunction: "steps(24, end)",
                    }}
                  >
                    hold. Let them know why.
                  </span>
                </p>
              </div>

              <div className="hc k-rise" style={{ animationDelay: "11000ms" }}>
                <div className="hc-h">
                  <span className="ai s20">J</span>
                  <b>Juno</b>
                  <IconArrowRight />
                  <span className="ai s20">I</span>
                  <b>Iris</b>
                </div>
                <p className="hc-t">
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "11300ms",
                      animationDuration: "700ms",
                      animationTimingFunction: "steps(28, end)",
                    }}
                  >
                    Told Acme. They&apos;ll resend it
                  </span>
                  <span
                    className="tl k-type"
                    style={{
                      animationDelay: "12000ms",
                      animationDuration: "260ms",
                      animationTimingFunction: "steps(10, end)",
                    }}
                  >
                    by Friday.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <p className="org-note">
            Delegating shares that step and nothing else. Each AI employee works
            under its manager&apos;s name.
          </p>
        </div>
      </div>
    </section>
  );
}
