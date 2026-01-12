import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

// GET - Fetch all activities
export async function GET() {
    try {
        const supabase = await createClient()
        
        const { data: activities, error } = await supabase
            .from('activities')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error fetching activities:', error)
            return NextResponse.json([])
        }

        // Transform to match frontend interface
        const transformed = activities?.map(a => ({
            id: a.id,
            title: a.title,
            description: a.description,
            category: a.category,
            imageUrl: a.image_url,
            createdAt: a.created_at
        })) || []

        return NextResponse.json(transformed)
    } catch (error) {
        console.error('Error fetching activities:', error)
        return NextResponse.json([])
    }
}

// POST - Create new activity
export async function POST(request: NextRequest) {
    try {
        const supabase = await createClient()
        
        const formData = await request.formData()
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const category = formData.get('category') as string
        const image = formData.get('image') as File

        if (!title || !description || !category || !image) {
            return NextResponse.json(
                { error: 'Title, description, category, and image are required' },
                { status: 400 }
            )
        }

        // Upload image to Supabase Storage
        const fileExt = image.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`

        const { error: uploadError } = await supabase.storage
            .from('article-images')
            .upload(fileName, image)

        if (uploadError) {
            console.error('Error uploading image:', uploadError)
            return NextResponse.json(
                { error: `Upload failed: ${uploadError.message}` },
                { status: 500 }
            )
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
            .from('article-images')
            .getPublicUrl(fileName)

        // Insert into database
        const { data: newActivity, error: insertError } = await supabase
            .from('activities')
            .insert({
                title,
                description,
                category,
                image_url: publicUrl
            })
            .select()
            .single()

        if (insertError) {
            console.error('Error creating activity:', insertError)
            return NextResponse.json(
                { error: 'Failed to create activity' },
                { status: 500 }
            )
        }

        return NextResponse.json({
            id: newActivity.id,
            title: newActivity.title,
            description: newActivity.description,
            category: newActivity.category,
            imageUrl: newActivity.image_url,
            createdAt: newActivity.created_at
        }, { status: 201 })
    } catch (error) {
        console.error('Error creating activity:', error)
        return NextResponse.json(
            { error: 'Failed to create activity' },
            { status: 500 }
        )
    }
}

// DELETE - Delete activity
export async function DELETE(request: NextRequest) {
    try {
        const supabase = await createClient()
        
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json(
                { error: 'Activity ID is required' },
                { status: 400 }
            )
        }

        // Get activity to find image URL
        const { data: activity, error: fetchError } = await supabase
            .from('activities')
            .select('image_url')
            .eq('id', id)
            .single()

        if (fetchError || !activity) {
            return NextResponse.json(
                { error: 'Activity not found' },
                { status: 404 }
            )
        }

        // Extract filename from URL and delete from storage
        const imageUrl = activity.image_url
        if (imageUrl) {
            const fileName = imageUrl.split('/').pop()
            if (fileName) {
                await supabase.storage
                    .from('article-images')
                    .remove([fileName])
            }
        }

        // Delete from database
        const { error: deleteError } = await supabase
            .from('activities')
            .delete()
            .eq('id', id)

        if (deleteError) {
            console.error('Error deleting activity:', deleteError)
            return NextResponse.json(
                { error: 'Failed to delete activity' },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting activity:', error)
        return NextResponse.json(
            { error: 'Failed to delete activity' },
            { status: 500 }
        )
    }
}
