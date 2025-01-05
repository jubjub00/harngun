import { prisma } from '@/prisma/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type GetData = {
    id: number
    name: string
}

type PostData = {
    id: number
    message: string
}

type Error = {
    error: string
}

export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse<GetData | PostData | Error>,
) {
    try {
        switch (req.method) {
            case 'GET': {
                const result = await getData()

                return res.status(200).json(result)
            }
            case 'PUT': {
                const result = postData()

                return res.status(200).json(result)
            }

            case 'DELETE':
                // Delete user by ID
                return res.status(204).end()

            default:
                // Method not allowed
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])

                return res.status(405).json({ error: 'Method not allowed' })
        }
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' })
    }
}

async function getData(): Promise<GetData> {
    const a = await prisma.user.findMany()
    console.log('aaaa', a)

    return {
        id: 1,
        name: 'a',
    }
}

function postData(): PostData {
    return {
        id: 1,
        message: 'b',
    }
}
