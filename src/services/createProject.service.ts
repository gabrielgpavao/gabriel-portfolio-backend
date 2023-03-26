import { AppDataSource } from '../data-source';
import { Project } from '../entities/projects.entity';
import { tProjectRepo } from '../interfaces/projects.interfaces';

export async function createProjectService (projectData: Project) {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)

	const newProject: Project = projectRepo.create(projectData)

	await projectRepo.save(newProject)

	return newProject
}
