import { NextApiRequest, NextApiResponse } from 'next'

import { post } from './service'

export default async function Handler(req: NextApiRequest, res: NextApiResponse<any>) {
    if (req.method === 'POST') {
        return post(req, res)
    } else {
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
