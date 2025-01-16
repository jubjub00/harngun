import React, { useEffect } from 'react'
import NextHead from 'next/head'

import { siteConfig } from '@/config/site'
import useGlobalState from '@/store/globalState'

export const Head = () => {
    const { setUser } = useGlobalState()

    useEffect(() => {
        console.log('window.Telegram.WebApp', window?.Telegram?.WebApp)

        if (typeof window !== 'undefined' && window?.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp
            const body = new FormData()

            body.append(user, webApp.initDataUnsafe?.user)
            body.append(hash, webApp.initData)

            fetch('/api/telegram', {
                body,
                method: 'POST',
            }).then(() => {
                setUser(webApp.initDataUnsafe?.user)
            })
        }
    }, [])

    return (
        <NextHead>
            <title>{siteConfig.name}</title>
            <meta key="title" content={siteConfig.name} property="og:title" />
            <meta content={siteConfig.description} property="og:description" />
            <meta content={siteConfig.description} name="description" />
            <meta
                key="viewport"
                content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                name="viewport"
            />
            <link href="/favicon.ico" rel="icon" />
            <script async src="https://telegram.org/js/telegram-web-app.js?56" />
        </NextHead>
    )
}
