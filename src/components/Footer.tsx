export function Footer() {
    return (
        <footer className="bg-[#2E5843] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center md:items-start space-y-8">
                    {/* Logo Placeholder */}
                    <div className="flex flex-col items-center w-full">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mb-4">
                            LOGO
                        </div>
                    </div>

                    <div className="w-full border-t border-white/20 pt-8 text-center md:text-left">
                        <p className="text-white text-sm leading-relaxed max-w-2xl mx-auto md:mx-0 text-center font-medium">
                            Product Development and Ergonomics Research Laboratory
                            <br className="hidden md:block" />
                            Department of Industrial Engineering, Universitas Andalas
                        </p>
                    </div>

                    <div className="w-full text-center text-white/60 text-xs">
                        &copy; {new Date().getFullYear()} PDE Research Laboratory. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
