import { prismaClient } from "@/lib/prisma";

export async function POST(request) {

    let key = process.env.SKEY;

    const req = await request.json()

    if (req.key !== key) {
        return new Response(JSON.stringify("Access denied"), {
            status: 401,
        })
    }

    const products = await prismaClient.product.findMany();

    return new Response(JSON.stringify(products), {
        status: 200,
    })
}

