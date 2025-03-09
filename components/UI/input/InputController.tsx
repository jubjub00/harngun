import { Input } from '@heroui/react'
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
    isRequired?: boolean
}

export default function InputController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ type = 'text', ...props }: PropsComponent<TFieldValues, TName>) {
    return (
        <Controller
            {...props}
            render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error },
            }) => (
                <Input
                    ref={ref}
                    errorMessage={error?.message}
                    isInvalid={invalid}
                    isRequired={props.isRequired}
                    label={props.label}
                    name={name}
                    type={type}
                    validationBehavior="aria"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => {
                        if (type === 'number') {
                            onChange(+e.target.value)

                            return
                        }

                        onChange(e.target.value)
                    }}
                />
            )}
        />
    )
}
