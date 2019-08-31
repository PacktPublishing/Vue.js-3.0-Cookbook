<template>
  <div>
    <fieldset>
      <legend>{{ this.formattedNumber }}</legend>
      <button @click="increase">Increase</button><button @click="decrease">Decrease</button>
    </fieldset>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Counter extends Vue {
  valueNumber: number = 0;

  get formattedNumber() {
    return `Your total number is: ${this.valueNumber}`;
  }

  increase() {
    this.valueNumber += 1;
  }

  decrease() {
    this.valueNumber -= 1;
  }
}
</script>
