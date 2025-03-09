import { Checkbox } from '@heroui/react'
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

export default function CheckboxController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: PropsComponent<TFieldValues, TName>) {
    return (
        <Controller
            {...props}
            render={({ field: { name, onChange } }) => (
                <Checkbox name={name} onValueChange={onChange}>
                    <span className="text-foreground-500">{props.label}</span>
                </Checkbox>
            )}
        />
    )
}
