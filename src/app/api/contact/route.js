import dbConn from "@/utils/dbconn";
import Contact from "@/model/contact";
import { NextResponse } from "next/server";
export async function POST(req, res){
    try {
        const body=await req.json();
        await dbConn();
        await Contact.create(body);
        return NextResponse.json(
            {
                message:"message send successfully",
            },
            {
                status:200
            }
        )
    } catch (error) {
        console.log("Error:", error);
        return NextResponse.json({
            message:"meesage not send "
        },{
            status:400
        })
    }
}