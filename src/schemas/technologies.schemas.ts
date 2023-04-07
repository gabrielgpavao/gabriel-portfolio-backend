import { z } from 'zod';
import { TECHNAME } from '../entities/technologies.entity';

const TechNameEnumSchema = z.enum(TECHNAME)

const inputTechnologyDataSchema = z.array(z.object({
	name: TechNameEnumSchema
}))

const outputTechnologyDataSchema = inputTechnologyDataSchema.element.extend({
	id: z.number().int()
}).array()

export {
	TechNameEnumSchema,
	inputTechnologyDataSchema,
	outputTechnologyDataSchema
}
