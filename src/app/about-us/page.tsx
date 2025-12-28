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
                    <div className="w-full bg-emerald-800 rounded-xl p-8 md:p-12 text-white shadow-md">
                        <div className="max-w-3xl mx-auto space-y-4 text-justify md:text-center leading-relaxed">
                            <p>
                                Product Design & Ergonomics adalah keprofesian di bawah Kelompok Keahlian 1 (KK1) Fakultas Rekayasa Industri - Universitas Telkom yang bergerak dalam bidang pengembangan produk, ergonomi, desain dan testing produk, proses manufaktur, perlindungan produk, dan desain multimedia.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Vision & Mission */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <div className="border-4 border-blue-400 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl font-bold text-gray-900 uppercase">
                            Visi Laboratorium Riset PDE
                        </h2>
                        <div className="text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Menjadi laboratorium riset unggulan di bidang Pengembangan Produk (Product Development) dan Ergonomi (Human Factors) yang berperan aktif dalam pengembangan ilmu pengetahuan dan teknologi berbasis inovasi dan keberlanjutan, serta berkontribusi pada peningkatan kualitas hidup dan daya saing industri nasional.
                            </p>
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-gray-200 rounded-2xl p-8 md:p-10 flex flex-col items-center text-center space-y-6 shadow-sm hover:shadow-md transition-shadow">
                        <h2 className="text-3xl font-bold text-gray-900 uppercase">
                            Misi Laboratorium Riset PDE
                        </h2>
                        <ul className="text-gray-700 leading-relaxed space-y-3 list-disc list-inside text-left w-full mx-auto">
                            <li>Menyelenggarakan kegiatan penelitian yang berfokus pada metodologi perancangan dan pengembangan produk baru (NPD) serta evaluasi dan optimasi sistem kerja berbasis prinsip ergonomi (human factors).</li>
                            <li>Mengembangkan dan menyebarluaskan sains dan teknologi di bidang pemodelan digital, simulasi kinerja produk (CAE), dan analisis interaksi manusia-sistem yang diakui secara nasional dan internasional.</li>
                            <li>Memanfaatkan ilmu pengetahuan, teknologi, dan keahlian di bidang PDE melalui kerja sama dan pengabdian kepada pemerintah, masyarakat, dan industri untuk meningkatkan efektivitas, keamanan, dan kenyamanan produk dan sistem.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 3: Our Collaboration */}
                <section className="space-y-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 uppercase">
                        Our Collaboration
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* PDEV */}
                        <a 
                            href="https://pdev.labs.telkomuniversity.ac.id/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-40 w-full bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-md transition-all duration-300">
                                <div className="relative w-32 h-32">
                                    <Image 
                                        src="/logo-collab/PDEV Laboratory.png" 
                                        alt="PDEV Laboratory" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="font-bold text-gray-800 text-center group-hover:text-emerald-700 transition-colors">
                                PDEV Laboratory
                            </span>
                        </a>

                        {/* APKE */}
                        <a 
                            href="https://apk.labs.telkomuniversity.ac.id/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-40 w-full bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-md transition-all duration-300">
                                <div className="relative w-32 h-32">
                                    <Image 
                                        src="/logo-collab/APKE Laboratory.png" 
                                        alt="APKE Laboratory" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="font-bold text-gray-800 text-center group-hover:text-emerald-700 transition-colors">
                                APKE Laboratory
                            </span>
                        </a>

                        {/* PROSMAN */}
                        <a 
                            href="https://prosman.labs.telkomuniversity.ac.id/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-40 w-full bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-md transition-all duration-300">
                                <div className="relative w-32 h-32">
                                    <Image 
                                        src="/logo-collab/PROSMAN Laboratory.png" 
                                        alt="PROSMAN Laboratory" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="font-bold text-gray-800 text-center group-hover:text-emerald-700 transition-colors">
                                PROSMAN Laboratory
                            </span>
                        </a>

                        {/* SIMBI */}
                        <a 
                            href="https://simbi.labs.telkomuniversity.ac.id/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="h-40 w-full bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 group-hover:shadow-md transition-all duration-300">
                                <div className="relative w-32 h-32">
                                    <Image 
                                        src="/logo-collab/SIMBI Laboratory.png" 
                                        alt="SIMBI Laboratory" 
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="font-bold text-gray-800 text-center group-hover:text-emerald-700 transition-colors">
                                SIMBI Laboratory
                            </span>
                        </a>
                    </div>
                </section>

            </div>
        </main>
    );
}
