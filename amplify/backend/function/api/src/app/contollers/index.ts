import { Express } from 'express';
import { ApartmentController } from './apartment.controller';
import { HotelController } from './hotel.controller';
import { StatisticController } from './statistic.controller';
import { UserController } from './user.controller';

export const initRoutes = (app: Express) => {
  const controllers = [
    new UserController(app),
    new HotelController(app),
    new ApartmentController(app),
    new StatisticController(app)
  ];
  controllers.forEach((controller) => controller.initRoutes());
};
