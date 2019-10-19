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
          v-if="kittyImage"
          alt="Meow!"
          :src="kittyImage"
          style="width: 300px;"
        >
        <p v-else style="text-align: center">
          <i class="material-icons">
            cached
          </i>
        </p>
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
  async beforeMount() {
    await this.newCatImage();
  },
  data: () => ({
    kittyImage: '',
  }),
  methods: {
    async getImage(url) {
      return URL.createObjectURL(await getHttp(url, 'blob'));
    },
    async newCatImage() {
      this.kittyImage = await this.getImage('https://cataas.com/cat');
    },
    async newCatGif() {
      this.kittyImage = await this.getImage('https://cataas.com/cat/gif');
    },
  },
};
</script>
<style>
  body {
    font-size: 14px;
  }
</style>
