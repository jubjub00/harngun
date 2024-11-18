import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'

import { fontNoto } from '@/config/fonts'
import '@/styles/globals.css'

import { Footer } from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider>
                <main>
                    <Component {...pageProps} />
                </main>
                <footer className="w-full fixed bottom-0">
                    <Footer />
                </footer>
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export const fonts = {
    noto: fontNoto.style.fontFamily,
}
