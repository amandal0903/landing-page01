import React from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export function NavbarSection() {
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a className="logo" href="#top">
          <BrandMark />
          <span>Reflex</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          <a href="#how">How it works</a>
          <a href="#systems">Systems</a>
          <a href="#security">Security</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="btn btn-p btn-sm nav-cta" href="#book-a-demo">
          Book a demo
        </a>
      </div>
    </header>
  );
}
