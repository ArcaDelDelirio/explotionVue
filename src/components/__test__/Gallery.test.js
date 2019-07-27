import { shallowMount } from '@vue/test-utils';
import Gallery from '../Gallery';

describe('Gallery View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(Gallery);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
