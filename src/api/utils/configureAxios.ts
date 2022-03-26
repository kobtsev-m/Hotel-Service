import axios from 'axios';
import { UserStore } from '../../store/stores/user';

export const configureAxios = () => {
  axios.interceptors.response.use(
    (response) => response,
    async (e) => {
      const { response, config: request } = e;
      if (
        !request._retry &&
        response?.status === 401 &&
        response?.data?.errors?.message === 'jwt expired'
      ) {
        await UserStore.updateJwtToken(request);
        request._retry = true;
        return axios(request);
      }
      return Promise.reject(e);
    }
  );
};
