import express from 'express';
import controller from './controller';
import { validateLogin } from '../../middlewares/request.handler';
export default express.Router().post('/login', validateLogin, controller.login);
// .get('/', controller.all)
// .get('/:id', controller.byId);
