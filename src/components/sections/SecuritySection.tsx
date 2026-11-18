import React from "react";
import { IconCheck } from "@/components/ui/Icons";

const BADGES = [
  { name: "SOC 2", status: "Audited", detail: "Type I" },
  { name: "ISO", status: "Certified", detail: "27001:2022" },
  { name: "HIPAA", status: "Aligned", detail: "BAA available" },
  { name: "GDPR", status: "Compliant", detail: "DPA available" },
] as const;

export function SecuritySection() {
  return (
    <section className="sec" id="security">
      <div className="wrap">
        <div className="intro">
          <h2 className="disp h2">
            <span className="ln">Built for teams that</span>
            <span className="ln2">answer to auditors.</span>
          </h2>
          <p className="lead">
            Credentials stay in an encrypted vault and never reach the AI model.
            Every run is logged and replayable.
          </p>
          <a className="tlink" href="#book-a-demo">
            Talk to our security team
          </a>
        </div>
        <div className="badges">
          {BADGES.map((badge) => (
            <div key={badge.name} className="badge">
              <p className="b-n">{badge.name}</p>
              <p className="b-s">
                <IconCheck />
                {badge.status}
              </p>
              <p className="b-d">{badge.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
