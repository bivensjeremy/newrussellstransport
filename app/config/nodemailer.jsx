import nodemailer from "nodemailer"

const USER = process.env.NEXT_PUBLIC_USER
const PASSWORD = process.env.NEXT_PUBLIC_PASS

export const transporter = nodemailer.createTransport({
    host: "mail.privateemail.com",
    port: 465,
    secure: true,
    auth: {
        user: USER,
        pass: PASSWORD
    }
});

export const mailOpts = {
    from: USER,
    to: 'bivens.jeremy@gmail.com'
}