import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
  res.json({
    summary: 'Mamboo-Challenge API',
    version: '1.0.0',
    status: 'Running on Development',
    origin: 'Luís Afonso Caputo',
  });
});

export default routes;
