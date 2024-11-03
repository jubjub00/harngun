import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'

import { fontSans, fontMono, fontIbm, fontNoto } from '@/config/fonts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider>
                <main className="purple-light">
                    <Component {...pageProps} />
                </main>
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export const fonts = {
    sans: fontSans.style.fontFamily,
    mono: fontMono.style.fontFamily,
    ibm: fontIbm.style.fontFamily,
    noto: fontNoto.style.fontFamily,
}
