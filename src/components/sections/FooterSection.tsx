import React from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { BOOK_DEMO_URL } from "@/lib/constants";

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Overview", href: "#how" },
      { label: "Benchmarks", href: "#top" },
      { label: "Security", href: "#security" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Mortgage and lending", href: "#systems" },
      { label: "Pharma and life sciences", href: "#systems" },
      { label: "Banking and finance", href: "#systems" },
      { label: "Insurance", href: "#systems" },
      { label: "Healthcare operations", href: "#systems" },
      { label: "Logistics", href: "#systems" },
      { label: "Back-office operations", href: "#systems" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs legacy RPA", href: "#top" },
      { label: "vs building it yourself", href: "#top" },
      { label: "vs other browser agents", href: "#top" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Research", href: "#top" },
      { label: "Careers", href: "#top" },
      { label: "Contact", href: BOOK_DEMO_URL, external: true },
      { label: "Trust Center", href: "#security" },
      { label: "LinkedIn", href: "#top" },
      { label: "X", href: "#top" },
    ],
  },
] as const;

export function FooterSection() {
  return (
    <footer
      style={{
        background: "#F0EEE6",
        borderTop: "1px solid rgba(31,30,29,.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding:
            "clamp(64px,7vw,96px) clamp(20px,4vw,40px) 36px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "48px 64px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 260px", maxWidth: 340 }}>
            <a
              href="#top"
              aria-label="Reflex home"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                color: "#141413",
              }}
            >
              <BrandMark size={26} style={{ flex: "none" }} />
              <span
                className="serif"
                style={{ fontSize: 23, fontWeight: 500, letterSpacing: "-.012em" }}
              >
                Reflex
              </span>
            </a>
            <p
              style={{
                marginTop: 16,
                fontSize: 15.5,
                lineHeight: 1.55,
                color: "#4D4C48",
              }}
            >
              AI employees for enterprise software.
            </p>
          </div>

          <nav
            aria-label="Footer"
            style={{
              flex: "3 1 560px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
              gap: "32px 28px",
            }}
          >
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.heading}>
                <p style={{ fontSize: 13.5, fontWeight: 600, color: "#141413" }}>
                  {col.heading}
                </p>
                <ul
                  style={{
                    marginTop: 14,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          minHeight: 32,
                          fontSize: 14.5,
                          color: "#3D3D3A",
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          style={{
            marginTop: "clamp(56px,6vw,80px)",
            paddingTop: 24,
            borderTop: "1px solid rgba(31,30,29,.1)",
            display: "flex",
            flexWrap: "wrap",
            gap: "14px 28px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 13.5, color: "#4D4C48" }}>
            © 2026 Reflex, Inc.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px" }}>
            {["Privacy", "Terms", "Cookies", "AUP", "DPA"].map((item) => (
              <a
                key={item}
                href="#top"
                style={{ fontSize: 13.5, color: "#4D4C48" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
