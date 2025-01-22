export interface TelegramUserType {
    id: number
    first_name: string
    last_name?: string
    photo_url?: string
    username?: string
    language_code?: string
    allows_write_to_pm?: boolean
}

export interface IinitDataUnsafe {
    user: TelegramUserType
    hash: string
}

interface Telegram {
    WebApp: {
        initData: string
        initDataUnsafe: IinitDataUnsafe
        MainButton: {
            setText: (text: string) => Telegram['WebApp']['MainButton']
            show: () => Telegram['WebApp']['MainButton']
            hide: () => Telegram['WebApp']['MainButton']
            onClick: (callback: () => void) => void
        }
        setBackgroundColor: (color: string) => void
    }
}
declare global {
    interface Window {
        Telegram?: Telegram
    }
}
