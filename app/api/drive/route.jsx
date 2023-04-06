import { mailOpts, transporter } from "@/app/config/nodemailer";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import DriveEmailRender from "./DriveEmailRender";

export async function POST(request) {
    const values = await request.json();
    const {firstName, lastName, street, city, state, zip, phoneNumber, secondaryPhoneNumber, email, drivingExp, carriers, accidents, violations, referred} = values;

    const emailHtml = render(
        <DriveEmailRender 
            firstName={firstName}
            lastName={lastName}
            street={street}
            city={city}
            state={state}
            zip={zip}
            phoneNumber={phoneNumber}
            secondaryPhoneNumber={secondaryPhoneNumber}
            email={email}
            drivingExp={drivingExp}
            carriers={carriers}
            accidents={accidents}
            violations={violations}
            referred={referred}
        />
    )

    try {
        await transporter.sendMail({
            ...mailOpts,
            subject: "Russell's Transport | Drive For Us",
            replyTo: email,
            // text: values,
            html: emailHtml
        })
        return NextResponse.json({ status: "Success" })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: "Fail" })
    }
}