import { shallowMount } from '@vue/test-utils';
import SearchBar from '../SearchBar';

describe('SearchBar View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(SearchBar);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
