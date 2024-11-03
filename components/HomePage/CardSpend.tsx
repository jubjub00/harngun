import { Button } from '@nextui-org/button'
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card'
import Image from 'next/image'
import { FaUser, FaMoneyBillWave } from 'react-icons/fa'

const spendList = [
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },

    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },


    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
    {
        link: '#',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
]

export const CardSpend = () => {
    return (
        <>
            {spendList.map((_,key) => (
                <Card key={key}>
                    <CardBody className="p-3 text-default-400">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="font-semibold text-default-600 truncate w-[60vw]">
                                    ตำยำ Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Est voluptate libero maxime ullam doloribus? Sed ab doloribus
                                    inventore minima corporis? Et consequuntur dolores eveniet
                                    sapiente illo odio labore? Culpa, laudantium?
                                </h4>
                                <h4 className="font-semibold text-default-600 truncate w-[60vw] flex items-center">
                                    <FaMoneyBillWave className="mr-[2px]" size={12} /> อาม
                                </h4>
                                <h5 className="text-small tracking-tight text-default-400">
                                    20-09-24
                                </h5>
                            </div>

                            <div className="flex flex-col gap-1 items-end justify-center">
                                <h4 className="font-semibold text-default-600">898฿</h4>
                                <h5 className="flex items-center text-small tracking-tight text-default-400">
                                    5<FaUser className="ml-[2px]" size={12} />
                                </h5>
                            </div>
                        </div>
                        <p className="text-small text-default-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
                            perspiciatis.
                        </p>
                        <span className="text-xs text-default-300 text-end">
                            Lorem, ipsum dolor
                        </span>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}
