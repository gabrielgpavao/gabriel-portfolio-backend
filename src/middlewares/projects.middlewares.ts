import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';
import { tProjectRepo } from '../interfaces/projects.interfaces';
import { AppDataSource } from '../data-source';
import { Project } from '../entities/projects.entity'

const validateInputDataMiddleware = (schema: ZodTypeAny) => (request: Request, response: Response, next: NextFunction): void => {
	request.body = schema.parse(request.body)

	next()
}

async function verifyUrlDuplicityMiddleware (request: Request, response: Response, next: NextFunction): Promise<Response | void> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)

	if (request.body.websiteUrl) {
		const findWebsiteUrl = await projectRepo.findOneBy({ websiteUrl: request.body.websiteUrl })
	
		if (findWebsiteUrl) {
			return response.status(409).json({ message: 'Website URL already exists'})
		}
	}
	
	if (request.body.repositoryUrl) {
		const findRepositoryUrl = await projectRepo.findOneBy({ repositoryUrl: request.body.repositoryUrl })
		
		if (findRepositoryUrl) {
			return response.status(409).json({ message: 'Repository already exists'})
		}
	}

	next()
}

export async function ensureIdExistsMiddleware (request: Request, response: Response, next: NextFunction): Promise<Response | void> {
	const projectRepo: tProjectRepo = AppDataSource.getRepository(Project)

	try {
		await projectRepo.findOneByOrFail({ id: Number(request.params.id) })
		next()
		
	} catch (error) {
		return response.status(404).json({ message: 'Project not found' })
	}
}

export {
	validateInputDataMiddleware,
	verifyUrlDuplicityMiddleware
}
