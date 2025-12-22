import Image from "next/image";

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide text-center mb-16">
                    Research
                </h1>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col h-full space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900">TITLE</h2>

                        {/* Placeholder Text Lines */}
                        <div className="space-y-3 flex-grow">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-300 rounded w-[95%]"></div>
                            <div className="h-2 bg-gray-300 rounded w-[90%]"></div>
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-300 rounded w-[85%]"></div>
                            <div className="h-2 bg-gray-300 rounded w-[92%]"></div>
                        </div>

                        <div className="space-y-3 mt-4">
                            <div className="h-2 bg-gray-300 rounded w-full"></div>
                            <div className="h-2 bg-gray-300 rounded w-[98%]"></div>
                            <div className="h-2 bg-gray-300 rounded w-[88%]"></div>
                        </div>

                        {/* Link at the bottom */}
                        <div className="pt-8 mt-auto">
                            <a href="#" className="text-blue-600 hover:underline font-medium">
                                Link Published : bit.ly/xxxx
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="flex flex-col gap-6">
                        <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm">
                            <Image
                                src="/research1.jpeg"
                                alt="Research Image 1"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full aspect-[4/3] relative rounded-lg overflow-hidden shadow-sm">
                            <Image
                                src="/research2.jpeg"
                                alt="Research Image 2"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
