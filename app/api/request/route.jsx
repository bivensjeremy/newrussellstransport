import { mailOpts, transporter } from '@/app/config/nodemailer';
import { render } from '@react-email/render';
import { NextResponse } from 'next/server'
import RequestEmailRender from './RequestEmailRender';


export async function POST(request) {
    const values = await request.json();
    const { firstName, lastName, company, email, phoneNumber, street, city, state, zip, trailerType, freightGuard } = values;

    const emailHtml = render(
        <RequestEmailRender
            firstName={firstName}
            lastName={lastName}
            street={street}
            city={city}
            state={state}
            zip={zip}
            phoneNumber={phoneNumber}
            company={company}
            email={email}
            trailerType={trailerType}
            freightGuard={freightGuard}
        />
    )
    try {
        await transporter.sendMail({
            ...mailOpts,
            subject: "Russell's Transport | Request Dispatch Services",
            replyTo: email,
            html: emailHtml
        })
        return NextResponse.json({ status: "Success" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: "Fail"})
    }
};

