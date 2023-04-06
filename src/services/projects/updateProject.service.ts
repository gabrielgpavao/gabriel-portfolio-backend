import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { Technology } from '../../entities/technologies.entity';
import { tOutputTeste, tProjectRepo, tUpdateProjectData } from '../../interfaces/projects.interfaces';
import { tTechRepo } from '../../interfaces/technologies.interfaces';

export async function updateProjectService (projectData: tUpdateProjectData, projectId: number): Promise<Project> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)

	const oldProject: Project | null = await projectRepo.findOneBy({ id: projectId })
	
	let handleProject: tOutputTeste | Omit<tOutputTeste, 'technologies'>;

	if (Object.keys(projectData).includes('technologies')) {
		const getAllTechs: Technology[] = await technologyRepo.find()
		const usedTechs: Technology[] = getAllTechs.filter((tech: Technology) => projectData.technologies!.includes(tech.name))

		handleProject = {
			...projectData,
			technologies: usedTechs
		}

	} else {
		handleProject = projectData
	}
	
	const updatedProject: Project = projectRepo.create({
		...oldProject,
		...handleProject
	})

	await projectRepo.save(updatedProject)

	return updatedProject
}
