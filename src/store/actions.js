import { SET_DARK_MODE, TOGGLE_DARK_MODE } from '@/store/mutation-types';

export default {
  toggleDarkMode({ commit }) {
    commit(TOGGLE_DARK_MODE);
  },
  setDarkMode({ commit }, payload) {
    commit(SET_DARK_MODE, payload);
  },
};
