import createError from 'http-errors';
import { TokenExpiredError } from 'jsonwebtoken';
import { User } from '../db/entities';
import authService from '../services/auth.service';
import { AttachUserMiddlewareReq } from '../types/requests';

export const attachUser = async (req: AttachUserMiddlewareReq, res, next) => {
  try {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
      throw createError(403, 'Auth error');
    }
    const token = authorizationHeader.split('Bearer ')[1];
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