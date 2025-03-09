import { Card, CardBody } from '@heroui/react'
import { payments } from '@prisma/client'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { FaUser, FaMoneyBillWave } from 'react-icons/fa'

export const CardSpend = () => {
    const [spends, setSpends] = useState<payments[]>([])

    useEffect(() => {
        fetch('/api/payment').then(async (spendResponse) => {
            const formattedResponse = await spendResponse.json()

            setSpends(formattedResponse?.data ?? [])
        })
    }, [])

    return (
        <>
            {spends.map((spendData, key) => (
                <Card key={key}>
                    <CardBody className="p-3 text-default-400">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="font-semibold text-default-600 truncate w-[60vw]">
                                    {spendData.title}
                                </h4>
                                <h4 className="font-semibold text-default-600 truncate w-[60vw] flex items-center">
                                    <FaMoneyBillWave className="mr-[2px]" size={12} />
                                    {spendData.payer_name}
                                </h4>
                                <h5 className="text-small tracking-tight text-default-400">
                                    {format(spendData.created_dt, 'dd-MM-yy')}
                                </h5>
                            </div>

                            <div className="flex flex-col gap-1 items-end justify-center">
                                <h4 className="font-semibold text-default-600">
                                    {spendData.total_amount}฿
                                </h4>
                                <h5 className="flex items-center text-small tracking-tight text-default-400">
                                    5
                                    <FaUser className="ml-[2px]" size={12} />
                                </h5>
                            </div>
                        </div>
                        <p className="text-small text-default-300">{spendData.description}</p>
                        <span className="text-xs text-default-300 text-end">
                            {spendData.reporter_name}
                        </span>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}
