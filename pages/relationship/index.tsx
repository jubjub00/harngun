import { RelationshipCard } from '@/components/Relationship/RelationshipCard'
import SearchLayout from '@/layouts/header'

export default function RelationshipPage() {
    return (
        <SearchLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                <RelationshipCard />
            </section>
        </SearchLayout>
    )
}
