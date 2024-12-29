import { Navbar, NavbarContent, Input } from '@nextui-org/react'

import { SearchIcon } from '@/components/icons'
import { CreatePayment } from '@/components/Header/CreatePayment'
import { FilterDate } from '@/components/Header/FilterDate'

export const Header = ({
    pickDatable,
    creatable,
}: {
    pickDatable?: boolean
    creatable?: boolean
}) => {
    return (
        <Navbar className="bg-white">
            <NavbarContent className="items-center text-black" justify="start">
                <Input placeholder="search" startContent={<SearchIcon size={18} />} type="search" />
                {pickDatable && <FilterDate />}
                {creatable && <CreatePayment />}
            </NavbarContent>
        </Navbar>
    )
}
