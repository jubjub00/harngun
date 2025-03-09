import { Select, SelectItem } from '@heroui/react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'

interface IList {
    key: string
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
    list: IList[]
    selectionMode?: 'single' | 'multiple'
    isRequired?: boolean
}

export default function SelectController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ selectionMode = 'multiple', ...props }: PropsComponent<TFieldValues, TName>) {
    return (
        <Controller
            {...props}
            render={({ field: { name, onChange } }) => (
                <Select
                    isRequired={props.isRequired}
                    label={props.label}
                    name={name}
                    selectionMode={selectionMode}
                    onChange={onChange}
                >
                    {props.list?.map((v) => <SelectItem key={v.key}>{v.label}</SelectItem>)}
                </Select>
            )}
        />
    )
}
