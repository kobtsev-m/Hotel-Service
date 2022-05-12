import { BaseEntity } from 'typeorm';
import { Apartment, Hotel, Rent, Service, User } from '../../db/entities';
import { IRequest, IResponse } from '../utils/controllers';

// #region Pagination
interface PaginationQuery {
  offset: number;
  limit: number;
}
// #endregion

// #region Attach User Middleware
interface AttachUserBody {
  user: IUser;
}
// #endregion

// #region User
export type IUser = Omit<User, keyof BaseEntity>;
export type IUserRequired = Pick<User, 'cognitoId' | 'email' | 'firstName' | 'lastName'>;
export type UserGetReq = IRequest<{} & AttachUserBody>;
export type UserGetRes = IResponse<IUser>;
export type UserPostReq = IRequest<IUserRequired>;
export type UserPostRes = IResponse<IUser>;
// #endregion

// #region Hotel
export type IHotel = Omit<Hotel, keyof BaseEntity | 'apartments' | 'services'> & {
  services: IService[];
};
export type IHotelRequired = Pick<IHotel, 'name' | 'description'>;
export type HotelsGetRes = IResponse<IHotel[]>;
export type HotelsPostReq = IRequest<IHotelRequired>;
export type HotelsPostRes = IResponse<IHotel>;
// #endregion

// #region Apartment
export type IApartment = Omit<Apartment, keyof BaseEntity | 'hotel' | 'rents'> & {
  hotel: IHotel;
  rents: IRent[];
};

export type IApartmentRequired = Pick<
  Apartment,
  'name' | 'description' | 'pricePerDay' | 'availableCount' | 'roomsTotal' | 'floor'
> & { hotelId: string };

export type IApartmentPartial = Partial<IApartmentRequired>;

export const apartmentFields = [
  'name',
  'description',
  'floor',
  'roomsTotal',
  'pricePerDay',
  'availableCount',
  'hotel'
] as const;

export type ApartmentField = typeof apartmentFields[number];

interface ApartmentFiltersParams {
  orderBy: [ApartmentField, 'ASC' | 'DESC'] | null;
  priceRange: [number, number] | null;
}

export type ApartmentGetReq = IRequest<{}, {}, PaginationQuery & ApartmentFiltersParams>;
export type ApartmentGetRes = IResponse<[IApartment[], number]>;
export type ApartmentPostReq = IRequest<IApartmentRequired>;
export type ApartmentPostRes = IResponse<Apartment>;
export type ApartmentPutReq = IRequest<IApartmentPartial, { id: string }>;
export type ApartmentPutRes = IResponse<IApartment>;
export type ApartmentDelReq = IRequest<{}, { id: string }>;
export type ApartmentDelRes = IResponse<boolean>;
// #endregion

// #region Service
export type IService = Omit<Service, keyof BaseEntity | 'hotel'>;
// #endregion

// #region Rent
export type IRent = Omit<Rent, keyof BaseEntity | 'user' | 'apartment'> & {
  user: IUser;
  apartment: IApartment;
};
// #endregion

// #region Statistic
export type StatisticGetRes = IResponse<{}>;
// #endregion
