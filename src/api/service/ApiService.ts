import {
  ApartmentDelRes,
  ApartmentGetRes,
  ApartmentPostReq,
  ApartmentPostRes,
  ApartmentPutReq,
  ApartmentPutRes,
  ApiRoutes,
  HotelsGetRes,
  UserGetRes,
  UserPostReq,
  UserPostRes
} from '../../../amplify/backend/function/api/src/app/types';
import { FromApi } from '../utils/inferApiTypes';
import apiProvider from '../provider/ApiProvider';
import qs from 'qs';

class ApiService {
  getUser() {
    return apiProvider.get<FromApi<UserGetRes>>(ApiRoutes.User);
  }
  createUser(data: FromApi<UserPostReq>) {
    return apiProvider.post<FromApi<UserPostRes>>(ApiRoutes.User, data);
  }

  getHotels() {
    return apiProvider.get<FromApi<HotelsGetRes>>(ApiRoutes.Hotels);
  }

  getApartments(offset: number, limit: number) {
    const query = qs.stringify({ offset, limit }, { addQueryPrefix: true });
    return apiProvider.get<FromApi<ApartmentGetRes>>(ApiRoutes.Apartments + query);
  }
  createApartment(data: FromApi<ApartmentPostReq>) {
    return apiProvider.post<FromApi<ApartmentPostRes>>(ApiRoutes.Apartments, data);
  }
  updateApartment(id: string, data: FromApi<ApartmentPutReq>) {
    const url = ApiRoutes.ApartmentItem.replace(':id', id);
    return apiProvider.put<FromApi<ApartmentPutRes>>(url, data);
  }
  deleteApartment(id: string) {
    const url = ApiRoutes.ApartmentItem.replace(':id', id);
    return apiProvider.delete<FromApi<ApartmentDelRes>>(url);
  }
}

export default new ApiService();
