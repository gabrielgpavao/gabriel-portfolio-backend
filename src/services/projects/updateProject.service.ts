import { AppDataSource } from '../../data-source';
import { Project } from '../../entities/projects.entity';
import { Technology } from '../../entities/technologies.entity';
import { tOptionalUpdateData, tProjectRepo, tUpdateProjectData } from '../../interfaces/projects.interfaces';
import { tTechRepo } from '../../interfaces/technologies.interfaces';

export async function updateProjectService (projectData: tUpdateProjectData, projectId: number): Promise<Project> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)

	const oldProject: Project | null = await projectRepo.findOneBy({ id: projectId })
	
	let handleNewProject: tOptionalUpdateData | Omit<tOptionalUpdateData, 'technologies'>;

	if (projectData.technologies) {
		const getAllTechs: Technology[] = await technologyRepo.find()
		const usedTechs: Technology[] = getAllTechs.filter((tech: Technology) => projectData.technologies!.includes(tech.name))

		handleNewProject = {
			...projectData,
			technologies: usedTechs
		}

	} else {
		handleNewProject = projectData
	}
	
	const updatedProject: Project = projectRepo.create({
		...oldProject,
		...handleNewProject
	})

	await projectRepo.save(updatedProject)

	return updatedProject
}
