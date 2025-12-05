import { notFound } from "next/navigation";
import { lecturers } from "@/data/lecturers";

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    return lecturers.map((lecturer) => ({
        id: lecturer.id,
    }));
}

export default async function LecturerDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const lecturer = lecturers.find((l) => l.id === id);

    if (!lecturer) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pt-24 pb-16 px-4">
            <div className="max-w-6xl mx-auto border-4 border-[#3b82f6] p-1"> {/* Outer Blue Border */}
                <div className="flex flex-col md:flex-row min-h-[600px] h-full">

                    {/* Left Column: Sidebar (1 col) */}
                    <div className="md:w-1/3 p-8 flex flex-col items-center text-center">
                        {/* Photo */}
                        <div className="w-56 h-56 bg-white rounded-full mb-8 flex items-center justify-center overflow-hidden border-4 border-gray-100 shadow-sm">
                            {lecturer.image ? (
                                <img
                                    src={lecturer.image}
                                    alt={lecturer.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-4xl text-gray-300">📷</span>
                            )}
                        </div>

                        <h1 className="text-xl font-bold text-gray-900 mb-8">
                            {lecturer.name}
                        </h1>

                        {/* Social Media */}
                        <div className="mt-4">
                            <h3 className="text-sm font-bold text-black mb-2">
                                Media Social
                            </h3>
                            <div className="flex justify-center items-center gap-2">
                                <div className="w-6 h-6 bg-[#0077b5] rounded text-white flex items-center justify-center font-bold text-xs">in</div>
                                <span className="text-sm text-gray-800 font-medium">xxx</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Information (2 cols) */}
                    <div className="md:w-2/3 p-8 md:pl-12 flex flex-col justify-center space-y-12">

                        {/* Research Focus */}
                        <div className="text-center w-full">
                            <h2 className="text-lg font-bold text-black mb-2">
                                Research Focus
                            </h2>
                            <ul className="space-y-0 w-full">
                                {lecturer.details.researchFocus.map((item, index) => (
                                    <li key={index} className="py-2 border-b border-gray-400 text-gray-800 text-sm">
                                        {item}
                                    </li>
                                ))}
                                {/* Add extra lines if needed to match look */}
                                <li className="py-4 border-b border-gray-400"></li>
                            </ul>
                        </div>

                        {/* Publication */}
                        <div className="text-center w-full">
                            <h2 className="text-lg font-bold text-black mb-2">
                                Publication
                            </h2>
                            <ul className="space-y-0 w-full">
                                {lecturer.details.publications.map((item, index) => (
                                    <li key={index} className="py-2 border-b border-gray-400 text-gray-800 text-sm">
                                        {item}
                                    </li>
                                ))}
                                <li className="py-4 border-b border-gray-400"></li>
                            </ul>
                        </div>

                        {/* Achievement */}
                        <div className="text-center w-full">
                            <h2 className="text-lg font-bold text-black mb-2">
                                Achievement
                            </h2>
                            <ul className="space-y-0 w-full">
                                {lecturer.details.achievements.length > 0 ? (
                                    lecturer.details.achievements.map((item, index) => (
                                        <li key={index} className="py-2 border-b border-gray-400 text-gray-800 text-sm">
                                            {item}
                                        </li>
                                    ))
                                ) : (
                                    <li className="py-2 border-b border-gray-400 text-gray-500 italic text-sm">
                                        -
                                    </li>
                                )}
                                <li className="py-4 border-b border-gray-400"></li>
                                <li className="py-4 border-b border-gray-400"></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    );
}
