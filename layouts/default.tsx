import { Head } from './head'

export default function DefaultLayout({ children, search }: { children: React.ReactNode, search?: React.ReactNode }) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head />
            {search}
            <main className="container mx-auto px-6 overflow-y-scroll">{children}</main>
        </div>
    )
}
