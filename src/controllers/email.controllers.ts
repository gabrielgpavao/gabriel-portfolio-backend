import { Request, Response } from 'express';
import { sendEmail } from '../nodemailer.util';
import { inputEmailDataSchema } from '../schemas/email.schemas';
import { tInputEmailData } from '../interfaces/nodemailer.interfaces';

export async function sendEmailController (request: Request, response: Response): Promise<Response> {
	const emailData: tInputEmailData = inputEmailDataSchema.parse(request.body)
	
	sendEmail(emailData)
	
	return response.status(201).json({ message: 'Email sent with success'})
}
