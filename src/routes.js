import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Guilherme' }));

export default routes;
