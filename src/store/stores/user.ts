import { Auth } from 'aws-amplify';
import { makeAutoObservable, runInAction } from 'mobx';
import { User } from '../../../amplify/backend/function/api/src/app/db/entities';
import api from '../../api';
import apiProvider from '../../api/provider/ApiProvider';
import { RootStore } from './root';

export interface SignUpParams {
  email: string;
  password: string;
  name: string;
  surname: string;
}

export interface SignInParams {
  email: string;
  password: string;
}

export class UserStore {
  private rootStore: RootStore;

  user: User | null;
  isLoading: boolean;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.user = null;
    this.isLoading = false;
  }

  async signUp({ email, password, name, surname }: SignUpParams) {
    const { userSub: cognitoId } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        email,
        name,
        family_name: surname
      }
    });

    const user = await api.createUser({
      cognitoId,
      email,
      firstName: name,
      lastName: surname
    });

    runInAction(() => {
      this.user = user;
    });
  }

  async signIn({ email, password }: SignInParams) {
    await Auth.signIn({ username: email, password });
    await this.authUserByJWT();
  }

  async authUserByJWT() {
    this.isLoading = true;
    await UserStore.updateJwtToken();
    const user = await api.getUser();

    runInAction(() => {
      this.user = user;
      this.isLoading = false;
    });
  }

  static async updateJwtToken(request?: any) {
    const session = await Auth.currentSession();
    const token = session.getAccessToken().getJwtToken();
    apiProvider.updateHeaders({ Authorization: `Bearer ${token}` });
    request && (request.headers.Authorization = `Bearer ${token}`);
  }

  async signOut() {
    await Auth.signOut();
  }
}
