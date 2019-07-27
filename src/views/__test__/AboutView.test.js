import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import About from '../About';

describe('About View', () => {
  it('Render the component', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();
    const wrapper = mount(About, {
      localVue,
      router,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
