import axios from "axios";

const API = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (typeof error.response === "undefined") {
      console.log(
        "A server/network error occurred. Looks like CORS might be the problem"
      );

      return Promise.reject(error);
    }
    if (error.response.status === 401) {
      return error.response;
    }

    return Promise.reject(error);
  }
);

export default API;
