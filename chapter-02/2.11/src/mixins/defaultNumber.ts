import {
  Vue,
  Component,
  Watch,
  Prop,
} from 'vue-property-decorator';

@Component
export default class DefaultNumber extends Vue {
  valueNumber: number = 0;

  @Prop(Number) readonly value: number | undefined;

  @Watch('valueNumber')
  onValueNumberChanged(val: number) {
    this.$emit('input', val);
  }

  @Watch('value', { immediate: true })
  onValueChanged(val: number) {
    this.valueNumber = val;
  }

  get formattedNumber() {
    return `Your total number is: ${this.valueNumber}`;
  }
}
