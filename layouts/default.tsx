import { Head } from './head'

import { Footer } from '@/components/footer'
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head />
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">{children}</main>
            <footer className="w-full fixed bottom-0">
                <Footer />
            </footer>
        </div>
    )
}
