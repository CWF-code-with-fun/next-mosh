import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import  prisma  from "@/prisma/client";

interface Props{
    params : {id:string}
}

export async function  GET(request : NextRequest,{params:{id}}:Props){
    
    if(!id)
    return NextResponse.json({error:"User not found"},{status:404})
    console.log("id",typeof(id));
    let user;
    try {
         user= await prisma.user.findUnique({
            where: {id:Number(id)},
        })
    } catch (error) {
        console.log("error",error);
        
    }
    if(!user)
    return NextResponse.json({error:"User not found"},{status:404})

    return NextResponse.json(user)
}

export async function PUT(request:NextRequest,{params:{id}}:Props){

    const body= await request.json();
    const validate= schema.safeParse(body)
    if(!validate.success)
        return NextResponse.json({error:validate.error.errors},{status:400})
        let user=await prisma.user.findUnique({
            where:{id:parseInt(id)}
        })
    if(!user)
        return NextResponse.json({error:"User already exists"},{status:404})
    user=await prisma.user.update({
        where: {
            id: user.id
        },
        data: body
    });
    if(!user)
    return NextResponse.json({error:"User can't be updated"},{status:404})

    return NextResponse.json({id:1,name:user.name})
}

export async function DELETE(request:NextRequest,{params:{id}}:Props){
    let user=await prisma.user.findUnique({
        where:{id:parseInt(id)}
    })
    if( !user )
    return NextResponse.json({error:"User not found"},{status:404})

    user=await prisma.user.delete({
        where:{id:parseInt(id)}
    })
    if( user )
    return NextResponse.json({error:"User not found"},{status:404})
    return NextResponse.json({})
}
