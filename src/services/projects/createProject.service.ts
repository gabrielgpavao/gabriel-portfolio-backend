import { In } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { Technology } from '../../entities/technologies.entity';
import { tInputProjectData, tOutputProjectData, tProjectRepo, tTechNameEnum } from '../../interfaces/projects.interfaces';
import { tTechRepo } from '../../interfaces/technologies.interfaces';
import { outputProjectDataSchema } from '../../schemas/projects.schemas';

export async function createProjectService (projectData: tInputProjectData): Promise<tOutputProjectData> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)

	const techNamesList: Array<tTechNameEnum> = projectData.technologies.map((tech) => tech.name);
	
	const findTechs: Array<Technology> = await technologyRepo.findBy({name: In(techNamesList)})
	
	const newProject: Project = projectRepo.create({
		...projectData,
		technologies: findTechs
	})

	await projectRepo.save(newProject)

	return outputProjectDataSchema.parse(newProject)
}
