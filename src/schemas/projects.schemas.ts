import { z } from 'zod';
import { inputTechnologyDataSchema } from './technologies.schemas';

const inputProjectDataSchema = z.object({
	name: z.string().max(16, 'The max length allowed for this field is 16 caracters'),
	description: z.string().max(150, 'The max length allowed for this field is 150 caracters'),
	responsive: z.boolean(),
	link: z.string(),
	repository: z.string(),
	backgroundImg: z.string(),
	technologies: inputTechnologyDataSchema
})

const outputProjectDataSchema = inputProjectDataSchema.extend({
	id: z.number().int()
})

export {
	inputProjectDataSchema,
	outputProjectDataSchema
}
