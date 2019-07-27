import { mount } from '@vue/test-utils';
import Register from '../Register';

describe('Register View', () => {
  it('Render the component', () => {
    const wrapper = mount(Register);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
