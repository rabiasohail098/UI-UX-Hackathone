"use strict"
import User from "../models/userModel"
import nodemailer from 'nodemailer';
import bcryptjs from "bcryptjs"
export const sendEmail = async ({ email, emailType, userId }:any) => {
    try {
       const handleToken =  await bcryptjs.hash(userId.toString(),10)
        if (emailType === "VERIFY") {
                await User.findByIdAndUpdate(userId,{verifyToken:handleToken, verifyTokenExpiry:Date.now()+ 3600000},)
            }else if (emailType == "RESET") {
                await User.findByIdAndUpdate(userId,{forgotPasswordToken:handleToken, forgotPasswordTokenExpiry:Date.now()+ 3600000},)
            }



       // Looking to send emails in production? Check out our Email API/SMTP product!
const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "099a883c127eb4",
      pass: "13dbfce0eea21a"
    }
  });

        const mailOption = {
            from: "",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${handleToken}">Here</a> to ${emailType === "VERIFY" ? "Verify your email" : "reset your password"} or copy and paste the link blow in your browser.
            <br>${process.env.DOMAIN}/verifyemail?token=${handleToken}</p>`,
            
        }

        const mailOption1 = {
            from: "",
            to: email,
            subject: emailType === "RESET" ? "Reset your password" : "Verify your email",
            html: `<p>Click <a href="${process.env.DOMAIN}/resetpasswordemail?token=${handleToken}">Here</a> to ${emailType === "RESET" ? "reset your password" : "Verify your email"} or copy and paste the link blow in your browser.
            <br>${process.env.DOMAIN}/resetpasswordemail?token=${handleToken}</p>`,
            
        }
        
        const mailResponse = await transport.sendMail(mailOption)
        const mailResponse1 = await transport.sendMail(mailOption1)
        return { mailResponse, mailResponse1 }
       
     
    } catch (error:any) {
        throw new Error (error.message)
    }
}