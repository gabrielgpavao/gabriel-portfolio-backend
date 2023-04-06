import { Request, Response } from 'express';
import { tInputProjectData, tOutputProjectData, tProjectsList } from '../interfaces/projects.interfaces';
import { createProjectService } from '../services/projects/createProject.service';
import { getAllProjectsService } from '../services/projects/getAllProjects.service';

async function createProjectController (request: Request, response: Response): Promise<Response> {
	const projectData: tInputProjectData = request.body

	const newProject: tOutputProjectData = await createProjectService(projectData)
	
	return response.status(201).json(newProject)
}

async function getAllProjectsController (request: Request, response: Response): Promise<Response> {
	const projectsList: tProjectsList = await getAllProjectsService()
	
	return response.status(200).json(projectsList)
}

async function updateProjectsController (request: Request, response: Response): Promise<Response> {
	return response.status(200).json()
}

export {
	createProjectController,
	getAllProjectsController,
	updateProjectsController
}
