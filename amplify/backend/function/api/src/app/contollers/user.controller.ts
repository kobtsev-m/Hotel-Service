import { User } from '../db/entities';
import { attachUser } from '../middlewares';
import {
  BaseController,
  ApiRoutes,
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
    res.json(req.body.user);
  }

  private async crateItem(req: UserPostReq, res: UserPostRes) {
    const user = User.create(req.body);
    await user.save();
    res.json(user);
  }
}
