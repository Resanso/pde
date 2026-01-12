import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import path from 'path'
import { existsSync } from 'fs'

const DATA_FILE = path.join(process.cwd(), 'public', 'activity', 'data.json')
const UPLOAD_DIR = path.join(process.cwd(), 'public', 'activity')

interface Activity {
    id: string
    title: string
    description: string
    category: 'academic' | 'research' | 'community-service'
    imageUrl: string
    createdAt: string
}

// GET - Fetch all activities
export async function GET() {
    try {
        if (!existsSync(DATA_FILE)) {
            return NextResponse.json([])
        }
        const data = await readFile(DATA_FILE, 'utf-8')
        const activities: Activity[] = JSON.parse(data)
        return NextResponse.json(activities)
    } catch (error) {
        console.error('Error reading activities:', error)
        return NextResponse.json([])
    }
}

// POST - Create new activity
export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const category = formData.get('category') as 'academic' | 'research' | 'community-service'
        const image = formData.get('image') as File

        if (!title || !description || !category || !image) {
            return NextResponse.json(
                { error: 'Title, description, category, and image are required' },
                { status: 400 }
            )
        }

        // Ensure upload directory exists
        if (!existsSync(UPLOAD_DIR)) {
            await mkdir(UPLOAD_DIR, { recursive: true })
        }

        // Generate unique filename
        const ext = image.name.split('.').pop()
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`
        const filePath = path.join(UPLOAD_DIR, fileName)

        // Save image file
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)
        await writeFile(filePath, buffer)

        // Read existing data
        let activities: Activity[] = []
        if (existsSync(DATA_FILE)) {
            const data = await readFile(DATA_FILE, 'utf-8')
            activities = JSON.parse(data)
        }

        // Create new activity
        const newActivity: Activity = {
            id: Date.now().toString(),
            title,
            description,
            category,
            imageUrl: `/activity/${fileName}`,
            createdAt: new Date().toISOString()
        }

        activities.unshift(newActivity)

        // Save updated data
        await writeFile(DATA_FILE, JSON.stringify(activities, null, 2))

        return NextResponse.json(newActivity, { status: 201 })
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
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) {
            return NextResponse.json(
                { error: 'Activity ID is required' },
                { status: 400 }
            )
        }

        // Read existing data
        if (!existsSync(DATA_FILE)) {
            return NextResponse.json(
                { error: 'Activity not found' },
                { status: 404 }
            )
        }

        const data = await readFile(DATA_FILE, 'utf-8')
        let activities: Activity[] = JSON.parse(data)

        // Find activity to delete
        const activityIndex = activities.findIndex(a => a.id === id)
        if (activityIndex === -1) {
            return NextResponse.json(
                { error: 'Activity not found' },
                { status: 404 }
            )
        }

        // Get image path and delete image file
        const activity = activities[activityIndex]
        const imagePath = path.join(process.cwd(), 'public', activity.imageUrl)
        if (existsSync(imagePath)) {
            const { unlink } = await import('fs/promises')
            await unlink(imagePath)
        }

        // Remove from array
        activities = activities.filter(a => a.id !== id)

        // Save updated data
        await writeFile(DATA_FILE, JSON.stringify(activities, null, 2))

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting activity:', error)
        return NextResponse.json(
            { error: 'Failed to delete activity' },
            { status: 500 }
        )
    }
}
