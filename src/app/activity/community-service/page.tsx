'use client'

import { ActivityList } from '@/components/ActivityList'

export default function CommunityServicePage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col items-center">

                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
                    Pengabdian Masyarakat
                </h1>
                {/* Activities */}
                <ActivityList category="community-service" />

            </div>
        </main>
    );
}
