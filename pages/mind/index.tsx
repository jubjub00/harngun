import DefaultLayout from '@/layouts/default'
import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar'

export default function MindPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                <Card className="w-full" shadow="sm">
                    <CardHeader>
                        <Avatar
                            className="fixed inset-x-2/4 z-10 top-3"
                            size="lg"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        />
                    </CardHeader>
                    <CardBody className="p-3 text-default-400">name</CardBody>
                </Card>
            </section>
        </DefaultLayout>
    )
}
