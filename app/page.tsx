import CaseStudy from "@/components/CaseStudy";
import Craft from "@/components/Craft";
import CvBlock from "@/components/CvBlock";
import Hero from "@/components/Hero";
import Masthead from "@/components/Masthead";
import Roster from "@/components/Roster";
import SiteFooter from "@/components/SiteFooter";
import Slate from "@/components/Slate";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Masthead />
      <main className="flex-1">
        <Hero />
        <Slate />
        <CaseStudy />
        <Craft />
        <Testimonials />
        <Roster />
        <CvBlock />
      </main>
      <SiteFooter />
    </>
  );
}
