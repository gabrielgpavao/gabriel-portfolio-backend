import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { Technology } from '../../entities/technologies.entity';
import { tInputProjectData, tOutputProjectData, tProjectRepo } from '../../interfaces/projects.interfaces';
import { tTechRepo } from '../../interfaces/technologies.interfaces';
import { outputProjectDataSchema } from '../../schemas/projects.schemas';

export async function createProjectService (projectData: tInputProjectData): Promise<tOutputProjectData> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)

	const getAllTechs: Technology[] = await technologyRepo.find()
	const usedTechs: Technology[] = getAllTechs.filter((tech: Technology) => projectData.technologies.includes(tech.name))

	const newProject: Project = projectRepo.create({
		...projectData,
		technologies: usedTechs
	})
	
	await projectRepo.save(newProject)
	
	return outputProjectDataSchema.parse(newProject)
}
