'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export async function signOut() {
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/login')
}

export async function createArticle(formData: FormData) {
    const supabase = await createClient()

    // Protected: User must be logged in
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
        redirect('/login')
    }

    const title = formData.get('title') as string
    const content = formData.get('content') as string
    const date = formData.get('date') as string
    const time = formData.get('time') as string

    // Combine date and time
    const scheduledAt = new Date(`${date}T${time}:00`).toISOString()

    const imageFile = formData.get('image') as File
    let imageUrl = null

    if (imageFile && imageFile.size > 0) {
        const fileExt = imageFile.name.split('.').pop()
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
        const filePath = `${user.id}/${fileName}`

        const { error: uploadError } = await supabase.storage
            .from('article-images')
            .upload(filePath, imageFile)

        if (uploadError) {
            console.error('Error uploading image:', uploadError)
            // Continue without image or throw? Let's log and continue for now or throw. 
            // Throwing is safer so user knows it failed.
            throw new Error(`Upload failed: ${uploadError.message}`)
        }

        const { data: { publicUrl } } = supabase.storage
            .from('article-images')
            .getPublicUrl(filePath)
            
        imageUrl = publicUrl
    }

    const { error } = await supabase.from('articles').insert({
        title,
        content,
        scheduled_at: scheduledAt,
        user_id: user.id,
        image_url: imageUrl
    })

    if (error) {
        console.error('Error creating article:', error)
        throw new Error('Failed to create article')
    }

    redirect('/dashboard?success=true')
}

export async function deleteArticle(id: string) {
    const supabase = await createClient()

    const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting article:', error)
        throw new Error('Failed to delete article')
    }

    redirect('/dashboard')
}
