import { createStore } from 'vuex';
import domToggleDarkMode from '@/store/plugins/domManipulation';

import actions from '@/store/actions';
import mutations from '@/store/mutations';
import state from '@/store/state';

export default createStore({
  plugins: [domToggleDarkMode],
  state,
  mutations,
  actions,
  modules: {},
});
