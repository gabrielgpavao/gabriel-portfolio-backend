import { z } from 'zod';
import { TechNameEnumSchema, outputTechnologyDataSchema } from './technologies.schemas';

const inputProjectDataSchema = z.object({
	name: z.string().max(16, 'The max length allowed for this field is 16 caracters'),
	description: z.string().max(150, 'The max length allowed for this field is 150 caracters'),
	responsive: z.boolean(),
	websiteUrl: z.string(),
	repositoryUrl: z.string(),
	backgroundImg: z.string(),
	technologies: z.array(TechNameEnumSchema)
})

const outputProjectDataSchema = inputProjectDataSchema.omit({ technologies: true }).extend({
	technologies: outputTechnologyDataSchema,
	id: z.number().int()
})

export {
	inputProjectDataSchema,
	outputProjectDataSchema
}
