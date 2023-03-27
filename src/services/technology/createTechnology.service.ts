import { AppDataSource } from '../../data-source';
import { Technology } from '../../entities/technologies.entity';
import { tTechRepo } from '../../interfaces/technologies.interfaces';

export async function createTechnologyService (techName: Technology): Promise<Technology> {
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)

	const newTechnology: Technology = technologyRepo.create(techName)

	await technologyRepo.save(newTechnology)

	return newTechnology
}
