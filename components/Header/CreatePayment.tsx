import { useRef } from 'react'
import { FaPlusCircle, FaTimes } from 'react-icons/fa'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from '@nextui-org/react'

import Form from './CreatePayment.form'

export const CreatePayment = () => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure()
    const formRef = useRef<{ submitForm: () => void }>()

    const handleSubmitClick = () => {
        if (formRef.current) {
            formRef.current.submitForm()
        }
    }

    return (
        <>
            <FaPlusCircle className="cursor-pointer" size={24} onClick={onOpen} />
            <Modal
                backdrop="blur"
                closeButton={<FaTimes size={30} style={{ right: '10px', top: '10px' }} />}
                isOpen={isOpen}
                placement="top-center"
                onOpenChange={onOpenChange}
            >
                <ModalContent className="mt-4">
                    <ModalHeader>สร้างรายการบิล</ModalHeader>
                    <ModalBody>
                        <Form ref={formRef} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            ยกเลิก
                        </Button>
                        <Button color="primary" onPress={handleSubmitClick}>
                            บันทึก
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
