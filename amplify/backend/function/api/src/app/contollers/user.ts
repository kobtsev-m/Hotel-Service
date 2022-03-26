import { Express } from 'express';
import { User } from '../db/entities';
import { attachUser } from '../middlewares/attachUser';
import { UserGetReq, UserGetRes, UserPostReq, UserPostRes } from '../types/requests';

export const userController = (app: Express) => {
  app.get('/user', attachUser, async (req: UserGetReq, res: UserGetRes) => {
    res.json(req.body.user);
  });
  app.post('/user', async (req: UserPostReq, res: UserPostRes) => {
    const user = User.create(req.body);
    await user.save();
    res.json(user);
  });
};
