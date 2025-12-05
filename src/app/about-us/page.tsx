import Image from "next/image";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Section 1: Header & Organization Description */}
                <section className="flex flex-col items-center text-center space-y-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-black uppercase tracking-wide">
                        About Us
                    </h1>

                    {/* Logo Placeholder */}
                    <div className="relative w-48 h-48 mb-4">
                        <img src="/logo.png" alt="PDE Logo" className="w-full h-full object-contain" />
                    </div>

                    {/* Description Container */}
                    <div className="w-full bg-[#9caea4] rounded-xl p-8 md:p-12 text-white shadow-md">
                        <div className="max-w-3xl mx-auto space-y-4 text-justify md:text-center leading-relaxed">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Vision & Mission */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="border-4 border-blue-400 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl font-bold text-gray-900 uppercase">
                            Vision
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                To become a leading research laboratory in product development and ergonomics, fostering innovation that improves human well-being and productivity.
                            </p>
                            <p>
                                We aim to bridge the gap between theoretical knowledge and practical application through cutting-edge research and industry collaboration.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-gray-200 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl font-bold text-gray-900 uppercase">
                            Mission
                        </h2>
                        <ul className="text-gray-700 leading-relaxed space-y-3 list-disc list-inside text-left w-full max-w-sm mx-auto">
                            <li>Conduct high-quality research in ergonomics and design.</li>
                            <li>Develop sustainable product solutions for local industries.</li>
                            <li>Educate the next generation of industrial engineers and designers.</li>
                            <li>Collaborate with global partners to share knowledge and resources.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 3: Our Collaboration */}
                <section className="space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 uppercase">
                        Our Collaboration
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="h-32 w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-500 font-medium hover:bg-gray-400 transition-colors"
                            >
                                Partner Logo {item}
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
