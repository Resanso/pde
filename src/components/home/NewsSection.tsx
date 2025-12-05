export function NewsSection() {
    const newsItems = [
        { id: 1, title: "Smart Tips for New Product Innovation" },
        { id: 2, title: "Ergonomics in Modern Workspace Design" },
        { id: 3, title: "Sustainability in Product Lifecycle" },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 uppercase">
                    News Article
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <div key={item.id} className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden p-4">
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-gray-200 w-full rounded-md mb-4 flex items-center justify-center text-gray-400">
                                Image
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow items-center text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 line-clamp-2">
                                    {item.title}
                                </h3>

                                <div className="mt-auto">
                                    <button className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium transition-colors">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
