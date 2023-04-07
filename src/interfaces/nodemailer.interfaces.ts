import { z } from 'zod';
import { inputEmailDataSchema } from '../schemas/email.schemas';

interface iEmailBodyRequest {
	from: string;
	name: string;
	subject: string;
	text: string;
}

interface iNodemailerMessage extends Omit<iEmailBodyRequest, 'name'> {
	to: string;
	html: string;
}

type tInputEmailData = z.infer<typeof inputEmailDataSchema>

export {
	iEmailBodyRequest,
	tInputEmailData,
	iNodemailerMessage
}
