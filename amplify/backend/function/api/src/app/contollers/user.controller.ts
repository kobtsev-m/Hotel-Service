import db from '../db';
import { User } from '../db/entities';
import { attachUser } from '../middlewares';
import {
  ApiRoutes,
  BaseController,
  UserGetReq,
  UserGetRes,
  UserPostReq,
  UserPostRes
} from '../types';

export class UserController extends BaseController {
  initRoutes() {
    this.app.get(ApiRoutes.User, attachUser, this.getItem);
    this.app.post(ApiRoutes.User, this.crateItem);
  }

  private async getItem(req: UserGetReq, res: UserGetRes) {
    await db.connect();
    res.json(req.body.user);
  }

  private async crateItem(req: UserPostReq, res: UserPostRes) {
    await db.connect();
    const user = User.create(req.body);
    await user.save();
    res.json(user);
  }
}
