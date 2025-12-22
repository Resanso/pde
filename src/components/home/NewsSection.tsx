import Link from "next/link";

type Article = {
    id: string
    title: string
    content: string
    scheduled_at: string | null
    created_at: string
    image_url: string | null
}

export function NewsSection({ articles }: { articles: Article[] }) {
    
    // If no articles, maybe show placeholder or nothing? 
    // Let's show existing placeholders if empty to not break layout?
    // User said "replace dummy", so let's just show real data.
    // If empty, show message.
    
    const displayArticles = articles.length > 0 ? articles : []

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase">
                    News Article
                </h2>

                {displayArticles.length === 0 ? (
                    <p className="text-center text-gray-500">No news articles yet.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {displayArticles.map((item) => (
                            <div key={item.id} className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden p-4">
                                {/* Image Placeholder */}
                                <div className="aspect-video bg-gray-200 w-full rounded-md mb-4 flex items-center justify-center text-gray-400 overflow-hidden relative">
                                    {item.image_url ? (
                                        <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                                    ) : (
                                        <span>Image</span>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow items-center text-center">
                                    <h3 className="text-xl font-bold text-gray-800 mb-6 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <div className="mt-auto">
                                        <Link 
                                            href={`/news/${item.id}`}
                                            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium transition-colors inline-block"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

