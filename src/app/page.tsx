import React from "react";
import { DemoProvider } from "@/lib/demo-context";
import { BannerSection } from "@/components/sections/BannerSection";
import { NavbarSection } from "@/components/sections/NavbarSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IndustriesStripSection } from "@/components/sections/IndustriesStripSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ChannelsSection } from "@/components/sections/ChannelsSection";
import { OrgChartSection } from "@/components/sections/OrgChartSection";
import { SystemsSection } from "@/components/sections/SystemsSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <DemoProvider>
      <div
        className="page"
        id="top"
        style={{ "--hi": "#FFE15C" } as React.CSSProperties}
      >
        <BannerSection />
        <NavbarSection />
        <main>
          <HeroSection />
          <IndustriesStripSection />
          <ManifestoSection />
          <HowItWorksSection />
          <ChannelsSection />
          <OrgChartSection />
          <SystemsSection />
          <SecuritySection />
          <FinalCtaSection />
          <FaqSection />
        </main>
        <FooterSection />
      </div>
    </DemoProvider>
  );
}
