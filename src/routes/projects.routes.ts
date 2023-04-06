import { Router } from 'express'
import { createProjectController, getAllProjectsController } from '../controllers/projects.controllers'
import { validateInputDataMiddleware, verifyUrlDuplicityMiddleware } from '../middlewares/projects.middlewares'
import { inputProjectDataSchema } from '../schemas/projects.schemas'

export const projectsRoutes: Router = Router()

projectsRoutes.post('', validateInputDataMiddleware(inputProjectDataSchema), verifyUrlDuplicityMiddleware, createProjectController)
projectsRoutes.get('', getAllProjectsController)
