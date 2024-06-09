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

    for (let product in data) {

        let category = await prismaClient.category.findFirst({
            where: {
                slug: data[product].category
            }
        })

        const createProduct = await prismaClient.product.create({
            data: {
                name: data[product].name,
                slug: data[product].slug,
                description: data[product].description,
                basePrice: data[product].basePrice,
                category: {
                    connect: {
                        id: category.id
                    }
                },
                imageUrls: data[product].imageUrls,
                discountPercentage: data[product].discountPercentage
            }
        })
    }

    return new Response(JSON.stringify("ok"), {
        status: 200,
    })
}

