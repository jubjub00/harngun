import { Card, CardBody, Avatar } from '@nextui-org/react'
import { FaUser, FaChevronRight } from 'react-icons/fa'

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

export const RelationshipCard = () => {
    return (
        <>
            {spendList.map((_, key) => (
                <Card key={key} className="w-full" shadow="sm">
                    <CardBody className="p-3 text-default-400">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <div className="flex flex-col">
                                    <p className="text-md">pinkku</p>
                                    <p className="text-xs text-default-400">22-09-24</p>
                                </div>
                            </div>
                            <FaChevronRight size={16} />
                        </div>
                    </CardBody>
                </Card>
            ))}
        </>
    )
}
