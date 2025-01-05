import { useEffect, useState } from 'react'

import { CardSpend } from '@/components/HomePage/CardSpend'
import SearchLayout from '@/layouts/header'

export default function IndexPage() {
    const [test, setTest] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined' && window?.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp

            // Initialize the WebApp here
            console.log('Telegram WebApp initialized:', webApp)

            // Example: Access user data
            console.log('User Info:', webApp.initDataUnsafe?.user)

            setTest(JSON.stringify(webApp.initDataUnsafe?.user))
        }
    }, [])

    return (
        <SearchLayout creatable={true}>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                <span className="text-black">aaa{test}bbb</span>
                <CardSpend />
            </section>
        </SearchLayout>
    )
}
