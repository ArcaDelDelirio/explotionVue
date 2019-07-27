import { shallowMount } from '@vue/test-utils';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import Home from '../Home';

describe('Home View', () => {
  const build = () => {
    const wrapper = shallowMount(Home, {
      data: () => ({
        movie: {},
      }),
    });

    return {
      wrapper,
      navigationData: () => wrapper.find(NavBar),
      searchData: () => wrapper.find(SearchBar),
      footerData: () => wrapper.find(Footer),
    };
  };

  it('Render the component', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  }),
    it('Render the NavData component', () => {
      const { navigationData, searchData, footerData } = build();

      expect(navigationData().exists()).toBe(true);
      expect(searchData().exists()).toBe(true);
      expect(footerData().exists()).toBe(true);
    });
  // it('Pass a binded title movie props to DataGallery component', () => {
  //   const { wrapper, dataGallery } = build();
  //   wrapper.setData({
  //     movie: {
  //       title: 'Matrix',
  //     },
  //   });

  //   expect(dataGallery().vm.movie).toBe(wrapper.vm.movie);
  // });
});
