// page.js

import { CallToActionSection } from "@/components/CalltoAction";
import {ContributeSection} from "@/components/Contribute";
import { FeaturesSection } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";

export default function Home() {

  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ContributeSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
