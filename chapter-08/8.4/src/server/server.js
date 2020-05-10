import { Server } from 'miragejs';
import baseData from './db';

window.server = new Server({
  seeds(srv) {
    srv.db.loadData({ ...baseData });
  },

  routes() {
    this.namespace = 'api';

    this.timing = 1000;

    this.get(
      '/language/:id',
      ({ db }, request) => {
        const messages = db
          .languages
          .find(request.params.id);

        if (!Object.keys(messages).length) return {};
        const result = { ...messages };
        delete result.id;

        return result;
      },
    );
  },
});
