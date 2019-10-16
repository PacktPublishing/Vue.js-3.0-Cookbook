import baseHttp from './baseFetch';

export const getHttp = async (url, type = 'json') => (await baseHttp(url, 'get'))(type);

export const postHttp = async (url,
  body,
  type = 'json',
  options) => (await baseHttp(url,
  'post',
  {
    body,
    ...options,
  }))(type);

export const putHttp = async (url,
  body,
  type = 'json',
  options) => (await baseHttp(url,
  'put',
  {
    body,
    ...options,
  }))(type);

export const patchHttp = async (url,
  body,
  type = 'json',
  options) => (await baseHttp(url,
  'patch',
  {
    body,
    ...options,
  }))(type);

export const deleteHttp = async (
  url,
  body,
  type = 'json',
  options) => (await baseHttp(url,
  'delete',
  {
    body,
    ...options,
  }))(type);

export default {
  get: getHttp,
  post: postHttp,
  put: putHttp,
  patch: patchHttp,
  delete: deleteHttp,
};
