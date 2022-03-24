import { API } from 'aws-amplify';
import axios, { Axios } from 'axios';
import { updateJwtToken } from '../utils/aws/auth';

interface RequestParams {
  request: boolean;
  headers: Record<string, string>;
}

class Provider {
  private readonly isAWS: boolean;
  private readonly awsAppName: string;
  private readonly localAxios: Axios;

  private readonly params: RequestParams;

  constructor() {
    this.isAWS = process.env.REACT_APP_API! === 'aws';
    this.awsAppName = process.env.REACT_APP_AWS_APP_NAME!;
    this.localAxios = axios.create({
      baseURL: process.env.REACT_APP_LOCAL_BASE_URL!
    });
    this.params = { request: true, headers: {} };
    this.setupAxios();
  }

  setupAxios() {
    axios.interceptors.response.use(
      (response) => response,
      async (e) => {
        const { response, config: request } = e;
        if (
          !request._retry &&
          response?.status === 401 &&
          response?.data?.errors?.message === 'jwt expired'
        ) {
          await updateJwtToken(request);
          request._retry = true;
          return axios(request);
        }
        return Promise.reject(e);
      }
    );
  }

  updateHeaders(headers: RequestParams['headers']) {
    Object.keys(headers).forEach((key) => {
      if (headers[key]) {
        this.params.headers[key] = headers[key];
      } else {
        delete this.params.headers[key];
      }
    });
  }

  get<T>(url: string): Promise<T> {
    return this.isAWS
      ? API.get(this.awsAppName, url, this.params)
      : this.localAxios.get(url, this.params).then(({ data }) => data);
  }

  post<T, Q = {}>(url: string, body: Q): Promise<T> {
    return this.isAWS
      ? API.post(this.awsAppName, url, { ...this.params, body })
      : this.localAxios.post(url, body, this.params).then(({ data }) => data);
  }

  put<T, Q = {}>(url: string, body: Q): Promise<T> {
    return this.isAWS
      ? API.put(this.awsAppName, url, { ...this.params, body })
      : this.localAxios.put(url, body, this.params).then(({ data }) => data);
  }

  delete<T>(url: string): Promise<T> {
    return this.isAWS
      ? API.del(this.awsAppName, url, this.params)
      : this.localAxios.delete(url, this.params).then(({ data }) => data);
  }
}

export default new Provider();
