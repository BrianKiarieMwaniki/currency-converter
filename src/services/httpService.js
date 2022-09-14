import axios from "axios";
import {toast} from "react-toastify";
import config from "../config/config.json";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    toast.error("An unexpected error occurred!");
    console.log(error);
  }

  return Promise.reject(error);
});

const currencyConverterClient = axios.create({
    baseURL: config.apiUrlbase,
    headers:{
        'X-RapidAPI-Key':config.apiKey,
        'X-RapidAPI-Host':config.apiHost
    }
});

export default currencyConverterClient;
