import { CardSpend } from '@/components/HomePage/CardSpend'
import DefaultLayout from '@/layouts/default'

export default function IndexPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                <CardSpend />
            </section>
        </DefaultLayout>
    )
}
