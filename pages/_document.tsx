import { Html, Head, Main, NextScript } from 'next/document'
import { cn } from '@nextui-org/theme'
import Script from 'next/script'

import { fontNoto } from '@/config/fonts'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@100;200;300;400;500;600;700&family=Noto+Sans+Thai:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <Script
                    src="https://telegram.org/js/telegram-web-app.js"
                    strategy="beforeInteractive"
                />
            </Head>
            <body
                className={cn(
                    'min-h-screen font-noto bg-background antialiased purple-light',
                    fontNoto.variable,
                )}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
