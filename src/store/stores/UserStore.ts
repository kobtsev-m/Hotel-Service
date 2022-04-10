import { Auth } from 'aws-amplify';
import { makeAutoObservable, runInAction } from 'mobx';
import { User } from '../../../amplify/backend/function/api/src/app/db/entities';
import { apiProvider, apiService } from '../../api';
import { RootStore } from './RootStore';

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

  user: User | null = null;
  isLoading: boolean = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
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

    const user = await apiService.createUser({
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
    const user = await apiService.getUser();

    runInAction(() => {
      this.user = user;
      this.isLoading = false;
    });
  }

  static async updateJwtToken(request?: any) {
    const session = await Auth.currentSession();
    const token = session.getAccessToken().getJwtToken();
    if (token) {
      apiProvider.updateHeaders({ Authorization: `Bearer ${token}` });
      request && (request.headers.Authorization = `Bearer ${token}`);
    } else {
      apiProvider.updateHeaders({ Authorization: undefined });
      request && delete request.headers.Authorization;
    }
  }

  async signOut() {
    this.isLoading = true;
    await Auth.signOut();

    runInAction(() => {
      this.user = null;
      this.isLoading = false;
    });
  }
}
