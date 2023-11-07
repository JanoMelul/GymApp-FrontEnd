import axios from "axios";

const baseUrl = "";

export const httpGet = (endpoint) => {
  return axios.get(baseUrl + endpoint);
};

export const httpPost = (endpoint, data) => {
  return axios.post(baseUrl + endpoint, data);
};

export const httpDelete = (endpoint) => {
  return axios.delete(baseUrl + endpoint, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const httpGetAuthorization = (endpoint) => {
  return axios.get(baseUrl + endpoint, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const httpPostAuthorization = (endpoint, data) => {
  return axios.post(baseUrl + endpoint, data, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const httpPutAuthorization = (endpoint, data) => {
  return axios.put(baseUrl + endpoint, data, {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
