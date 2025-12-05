export function HighlightSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 uppercase">
                    Today's Highlight
                </h2>

                {/* Slider Mockup */}
                <div className="relative w-full h-96 bg-gray-300 rounded-xl overflow-hidden shadow-inner group">
                    {/* Navigation Arrows */}
                    <div className="absolute inset-y-0 left-4 flex items-center">
                        <button className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 19.5L8.25 12l7.5-7.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute inset-y-0 right-4 flex items-center">
                        <button className="p-2 bg-white/50 hover:bg-white rounded-full transition-colors">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-800"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                    </div>

                    {/* Placeholder Content */}
                    <div className="flex items-center justify-center h-full text-gray-500 font-medium text-lg">
                        Featured Highlight Content
                    </div>
                </div>
            </div>
        </section>
    );
}
