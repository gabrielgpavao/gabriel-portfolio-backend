import { Router } from 'express'
import { createProjectController } from '../controllers/projects.controllers'
import { validateInputDataMiddleware } from '../middlewares'
import { inputProjectDataSchema } from '../schemas/projects.schemas'

export const projectsRoutes: Router = Router()

projectsRoutes.post('', validateInputDataMiddleware(inputProjectDataSchema), createProjectController)
