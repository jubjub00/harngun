import fs from 'fs/promises'
import path from 'path'

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const formData = await req.formData()
        const file = formData.get('file') as File | null

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 })
        }

        const buffer = await file.arrayBuffer()
        const bytes = Buffer.from(buffer)
        const maxSize = 2 * 1024 * 1024

        if (bytes.length > maxSize) {
            return NextResponse.json({ error: 'File size exceeds limit' }, { status: 400 })
        }

        const filename = file.name
        const filePath = path.join('uploads', filename)

        await fs.writeFile(filePath, bytes)

        return NextResponse.json({ message: 'File uploaded successfully', filename: filename })
    } catch (error) {
        return NextResponse.json({ error: 'File upload failed' }, { status: 500 })
    }
}
