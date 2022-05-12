import { Express, Request, Response } from 'express';

export type IRequest<T, P = {}, Q = {}> = Request<P, {}, T, Q>;
export type IResponse<T> = Response<T>;

export abstract class BaseController {
  protected app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  abstract initRoutes(): void;
}
