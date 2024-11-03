import { Navbar, NavbarContent } from '@nextui-org/navbar'
import { Input } from '@nextui-org/input'
import { DateRangePicker } from '@nextui-org/date-picker'
import { FaCalendarDay } from 'react-icons/fa'

import { SearchIcon } from './icons'


export const Header = () => {
    return (
        <Navbar className="bg-white">
            <NavbarContent className="items-center" justify="start">
                <Input placeholder="search" startContent={<SearchIcon size={18} />} type="search" />
                <FaCalendarDay size={24} />
                <DateRangePicker className="hidden" label="Stay duration" />
            </NavbarContent>
        </Navbar>
    )
}
