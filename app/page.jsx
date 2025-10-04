import HeroSection from "@/components/home/HeroSection";
import QuoteSection from "@/components/home/QuoteSection";
import PreviewSection from "@/components/home/PreviewSection";
import WorkInProgressSection from "@/components/home/WorkInProgressSection";
import OverlaySection from "@/components/home/OverlaySection";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <div className="bg-white">
        <QuoteSection />
      </div>

      <div className="bg-gray-100">
        <PreviewSection />
      </div>

      <div className="bg-black text-white">
        <WorkInProgressSection />
      </div>

      <div className="bg-white">
        <OverlaySection />
      </div>
    </>
  );
}
