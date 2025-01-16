import { Card, CardHeader, CardBody, Avatar, Divider } from '@nextui-org/react'

import DefaultLayout from '@/layouts/default'
import useGlobalState from '@/store/globalState'

export default function MindPage() {
    const { user } = useGlobalState()

    return (
        <DefaultLayout>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mb-[4rem]">
                <Card fullWidth={true} shadow="sm">
                    <CardHeader className="flex items-center justify-center">
                        <Avatar size="lg" src={user?.photo_url} />
                    </CardHeader>
                    <CardBody className="p-3 text-default-400">
                        <div className="flex justify-between">
                            <h6>id</h6>
                            <h6>{user?.id}</h6>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between">
                            <h6>name</h6>
                            <h6>{user?.username}</h6>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between">
                            <h6>first name</h6>
                            <h6>{user?.first_name}</h6>
                        </div>
                        <Divider className="my-2" />
                        <div className="flex justify-between">
                            <h6>last name</h6>
                            <h6>{user?.last_name}</h6>
                        </div>
                    </CardBody>
                </Card>
            </section>
        </DefaultLayout>
    )
}
