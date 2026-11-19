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
  return (
    <section
      aria-label="Industries"
      style={{ padding: "0 0 clamp(88px,10vw,148px)" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
        }}
      >
        <div
          className="reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "14px 44px",
            padding: "26px 0",
            borderTop: "1px solid rgba(31,30,29,.1)",
            borderBottom: "1px solid rgba(31,30,29,.1)",
          }}
        >
          <p style={{ flex: "none", fontSize: 14.5, color: "#5E5D59" }}>
            Built for operations teams in
          </p>
          <div className="mq" style={{ flex: "1 1 420px", minWidth: 0 }}>
            <div
              className="mq-track"
              style={{ "--mqd": "52s" } as React.CSSProperties}
            >
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                  paddingRight: 40,
                }}
              >
                {INDUSTRIES.map((label) => (
                  <li
                    key={label}
                    className="serif"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 40,
                      fontSize: 21,
                      color: "#3D3D3A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#B0AEA5",
                      }}
                    />
                  </li>
                ))}
              </ul>
              <ul
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 40,
                  paddingRight: 40,
                }}
              >
                {INDUSTRIES.map((label) => (
                  <li
                    key={label}
                    className="serif"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 40,
                      fontSize: 21,
                      color: "#3D3D3A",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "#B0AEA5",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
