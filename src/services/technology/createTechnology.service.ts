import { AppDataSource } from '../../data-source';
import { Technology } from '../../entities/technologies.entity';
import { tTechNameEnum } from '../../interfaces/projects.interfaces';
import { tOutputTechnologyData, tTechRepo } from '../../interfaces/technologies.interfaces';
import { outputTechnologyDataSchema, TechNameEnumSchema } from '../../schemas/technologies.schemas';

export async function createTechnologyService (techName: tTechNameEnum): Promise<tOutputTechnologyData> {
	techName = TechNameEnumSchema.parse(techName)
	
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)

	const newTechnology = technologyRepo.create({
		name: techName
	})

	await technologyRepo.save(newTechnology)

	return outputTechnologyDataSchema.parse(newTechnology)
}
