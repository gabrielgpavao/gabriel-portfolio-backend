import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { tInputProjectData, tOutputProjectData, tProjectRepo } from '../../interfaces/projects.interfaces';
import { outputProjectDataSchema } from '../../schemas/projects.schemas';

export async function createProjectService (projectData: tInputProjectData): Promise<tOutputProjectData> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)

	const newProject: Project = projectRepo.create(projectData)

	await projectRepo.save(newProject)

	return outputProjectDataSchema.parse(newProject)
}
