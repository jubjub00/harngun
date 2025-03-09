import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form } from '@heroui/react'
import { payments } from '@prisma/client'

import InputController from '@/components/UI/input/InputController'
import SelectController from '@/components/UI/select/SelectController'
import CheckboxInputController from '@/components/UI/input/CheckboxInputController'
import CheckboxController from '@/components/UI/checkbox/CheckboxController'
import UploadController from '@/components/UI/upload/UploadController'

const CreatePaymentForm = forwardRef((props, ref) => {
    const submitBtn = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => ({
        submitForm: () => {
            if (submitBtn.current) {
                submitBtn.current.click()
            }
        },
    }))

    const { handleSubmit, control } = useForm<payments>({
        defaultValues: {
            title: '',
            description: '',
            companions: '',
            is_equally: false,
            slip_img: null,
            payer_name: 'arm',
            reporter_name: 'arm',
        },
    })

    const onSubmit = (data: payments) => {
        fetch('/api/payment', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }

    const companionList = [
        {
            key: '1234',
            label: 'pink',
        },
        {
            key: '12345',
            label: 'arm',
        },
        {
            key: '12346',
            label: 'p',
        },
    ]

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputController
                isRequired
                control={control}
                label="ชื่อบิล"
                name="title"
                rules={{ required: true }}
            />
            <InputController control={control} label="คำอธิบาย" name="description" />
            <InputController
                isRequired
                control={control}
                label="ราคารวม"
                name="total_amount"
                rules={{ required: true }}
                type="number"
            />
            <SelectController
                isRequired
                control={control}
                label="เลือกรายชื่อ"
                list={companionList}
                name="companions"
                rules={{ required: true }}
            />
            <CheckboxController control={control} label="หารรวม" name="is_equally" />
            <div className="grid grid-cols-2 gap-4">
                <CheckboxInputController control={control} label="vat" name="vat" type="number" />
                <CheckboxInputController
                    control={control}
                    label="service_charge"
                    name="service_charge"
                    type="number"
                />
            </div>
            <UploadController control={control} label="รูปใบเสร็จ" name="slip_img" />
            <Button ref={submitBtn} className="hidden" type="submit" />
        </Form>
    )
})

CreatePaymentForm.displayName = 'CreatePaymentForm'

export default CreatePaymentForm
