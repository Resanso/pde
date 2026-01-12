'use client'

import { useState, useEffect, useRef } from 'react'
import { ActivityModal } from '@/components/ActivityModal'

interface Activity {
    id: string
    title: string
    description: string
    category: 'academic' | 'research' | 'community-service'
    imageUrl: string
    createdAt: string
}

export default function UploadActivityPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState<'academic' | 'research' | 'community-service'>('academic')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [activities, setActivities] = useState<Activity[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isDeleting, setIsDeleting] = useState<string | null>(null)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Fetch activities on mount
    useEffect(() => {
        fetchActivities()
    }, [])

    const fetchActivities = async () => {
        try {
            const res = await fetch('/api/activity')
            const data = await res.json()
            setActivities(data)
        } catch (error) {
            console.error('Error fetching activities:', error)
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
            const url = URL.createObjectURL(file)
            setPreviewUrl(url)
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const file = e.dataTransfer.files?.[0]
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file)
            const url = URL.createObjectURL(file)
            setPreviewUrl(url)
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Apakah Anda yakin ingin menghapus aktivitas ini?')) return

        setIsDeleting(id)
        try {
            const res = await fetch(`/api/activity?id=${id}`, {
                method: 'DELETE'
            })

            if (res.ok) {
                setMessage({ type: 'success', text: 'Aktivitas berhasil dihapus!' })
                fetchActivities()
            } else {
                const data = await res.json()
                setMessage({ type: 'error', text: data.error || 'Gagal menghapus aktivitas' })
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Terjadi kesalahan saat menghapus' })
        } finally {
            setIsDeleting(null)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!title || !description || !selectedFile) {
            setMessage({ type: 'error', text: 'Semua field harus diisi!' })
            return
        }

        setIsLoading(true)
        setMessage(null)

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('image', selectedFile)

        try {
            const res = await fetch('/api/activity', {
                method: 'POST',
                body: formData
            })

            if (res.ok) {
                setMessage({ type: 'success', text: 'Aktivitas berhasil diupload!' })
                setTitle('')
                setDescription('')
                setCategory('academic')
                setSelectedFile(null)
                setPreviewUrl(null)
                if (fileInputRef.current) fileInputRef.current.value = ''
                fetchActivities()
            } else {
                const data = await res.json()
                setMessage({ type: 'error', text: data.error || 'Gagal mengupload aktivitas' })
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Terjadi kesalahan saat upload' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center space-y-12">

                {/* Header */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-wide text-center">
                    Upload Activity
                </h1>

                {/* Upload Form */}
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Judul</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5843] focus:border-transparent transition-all text-gray-900"
                                placeholder="Masukkan judul aktivitas"
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Deskripsi</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5843] focus:border-transparent transition-all resize-none text-gray-900"
                                placeholder="Masukkan deskripsi aktivitas"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Kategori</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value as 'academic' | 'research' | 'community-service')}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5843] focus:border-transparent transition-all text-gray-900 bg-white"
                            >
                                <option value="academic">Academic</option>
                                <option value="research">Research</option>
                                <option value="community-service">Pengabdian Masyarakat</option>
                            </select>
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Gambar</label>
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-[#2E5843] transition-colors cursor-pointer bg-gray-50"
                            >
                                {previewUrl ? (
                                    <div className="relative w-full">
                                        <img
                                            src={previewUrl}
                                            alt="Preview"
                                            className="max-h-48 mx-auto rounded-lg object-cover"
                                        />
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedFile(null)
                                                setPreviewUrl(null)
                                                if (fileInputRef.current) fileInputRef.current.value = ''
                                            }}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-12 h-12 text-gray-400 mb-3"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                        </svg>
                                        <p className="text-gray-500 font-medium">Klik atau drag & drop gambar</p>
                                        <p className="text-gray-400 text-sm mt-1">PNG, JPG, JPEG (Max 5MB)</p>
                                    </>
                                )}
                            </div>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>

                        {/* Message */}
                        {message && (
                            <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {message.text}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-6 bg-[#2E5843] text-white font-semibold rounded-lg hover:bg-[#234534] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Mengupload...' : 'Upload Aktivitas'}
                        </button>
                    </form>
                </div>

                {/* Activity List */}
                {activities.length > 0 && (
                    <div className="w-full max-w-4xl">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Daftar Aktivitas</h2>
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
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-bold text-lg text-gray-900">{activity.title}</h3>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleDelete(activity.id)
                                                }}
                                                disabled={isDeleting === activity.id}
                                                className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
                                                title="Hapus aktivitas"
                                            >
                                                {isDeleting === activity.id ? (
                                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        <span className={`inline-block text-xs px-2 py-1 rounded-full mb-2 ${
                                            activity.category === 'academic' ? 'bg-blue-100 text-blue-700' :
                                            activity.category === 'research' ? 'bg-purple-100 text-purple-700' :
                                            'bg-green-100 text-green-700'
                                        }`}>
                                            {activity.category === 'academic' ? 'Academic' :
                                             activity.category === 'research' ? 'Research' : 'Pengabdian Masyarakat'}
                                        </span>
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
                )}
            </div>
            {/* Activity Modal */}
            {selectedActivity && (
                <ActivityModal 
                    activity={selectedActivity} 
                    onClose={() => setSelectedActivity(null)} 
                />
            )}
        </main>
    )
}
