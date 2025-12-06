import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { signOut } from './actions'
import { ArticleForm } from '@/components/dashboard/ArticleForm'
import { ArticleList } from '@/components/dashboard/ArticleList'

export default async function DashboardPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: articles } = await supabase
    .from('articles')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gray-50/50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-6 pt-12">
          <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
          <form action={signOut}>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
              Sign Out
            </button>
          </form>
        </div>

        <div className="py-8 space-y-12">
          <ArticleForm />
          <ArticleList articles={articles || []} />
        </div>
      </div>
    </div>
  )
}
