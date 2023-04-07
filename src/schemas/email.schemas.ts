import { z } from 'zod';

const inputEmailDataSchema = z.object({
	from: z.string().email(),
	name: z.string(),
	subject: z.string(),
	text: z.string()
})

export {
	inputEmailDataSchema
}
