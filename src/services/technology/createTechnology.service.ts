import { AppDataSource } from '../../data-source';
import { Technology } from '../../entities/technologies.entity';
import { tInputTechnologyData } from '../../interfaces/technologies.interfaces';
import { tTechRepo } from '../../interfaces/technologies.interfaces';
import { TechNameEnumSchema } from '../../schemas/technologies.schemas';

export async function createTechnologyService (techList: tInputTechnologyData): Promise<void> {
	techList.forEach((tech) => {
		tech.name = TechNameEnumSchema.parse(tech.name)
	})
	
	const technologyRepo: tTechRepo = AppDataSource.getRepository(Technology)
	
	await technologyRepo
    	.createQueryBuilder()
    	.insert()
    	.into(Technology)
    	.values(techList)
		.orIgnore()
    	.execute()
}
