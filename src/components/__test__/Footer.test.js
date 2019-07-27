import { mount } from '@vue/test-utils';
import Footer from '../Footer';

describe('Footer View', () => {
  it('Render the component', () => {
    const wrapper = mount(Footer);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
