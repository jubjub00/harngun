import crypto from 'crypto'

import { NextApiRequest, NextApiResponse } from 'next'

interface IBody {
    user: {
        [key: string]: string
    }
    hash: string
    initData: string
}

export const post = (req: NextApiRequest, res: NextApiResponse) => {
    const { user, initData, hash }: IBody = req.body

    if (!user || !initData) {
        return res.status(400).json({ error: 'Missing or invalid data' })
    }

    const dataCheckString = Object.keys(user)
        .sort()
        .map((key) => `${key}=${user[key]}`)
        .join('\n')

    const botToken = process.env.TELEGRAM_BOT_TOKEN ?? ''
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(botToken).digest()
    const hashText = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex')

    if (hashText === hash) {
        return res.status(200).json({ success: true, message: 'Data is from Telegram!' })
    } else {
        return res.status(403).json({ error: 'Invalid data' })
    }
}
