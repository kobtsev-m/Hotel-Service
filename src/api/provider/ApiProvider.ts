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

  getHeaders() {
    return this.params.headers;
  }

  updateHeaders(headers: Record<string, string | undefined>) {
    const newHeaders = { ...this.params.headers };
    Object.entries(headers).forEach(([key, value]) => {
      if (value) {
        newHeaders[key] = value;
      } else {
        delete newHeaders[key];
      }
    });
    this.params.headers = newHeaders;
  }

  get<T>(url: string): Promise<T> {
    return this.isAWS
      ? API.get(this.awsAppName, url, this.params)
      : this.localAxios.get(url, this.params).then(({ data }) => data);
  }

  post<T>(url: string, body: any): Promise<T> {
    return this.isAWS
      ? API.post(this.awsAppName, url, { ...this.params, body })
      : this.localAxios.post(url, body, this.params).then(({ data }) => data);
  }

  put<T>(url: string, body: any): Promise<T> {
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
