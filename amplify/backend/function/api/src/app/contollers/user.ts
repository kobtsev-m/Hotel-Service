import { IRequest, IResponse } from '../types/utils/request';
import { User } from '../db/entities';
import { Express } from 'express';
import { Routes } from '../routes';
import { attachUser } from '../middlewares/attachUser';

type GetRequest = IRequest<{ user: User }>;
type GetResponse = IResponse<User>;

export const userController = (app: Express) => {
  app.get(Routes.User, attachUser, async (req: GetRequest, res: GetResponse) => {
    res.json(req.body.user);
  });
};
