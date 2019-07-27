import { mount } from '@vue/test-utils';
import Login from '../Login';

describe('Login View', () => {
  it('Render the component', () => {
    const wrapper = mount(Login);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
