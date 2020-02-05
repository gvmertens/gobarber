import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Guilherme Mertens',
        email: 'gvmertens@gmail.com',
        password_hash: '123456789',
        provider: false
    });
    res.json(user);
});

export default routes;
