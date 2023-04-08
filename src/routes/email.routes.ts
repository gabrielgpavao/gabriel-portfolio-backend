import { Router } from 'express';
import { sendEmailController } from '../controllers/email.controllers';
import cors from 'cors'

export const emailRoutes: Router = Router()

emailRoutes.options('', cors())
emailRoutes.post('', cors(), sendEmailController)
