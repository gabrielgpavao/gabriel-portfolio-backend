import { Repository } from 'typeorm';
import { z } from 'zod';
import { Project } from '../entities/projects.entity';
import { inputProjectDataSchema, outputProjectDataSchema } from '../schemas/projects.schemas';

type tProjectRepo = Repository<Project>

type tInputProjectData = z.infer<typeof inputProjectDataSchema>
type tOutputProjectData = z.infer<typeof outputProjectDataSchema>

export {
	tProjectRepo,
	tInputProjectData,
	tOutputProjectData
}
