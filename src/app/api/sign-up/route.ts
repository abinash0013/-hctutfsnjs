import dbConnect from "@/lib/dbConnect";
import UserModal from "@/modal/user";
import bycript from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request){
    await dbConnect()
try {
    const {username, email, password} = await request.json()
    const existingUserVerifiedByUsername = await UserModal.findOne({
        username,
        isVerified: true
    })
    if(existingUserVerifiedByUsername){
        return Response.json({
            success: false,
            message: "Username is already taken"
        }, {status: 400})
    }
    const existingUserByEmail = await UserModal.findOne({email})
    if(existingUserByEmail){

    } else {
        const hasedPassword = await bcrypt.hash(password, 10)
        const expireDate = new Date();
        expiryDate.setHours(expiryDate.getHours() + 1)
    }
} catch (error) {
    console.error("Error Registering user", error);
    return Response.json({
        success: false,
        message: "Error Registering user"
    },
      {
        status: 500,
    })
    
    
}
}