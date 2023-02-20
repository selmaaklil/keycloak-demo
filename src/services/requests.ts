import axios from "axios";
import { isLoggedIn, getToken, updateToken } from "./KeyCloak";

const HttpMethods = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
};

const configure = () => axios.interceptors.request.use(
  config => {
    if (isLoggedIn()) {
      const token = getToken()
        config.headers.Authorization = 'Bearer ' + token
        const cb = () => {
          config.headers.Authorization = `Bearer ${getToken()}`;
          config.headers["Content-Type"] = 'application/json'
          return Promise.resolve(config);
        };
        updateToken(cb)
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

const getAxiosClient = () => axios.create();

export {
  HttpMethods,
  configure,
  getAxiosClient,
};

