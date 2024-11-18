import { Header } from '@/components/header'
import DefaultLayout from '@/layouts/default'

export default function SearchLayout({ children, pickDatable }: { children: React.ReactNode, pickDatable?: boolean }) {
    return (
        <DefaultLayout
            search={
                <header className="sticky top-0 z-10">
                    <Header pickDatable={pickDatable} />
                </header>
            }
        >
            {children}
        </DefaultLayout>
    )
}
