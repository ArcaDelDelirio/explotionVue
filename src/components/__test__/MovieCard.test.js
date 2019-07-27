import { shallowMount } from '@vue/test-utils';
import About from '../../views/About';

describe('About View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(About);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
