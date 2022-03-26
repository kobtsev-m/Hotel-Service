import { Request, Response } from 'express';

export type IRequest<T, P = {}, Q = {}> = Request<P, {}, T, Q>;
export type IResponse<T> = Response<T>;
