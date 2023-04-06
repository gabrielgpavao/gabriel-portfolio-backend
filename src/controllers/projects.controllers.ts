import { Request, Response } from 'express';
import { tInputProjectData, tOutputProjectData, tProjectsList } from '../interfaces/projects.interfaces';
import { createProjectService } from '../services/projects/createProject.service';
import { getAllProjectsService } from '../services/projects/getAllProjects.service';
import { updateProjectService } from '../services/projects/updateProject.service';
import { Project } from '../entities/projects.entity';

async function createProjectController (request: Request, response: Response): Promise<Response> {
	const projectData: tInputProjectData = request.body

	const newProject: tOutputProjectData = await createProjectService(projectData)
	
	return response.status(201).json(newProject)
}

async function getAllProjectsController (request: Request, response: Response): Promise<Response> {
	const projectsList: tProjectsList = await getAllProjectsService()
	
	return response.status(200).json(projectsList)
}

async function updateProjectController (request: Request, response: Response): Promise<Response> {
	const projectId: number = Number(request.params.id)
	const projectData = request.body

	const updatedProject: Project = await updateProjectService(projectData, projectId)
	
	return response.status(200).json(updatedProject)
}

async function deleteProjectController (request: Request, response: Response): Promise<Response> {
	return response.status(204).json()
}

export {
	createProjectController,
	getAllProjectsController,
	updateProjectController,
	deleteProjectController
}
