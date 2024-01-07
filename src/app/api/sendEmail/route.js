import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: 'gmail',
    auth: {
        user: 'abhayguptaak39@gmail.com',
        pass: 'cnxnswlxhsgpsdtb'
    },
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
});

export async function GET(req, res) {
    return NextResponse.json({
        "message": "Welcome"
    })
}
export async function POST(request, response) {
    const reqBody=await request.json();
    const {name,email,message}=reqBody;

    const mailOptions={
        from:{email},
        to:"abhayguptaak39@gmail.com",
        subject:"To know who you are",
        html:`Name: <b>${name}</b> <br /> Email: <b>${email}</b> <br /> Message: ${message}`
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.log(err)
        }
    })
    return NextResponse.json({
        "message": "Successlly sent mail",
        "status":200
    })
}