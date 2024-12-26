import { Input } from '@nextui-org/react'
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
}

export default function InputController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: PropsComponent<TFieldValues, TName>) {
    return (
        <Controller
            {...props}
            render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error },
            }) => (
                <Input
                    ref={ref}
                    isRequired
                    errorMessage={error?.message}
                    isInvalid={invalid}
                    label={props.label}
                    name={name}
                    validationBehavior="aria"
                    value={value}
                    onBlur={onBlur}
                    onChange={onChange}
                />
            )}
        />
    )
}
