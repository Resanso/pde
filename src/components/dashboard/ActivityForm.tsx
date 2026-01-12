'use client'

import { useState, useEffect, useRef } from 'react'

interface Activity {
    id: string
    title: string
    description: string
    category: 'academic' | 'research' | 'community-service'
    imageUrl: string
    createdAt: string
}

export function ActivityForm() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState<'academic' | 'research' | 'community-service'>('academic')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [activities, setActivities] = useState<Activity[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isDeleting, setIsDeleting] = useState<string | null>(null)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

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
        <div className="w-full max-w-3xl bg-[#F5F5F5] rounded-xl shadow-lg p-8 mx-auto">
            <h2 className="text-2xl font-normal text-center mb-8 text-black">
                Upload Activity
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center">
                    <label className="text-black text-lg">Judul</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full h-10 px-4 rounded-lg border border-gray-300 bg-[#F5F5F5] focus:outline-none focus:border-gray-500 transition-colors text-black"
                        placeholder="Masukkan judul aktivitas"
                    />
                </div>

                {/* Description */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-start">
                    <label className="text-black text-lg pt-2">Deskripsi</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full p-4 rounded-lg border border-gray-300 bg-[#F5F5F5] focus:outline-none focus:border-gray-500 resize-y text-black"
                        placeholder="Masukkan deskripsi aktivitas"
                    />
                </div>

                {/* Category */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center">
                    <label className="text-black text-lg">Kategori</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as 'academic' | 'research' | 'community-service')}
                        className="w-full h-10 px-4 rounded-lg border border-gray-300 bg-[#F5F5F5] focus:outline-none focus:border-gray-500 transition-colors text-black"
                    >
                        <option value="academic">Academic</option>
                        <option value="research">Research</option>
                        <option value="community-service">Pengabdian Masyarakat</option>
                    </select>
                </div>

                {/* Image */}
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-center">
                    <label className="text-black text-lg">Gambar</label>
                    <div className="flex flex-col gap-2">
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-black file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-200 file:text-black hover:file:bg-gray-300 transition-all"
                        />
                        {previewUrl && (
                            <div className="relative mt-2">
                                <img src={previewUrl} alt="Preview" className="max-h-32 rounded-lg object-cover" />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedFile(null)
                                        setPreviewUrl(null)
                                        if (fileInputRef.current) fileInputRef.current.value = ''
                                    }}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Message */}
                {message && (
                    <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message.text}
                    </div>
                )}

                {/* Submit Button */}
                <div className="flex justify-end gap-4 mt-8 pt-4">
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="px-8 py-2 bg-[#6B6B6B] text-white font-bold rounded hover:bg-[#555555] transition-colors disabled:opacity-50"
                    >
                        {isLoading ? 'Mengupload...' : 'Upload'}
                    </button>
                </div>
            </form>

            {/* Activity List */}
            {activities.length > 0 && (
                <div className="mt-12">
                    <h3 className="text-xl font-semibold text-black mb-4">Daftar Aktivitas</h3>
                    <div className="space-y-3 max-h-96 overflow-y-auto">
                        {activities.map((activity) => (
                            <div key={activity.id} className="flex items-center gap-4 bg-white rounded-lg p-3 shadow-sm">
                                <img
                                    src={activity.imageUrl}
                                    alt={activity.title}
                                    className="w-16 h-16 object-cover rounded-lg"
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-900 truncate">{activity.title}</h4>
                                    <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                                        activity.category === 'academic' ? 'bg-blue-100 text-blue-700' :
                                        activity.category === 'research' ? 'bg-purple-100 text-purple-700' :
                                        'bg-green-100 text-green-700'
                                    }`}>
                                        {activity.category === 'academic' ? 'Academic' :
                                         activity.category === 'research' ? 'Research' : 'Pengabdian Masyarakat'}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleDelete(activity.id)}
                                    disabled={isDeleting === activity.id}
                                    className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded transition-colors disabled:opacity-50"
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
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
