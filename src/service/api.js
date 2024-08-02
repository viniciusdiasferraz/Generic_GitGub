import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

class ApiError extends Error {
  constructor(message, response) {
    super(message);
    this.response = response;
  }
}

export { api, ApiError };
