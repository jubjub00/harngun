import crypto from 'crypto'

import { NextApiRequest, NextApiResponse } from 'next'

export const post = (req: NextApiRequest, res: NextApiResponse) => {
    const { user, hash } = req.body

    if (!user || !hash) {
        return res.status(400).json({ error: 'Missing or invalid data' })
    }

    const dataCheckString = Object.keys(user)
        .sort()
        .map((key) => `${key}=${user[key]}`)
        .join('\n')

    const botToken = process.env.TELEGRAM_BOT_TOKEN ?? ''
    const secretKey = crypto.createHash('sha256').update(botToken).digest()

    const hmac = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex')

    if (hmac === hash) {
        return res.status(200).json({ success: true, message: 'Data is from Telegram!' })
    } else {
        return res.status(403).json({ error: 'Invalid data' })
    }
}
