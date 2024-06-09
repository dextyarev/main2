import { prismaClient } from "@/lib/prisma";

export async function POST(request) {

    let key = process.env.SKEY;

    const req = await request.json();
    const data = req.data;

    if (req.key !== key) {
        return new Response(JSON.stringify("Access denied"), {
            status: 401,
        })
    }

    const Order = await prismaClient.order.findUnique({
        where: {
            id: data.id
        }
    })

    if (!Order) {
        return new Response(JSON.stringify("Order is not exists"), {
            status: 401,
        })
    }

    const updatedOrder = await prismaClient.order.update({
        where: {
            id: data.id
        },
        data: {
            status: data.status
        }
    })

    if (req.key !== key) {
        return new Response(JSON.stringify("Access denied"), {
            status: 401,
        })
    }

    return new Response(JSON.stringify(updatedOrder), {
        status: 200,
    })
}

