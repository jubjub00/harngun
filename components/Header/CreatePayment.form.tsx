import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from '@nextui-org/react'

import InputController from '@/components/UI/input/InputController'

const CreatePaymentForm = forwardRef((props, ref) => {
    const submitBtn = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            if (submitBtn.current) {
                submitBtn.current.click()
            }
        },
    }))

    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: '',
        },
    })

    const onSubmit = (_: unknown) => {}

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputController control={control} label="Name ggg" name="name" />
            <Button ref={submitBtn} className="hidden" type="submit" />
        </Form>
    )
})

CreatePaymentForm.displayName = 'CreatePaymentForm'

export default CreatePaymentForm
