import { shallowMount } from '@vue/test-utils';
import NavBar from '../NavBar';

describe('NavBar View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
