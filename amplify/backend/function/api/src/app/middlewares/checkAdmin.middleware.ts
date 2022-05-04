import createError from 'http-errors';
import { UserRole } from '../db/constants';

export const checkAdmin = async (req, res, next) => {
  if (req.body.user.role !== UserRole.ADMIN) {
    next(createError(403, 'Not enough permissions'));
  }
  next();
};
