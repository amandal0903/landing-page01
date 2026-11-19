"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";

const FAQS = [
  {
    q: "What is an AI employee?",
    a: "An AI agent that does a defined job in your software, the way a trained person would. It signs in, reads the screen, clicks, types, downloads and checks, then reports back with the finished work.",
  },
  {
    q: "Do we need APIs or an integration project?",
    a: "No. Reflex uses the same screens your team uses. If your team does it on a computer, Reflex can do it.",
  },
  {
    q: "What happens when a website changes?",
    a: "Small changes are handled on their own. Bigger ones are recovered, and a proposed fix waits for your team's approval.",
  },
  {
    q: "How often does it get things wrong?",
    a: "Routine cases run on their own. When a case falls outside the rules, or Reflex is not confident, it stops and sends the case to a person with the run attached.",
  },
  {
    q: "How long until it is live?",
    a: "Most workflows are live in hours.",
  },
  {
    q: "Will this replace my team?",
    a: "It takes the repetitive work off their desks. Your people keep the decisions, the exceptions and the customer conversations.",
  },
] as const;

export function FaqSection() {
  const { faq, pickFaq } = useDemoRuntime();

  return (
    <section
      id="faq"
      aria-labelledby="faq-h"
      style={{
        padding: "clamp(72px,8vw,112px) 0 clamp(112px,12vw,168px)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
        }}
      >
        <h2
          id="faq-h"
          className="serif reveal"
          style={{
            fontSize: "clamp(36px,4.3vw,58px)",
            fontWeight: 400,
            lineHeight: 1.06,
            letterSpacing: "-.016em",
          }}
        >
          <span style={{ display: "block" }}>Questions teams</span>
          <span style={{ display: "block", color: "#82817A" }}>ask first.</span>
        </h2>

        <div
          className="reveal"
          style={{
            marginTop: "clamp(40px,5vw,60px)",
            borderBottom: "1px solid rgba(31,30,29,.12)",
          }}
        >
          {FAQS.map((item, idx) => {
            const expanded = faq === idx;
            return (
              <div
                key={item.q}
                style={{ borderTop: "1px solid rgba(31,30,29,.12)" }}
              >
                <h3 className="acc-h" style={{ margin: 0 }}>
                  <button
                    className="acc-btn"
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`faq-a${idx}`}
                    onClick={() => pickFaq(idx)}
                    style={{ minHeight: 84, padding: "24px 2px" }}
                  >
                    <span
                      className="serif"
                      style={{
                        fontSize: "clamp(20px,1.9vw,25px)",
                        fontWeight: 400,
                        lineHeight: 1.3,
                        letterSpacing: "-.006em",
                      }}
                    >
                      {item.q}
                    </span>
                    <span className="acc-ico" aria-hidden="true">
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        style={{ flex: "none", width: 14, height: 14 }}
                      >
                        <path d="M8 3v10M3 8h10" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  className="acc-body"
                  id={`faq-a${idx}`}
                  role="region"
                  aria-hidden={!expanded}
                >
                  <div>
                    <p
                      style={{
                        maxWidth: 760,
                        padding: "0 64px 28px 2px",
                        fontSize: 17,
                        lineHeight: 1.65,
                        color: "#5E5D59",
                        textWrap: "pretty",
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
