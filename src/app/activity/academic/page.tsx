'use client'

import { ActivityList } from '@/components/ActivityList'

export default function AcademicPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide text-center">
                    Academic
                </h1>

                {/* Buttons Container */}
                <div className="w-full max-w-2xl flex flex-col gap-6">
                    {/* Aplikasi Pendaftaran TA */}
                    <a
                        href="https://ta1.virtualfri.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 block text-center"
                    >
                        Aplikasi Pendaftaran TA
                    </a>

                    {/* Timeline Akademik */}
                    <a
                        href="https://baa.telkomuniversity.ac.id/kalender-akademik-2-2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 block text-center"
                    >
                        Timeline Akademik (2025)
                    </a>

                    {/* Topik TA */}
                    <a
                        href="https://docs.google.com/spreadsheets/d/1vfXIlwQJ_HqsBpABnMyZ-WgUJew6t8fJoUmoVfs7nMo/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 px-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold text-lg rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 block text-center"
                    >
                        Topik TA
                    </a>
                </div>

                {/* Activities */}
                <ActivityList category="academic" />

            </div>
        </main>
    );
}
