import { Router } from 'express'
import { createProjectController, getAllProjectsController, updateProjectsController } from '../controllers/projects.controllers'
import { ensureIdExistsMiddleware, validateInputDataMiddleware, verifyUrlDuplicityMiddleware } from '../middlewares/projects.middlewares'
import { inputProjectDataSchema } from '../schemas/projects.schemas'

export const projectsRoutes: Router = Router()

projectsRoutes.post('', validateInputDataMiddleware(inputProjectDataSchema), verifyUrlDuplicityMiddleware, createProjectController)
projectsRoutes.get('', getAllProjectsController)
projectsRoutes.patch('/:id', ensureIdExistsMiddleware, verifyUrlDuplicityMiddleware, updateProjectsController)
