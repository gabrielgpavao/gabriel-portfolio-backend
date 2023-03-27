import { NextFunction, Request, Response } from 'express';
import { ZodTypeAny } from 'zod';

const validateInputDataMiddleware = (schema: ZodTypeAny) => (request: Request, response: Response, next: NextFunction): void => {
	request.body = schema.parse(request.body)

	next()
}

export {
	validateInputDataMiddleware
}
