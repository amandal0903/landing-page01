import React from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export function FinalCtaSection() {
  return (
    <section className="cta-sec" id="book-a-demo">
      <div className="wrap">
        <div className="cta-panel gridbg">
          <BrandMark />
          <h2 className="disp h2">
            <span className="ln">Start with one workflow.</span>
            <span className="ln2">Scale across the enterprise.</span>
          </h2>
          <p className="lead">
            See an AI employee run a process you choose, with an estimate of the
            time and cost it would save.
          </p>
          <div className="cta-row">
            <a className="btn btn-p" href="#book-a-demo">
              Book a demo
            </a>
            <a className="btn btn-s" href="#book-a-demo">
              Get a workflow assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
