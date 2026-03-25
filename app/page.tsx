import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsDivider from "@/components/StatsDivider";
import ManifestoStrip from "@/components/ManifestoStrip";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import AntiPortfolio from "@/components/AntiPortfolio";
import TechStack from "@/components/TechStack";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <StatsDivider />
        <ManifestoStrip />
        <Services />
        <Projects />
        <AntiPortfolio />
        <TechStack />
        <HowItWorks />
        <Testimonials />
        <About />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
