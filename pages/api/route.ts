export async function GET(request: Request) {
    // const headersList = await headers()
    // const referer = headersList.get('referer')

    return new Response('Hello, Next.js!', {
        status: 200,

        //   headers: { referer: referer },
    })
}

export async function POST(request: Request) {
    // const headersList = await headers()
    // const referer = headersList.get('referer')

    console.log('POST')

    return new Response('Hello, Next.js!', {
        status: 200,

        //   headers: { referer: referer },
    })
}
