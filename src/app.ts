import express, { Application } from 'express'
import { handleErrors } from './errors/errors'
import 'express-async-errors'
import { projectsRoutes } from './routes/projects.routes'

export const app: Application = express()

app.use(express.json())

app.use('/projects', projectsRoutes)

app.use(handleErrors)
