import { Express } from 'express';
import controllers from '../contollers';

const setRoutes = (app: Express) => {
  app.get('/', controllers.home.get);
};

export default setRoutes;
