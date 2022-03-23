import createError from 'http-errors';
import { TokenExpiredError } from 'jsonwebtoken';
import authService from '../services/auth';
import { User } from '../db/entities';

export const attachUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split('Bearer ')[1];
    const payload = await authService.verifyJwt(token);
    const user = await User.findOne({ where: { cognitoId: payload.sub } });
    if (!user) {
      throw createError(403, 'Auth error');
    }
    req.body.user = user;
    next();
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      next(createError(401, e.message));
    } else {
      next(e);
    }
  }
};
