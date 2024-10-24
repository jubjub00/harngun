import { Html, Head, Main, NextScript } from 'next/document'
import { cn } from '@nextui-org/theme'

import { fontIbm } from '@/config/fonts'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body
                className={cn('min-h-screen font-ibm bg-background antialiased', fontIbm.variable)}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
