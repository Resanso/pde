import { createClient } from '@/lib/supabase/server'
import { redirect, notFound } from 'next/navigation'
import { ArticleForm } from '@/components/dashboard/ArticleForm'
import { SignOutButton } from '@/components/dashboard/SignOutButton'
import Link from 'next/link'

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { id } = await params

    const { data: article } = await supabase
        .from('articles')
        .select('*')
        .eq('id', id)
        .eq('user_id', user.id)
        .single()

    if (!article) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gray-50/50 p-8">
            <div className="max-w-4xl mx-auto space-y-6">
                 <div className="flex items-center justify-between border-b border-zinc-200 pb-6 pt-12">
                    <div className="flex items-center gap-4">
                        <Link href="/dashboard" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                        <h1 className="text-3xl font-bold text-zinc-900">Edit Article</h1>
                    </div>
                    <SignOutButton />
                </div>

                <div className="py-8">
                    <ArticleForm article={article} />
                </div>
            </div>
        </div>
    )
}
