import { IRequest, IResponse } from '../../../amplify/backend/function/api/src/app/types';

export type FromApi<T> = T extends IResponse<any>
  ? NonNullable<Parameters<T['json']>[0]>
  : T extends IRequest<any>
  ? T['body']
  : never;
