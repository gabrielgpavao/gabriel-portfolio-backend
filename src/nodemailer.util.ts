import { createTransport } from 'nodemailer';
import { AppError } from './errors/errors';
import { iEmailBodyRequest } from './interfaces/nodemailer.interfaces';

export async function sendEmail ({from, subject, text}: iEmailBodyRequest): Promise<void> {
	const transporter = createTransport({
		host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
	})

	await transporter.sendMail({
		from: from,
		to: process.env.SMTP_USER,
		subject: subject,
		html: text

	}).then(() => {
		console.log('Email sent with success')
	}).catch((error) => {
        console.log(error)
        throw new AppError('Error sending email, try again later')
    })
}
