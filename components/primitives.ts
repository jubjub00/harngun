import { tv } from 'tailwind-variants'

export const link = tv({
    base: 'flex',
    variants: {
        direct: {
            rows: 'items-center gap-1',
            cols: 'flex-col items-center',
        },
    },
    defaultVariants: {
        direct: 'rows',
    },
})

export const navIconFooterTv = tv({
    base: 'absolute top-0 pt-3',
    variants: {
        active: {
            true: 'transition ease-in-out delay-50 duration-300 -translate-y-3 scale-110 p-2 rounded-full border-8 border-white bg-primary',
        },
    },
})
