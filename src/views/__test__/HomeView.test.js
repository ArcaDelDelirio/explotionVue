/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils';
import initialState from '../../store.js';

import Home from '../Home';
import NavData from '../../components/NavData';
import SearchData from '../../components/SearchData';
import FooterData from '../../components/FooterData';
import DataGallery from '../../components/DataGallery';

describe('Home View', () => {
  const build = () => {
    const wrapper = shallowMount(Home, {
      data: () => ({
        movie: {},
      }),
    });

    return {
      wrapper,
      navigationData: () => wrapper.find(NavData),
      searchData: () => wrapper.find(SearchData),
      dataGallery: () => wrapper.find(DataGallery),
      footerData: () => wrapper.find(FooterData),
    };
  };

  it('Render the component', () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  }),
    it('Render the NavData component', () => {
      const { navigationData, searchData, dataGallery, footerData } = build();

      expect(navigationData().exists()).toBe(true);
      expect(searchData().exists()).toBe(true);
      expect(dataGallery().exists()).toBe(true);
      expect(footerData().exists()).toBe(true);
    }),
    it('Pass a binded title movie props to DataGallery component', () => {
      const { wrapper, dataGallery } = build();
      wrapper.setData({
        movie: {
          title: 'Matrix',
        },
      });

      expect(dataGallery().vm.movie).toBe(wrapper.vm.movie);
    });
});
