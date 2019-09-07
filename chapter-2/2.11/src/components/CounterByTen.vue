<template>
  <div>
    <fieldset>
      <legend>{{ this.formattedNumber }}</legend>
      <button @click="increase">Increase By Ten</button>
      <button @click="decrease">Decrease By Ten</button>
    </fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import NumberWatcher from '../mixins/numberWatcher';

@Component
export default class CounterByTen extends mixins(NumberWatcher) {
  increase() {
    this.valueNumber += 10;
  }

  decrease() {
    this.valueNumber -= 10;
  }
}
</script>
