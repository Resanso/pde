'use client'

import { deleteArticle } from '@/app/dashboard/actions'
import Link from 'next/link'
import { useState } from 'react'
import { ConfirmationModal } from '@/components/ui/ConfirmationModal'

type Article = {
  id: string
  title: string
  content: string
  scheduled_at: string | null
  created_at: string
  image_url: string | null
}

export function ArticleList({ articles }: { articles: Article[] }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [articleToDelete, setArticleToDelete] = useState<string | null>(null)

  const handleDeleteClick = (id: string) => {
    setArticleToDelete(id)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (articleToDelete) {
      await deleteArticle(articleToDelete)
      setDeleteModalOpen(false)
      setArticleToDelete(null)
    }
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-200">
        <p>No articles found. Start by creating one!</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Uploaded Articles</h3>
      </div>
      <div className="divide-y divide-gray-100">
        {articles.map((article) => (
          <div key={article.id} className="p-6 flex items-start justify-between hover:bg-gray-50 transition-colors gap-4">
             {article.image_url && (
                <div className="shrink-0">
                  <img 
                    src={article.image_url} 
                    alt={article.title} 
                    className="h-20 w-20 object-cover rounded-lg border border-gray-200"
                  />
                </div>
             )}
            <div className="space-y-1 flex-1">
              <h4 className="font-medium text-gray-900">{article.title}</h4>
              <p className="text-sm text-gray-500 line-clamp-2">{article.content}</p>
              <div className="flex gap-4 pt-2 text-xs text-gray-400">
                <span>
                  Schedule: {article.scheduled_at 
                    ? new Date(article.scheduled_at).toLocaleString() 
                    : 'Not scheduled'}
                </span>
                <span>•</span>
                <span>Created: {new Date(article.created_at).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="ml-4 flex items-center gap-2">
              <Link
                href={`/dashboard/edit/${article.id}`}
                className="px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteClick(article.id)}
                className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors"
                type="button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Are you sure want to delete?"
        confirmText="Delete"
        cancelText="Cancel"
        isDanger={true}
      />
    </div>
  )
}
