import axios, { AxiosStatic, AxiosRequestConfig } from "axios";

export class HttpClient {
  private axios: AxiosStatic = axios;

  constructor(private baseURL: string) {
    this.axios.defaults.baseURL = baseURL;
  }

  public async get(
    endpoint: string,
    wrapRes?: boolean,
    requestConfig?: AxiosRequestConfig
  ): Promise<any> {
    const res = await this.axios.get(`/${endpoint}`, requestConfig);
    return wrapRes ? res : res.data;
  }
  public async getById(
    endpoint: string,
    id: string,
    wrapRes?: boolean,
    requestConfig?: AxiosRequestConfig
  ): Promise<any> {
    const res = await this.axios.get(`/${endpoint}/${id}`, requestConfig);
    return wrapRes ? res : res.data;
  }
  public async post(
    endpoint: string,
    data: any,
    wrapRes?: boolean,
    requestConfig?: AxiosRequestConfig
  ): Promise<any> {
    const res = await this.axios.post(`/${endpoint}`, data, requestConfig);
    return wrapRes ? res : res.data;
  }
  public async patch(
    endpoint: string,
    data: any,
    wrapRes?: boolean,
    requestConfig?: AxiosRequestConfig
  ): Promise<any> {
    const res = await this.axios.patch(`/${endpoint}`, data, requestConfig);
    return wrapRes ? res : res.data;
  }
  public async put(
    endpoint: string,
    data: any,
    wrapRes?: boolean,
    requestConfig?: AxiosRequestConfig
  ): Promise<any> {
    const res = await this.axios.put(`/${endpoint}`, data, requestConfig);
    return wrapRes ? res : res.data;
  }
  public async delete(
    endpoint: string,
    wrapRes?: boolean,
    requestConfig?: AxiosRequestConfig
  ): Promise<any> {
    const res = await this.axios.delete(`/${endpoint}`, requestConfig);
    return wrapRes ? res : res.data;
  }
}

export default new HttpClient(process.env.VUE_APP_API_ROOT);
