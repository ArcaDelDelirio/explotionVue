import { shallowMount } from '@vue/test-utils';
import Login from '../Login';

describe('Login View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
