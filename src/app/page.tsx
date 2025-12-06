import { HeroSection } from "@/components/home/HeroSection";
import { HighlightSection } from "@/components/home/HighlightSection";
import { NewsSection } from "@/components/home/NewsSection";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
    const supabase = await createClient();
    const { data: articles } = await supabase
        .from("articles")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

    return (
        <main className="flex flex-col min-h-screen">
            <HeroSection />
            <HighlightSection />
            <NewsSection articles={articles || []} />
        </main>
    );
}
