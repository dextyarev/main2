import { NextResponse } from "next/server";
import { prismaClient } from "@/lib/prisma";

export async function POST(req: any, res: any){
    const data = await req.json()
    
    const userData = await prismaClient.user.findUnique({
        where: {
          email: data.email
        }
    });

    return NextResponse.json(userData)
}

