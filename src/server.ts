import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';

import './configs/container/index';
import routes from './transporLayers/index';
import swaggerFile from './swagger.json';
import AppError from './domain/entities/AppError';

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use(routes);

app.use((err: Error, request: Request, response:Response, next: NextFunction)=> {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }
  return response.status(404).json({
    notAuthorized: 'Unauthorized'
  })
});

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT, () => {
  console.log('🚀 Server started on port 3333! 🚀');
});

server.setTimeout(3600000);