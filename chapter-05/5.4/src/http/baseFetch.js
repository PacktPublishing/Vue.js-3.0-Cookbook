import axios from 'axios';

export default async (url, method, options = {}) => axios({
  method: method.toUpperCase(),
  url,
  ...options,
});
