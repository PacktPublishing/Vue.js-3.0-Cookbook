export default class HttpRequest {
  constructor(params = {}) {
    this.url = params.url || '';
    this.method = params.method || '';
    this.header = params.header || '';
    this.params = params.params || '';
    this.data = params.data || {};
    this.response = null;
  }

  async fetch(url = '', options = {}) {
    this.response = await fetch(url || this.url, options);
    return this.response;
  }

  async get(url = '', options = {}) {
    this.response = await this.fetch(url, Object.assign({
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
    }, options));
    return this.response;
  }

  async post(url = '', data = {}, options = {}) {
    this.response = await this.fetch(url, Object.assign({
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      body: JSON.stringify(Object.assign(this.data, data)),
      headers: {
        'Content-Type': 'application/json',
      },
    }, options));
    return this.response;
  }

  async put(url = '', data = {}, options = {}) {
    this.response = await this.fetch(url, Object.assign({
      method: 'PUT',
      mode: 'no-cors',
      cache: 'no-cache',
      body: JSON.stringify(Object.assign(this.data, data)),
      headers: {
        'Content-Type': 'application/json',
      },
    }, options));
    return this.response;
  }

  async delete(url = '', data = {}, options = {}) {
    this.response = await this.fetch(url, Object.assign({
      method: 'DELETE',
      mode: 'no-cors',
      cache: 'no-cache',
      body: JSON.stringify(Object.assign(this.data, data)),
      headers: {
        'Content-Type': 'application/json',
      },
    }, options));
    return this.response;
  }

  async patch(url = '', data = {}, options = {}) {
    this.response = await this.fetch(url, Object.assign({
      method: 'PATCH',
      mode: 'no-cors',
      cache: 'no-cache',
      body: JSON.stringify(Object.assign(this.data, data)),
      headers: {
        'Content-Type': 'application/json',
      },
    }, options));
    return this.response;
  }

  async blob() {
    return this.response.blob();
  }

  async json() {
    return this.response.json();
  }

  async text() {
    return this.response.text();
  }
}
