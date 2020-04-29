<template>
  <div id="app">
    <MaterialCardBox
      header="Material Card Header"
      sub-header="Card Sub Header"
      show-media
      show-actions
      img-src="https://picsum.photos/300/200"
      :main-text="`
        The path of the righteous man is beset on all sides by the iniquities
        of the selfish and the tyranny of evil men.`"
    >
      <template v-slot:action>
        <button>Action Button</button>
        <button>Action Button</button>
      </template>
    </MaterialCardBox>
  </div>
</template>

<script>
import MaterialCardBox from './components/MaterialCardBox.vue';

export default {
  name: 'App',
  components: {
    MaterialCardBox,
  },
};
</script>
<style>
 body{
    font-size: 14px;
  }
</style>
