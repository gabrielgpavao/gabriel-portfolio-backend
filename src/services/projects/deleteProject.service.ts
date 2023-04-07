import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { tProjectRepo } from '../../interfaces/projects.interfaces';

export async function deleteProjectService (projectId: number): Promise<void> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)

	await projectRepo.delete(projectId)
}
