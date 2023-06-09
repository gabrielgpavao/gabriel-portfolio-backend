import { DeepPartial, Repository } from 'typeorm';
import { z } from 'zod';
import { Project } from '../entities/projects.entity';
import { inputProjectDataSchema, outputProjectDataSchema, projectsListSchema } from '../schemas/projects.schemas';
import { TechNameEnumSchema } from '../schemas/technologies.schemas';

type tProjectRepo = Repository<Project>

type tTechNameEnum = z.infer<typeof TechNameEnumSchema>
type tInputProjectData = z.infer<typeof inputProjectDataSchema>
type tOutputProjectData = z.infer<typeof outputProjectDataSchema>
type tProjectsList = z.infer<typeof projectsListSchema>
type tUpdateProjectData = DeepPartial<tInputProjectData>
type tOptionalUpdateData = DeepPartial<Omit<tOutputProjectData, 'id'>>

export {
	tProjectRepo,
	tTechNameEnum,
	tInputProjectData,
	tOutputProjectData,
	tProjectsList,
	tUpdateProjectData,
	tOptionalUpdateData
}
