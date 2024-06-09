import { prismaClient } from "@/lib/prisma";

export async function POST(request) {

    let key = process.env.SKEY;
    let data = [];
    let products = [];

    const req = await request.json()
    
    if (req.key !== key) {
        return new Response(JSON.stringify("Access denied"), {
            status: 401,
        })
    }

    const userData = await prismaClient.order.findMany();

    for (let order in userData) {
        products = [];

        const user = await prismaClient.user.findUnique({
            where: {
                id: userData[order].userId
            }
        })

        const orderProducts = await prismaClient.orderProduct.findMany({
            where: {
                orderId: userData[order].id
            }
        })
        console.log(orderProducts);
        for (let product in orderProducts) {

            const productinfo = await prismaClient.product.findMany({
                where: {
                    id: orderProducts[product].productId
                }
            })
            
            productinfo[0].quantity = orderProducts[product].quantity
            products.push(productinfo[0])
        }
        
        delete user?.password
        delete user?.id

        data.push({user: user, order: userData[order], orderProducts: products})
    }

    return new Response(JSON.stringify(data), {
        status: 200,
    })
}

