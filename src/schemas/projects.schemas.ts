import { z } from 'zod';

const inputProjectDataSchema = z.object({
	name: z.string().max(16, 'The max length allowed for this field is 16 caracters'),
	description: z.string().max(150, 'The max length allowed for this field is 150 caracters'),
	responsive: z.boolean(),
	link: z.string(),
	repository: z.string(),
	backgroundImg: z.string()
})

const outputProjectDataSchema = inputProjectDataSchema.extend({
	id: z.number().int()
})

export {
	inputProjectDataSchema,
	outputProjectDataSchema
}
