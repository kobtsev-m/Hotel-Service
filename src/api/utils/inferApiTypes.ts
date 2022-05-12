import { IRequest, IResponse } from '../../../amplify/backend/function/api/src/app/types';

export type ReqBody<T extends IRequest<any>> = T['body'];
export type ReqQuery<T extends IRequest<any>> = T['query'];
export type ResJson<T extends IResponse<any>> = NonNullable<Parameters<T['json']>[0]>
