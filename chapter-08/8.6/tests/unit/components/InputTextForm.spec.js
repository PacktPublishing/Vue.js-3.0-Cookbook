import { shallowMount, mount } from '@vue/test-utils';
import InputTextForm from '@/components/InputTextForm.vue';

describe('InputTextForm.vue Unit Tests', () => {
  it('renders props.value when passed', () => {
    const value = 'Input Value';
    const wrapper = shallowMount(InputTextForm, {
      propsData: { value },
    });
    expect(wrapper.text()).toMatch(value);
  });
  it('changes the value when form is typed', () => {
    const wrapper = mount({
      components: {
        InputTextForm,
      },
      data: () => ({
        text: '',
      }),
      template: '<input-text-form v-model="text" />',
    });

    const inputValue = 'Testing Form';

    const textInput = wrapper.find('input[type="text"]');
    textInput.setValue(inputValue);

    expect(wrapper.text()).toMatch(`You Typed: ${inputValue}`);
  });
});
