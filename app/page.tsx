import CvBlock from "@/components/CvBlock";
import Hero from "@/components/Hero";
import Masthead from "@/components/Masthead";
import Roster from "@/components/Roster";
import SiteFooter from "@/components/SiteFooter";
import Slate from "@/components/Slate";
import Testimonials from "@/components/Testimonials";
import WorkCards from "@/components/WorkCards";

export default function Home() {
  return (
    <>
      <Masthead />
      <main className="flex-1">
        <Hero />
        <Slate />
        <WorkCards />
        <Testimonials />
        <Roster />
        <CvBlock />
      </main>
      <SiteFooter />
    </>
  );
}
