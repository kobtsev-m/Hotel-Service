import { Auth } from 'aws-amplify';
import provider from '../../api/provider';

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

export const signUp = async ({ email, password, name, surname }: SignUpParams) => {
  const { userSub: cognitoId } = await Auth.signUp({
    username: email,
    password,
    attributes: {
      email,
      name: name,
      family_name: surname
    }
  });
  return cognitoId;
};

export const signIn = async ({ email, password }: SignInParams) => {
  await Auth.signIn({ username: email, password });
  await updateJwtToken();
};

export const updateJwtToken = async (request?: any) => {
  const session = await Auth.currentSession();
  const token = session.getAccessToken().getJwtToken();
  provider.updateHeaders({ Authorization: `Bearer ${token}` });
  request && (request.headers.Authorization = `Bearer ${token}`);
};
