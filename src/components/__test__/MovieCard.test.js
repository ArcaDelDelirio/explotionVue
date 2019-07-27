import { shallowMount } from '@vue/test-utils';
import MovieCard from '../MovieCard';

describe('MovieCard View', () => {
  it('Render the component', () => {
    const wrapper = shallowMount(MovieCard, 'title');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
