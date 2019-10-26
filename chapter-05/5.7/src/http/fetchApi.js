import baseHttp from './baseFetch';

export const getHttp = async (
  url,
  params,
  options,
) => baseHttp(url,
  'get',
  {
    ...options,
    params,
  });

export const postHttp = async (
  url,
  data,
  options,
) => baseHttp(url,
  'post',
  {
    data,
    ...options,
  });

export const updateHttp = async (
  url,
  data,
  options,
) => baseHttp(url,
  'update',
  {
    data,
    ...options,
  });

export const putHttp = async (
  url,
  data,
  options,
) => baseHttp(url,
  'put',
  {
    data,
    ...options,
  });

export const patchHttp = async (
  url,
  data,
  options,
) => baseHttp(url,
  'patch',
  {
    data,
    ...options,
  });

export const deleteHttp = async (
  url,
  data,
  options,
) => baseHttp(url,
  'delete',
  {
    data,
    ...options,
  });

export default {
  get: getHttp,
  post: postHttp,
  update: updateHttp,
  put: putHttp,
  patch: patchHttp,
  delete: deleteHttp,
};
