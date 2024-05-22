import { translator } from "@/typechat/main";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { message } = await request.json()
    if (!message) {
        return NextResponse.json({
            success: false,
            message: "message cannot be empty!",
            status: 400
        })
    }
    console.log("sending message to typechat -> ", message);

    // TypeChat Implementation

    const response = await translator.translate(message as string);
    console.log("typechat done ", response);

    if (!response.success) {
        console.log(response.message);
        return NextResponse.json(response)
    }

    // console.log(response)

    return NextResponse.json(response)
}



//get request
// export async function GET() {
//     return NextResponse.json({
//         message: "working"
//     })
// }
