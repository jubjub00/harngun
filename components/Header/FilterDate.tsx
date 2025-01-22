import {
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    DateRangePicker,
    ModalHeader,
} from '@nextui-org/react'
import { FaCalendarDay, FaTimes } from 'react-icons/fa'

export const FilterDate = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

    return (
        <>
            <FaCalendarDay className="cursor-pointer" size={24} onClick={onOpen} />
            <Modal
                backdrop="blur"
                closeButton={<FaTimes size={30} style={{ right: '10px', top: '10px' }} />}
                isOpen={isOpen}
                placement="top-center"
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    <ModalHeader>เลือกวันที่ค้นหา</ModalHeader>
                    <ModalBody>
                        <DateRangePicker label="Stay duration" />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            ปิด
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
