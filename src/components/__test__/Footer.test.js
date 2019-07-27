import { mount, createLocalVue } from '@vue/test-utils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
  faServer,
  faSearch,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';

describe('Footer View', () => {
  it('Render the component', () => {
    const localVue = createLocalVue();
    library.add(faNodeJs, faServer, faSearch, faCircle);
    localVue.component('font-awesome-icon', FontAwesomeIcon);
    const wrapper = mount(Footer, { localVue });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
