// Assemblage de la landing page
import { AuroraBackground } from "components/AuroraBackground";
import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Features } from "components/Features";
import { Testimonial } from "components/Testimonial";
import { CallToAction } from "components/CallToAction";
import { Footer } from "components/Footer";
import { Weather } from '@/components/Weather';
import { DesignFirst } from '@/components/DesignFirst';

export default function Home() {
  return (
    <>
      <AuroraBackground />
        <div style={{ position: "relative", display: "flex", minHeight: "100vh", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Hero />
          <Features />
            <DesignFirst />
            <Weather />
          <Testimonial />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
}
