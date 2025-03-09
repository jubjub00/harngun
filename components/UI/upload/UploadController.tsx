import { Input, Image } from '@heroui/react'
import { useRef, useState } from 'react'
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form'
import { AiOutlineFileImage } from 'react-icons/ai'

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
}

export default function UploadController<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: PropsComponent<TFieldValues, TName>) {
    const uploadRef = useRef<HTMLInputElement>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const imgChanged = async (e) => {
        const selectedFile = e.target.files[0]

        const formData = new FormData()

        formData.append('file', selectedFile)

        const response = await fetch('api/upload', {
            method: 'post',
            body: formData,
        })
        const dataImage = await response.json()

        if (selectedFile) {
            setPreviewUrl(URL.createObjectURL(selectedFile))
        } else {
            setPreviewUrl(null)
        }

        return dataImage
    }

    const triggerUpload = () => {
        uploadRef.current?.click()
    }

    return (
        <Controller
            {...props}
            render={({ field: { onChange } }) => (
                <div>
                    <label className="text-foreground-500">{props.label}</label>
                    <Input
                        ref={uploadRef}
                        className="hidden"
                        type="file"
                        onChange={async (e) => {
                            const data = await imgChanged(e)

                            if (data?.filename) {
                                onChange(data.filename)
                            }
                        }}
                    />
                    {!previewUrl ? (
                        <AiOutlineFileImage
                            cursor="pointer"
                            fontSize={100}
                            onClick={triggerUpload}
                        />
                    ) : (
                        <Image
                            alt="HeroUI hero Image"
                            height={100}
                            src={previewUrl}
                            onClick={triggerUpload}
                        />
                    )}
                </div>
            )}
        />
    )
}
