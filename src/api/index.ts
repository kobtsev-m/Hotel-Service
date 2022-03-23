import { User } from '../../amplify/backend/function/api/src/app/db/entities';
import provider from './provider';

class Api {
  getUser() {
    return provider.get<User>('/user');
  }
}

export default new Api();
