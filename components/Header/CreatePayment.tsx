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
            <FaPlusCircle size={24} onClick={onOpen} />
            <Modal
                backdrop="blur"
                closeButton={
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
                            cursor: 'pointer',
                        }}
                        onPress={onClose}
                    >
                        <FaTimes />
                    </Button>
                }
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
                        <Button onPress={handleSubmitClick}>Submit</Button>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
