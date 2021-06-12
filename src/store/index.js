import { createStore } from 'vuex';
import domToggleDarkMode from '@/store/plugins/domManipulation';
import { TOGGLE_DARK_MODE } from '@/store/mutation-types';

export default createStore({
  plugins: [domToggleDarkMode],
  state: {
    darkMode: false,
  },
  mutations: {
    [TOGGLE_DARK_MODE](state) {
      state.darkMode = !state.darkMode;
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit(TOGGLE_DARK_MODE);
    },
  },
  modules: {
  },
});
