import { User } from '../../amplify/backend/function/api/src/app/db/entities';
import { UserPartial } from '../../amplify/backend/function/api/src/app/types/requests';
import apiProvider from './provider/ApiProvider';

class Api {
  getUser() {
    return apiProvider.get<User>('/user');
  }
  createUser(params: UserPartial) {
    return apiProvider.post<User, UserPartial>('/user', params);
  }
}

export default new Api();
