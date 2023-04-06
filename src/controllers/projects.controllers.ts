import { Request, Response } from 'express';
import { tInputProjectData, tOutputProjectData } from '../interfaces/projects.interfaces';
import { createProjectService } from '../services/projects/createProject.service';

async function createProjectController (request: Request, response: Response): Promise<Response> {
	const projectData: tInputProjectData = request.body

	const newProject: tOutputProjectData = await createProjectService(projectData)
	
	return response.status(201).json(newProject)
}

export {
	createProjectController
}
