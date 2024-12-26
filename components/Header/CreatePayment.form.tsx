import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from '@nextui-org/react'

import InputController from '@/components/input/InputController'

const CreatePaymentFrom = forwardRef((props, ref) => {
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

    const onSubmit = (data: unknown) => {
        console.log('data', data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputController control={control} label="Name ggg" name="name" />
            <Button ref={submitBtn} className="hidden" type="submit" />
        </Form>
    )
})

CreatePaymentFrom.displayName = 'CreatePaymentFrom'

export default CreatePaymentFrom
