import type { AppProps } from 'next/app'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

import { fontNoto } from '@/config/fonts'
import '@/styles/globals.css'
import { Footer } from '@/components/footer'
import useGlobalState from '@/store/globalState'

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { setUser } = useGlobalState()

    useEffect(() => {
        if (typeof window !== 'undefined' && window?.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp
            
            //verify
            // fetch('/api/telegram', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         user: webApp.initDataUnsafe?.user,
            //         hash: webApp.initDataUnsafe?.hash,
            //         initData: webApp.initData,
            //     }),
            // }).then((res) => {
            //     console.log('res',res);
            //     setUser(webApp.initDataUnsafe?.user)
            // })
            setUser(webApp.initDataUnsafe?.user)
        }
    }, [])

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
