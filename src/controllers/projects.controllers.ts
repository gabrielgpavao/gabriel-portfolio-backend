import { Request, Response } from 'express';
import { Project } from '../entities/projects.entity';
import { createProjectService } from '../services/createProject.service';

async function createProjectController (request: Request, response: Response): Promise<Response> {
	const projectData = request.body

	const newProject: Project = await createProjectService(projectData)
	
	return response.status(201).json(newProject)
}

export {
	createProjectController
}
