import { shallowMount } from '@vue/test-utils';
import Footer from '../Footer';

describe('Footer View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
