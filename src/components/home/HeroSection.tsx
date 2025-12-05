import Image from "next/image";

export function HeroSection() {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
            {/* Abstract Background Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-200 to-green-200 rounded-full blur-3xl filter" />
            </div>

            <div className="relative z-10 text-center px-4 w-full min-w-[100vw]">
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1]">
                    <Image
                        src="/banner.png"
                        alt="Welcome To Product Development & Ergonomics Research Laboratory"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
