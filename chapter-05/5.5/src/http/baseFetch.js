import axios from 'axios';

export function createAxios(options = {}) {
  return axios.create({
    ...options,
  });
}

const localApi = createAxios();

export const jsonPlaceholderApi = createAxios({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default async (url, method, options = {}) => localApi({
  method: method.toUpperCase(),
  url,
  ...options,
});
