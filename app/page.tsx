import { CompanySnapshot } from "@/components/site/CompanySnapshot";
import { ContactSection } from "@/components/site/ContactSection";
import { DevelopmentStatus } from "@/components/site/DevelopmentStatus";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Partners } from "@/components/site/Partners";
import { PlatformOverview } from "@/components/site/PlatformOverview";
import { UseCases } from "@/components/site/UseCases";
import { WhyItMatters } from "@/components/site/WhyItMatters";

export default function Home() {
  return (
    <div className="site-shell">
      <div className="content">
        <Header />
        <main>
          <Hero />
          <PlatformOverview />
          <WhyItMatters />
          <UseCases />
          <DevelopmentStatus />
          <Partners />
          <CompanySnapshot />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
