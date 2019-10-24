import Swal from 'sweetalert2';

const postMethods = ['post', 'delete', 'patch'];

export function requestInterceptor(config) {
  if (
    postMethods.includes(config.method.toLocaleLowerCase()) &&
    !config.data.data.id
  ) {
    throw new Error('You need to pass an ID for this request');
  }

  return config;
}

export function responseInterceptor(response) {
  return response;
}

export function errorInterceptor(error) {
  Swal.fire({
    type: 'error',
    title: 'Error!',
    text: error.message,
  });

  return Promise.reject(error);
}
