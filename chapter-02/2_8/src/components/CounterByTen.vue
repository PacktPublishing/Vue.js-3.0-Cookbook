<template>
  <div>
    <fieldset>
      <legend>{{ formattedNumber }}</legend>
      <button @click="increase">
        Increase By Ten
      </button>
      <button @click="decrease">
        Decrease By Ten
      </button>
    </fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component, { mixins } from 'vue-class-component';
import DefaultNumber from '../mixins/defaultNumber';

@Component
export default class CounterByTen extends mixins(DefaultNumber) {
  increase() {
    this.valueNumber += 10;
  }

  decrease() {
    this.valueNumber -= 10;
  }
}
</script>
