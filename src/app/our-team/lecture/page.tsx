import Link from "next/link";
import { lecturers, Lecturer } from "@/data/lecturers";

export default function OurTeamPage() {
    const headOfLab = lecturers.find(
        (l) => l.role === "Head of Research Laboratory"
    );
    const members = lecturers.filter(
        (l) => l.role !== "Head of Research Laboratory"
    );

    const LecturerCard = ({ lecturer }: { lecturer: Lecturer }) => (
        <Link
            href={`/our-team/lecture/${lecturer.id}`}
            className="block group h-full"
        >
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center h-full shadow-sm hover:shadow-md transition-shadow">
                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-gray-500 font-medium">
                    Photo
                </div>

                <h3 className="text-lg font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                    {lecturer.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2">{lecturer.nip}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{lecturer.role}</p>
            </div>
        </Link>
    );

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold uppercase text-gray-900 mb-2">Our Team</h1>
                    <p className="text-gray-600">Lecture / Member</p>
                </div>

                {/* Head of Laboratory */}
                {headOfLab && (
                    <div className="flex justify-center">
                        <div className="w-full max-w-sm">
                            <h2 className="text-xl font-bold text-center mb-6 uppercase tracking-wider text-gray-800">
                                Head of Laboratory
                            </h2>
                            <LecturerCard lecturer={headOfLab} />
                        </div>
                    </div>
                )}

                {/* Members Grid */}
                <div>
                    <h2 className="text-xl font-bold text-center mb-6 uppercase tracking-wider text-gray-800">
                        Members
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {members.map((lecturer) => (
                            <LecturerCard key={lecturer.id} lecturer={lecturer} />
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
