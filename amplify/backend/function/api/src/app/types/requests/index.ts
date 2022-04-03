import { Hotel, User } from '../../db/entities';
import { IRequest, IResponse } from '../utils/controllers';

// attachUser middleware
export type AttachUserMiddlewareReq = IRequest<{ user: User }>;

// user controller
export type UserPartial = Pick<User, 'cognitoId' | 'email' | 'firstName' | 'lastName'>;
export type UserGetReq = AttachUserMiddlewareReq;
export type UserGetRes = IResponse<User>;
export type UserPostReq = IRequest<UserPartial>;
export type UserPostRes = IResponse<User>;

// hotels controller
export type HotelPartial = Pick<Hotel, 'floorsTotal' | 'apartments' | 'roomsForFloor'>;
export type HotelsGetReq = object;
export type HotelsGetRes = IResponse<Hotel[]>;
export type HotelsPostReq = IRequest<HotelPartial>;
export type HotelsPostRes = IResponse<Hotel>;
