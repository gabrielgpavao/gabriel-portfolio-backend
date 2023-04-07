import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { tProjectRepo, tProjectsList, tTechNameEnum } from '../../interfaces/projects.interfaces';
import { projectsListSchema } from '../../schemas/projects.schemas';

export async function getAllProjectsService (): Promise<tProjectsList> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)

	const findProjects: Project[] = await projectRepo.find({
		relations: {
			technologies: true
		}
	})

	const projectsList: tProjectsList = findProjects.map((project) => {
		const technologies: Array<tTechNameEnum> = project.technologies.map((tech) => tech.name)
		return {
			...project,
			technologies
		}
	})

	return projectsListSchema.parse(projectsList)
}
