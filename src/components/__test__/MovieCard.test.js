import { mount } from '@vue/test-utils';
import MovieCard from '../MovieCard';

describe('MovieCard View', () => {
  it('Render the component', () => {
    const wrapper = mount(MovieCard, {
      propsData: {
        title: 'Matrix',
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
