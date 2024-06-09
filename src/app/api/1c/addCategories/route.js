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
    const deleteOrderProducts = await prismaClient.orderProduct.deleteMany({})
    const deleteProducts = await prismaClient.product.deleteMany({})
    const deleteCategory = await prismaClient.category.deleteMany({})

    for (let ctg in data) {
        const createCategory = await prismaClient.category.create({
            data: {
                name: data[ctg].name,
                slug: data[ctg].slug,
                image_url: data[ctg].image_url
            }
        })
    }

    return new Response(JSON.stringify("ok"), {
        status: 200,
    })
}

