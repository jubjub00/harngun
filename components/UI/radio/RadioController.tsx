import { Radio, RadioGroup, RadioProps } from '@heroui/react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

interface ValueProps extends RadioProps {
    label: string
}

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
    isRequired?: boolean
    values: ValueProps[]
}

export default function RadioController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: PropsComponent<TFieldValues, TName>) {
    return (
        <Controller
            {...props}
            render={({ field: { value, onChange } }) => (
                <RadioGroup label={props.label} value={value} onValueChange={onChange}>
                    {props.values.map((radio, key) => (
                        <Radio key={key} value={radio.value}>
                            {radio.label}
                        </Radio>
                    ))}
                </RadioGroup>
            )}
        />
    )
}
