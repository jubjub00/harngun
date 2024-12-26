import { Header } from '@/components/Header/index'
import DefaultLayout from '@/layouts/default'

export default function SearchLayout({
    children,
    pickDatable,
    creatable,
}: {
    children: React.ReactNode
    pickDatable?: boolean
    creatable?: boolean
}) {
    return (
        <DefaultLayout
            search={
                <header className="sticky top-0 z-10">
                    <Header creatable={creatable} pickDatable={pickDatable} />
                </header>
            }
        >
            {children}
        </DefaultLayout>
    )
}
