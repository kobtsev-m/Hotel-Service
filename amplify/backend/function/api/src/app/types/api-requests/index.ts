import { Apartment, Hotel, User } from '../../db/entities';
import { IRequest, IResponse } from '../utils/controllers';

// pagination
type PaginationQueryParams = { offset: number; limit: number };
type PaginationGetReq<T, P = {}> = IRequest<T, P, PaginationQueryParams>;

// attach user middleware
type AttachUserData = { user: User };

// user controller
export type UserRequired = Pick<User, 'cognitoId' | 'email' | 'firstName' | 'lastName'>;
export type UserGetReq = IRequest<{} & AttachUserData>;
export type UserGetRes = IResponse<User>;
export type UserPostReq = IRequest<UserRequired>;
export type UserPostRes = IResponse<User>;

// hotel controller
export type HotelRequired = Pick<Hotel, 'floorsTotal' | 'apartments'>;
export type HotelsGetReq = object;
export type HotelsGetRes = IResponse<Hotel[]>;
export type HotelsPostReq = IRequest<HotelRequired>;
export type HotelsPostRes = IResponse<Hotel>;

// apartment controller
export type ApartmentRequired = Pick<
  Apartment,
  'name' | 'description' | 'pricePerDay' | 'availableCount' | 'roomsTotal' | 'floor'
> & {
  hotelId: string;
};
export type ApartmentPartial = Partial<ApartmentRequired>;
export type ApartmentGetReq = PaginationGetReq<object>;
export type ApartmentGetRes = IResponse<[Apartment[], number]>;
export type ApartmentPostReq = IRequest<ApartmentRequired>;
export type ApartmentPostRes = IResponse<Apartment>;
export type ApartmentPutReq = IRequest<ApartmentPartial, { id: string }>;
export type ApartmentPutRes = IResponse<Apartment>;
export type ApartmentDelReq = IRequest<object, { id: string }>;
export type ApartmentDelRes = IResponse<boolean>;
