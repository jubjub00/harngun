// telegram-web-app.d.ts
interface Telegram {
    WebApp: {
        initData: string
        initDataUnsafe: {
            user: {
                id: number
                first_name: string
                last_name?: string
                username?: string
                language_code?: string
            }
        }
        MainButton: {
            setText: (text: string) => Telegram['WebApp']['MainButton']
            show: () => Telegram['WebApp']['MainButton']
            hide: () => Telegram['WebApp']['MainButton']
            onClick: (callback: () => void) => void
        }
        setBackgroundColor: (color: string) => void
    }
}

interface Window {
    Telegram?: Telegram
}
