import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import NavBar from '../NavBar';

describe('NavBar View', () => {
  it('Render the component', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    const wrapper = shallowMount(NavBar, {
      localVue,
      router,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
