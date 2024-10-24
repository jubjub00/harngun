import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { FaHome, FaFileInvoiceDollar, FaUserFriends, FaUser } from 'react-icons/fa'

import { link, navTv } from '@/components/primitives'
import { FooterProps } from '@/types/footer'

const navList: FooterProps[] = [
    {
        link: '#',
        icon: <FaHome size={24} />,
        text: 'หน้าหลัก',
    },
    {
        link: '#',
        icon: <FaFileInvoiceDollar size={24} />,
        text: 'ประวัติ',
    },
    {
        link: '#',
        icon: <FaUserFriends size={24} />,
        text: 'เพื่อน',
    },
    {
        link: '#',
        icon: <FaUser size={24} />,
        text: 'ฉัน',
    },
]

export const Footer = () => {
    return (
        <Navbar>
            <NavbarContent className="grid grid-cols-4 grid-rows-1">
                {navList.map((nav, key) => (
                    <NavbarItem
                        key={key}
                        className={navTv({ active: key === 0 })}
                        isActive={key === 0 ? true : false}
                    >
                        <Link className={link({ direct: 'cols' })} href={nav.link}>
                            {nav.icon}
                            {nav.text}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
        </Navbar>
    )
}
