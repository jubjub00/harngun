import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import Link from 'next/link'
import { FaHome, FaFileInvoiceDollar, FaUserFriends, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { link, navIconFooterTv } from '@/components/primitives'
import { FooterProps } from '@/types/footer'
import { getFirstSegment } from '@/utils/String.utils'

const navList: FooterProps[] = [
    {
        link: '/',
        icon: <FaHome size={24} />,
        text: 'หน้าหลัก',
        rootSegment: '',
    },
    {
        link: '/history',
        icon: <FaFileInvoiceDollar size={24} />,
        text: 'ประวัติ',
        rootSegment: 'history',
    },
    {
        link: '/relationship',
        icon: <FaUserFriends size={24} />,
        text: 'เพื่อน',
        rootSegment: 'relationship',
    },
    {
        link: '/mind',
        icon: <FaUser size={20} />,
        text: 'ฉัน',
        rootSegment: 'mind',
    },
]

export const Footer = () => {
    const router = useRouter()
    const pathname = router.pathname
    const [navActive, setNavActive] = useState(
        navList.findIndex((nav) => nav.rootSegment === getFirstSegment(pathname)) ?? 0,
    )

    return (
        <Navbar className="bg-white">
            <NavbarContent className="grid grid-cols-4 grid-rows-1">
                {navList.map((nav, key) => {
                    const isActive = key === navActive

                    return (
                        <NavbarItem
                            key={key}
                            className="text-black"
                            isActive={isActive}
                            onClick={() => setNavActive(key)}
                        >
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
