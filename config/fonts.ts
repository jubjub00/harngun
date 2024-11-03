import { Noto_Sans_Thai as FontNoto } from 'next/font/google'

export const fontNoto = FontNoto({
    subsets: ['thai', 'latin'],
    variable: '--font-noto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})
