import { User } from '../../db/entities';
import { IRequest, IResponse } from '../utils/controller';

// attachUser middleware
export type AttachUserMiddlewareReq = IRequest<{ user: User }>;

// user controller
export type UserPartial = Pick<User, 'cognitoId' | 'email' | 'firstName' | 'lastName'>;
export type UserGetReq = AttachUserMiddlewareReq;
export type UserGetRes = IResponse<User>;
export type UserPostReq = IRequest<UserPartial>;
export type UserPostRes = IResponse<User>;
