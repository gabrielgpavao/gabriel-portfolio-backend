import express, { Application } from 'express'
import { handleErrors } from './errors/errors'
import 'express-async-errors'

export const app: Application = express()

app.use(express.json())

app.use(handleErrors)
