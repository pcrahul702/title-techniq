import axios from "axios";
import { BASE_URL } from "./APIUrls";

axios.defaults.baseURL = BASE_URL;

const createHeader = (_URL: string, options = {}) => {
  let header = {
    Accept: "/",
    // Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
  };
  options = { ...options, headers: header };
  return { URL: _URL, options: options };
};

const POST = (_URL: string, data = {}, _options?: any) => {
  try{
  let { URL, options } = createHeader(_URL, _options);
  return axios.post(URL, data, options);
  }
  catch(error){
    return Promise.reject(error)
  }
};

const GET = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.get(URL, options);
};

const PATCH = (_URL: string, data: any = null, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.patch(URL, data, options);
};
const DELETE = (_URL: string, _options?: any) => {
  let { URL, options } = createHeader(_URL, _options);
  return axios.delete(URL, options);
};

export { POST, GET, PATCH, DELETE };
