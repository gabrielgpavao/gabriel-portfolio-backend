import { Router } from 'express'
import { createProjectController } from '../controllers/projects.controllers'

export const projectsRoutes: Router = Router()

projectsRoutes.post('', createProjectController)
