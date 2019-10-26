<template>
  <div id="app">
    <vs-row>
      <vs-col
        vs-type="flex"
        vs-justify="left"
        vs-align="left"
        vs-w="12">
        <component
          :is="component"
          @change-component="changeComponent"
        />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
  import List from './components/list';
  import Create from './components/create';
  import View from './components/view';
  import Update from './components/update';
  import {
    getHttp,
    postHttp,
    patchHttp,
    deleteHttp,
    getTodos,
  } from './http/fetchApi';

  export default {
    name: 'app',
    components: {
      List,
    },
    data: () => ({
      componentIs: 'list',
      userId: 0,
    }),
    provide () {
      const base = {};

      Object.defineProperty(base, 'userId', {
        enumerable: true,
        get: () => Number(this.userId),
      });

      return base;
    },
    computed: {
      component() {
        switch (this.componentIs) {
          case 'list':
            return List;
          case 'create':
            return Create;
          case 'view':
            return View;
          case 'edit':
            return Update;
          default:
            return undefined;
        }
      }
    },
    methods: {
      changeComponent(payload) {
        this.componentIs = payload.component;
        this.userId = Number(payload.userId);
      },
    },
  };
</script>
