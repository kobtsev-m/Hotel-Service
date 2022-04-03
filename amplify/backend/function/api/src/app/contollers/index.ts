import { Express } from 'express';
import { HotelController } from './hotel.controller';
import { UserController } from './user.controller';

export const initRoutes = (app: Express) => {
  const controllers = [new UserController(app), new HotelController(app)];
  controllers.forEach((controller) => controller.initRoutes());
};
