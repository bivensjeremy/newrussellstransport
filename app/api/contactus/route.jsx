import ContactEmailRender from '@/app/api/contactus/ContactEmailRender';
import { mailOpts, transporter } from '@/app/config/nodemailer';
import { render } from '@react-email/render';
import { NextResponse } from 'next/server'
import Logo from "../../../public/russelltransportlogo.png"

export async function POST(request) {
    const values = await request.json();
    const {name, subject, email, message} = values;

    const emailHtml = render(
        <ContactEmailRender 
            name={name}
            email={email}
            subject={subject} 
            message={message}
            logo={Logo}
        />
    )

    try {
        await transporter.sendMail({
            ...mailOpts,
            subject: `Russell's Transport | ${subject}`,
            replyTo: email,
            text: message,
            html: emailHtml
        })
        return NextResponse.json({ status: "Success" })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: "Fail"})
    }
};

