import express, { Application } from 'express'
import { handleErrors } from './errors/errors'
import 'express-async-errors'
import { projectsRoutes } from './routes/projects.routes'
import { emailRoutes } from './routes/email.routes'

export const app: Application = express()

app.use(express.json())

app.use('/projects', projectsRoutes)
app.use('/email', emailRoutes)

app.use(handleErrors)
