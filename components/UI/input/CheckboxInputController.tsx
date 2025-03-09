import { Checkbox, Input } from '@heroui/react'
import { useState } from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

interface PropsComponent<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
    control: Control<TFieldValues>
    name: TName
    rules?: Omit<
        RegisterOptions<TFieldValues, TName>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
    >
    label: string
    type?: 'text' | 'number'
}

export default function CheckboxInputController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ type = 'text', ...props }: PropsComponent<TFieldValues, TName>) {
    const [visible, setVisible] = useState<boolean>(false)

    return (
        <Controller
            {...props}
            render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error },
            }) => (
                <div className="flex items-start">
                    <Checkbox onValueChange={setVisible}>
                        {!visible && <span className="text-foreground-500">{props.label}</span>}
                    </Checkbox>

                    {visible && (
                        <Input
                            ref={ref}
                            errorMessage={error?.message}
                            isInvalid={invalid}
                            label={props.label}
                            name={name}
                            type={type}
                            validationBehavior="aria"
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                        />
                    )}
                </div>
            )}
        />
    )
}
