import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel";
import GoogleProvider from "next-auth/providers/google";
import AppleProvider from "next-auth/providers/apple"
import bcrypt from "bcryptjs";
import { error } from "console";



export const authOptions: NextAuthOptions = {
    providers: [
        
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: {
                    label: "Name", type: "text",
                    placeholder: "Rabia Sohail",
                },
                email:{label:"Email",type:"email",placeholder:"abc123@ymail.com"},
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials: any): Promise<any>{
                await Connect()
                try {
               const user = await User.findOne({
                        $or:[
                            { email: credentials.identifier },
                            {username: credentials.identifier}
                        ]
               })
                    if (!user) {
                        throw new Error ('No user found with this email')

                    }
                    if (!user.isVerified) {
                        throw new Error('Please verify your account first before login')
                    }
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    if (isPasswordCorrect) {
                        return user
                    } else {
                        throw new Error('Incorrect Password')
                    }
                } catch (error:any) {
                    throw new Error(error)
                }
           
            }
        })
    ]
}