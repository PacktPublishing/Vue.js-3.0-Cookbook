import { shallowMount } from '@vue/test-utils';
import AsyncComponent from '@/components/AsyncComponent.vue';

describe('AsyncComponent.vue Unit Tests', () => {
  it('check if the component is a Vue instance', () => {
    const wrapper = shallowMount(AsyncComponent);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('check the keys of the returned asynchronous function', async () => {
    const wrapper = shallowMount(AsyncComponent);
    const jsonKeys = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'];

    const jsonData = await wrapper.vm.fetchJson();

    Object.keys(jsonData).forEach((key) => {
      expect(jsonKeys.includes(key)).toBeTruthy();
    });
  });
  it('check if the text on the template matches the function return', async () => {
    const wrapper = shallowMount(AsyncComponent);

    const jsonData = await wrapper.vm.fetchJson();

    wrapper.vm.jsonData = jsonData;

    expect(wrapper.text()).toBe(JSON.stringify(jsonData, null, 2));
  });
});
