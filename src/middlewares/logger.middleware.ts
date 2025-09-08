// Code from https://docs.nestjs.com/middleware
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `Starting request ${req.method} ${req.baseUrl}\nParameters: ${JSON.stringify(req.params)}\nRequest body: ${req.body}`,
    );
    next();
    console.info('Response status code:', res.statusCode, '\n');
  }
}
