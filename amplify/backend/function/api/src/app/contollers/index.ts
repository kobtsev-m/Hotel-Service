import { Express } from 'express';
import { userController } from './user';

export const initControllers = (app: Express) => {
  userController(app);
};
