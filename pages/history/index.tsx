import SearchLayout from '@/layouts/header'

export default function HistoryPage() {
    return (
        <SearchLayout pickDatable={true}>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                history
            </section>
        </SearchLayout>
    )
}
