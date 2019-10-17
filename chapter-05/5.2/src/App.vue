<template>
  <div id="app">
    <MaterialCardBox
      header="Cat as a Service"
      sub-header="Random Cat Image"
      show-media
      show-actions
    >
      <template
        v-slot:media>
        <img
          v-show="kittyImage"
          alt="Meow!"
          :src="kittyImage"
          style="width: 300px;"
        >
      </template>
      <template v-slot:action>
        <MaterialButton
          background-color="#4ba3c7"
          text-color="#fff"
          @click="newCatImage"
        >
          <i class="material-icons">
            pets
          </i> Cat Image
        </MaterialButton>
        <MaterialButton
          background-color="#005b9f"
          text-color="#fff"
          @click="newCatGif"
        >
          <i class="material-icons">
            pets
          </i> Cat GIF
        </MaterialButton>
      </template>
    </MaterialCardBox>
  </div>
</template>

<script>
import { getHttp } from './http/fetchApi';

export default {
  name: 'App',
  components: {
    MaterialButton: () => import('./components/MaterialButton.vue'),
    MaterialCardBox: () => import('./components/MaterialCardBox.vue'),
  },
  data: () => ({
    kittyImage: '',
  }),
  methods: {
    async newCatImage() {
      this.kittyImage = URL.createObjectURL(await getHttp('https://cataas.com/cat', 'blob'));
    },
    async newCatGif() {
      this.kittyImage = URL.createObjectURL(await getHttp('https://cataas.com/cat/gif', 'blob'));
    },
  },
};
</script>
<style>
  body {
    font-size: 14px;
  }
</style>
