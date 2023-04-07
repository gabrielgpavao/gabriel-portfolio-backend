import { Router } from 'express';
import { sendEmailController } from '../controllers/email.controllers';

export const emailRoutes: Router = Router()

emailRoutes.post('', sendEmailController)
