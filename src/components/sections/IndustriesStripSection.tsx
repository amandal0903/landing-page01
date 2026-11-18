import React from "react";

const INDUSTRIES = [
  "Mortgage and lending",
  "Pharma and life sciences",
  "Banking and finance",
  "Insurance",
  "Healthcare operations",
  "Logistics",
  "Back-office operations",
] as const;

export function IndustriesStripSection() {
  const repeated = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <div className="wrap ind-strip">
      <p className="ind-l">Built for operations teams in</p>
      <div className="mq ind-mq">
        <div className="mq-track" style={{ animationDuration: "64s" }}>
          {repeated.map((label, idx) => (
            <span key={idx} className="ind">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
