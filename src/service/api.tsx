import axios, { AxiosInstance, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://api.github.com",
});

class ApiError extends Error {
  public response: AxiosResponse | undefined;

  constructor(message: string, response?: AxiosResponse) {
    super(message);
    this.response = response;
  }
}

export { api, ApiError };
