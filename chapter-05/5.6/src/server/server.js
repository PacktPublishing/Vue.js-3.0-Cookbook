import { Server } from 'miragejs';
import baseData from './db';
import { getFrom } from './get';
import { postFrom } from './post';
import { patchFrom } from './patch';
import { deleteFrom } from './delete';

window.server = new Server({
  seeds(srv) {
    srv.db.loadData({ ...baseData });
  },

  routes() {
    this.passthrough();
    this.passthrough('https://jsonplaceholder.typicode.com/**');

    this.namespace = 'api';

    this.timing = 750;

    this.get('/users', getFrom('users'));

    this.post('/users', postFrom('users'));

    this.patch('/users/:id', patchFrom('users'));

    this.delete('/users/:id', deleteFrom('users'));
  },
});
