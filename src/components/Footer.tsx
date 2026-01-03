import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#2E5843] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-start space-y-8">

                    {/* Text Section (Now at Top) */}
                    <div className="w-full text-left">
                        <p className="text-white text-xl leading-relaxed max-w-4xl font-extrabold">
                            Product Development and Ergonomics Research Laboratory
                            <br className="hidden md:block" />
Faculty of Industrial Engineering, Telkom University                        </p>
                    </div>

                    {/* Logo and Designed By */}
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="relative w-32 h-32 mb-2">
                            <img src="/logo.png" alt="PDE Logo" className="w-full h-full object-contain" />
                        </div>
                        <p className="text-white text-sm font-medium">
                            Designed By : Gemini Capstone Team
                        </p>
                    </div>

                    <div className="w-full text-center text-white/60 text-xs border-t border-white/20 pt-4">
                        &copy; {new Date().getFullYear()} PDE Research Laboratory. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
