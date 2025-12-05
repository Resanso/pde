import Link from "next/link";

export default function FeedbackPage() {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center gap-16 bg-white pt-24 pb-12">

            {/* Section 1: Buttons */}
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-3xl font-bold uppercase text-black tracking-wider">
                    FEEDBACK
                </h1>

                <div className="flex flex-col gap-6">
                    <Link
                        href="/feedback/form"
                        className="w-80 py-4 bg-gray-300 text-black font-bold text-center rounded-md hover:bg-gray-400 transition-colors duration-200"
                    >
                        FEEDBACK
                    </Link>
                    <Link
                        href="/feedback/qna"
                        className="w-80 py-4 bg-gray-300 text-black font-bold text-center rounded-md hover:bg-gray-400 transition-colors duration-200"
                    >
                        QNA
                    </Link>
                </div>
            </div>

            {/* Section 2: Social Media */}
            <div className="flex flex-col items-center gap-6">
                <h2 className="text-xl font-bold uppercase text-black tracking-wide">
                    OUR SOCIAL MEDIA
                </h2>

                <div className="flex flex-wrap justify-center gap-10">

                    {/* Instagram */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </div>
                        <span className="font-bold text-black group-hover:underline">@pde_lab_telu</span>
                    </a>

                    {/* Email */}
                    <a href="mailto:pde@telkomuniversity.ac.id" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>
                        <span className="font-bold text-black group-hover:underline">pde@telkomuniversity.ac.id</span>
                    </a>

                </div>
            </div>

        </main>
    );
}
