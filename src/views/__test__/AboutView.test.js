import { mount } from '@vue/test-utils';
import About from '../About';

describe('About View', () => {
  it('Render the component', () => {
    const wrapper = mount(About);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
