import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
params:{id:number}
}
export function GET(request:NextRequest,{params}:Props){
    if(params.id > 10)
    return NextResponse.json({error:"Please provide valid id"},{status:400})

    return NextResponse.json({id:"1",category:"s",name:"s"})

}

export async function PUT(request:NextRequest,{params}:Props){

    const body= await request.json();
    const validation=schema.safeParse(body);
    if(!validation.success)
    return NextResponse.json({error:"Please provide valid"},{status:400})

    if(params.id > 10)
    return NextResponse.json({error:"Please provide valid id"},{status:404})

    return NextResponse.json({id:"1",category:"s",name:body.name})

}

export function DELETE(request:NextRequest,{params}:Props){
    if(params.id>10)
    return NextResponse.json({error:"Please provide valid id"},{status:400})

    return NextResponse.json({})
}
