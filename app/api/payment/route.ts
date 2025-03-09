import { payments } from '@prisma/client'

import { prismaClient } from '@/prisma/prisma'
import { NextResponse } from 'next/server'

interface GetPaymentResponse {
    message: string
    data: payments[]
}

interface PostPaymentResponse {
    message: string
    data: payments
}

export async function GET(req: Request): Promise<NextResponse<GetPaymentResponse>> {
    const paymentResult = await prismaClient.payments.findMany()

    return NextResponse.json({ message: 'Get payment successfully', data: paymentResult })
}

export async function POST(req: Request): Promise<NextResponse<PostPaymentResponse>> {
    const a = await req.json()

    const paymentResult = await prismaClient.payments.create({data: a})

    return NextResponse.json({ message: 'Get payment successfully', data: paymentResult })
}
