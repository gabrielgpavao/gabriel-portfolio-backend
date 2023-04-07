import { Router } from 'express'
import { createProjectController, deleteProjectController, getAllProjectsController, updateProjectController } from '../controllers/projects.controllers'
import { ensureIdExistsMiddleware, validateInputDataMiddleware, verifyUrlDuplicityMiddleware } from '../middlewares/projects.middlewares'
import { inputProjectDataSchema, inputUpdateProjectSchema } from '../schemas/projects.schemas'

export const projectsRoutes: Router = Router()

projectsRoutes.post('', validateInputDataMiddleware(inputProjectDataSchema), verifyUrlDuplicityMiddleware, createProjectController)
projectsRoutes.get('', getAllProjectsController)
projectsRoutes.patch('/:id', ensureIdExistsMiddleware, validateInputDataMiddleware(inputUpdateProjectSchema), verifyUrlDuplicityMiddleware, updateProjectController)
projectsRoutes.delete('/:id', ensureIdExistsMiddleware, deleteProjectController)
