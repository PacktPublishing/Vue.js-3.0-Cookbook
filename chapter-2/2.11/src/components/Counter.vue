<template>
  <div>
    <fieldset>
      <legend>{{ formattedNumber }}</legend>
      <button @click="increase">
        Increase
      </button>
      <button @click="decrease">
        Decrease
      </button>
    </fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import NumberWatcher from '../mixins/numberWatcher';

@Component
export default class Counter extends mixins(NumberWatcher) {
  increase() {
    this.valueNumber += 1;
  }

  decrease() {
    this.valueNumber -= 1;
  }
}
</script>
