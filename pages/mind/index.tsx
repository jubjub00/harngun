import { Card, CardHeader, CardBody, Avatar, Divider } from '@nextui-org/react'

import DefaultLayout from '@/layouts/default'

export default function MindPage() {
    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                <Card fullWidth={true} shadow="sm">
                    <CardHeader className="flex items-center justify-center">
                        <Avatar size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    </CardHeader>
                    <CardBody className="p-3 text-default-400">
                        <div className="flex justify-between">
                            <h6>id</h6>
                            <h6>xxx</h6>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between">
                            <h6>name</h6>
                            <h6>pink</h6>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </DefaultLayout>
    )
}
