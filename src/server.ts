import { app } from './app'
import { AppDataSource } from './data-source'
import 'dotenv/config'
import { tTechNameEnum } from './interfaces/projects.interfaces';
import { createTechnologyService } from './services/technology/createTechnology.service';
import { ZodError } from 'zod';
const technologies: Array<iTechObject> = require('../technologies.json').technologies;

interface iTechObject {
	name: tTechNameEnum
}

AppDataSource.initialize().then(async () => {
    console.log('Database connected!')

	try {
		await createTechnologyService(technologies)
	} catch (error) {
		if (error instanceof ZodError) {
			console.log(error.flatten().formErrors)
		}
	}
	
	const PORT: string = process.env.PORT || '3000'
		
    app.listen(PORT, () => {
        console.log('Server is running!')
    })
}).catch((error) => {
    console.log(error)
})
