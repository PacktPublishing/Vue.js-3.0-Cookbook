import baseHttp from './baseFetch';

export const getHttp = async (url, type = 'json', options) => (await baseHttp(url, 'get', options))(type);

export const postHttp = async (url,
  body,
  type = 'json',
  options) => (await baseHttp(url,
  'post',
  {
    body,
    ...options,
  }))(type);

export const updateHttp = async (url,
  body,
  type = 'json',
  options) => (await baseHttp(url,
  'update',
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
  update: updateHttp,
  put: putHttp,
  patch: patchHttp,
  delete: deleteHttp,
};
