import React from "react";
import { BrandMark } from "@/components/ui/BrandMark";
import { BOOK_DEMO_URL } from "@/lib/constants";

export function NavbarSection() {
  return (
    <header className="nav">
      <nav
        aria-label="Main"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px)",
          height: 72,
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 16,
        }}
      >
        <a
          href="#top"
          aria-label="Reflex home"
          style={{
            justifySelf: "start",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            height: 44,
            color: "#141413",
          }}
        >
          <BrandMark size={26} />
          <span
            className="serif"
            style={{ fontSize: 23, fontWeight: 500, letterSpacing: "-.012em" }}
          >
            Reflex
          </span>
        </a>
        <div
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 2 }}
        >
          <a className="navlink" href="#how">
            How it works
          </a>
          <a className="navlink" href="#systems">
            Systems
          </a>
          <a className="navlink" href="#security">
            Security
          </a>
          <a className="navlink" href="#faq">
            FAQ
          </a>
        </div>
        <div
          style={{
            gridColumn: 3,
            justifySelf: "end",
            display: "flex",
            alignItems: "center",
          }}
        >
          <a
            className="btn btn-dark"
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 44, padding: "0 18px", fontSize: 15 }}
          >
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}
