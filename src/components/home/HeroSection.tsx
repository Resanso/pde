export function HeroSection() {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
            {/* Abstract Background Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-green-200 rounded-full blur-3xl filter" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md leading-tight">
                    Welcome To Product Development & Ergonomics Research Laboratory
                </h1>
            </div>
        </section>
    );
}
