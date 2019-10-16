const baseHttp = async (url, method, options = {}) => {
  let httpRequest;
  if (method.toUpperCase() === 'GET') {
    httpRequest = await fetch(url);
  } else {
    httpRequest = fetch(url, {
      method: method.toUpperCase(),
      ...options,
    });
  }
  return (type) => {
    switch (type.toLocaleLowerCase()) {
      case 'json':
        return httpRequest.json();
      case 'blob':
        return httpRequest.blob();
      case 'text':
        return httpRequest.text();
      case 'formdata':
        return httpRequest.formData();
      default:
        return httpRequest.arrayBuffer();
    }
  };
};

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
