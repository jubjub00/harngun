import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'
import { FaHome, FaFileInvoiceDollar, FaUserFriends, FaUser } from 'react-icons/fa'
import { useState } from 'react'

import { link, navTv, navIconFooterTv } from '@/components/primitives'
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
                        <NavbarItem
                            key={key}
                            className={navTv({ active: isActive })}
                            isActive={isActive}
                            onClick={() => setNavActive(key)}
                        >
                            <Link className={link({ direct: 'cols' })} href={nav.link}>
                                <div className={navIconFooterTv({ active: isActive })}>
                                    {nav.icon}
                                </div>
                                <span className='absolute bottom-0'>{nav.text}</span> 



                                {/* padding: 10px;
    border-radius: 50%;
    border: 5px solid white;
    background: hsl(var(--nextui-primary) / .2);
    position: absolute;
    top: 0; */}



                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
        </Navbar>
    )
}
