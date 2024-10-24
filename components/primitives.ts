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

export const navTv = tv({
    variants: {
        active: {
            true: 'transition ease-in-out delay-150 bg-blue-500 duration-300',
        },
    },
})
