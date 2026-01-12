'use client'

import { useState, useEffect } from 'react'
import { ActivityModal } from '@/components/ActivityModal'

interface Activity {
    id: string
    title: string
    description: string
    category: 'academic' | 'research' | 'community-service'
    imageUrl: string
    createdAt: string
}

interface ActivityListProps {
    category: 'academic' | 'research' | 'community-service'
}

export function ActivityList({ category }: ActivityListProps) {
    const [activities, setActivities] = useState<Activity[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)

    useEffect(() => {
        fetchActivities()
    }, [category])

    const fetchActivities = async () => {
        try {
            const res = await fetch('/api/activity')
            const data: Activity[] = await res.json()
            const filtered = data.filter(a => a.category === category)
            setActivities(filtered)
        } catch (error) {
            console.error('Error fetching activities:', error)
        } finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2E5843]"></div>
            </div>
        )
    }

    if (activities.length === 0) {
        return null
    }

    return (
        <>
            <div className="w-full mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Aktivitas Terbaru</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                        <div 
                            key={activity.id} 
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                            onClick={() => setSelectedActivity(activity)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={activity.imageUrl}
                                    alt={activity.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{activity.title}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3">{activity.description}</p>
                                <p className="text-gray-400 text-xs mt-3">
                                    {new Date(activity.createdAt).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Activity Modal */}
            {selectedActivity && (
                <ActivityModal 
                    activity={selectedActivity} 
                    onClose={() => setSelectedActivity(null)} 
                />
            )}
        </>
    )
}
