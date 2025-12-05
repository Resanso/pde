export default function CommunityServicePage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                    Pengabdian Masyarakat
                </h1>

                {/* Sub-Header */}
                <div className="text-center mb-10 space-y-1">
                    <h2 className="text-lg font-semibold text-gray-700 uppercase tracking-wider">TITLE</h2>
                    <p className="text-gray-500 font-medium">Day, Date Month Year</p>
                </div>

                {/* Visual */}
                <div className="w-full aspect-video bg-gray-300 rounded-xl shadow-md mb-12 flex items-center justify-center text-gray-500 text-lg font-medium">
                    Main Visual Placeholder
                </div>

                {/* Body Text Placeholders */}
                <div className="w-full space-y-6 max-w-3xl">
                    <div className="space-y-3">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-[90%]"></div>
                    </div>

                    <div className="space-y-3">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-[95%]"></div>
                    </div>

                    <div className="space-y-3">
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-full"></div>
                        <div className="h-3 bg-gray-200 rounded w-[80%]"></div>
                    </div>
                </div>

            </div>
        </main>
    );
}
