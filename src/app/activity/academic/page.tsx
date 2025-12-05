export default function AcademicPage() {
    const buttons = [
        "Aplikasi Pendaftaran TA",
        "Timeline Akademik",
        "XXXXXXXXXXX",
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide text-center">
                    Academic
                </h1>

                {/* Buttons Container */}
                <div className="w-full max-w-2xl flex flex-col gap-6">
                    {buttons.map((text, index) => (
                        <button
                            key={index}
                            className="w-full py-4 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                        >
                            {text}
                        </button>
                    ))}
                </div>

            </div>
        </main>
    );
}
