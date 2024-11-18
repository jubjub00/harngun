import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { FaHome, FaFileInvoiceDollar, FaUserFriends, FaUser } from 'react-icons/fa'
import { useState } from 'react'

import { link, navIconFooterTv } from '@/components/primitives'
import { FooterProps } from '@/types/footer'

const navList: FooterProps[] = [
    {
        link: '/',
        icon: <FaHome size={24} />,
        text: 'หน้าหลัก',
    },
    {
        link: '/history',
        icon: <FaFileInvoiceDollar size={24} />,
        text: 'ประวัติ',
    },
    {
        link: '/relationship',
        icon: <FaUserFriends size={24} />,
        text: 'เพื่อน',
    },
    {
        link: '/mind',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
    },
]

export const Footer = () => {
    const [navActive, setNavActive] = useState(0)

    return (
        <Navbar className="bg-white">
            <NavbarContent className="grid grid-cols-4 grid-rows-1">
                {navList.map((nav, key) => {
                    const isActive = key === navActive

                    return (
                        <NavbarItem key={key} isActive={isActive} onClick={() => setNavActive(key)}>
                            <Link className={link({ direct: 'cols' })} href={nav.link}>
                                <div className={navIconFooterTv({ active: isActive })}>
                                    {nav.icon}
                                </div>
                                <span className="absolute bottom-0">{nav.text}</span>
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
        </Navbar>
    )
}
