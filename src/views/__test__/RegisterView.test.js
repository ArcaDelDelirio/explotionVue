import { shallowMount } from '@vue/test-utils';
import Register from '../Register';

describe('Register View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(Register);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
