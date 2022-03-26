import { API } from 'aws-amplify';
import axios, { Axios } from 'axios';
import { configureAxios } from '../utils/configureAxios';

interface RequestParams {
  request: boolean;
  headers: Record<string, string>;
}

class ApiProvider {
  private readonly isAWS: boolean;
  private readonly awsAppName: string;
  private readonly localAxios: Axios;
  private readonly params: RequestParams;

  constructor() {
    this.isAWS = process.env.REACT_APP_API! === 'aws';
    if (this.isAWS) {
      this.awsAppName = process.env.REACT_APP_AWS_APP_NAME!;
    } else {
      this.localAxios = axios.create({ baseURL: process.env.REACT_APP_LOCAL_BASE_URL! });
    }
    this.params = { request: true, headers: {} };
    configureAxios();
  }

  updateHeaders(headers: Record<string, string | undefined>) {
    Object.entries(headers).forEach(([key, value]) => {
      if (value) {
        this.params.headers[key] = value;
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

export default new ApiProvider();
