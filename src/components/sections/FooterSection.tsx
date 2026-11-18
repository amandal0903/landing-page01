import React from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export function FooterSection() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="logo" href="#top">
              <BrandMark />
              <span>Reflex</span>
            </a>
            <p>AI employees for enterprise software.</p>
          </div>
          <nav className="foot-cols" aria-label="Footer">
            <div>
              <p className="foot-h">Platform</p>
              <a href="#how">Overview</a>
              <a href="#top">Benchmarks</a>
              <a href="#security">Security</a>
            </div>
            <div>
              <p className="foot-h">Industries</p>
              <a href="#top">Mortgage and lending</a>
              <a href="#top">Pharma and life sciences</a>
              <a href="#top">Banking and finance</a>
              <a href="#top">Insurance</a>
              <a href="#top">Healthcare operations</a>
              <a href="#top">Logistics</a>
              <a href="#top">Back-office operations</a>
            </div>
            <div>
              <p className="foot-h">Compare</p>
              <a href="#top">vs legacy RPA</a>
              <a href="#top">vs building it yourself</a>
              <a href="#top">vs other browser agents</a>
            </div>
            <div>
              <p className="foot-h">Company</p>
              <a href="#top">Research</a>
              <a href="#top">Careers</a>
              <a href="#book-a-demo">Contact</a>
              <a href="#security">Trust Center</a>
              <a href="#top">LinkedIn</a>
              <a href="#top">X</a>
            </div>
          </nav>
        </div>
        <div className="foot-legal">
          <p>
            <span>© 2026 Reflex, Inc.</span>
            <span>[address]</span>
          </p>
          <div className="foot-links">
            <a href="#top">Privacy</a>
            <a href="#top">Terms</a>
            <a href="#top">Cookies</a>
            <a href="#top">AUP</a>
            <a href="#top">DPA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
