import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props{
    params : {id:number}
}

export function  GET(request : NextRequest,{params:{id}}:Props){
    if(id>10)
    return NextResponse.json({error:"User not found"},{status:404})

    return NextResponse.json({id:1,name:"Kuntal"})
}

export async function PUT(request:NextRequest,{params:{id}}:Props){

    const body= await request.json();
    const validate= schema.safeParse(body)
    if(!validate.success)
        return NextResponse.json({error:validate.error.errors},{status:400})

    if(id >10)
        return NextResponse.json({error:"User already exists"},{status:404})

    return NextResponse.json({id:1,name:body.name})
}

export async function DELETE(request:NextRequest,{params:{id}}:Props){
    if( id> 10 )
    return NextResponse.json({error:"User not found"},{status:404})

    return NextResponse.json({})
}
