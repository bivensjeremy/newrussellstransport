import nodemailer from "nodemailer"

const USER = process.env.SENDEREMAIL
const PASSWORD = process.env.AUTHORIZATION

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