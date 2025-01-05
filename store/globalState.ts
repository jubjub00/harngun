import { create } from 'zustand'

import { TelegramUserType } from '@/types/telegram-web-app'

interface GlobalState {
    user: TelegramUserType | null
    setUser: (user: TelegramUserType) => void
}

const useGlobalState = create<GlobalState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}))

export default useGlobalState
