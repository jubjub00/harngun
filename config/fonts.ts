import {
    Fira_Code as FontMono,
    Inter as FontSans,
    IBM_Plex_Sans_Thai_Looped as FontIbm,
    Noto_Sans_Thai as FontNoto
} from 'next/font/google'

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const fontIbm = FontIbm({
    subsets: ['thai'],
    variable: '--font-ibm',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const fontNoto = FontNoto({
    subsets: ['thai'],
    variable: '--font-noto',
    weight: ['100', '200', '300', '400', '500', '600', '700'],
})

