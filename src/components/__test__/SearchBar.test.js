import { shallowMount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
  faServer,
  faSearch,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from '../SearchBar';

describe('SearchBar View', () => {
  it('Render the component', () => {
    const localVue = createLocalVue();
    library.add(faNodeJs, faServer, faSearch, faCircle);
    localVue.component('font-awesome-icon', FontAwesomeIcon);
    const wrapper = shallowMount(SearchBar, { localVue });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
