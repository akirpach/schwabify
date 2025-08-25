import {
  Navbar,
  Hero,
  Template,
  FAQ,
  Testimonials,
  CTA,
  Footer,
} from "@/components";
import { Pricing } from "@/components/sections/pricing";


export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Template />
      <Pricing />
      <FAQ />
      {/* <Testimonials /> */}
      {/* <CTA /> */}
      <Footer />
    </div>
  );
}
