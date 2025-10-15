import HeroSection from "@/components/01-home/HeroSection";
import QuoteSection from "@/components/01-home/QuoteSection";
import PreviewSection from "@/components/01-home/PreviewSection";
import WorkInProgressSection from "@/components/01-home/WorkInProgressSection";
import OverlaySection from "@/components/01-home/OverlaySection";

export default function HomePage() {
  return (
    <>

      <HeroSection />

      <div>

        <QuoteSection />

      </div>

      <div>

        <PreviewSection />

      </div>

      <div>

        <WorkInProgressSection />

      </div>

      <div>

        <OverlaySection />

      </div>

    </>
  );
}
