import { Repository } from 'typeorm'
import { z } from 'zod'
import { Technology } from '../entities/technologies.entity'
import { inputTechnologyDataSchema, outputTechnologyDataSchema } from '../schemas/technologies.schemas'

type tTechRepo = Repository<Technology>

type tInputTechnologyData = z.infer<typeof inputTechnologyDataSchema>

type tOutputTechnologyData = z.infer<typeof outputTechnologyDataSchema>

export {
	tTechRepo,
	tInputTechnologyData,
	tOutputTechnologyData
}
