import { HeroSection } from "@/components/home/HeroSection";
import { HighlightSection } from "@/components/home/HighlightSection";
import { NewsSection } from "@/components/home/NewsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <HighlightSection />
      <NewsSection />
    </main>
  );
}
