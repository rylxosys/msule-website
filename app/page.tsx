// app/page.tsx
import { CTABanner } from "@/components/sections/CtaBanner";
import { FAQ } from "@/components/sections/Faq";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonals";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyMsule } from "@/components/sections/WhyMsule";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <FeaturedProjects />
      <Industries />
      <WhyMsule />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </main>
  );
}
