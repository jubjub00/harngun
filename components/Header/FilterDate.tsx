import { FaCalendarDay, FaTimes } from 'react-icons/fa'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    DateRangePicker,
} from '@nextui-org/react'

export const FilterDate = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()

    return (
        <>
            <FaCalendarDay size={24} onClick={onOpen} />
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                placement="top-center"
                onOpenChange={onOpenChange}
            >
                <Button
                    isIconOnly
                    aria-label="Close"
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        zIndex: 1000,
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        color: 'currentColor',
                    }}
                    onPress={onClose}
                >
                    ✖ aaa
                </Button>

                <ModalContent>
                    <>
                        <ModalBody>
                            <DateRangePicker label="Stay duration" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="flat" onPress={onClose}>
                                ok
                            </Button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    )
}
