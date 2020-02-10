import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';

export default async (req, res, next) => {
    console.log('Dentro do 1');

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }

    const [, token] = authHeader.split(' ');
    console.log('Dentro do auth');

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        console.log(decoded);
        req.userId = decoded.id;
        // eslint-disable-next-line no-console
        console.log(decoded);
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Usuário não autenticado.' });
    }
};
