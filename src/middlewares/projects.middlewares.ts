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
	
	const findLink = await projectRepo.findOneBy({ link: request.body.link })

	if (findLink) {
		return response.status(409).json({ message: 'Link already exists'})
	}
	
	const findRepository = await projectRepo.findOneBy({ repository: request.body.repository })
	
	if (findRepository) {
		return response.status(409).json({ message: 'Repository already exists'})
	}

	next()
}

export {
	validateInputDataMiddleware,
	verifyUrlDuplicityMiddleware
}
