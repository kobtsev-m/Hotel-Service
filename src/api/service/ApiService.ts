import { ApiRoutes } from '../../../amplify/backend/function/api/src/app/api-routes';
import { Hotel, User } from '../../../amplify/backend/function/api/src/app/db/entities';
import { UserPartial } from '../../../amplify/backend/function/api/src/app/types/requests';
import apiProvider from '../provider/ApiProvider';

class ApiService {
  getUser() {
    return apiProvider.get<User>(ApiRoutes.User);
  }
  createUser(params: UserPartial) {
    return apiProvider.post<User, UserPartial>(ApiRoutes.User, params);
  }
  getHotels() {
    return apiProvider.get<Hotel[]>(ApiRoutes.Hotels);
  }
}

export default new ApiService();
