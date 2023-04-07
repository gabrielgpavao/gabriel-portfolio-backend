import { createTransport } from 'nodemailer';
import { iEmailBodyRequest, iNodemailerMessage } from './interfaces/nodemailer.interfaces'
import 'dotenv/config'

export function sendEmail ({ from, name, subject, text }: iEmailBodyRequest): void {
	const transport = createTransport({
		host: process.env.SMTP_HOST,
		port: 587,
		secure: false,
		auth: {
		  user: process.env.SMTP_USER,
		  pass: process.env.SMTP_PASS
		}
	})
	
	const message: iNodemailerMessage = {
		from: process.env.SMTP_USER!,
		to: process.env.SMTP_USER!,
		subject,
		text: `${text}\n\nFrom ${name} - ${from}`,
		html: `<p>${text}<br/><br/>From ${name} - ${from}</p>`
	}
	
	transport.sendMail(message)
}
