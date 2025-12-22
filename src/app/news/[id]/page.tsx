import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type Article = {
    id: string;
    title: string;
    content: string;
    scheduled_at: string | null;
    created_at: string;
    image_url: string | null;
};

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const supabase = await createClient();

    const { data: article, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .single();

    if (error || !article) {
        notFound();
    }

    const typedArticle = article as Article;

    // Format date
    const formattedDate = new Date(typedArticle.created_at).toLocaleDateString(
        "id-ID",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                    Back to Home
                </Link>

                {/* Article Header */}
                <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                    {/* Image */}
                    {typedArticle.image_url && (
                        <div className="relative w-full aspect-video">
                            <Image
                                src={typedArticle.image_url}
                                alt={typedArticle.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-8">
                        {/* Date */}
                        <p className="text-sm text-gray-500 mb-4">
                            {formattedDate}
                        </p>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {typedArticle.title}
                        </h1>

                        {/* Article Content */}
                        <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
                            {typedArticle.content}
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
