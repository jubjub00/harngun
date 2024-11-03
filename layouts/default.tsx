import { Head } from './head'

import { Header } from '@/components/header'

import { Footer } from '@/components/footer'
export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head />
            <header className="sticky top-0 z-10">
                <Header />
            </header>
            <main className="container mx-auto px-6 overflow-y-scroll">{children}</main>
            <footer className="w-full fixed bottom-0">
                <Footer />
            </footer>
        </div>
    )
}
