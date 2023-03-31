import { Repository } from 'typeorm'
import { z } from 'zod'
import { Technology } from '../entities/technologies.entity'
import { inputTechnologyDataSchema } from '../schemas/technologies.schemas'

type tTechRepo = Repository<Technology>

type tInputTechnologyData = z.infer<typeof inputTechnologyDataSchema>

export {
	tTechRepo,
	tInputTechnologyData
}
