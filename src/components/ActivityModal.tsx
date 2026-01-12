'use client'

interface Activity {
    id: string
    title: string
    description: string
    category: 'academic' | 'research' | 'community-service'
    imageUrl: string
    createdAt: string
}

interface ActivityModalProps {
    activity: Activity
    onClose: () => void
}

export function ActivityModal({ activity, onClose }: ActivityModalProps) {
    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'academic': return 'Academic'
            case 'research': return 'Research'
            case 'community-service': return 'Pengabdian Masyarakat'
            default: return category
        }
    }

    const getCategoryStyle = (category: string) => {
        switch (category) {
            case 'academic': return 'bg-blue-100 text-blue-700'
            case 'research': return 'bg-purple-100 text-purple-700'
            case 'community-service': return 'bg-green-100 text-green-700'
            default: return 'bg-gray-100 text-gray-700'
        }
    }

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 fade-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header with close button */}
                <div className="relative">
                    <img
                        src={activity.imageUrl}
                        alt={activity.title}
                        className="w-full h-64 md:h-80 object-cover"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
                    <div className="flex items-center gap-3 mb-4">
                        <span className={`text-sm px-3 py-1 rounded-full font-medium ${getCategoryStyle(activity.category)}`}>
                            {getCategoryLabel(activity.category)}
                        </span>
                        <span className="text-gray-400 text-sm">
                            {new Date(activity.createdAt).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {activity.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                        {activity.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
