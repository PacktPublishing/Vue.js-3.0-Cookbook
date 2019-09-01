import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class DefaultNumber extends Vue {
  valueNumber: number = 0;

  get formattedNumber() {
    return `Your total number is: ${this.valueNumber}`;
  }
}
