"use client";

import React from "react";
import { useDemoRuntime } from "@/lib/demo-context";
import { IconPlus } from "@/components/ui/Icons";

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
  const { faqIndex, toggleFaq } = useDemoRuntime();

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <h2 className="disp h2">
          <span className="ln">Questions teams</span>
          <span className="ln2">ask first.</span>
        </h2>
        <div className="faq-list">
          {FAQS.map((item, idx) => {
            const open = faqIndex === idx;
            return (
              <div key={item.q} className={`faq-item${open ? " open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  data-faq={idx}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{item.q}</span>
                  <IconPlus className="ic faq-x" />
                </button>
                <div className="faq-a">
                  <div className="faq-in">
                    <p>{item.a}</p>
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
