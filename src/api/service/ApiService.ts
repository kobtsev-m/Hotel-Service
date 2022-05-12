import qs from 'qs';
import {
  ApartmentDelRes,
  ApartmentGetReq,
  ApartmentGetRes,
  ApartmentPostReq,
  ApartmentPostRes,
  ApartmentPutReq,
  ApartmentPutRes,
  ApiRoutes,
  HotelsGetRes,
  StatisticGetRes,
  UserGetRes,
  UserPostReq,
  UserPostRes
} from '../../../amplify/backend/function/api/src/app/types';
import apiProvider from '../provider/ApiProvider';
import { ReqBody, ReqQuery, ResJson } from '../utils/inferApiTypes';

class ApiService {
  getUser() {
    return apiProvider.get<ResJson<UserGetRes>>(ApiRoutes.User);
  }
  createUser(data: ReqBody<UserPostReq>) {
    return apiProvider.post<ResJson<UserPostRes>>(ApiRoutes.User, data);
  }

  getHotels() {
    return apiProvider.get<ResJson<HotelsGetRes>>(ApiRoutes.Hotels);
  }

  getApartments(params: ReqQuery<ApartmentGetReq>) {
    const query = qs.stringify(params, { addQueryPrefix: true });
    return apiProvider.get<ResJson<ApartmentGetRes>>(ApiRoutes.Apartments + query);
  }
  createApartment(data: ReqBody<ApartmentPostReq>) {
    return apiProvider.post<ResJson<ApartmentPostRes>>(ApiRoutes.Apartments, data);
  }
  updateApartment(id: string, data: ReqBody<ApartmentPutReq>) {
    const url = ApiRoutes.ApartmentItem.replace(':id', id);
    return apiProvider.put<ResJson<ApartmentPutRes>>(url, data);
  }
  deleteApartment(id: string) {
    const url = ApiRoutes.ApartmentItem.replace(':id', id);
    return apiProvider.delete<ResJson<ApartmentDelRes>>(url);
  }

  getStatistic() {
    return apiProvider.get<ResJson<StatisticGetRes>>(ApiRoutes.Statistic);
  }
}

export default new ApiService();
